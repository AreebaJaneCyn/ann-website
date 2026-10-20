import { NextResponse } from "next/server";
import { budgetOptions, businessTypeOptions, type Inquiry, interestOptions, labelFor, normalise, timelineOptions, validate } from "@/lib/inquiry";

export const runtime = "nodejs";

/*
 * Inquiry delivery. Configure ONE of:
 *   RESEND_API_KEY + CONTACT_TO_EMAIL + CONTACT_FROM_EMAIL  (email via Resend)
 *   CONTACT_WEBHOOK_URL                                      (JSON POST to CRM/automation)
 * Without either, production requests fail with 503 rather than pretending to succeed.
 */

// Best-effort, per-instance rate limit. Use a shared store (e.g. Redis) if deployed across many instances.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function summary(d: Inquiry) {
  const rows: [string, string][] =
    d.kind === "project"
      ? [
          ["Type", "Project inquiry"],
          ["Name", d.name],
          ["Email", d.email],
          ["Company", d.company || "—"],
          ["Interest", labelFor(interestOptions, d.interest)],
          ["Budget", labelFor(budgetOptions, d.budget)],
          ["Timeline", labelFor(timelineOptions, d.timeline)],
          ["Page", d.source || "—"],
        ]
      : [
          ["Type", "Inventory software access request"],
          ["Name", d.name],
          ["Email", d.email],
          ["Business", d.company],
          ["Business type", labelFor(businessTypeOptions, d.businessType)],
          ["Page", d.source || "—"],
        ];
  return { rows, message: d.message };
}

async function deliver(d: Inquiry): Promise<"sent" | "unconfigured"> {
  const { rows, message } = summary(d);
  const subject = d.kind === "project" ? `New inquiry: ${labelFor(interestOptions, d.interest)} — ${d.name}` : `Inventory access request — ${d.company}`;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (key && to && from) {
    const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
      .map(([k, v]) => `<tr><td style="color:#4a625c"><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
      .join("")}</table><p style="font-family:sans-serif;white-space:pre-wrap">${esc(message || "")}</p>`;
    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${message}`;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: d.email, subject, html, text }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return "sent";
  }

  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, ...Object.fromEntries(rows), message, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return "sent";
  }
  return "unconfigured";
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please wait a few minutes and try again." }, { status: 429 });
  }

  const raw = await req.json().catch(() => null);
  if (!raw || typeof raw !== "object") return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });

  const data = normalise(raw as Record<string, unknown>);
  // Bots fill the honeypot; respond as if successful so they learn nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validate(data);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", errors }, { status: 422 });

  try {
    const result = await deliver(data);
    if (result === "unconfigured") {
      if (process.env.NODE_ENV !== "production") {
        console.info("[contact] Delivery not configured. Inquiry received in development:", summary(data));
        return NextResponse.json({
          ok: true,
          note: "Development mode: no delivery service is configured, so this inquiry was only logged to the server console. Configure RESEND_* or CONTACT_WEBHOOK_URL before launch.",
        });
      }
      console.error("[contact] Delivery not configured — inquiry could not be delivered.");
      return NextResponse.json({ ok: false, error: "Our inquiry form is temporarily unavailable. Please try again later." }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Delivery failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message just now. Please try again shortly." }, { status: 502 });
  }
}
