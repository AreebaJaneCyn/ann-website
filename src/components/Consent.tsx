"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Analytics consent. The site sets no non-essential cookies unless
 * NEXT_PUBLIC_GTM_ID is configured AND the visitor opts in.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const KEY = "anovate-consent-v1";
const OPEN_EVENT = "anovate:consent-open";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function loadGtm(id: string) {
  if (document.getElementById("gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

export function ConsentManager() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GTM_ID) return;
    const choice = readChoice();
    if (choice === "granted") loadGtm(GTM_ID);
    if (!choice) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!GTM_ID || !open) return null;

  const decide = (c: Choice) => {
    try {
      window.localStorage.setItem(KEY, c);
    } catch {
      /* storage unavailable: choice applies to this page view only */
    }
    if (c === "granted") loadGtm(GTM_ID);
    else if (document.getElementById("gtm-script")) window.location.reload();
    setOpen(false);
  };

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie preferences" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-[var(--radius-lg)] border border-line bg-white p-5 text-ink shadow-[var(--shadow-lift)] sm:p-6">
      <p className="font-semibold text-forest-900">Analytics cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        We&apos;d like to use analytics cookies to understand how the site is used and improve it. They are only set if you accept.{" "}
        <Link href="/cookies" className="font-medium text-mint-ink underline underline-offset-2">Cookie policy</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => decide("granted")} className="h-10 rounded-[var(--radius-md)] bg-forest-900 px-4 text-sm font-semibold text-white hover:bg-forest-800">
          Accept analytics
        </button>
        <button type="button" onClick={() => decide("denied")} className="h-10 rounded-[var(--radius-md)] border border-line px-4 text-sm font-semibold text-forest-900 hover:border-forest-700">
          Decline
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className = "hover:text-white" }: { className?: string }) {
  if (!GTM_ID) return null;
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie preferences
    </button>
  );
}
