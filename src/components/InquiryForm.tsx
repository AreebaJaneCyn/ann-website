"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import {
  budgetOptions,
  businessTypeOptions,
  type Errors,
  type Inquiry,
  type InquiryKind,
  interestOptions,
  normalise,
  timelineOptions,
  validate,
} from "@/lib/inquiry";
import Link from "next/link";
import { Button } from "./ui/Button";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; note?: string }
  | { state: "error"; message: string };

type Props = { kind?: InquiryKind; defaultInterest?: string; dark?: boolean };

export function InquiryForm({ kind = "project", defaultInterest = "", dark = false }: Props) {
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const validInterest = interestOptions.some((o) => o.value === defaultInterest) ? defaultInterest : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, unknown>;
    const data: Inquiry = normalise({ ...raw, kind, consent: fd.get("consent") === "on", source: pathname });
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: Errors; note?: string };
      if (res.ok && body.ok) {
        setStatus({ state: "sent", note: body.note });
        track("inquiry_submit", { kind, interest: data.interest || "inventory" });
        formRef.current?.reset();
      } else {
        if (body.errors) setErrors(body.errors);
        setStatus({ state: "error", message: body.error ?? "Something went wrong. Please try again." });
        track("inquiry_error", { kind, status: res.status });
      }
    } catch {
      setStatus({ state: "error", message: "We couldn't reach the server. Please check your connection and try again." });
    }
  }

  const tx = dark
    ? { label: "text-white", hint: "text-muted-dark", input: "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-mint-400", err: "text-rose-300" }
    : { label: "text-forest-900", hint: "text-muted", input: "border-line bg-white text-ink placeholder:text-muted/70 focus:border-forest-700", err: "text-rose-700" };

  const inputCls = (name: keyof Inquiry) =>
    `mt-2 block w-full rounded-[var(--radius-md)] border px-4 py-3 text-[0.9375rem] outline-none transition-colors ${tx.input} ${
      errors[name] ? "!border-rose-500" : ""
    }`;

  const Field = ({ name, label, optional, children }: { name: keyof Inquiry; label: string; optional?: boolean; children: React.ReactNode }) => (
    <div>
      <label htmlFor={`f-${name}`} className={`block text-sm font-semibold ${tx.label}`}>
        {label} {optional && <span className={`font-normal ${tx.hint}`}>(optional)</span>}
      </label>
      {children}
      {errors[name] && (
        <p id={`e-${name}`} className={`mt-1.5 text-sm ${tx.err}`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  const aria = (name: keyof Inquiry) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
  });

  if (status.state === "sent") {
    return (
      <div role="status" className={`rounded-[var(--radius-lg)] border p-8 ${dark ? "border-mint-400/30 bg-forest-950/60" : "border-line bg-mist"}`}>
        <p className={`font-display text-2xl font-semibold ${dark ? "text-white" : "text-forest-900"}`}>Thank you. Your message is on its way.</p>
        <p className={`mt-3 leading-relaxed ${tx.hint}`}>We&apos;ll review the details you shared and get back to you by email.</p>
        {status.note && <p className={`mt-4 rounded-md border border-dashed p-3 text-sm ${dark ? "border-amber-200/40 text-amber-100" : "border-amber-600/40 text-amber-800"}`}>{status.note}</p>}
        <button type="button" onClick={() => setStatus({ state: "idle" })} className={`mt-6 text-sm font-semibold underline underline-offset-4 ${dark ? "text-mint-400" : "text-mint-ink"}`}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6" aria-label={kind === "product" ? "Inventory software access request" : "Project inquiry"}>
      {/* Honeypot: hidden from people and assistive tech, attractive to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {Field({ name: "name", label: "Full name", children: <input {...aria("name")} type="text" autoComplete="name" className={inputCls("name")} /> })}
        {Field({ name: "email", label: "Work email", children: <input {...aria("email")} type="email" autoComplete="email" inputMode="email" className={inputCls("email")} /> })}
      </div>

      {kind === "project" ? (
        <>
          {Field({ name: "company", label: "Company", optional: true, children: <input {...aria("company")} type="text" autoComplete="organization" className={inputCls("company")} /> })}
          {Field({
            name: "interest",
            label: "What do you need help with?",
            children: (
              <select {...aria("interest")} defaultValue={validInterest} className={inputCls("interest")}>
                <option value="" disabled>Select a project type</option>
                {interestOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ),
          })}
          <div className="grid gap-6 sm:grid-cols-2">
            {Field({
              name: "budget",
              label: "Budget range (USD)",
              optional: true,
              children: (
                <select {...aria("budget")} defaultValue="" className={inputCls("budget")}>
                  <option value="">Select a range</option>
                  {budgetOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ),
            })}
            {Field({
              name: "timeline",
              label: "Expected timeline",
              optional: true,
              children: (
                <select {...aria("timeline")} defaultValue="" className={inputCls("timeline")}>
                  <option value="">Select a timeline</option>
                  {timelineOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ),
            })}
          </div>
          {Field({
            name: "message",
            label: "Project details",
            children: (
              <textarea
                {...aria("message")}
                rows={5}
                placeholder="What are you building or improving? Who is it for, and where are you today?"
                className={inputCls("message")}
              />
            ),
          })}
        </>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {Field({ name: "company", label: "Business name", children: <input {...aria("company")} type="text" autoComplete="organization" className={inputCls("company")} /> })}
            {Field({
              name: "businessType",
              label: "Business type",
              children: (
                <select {...aria("businessType")} defaultValue="" className={inputCls("businessType")}>
                  <option value="" disabled>Select your business type</option>
                  {businessTypeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ),
            })}
          </div>
          {Field({
            name: "message",
            label: "Anything we should know?",
            optional: true,
            children: <textarea {...aria("message")} rows={3} placeholder="Number of locations, products or users, and how you manage stock today." className={inputCls("message")} />,
          })}
        </>
      )}

      <div>
        <label className={`flex items-start gap-3 text-sm leading-relaxed ${tx.hint}`}>
          <input
            type="checkbox"
            name="consent"
            id="f-consent"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "e-consent" : undefined}
            className="mt-1 size-4 shrink-0 accent-[#015146]"
          />
          <span>
            I agree that Anovate Systems may use these details to respond to my inquiry, as described in the{" "}
            <Link href="/privacy" className={`font-medium underline underline-offset-2 ${dark ? "text-mint-400" : "text-mint-ink"}`}>privacy policy</Link>.
          </span>
        </label>
        {errors.consent && <p id="e-consent" className={`mt-1.5 text-sm ${tx.err}`}>{errors.consent}</p>}
      </div>

      {status.state === "error" && (
        <p role="alert" className={`rounded-md border p-3 text-sm ${dark ? "border-rose-300/40 text-rose-200" : "border-rose-300 bg-rose-50 text-rose-800"}`}>
          {status.message}
        </p>
      )}

      <Button type="submit" size="lg" variant={dark ? "primary" : "dark"} arrow disabled={status.state === "sending"} className="w-full sm:w-auto">
        {status.state === "sending" ? "Sending…" : kind === "product" ? "Request access" : "Send inquiry"}
      </Button>
    </form>
  );
}
