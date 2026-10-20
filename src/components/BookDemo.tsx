"use client";

import { CalendarCheck, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

const SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly inline scheduler behind a click-to-load facade:
 * nothing from Calendly (scripts or cookies) loads until the visitor asks for it.
 */
export function BookDemo({ url }: { url: string }) {
  const [open, setOpen] = useState(false);
  const host = useRef<HTMLDivElement>(null);

  const embedUrl = (() => {
    const u = new URL(url);
    u.searchParams.set("primary_color", "15a77a");
    u.searchParams.set("hide_gdpr_banner", "1");
    return u.toString();
  })();

  useEffect(() => {
    if (!open || !host.current) return;
    const init = () => {
      const C = (window as unknown as { Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void } }).Calendly;
      if (C && host.current) {
        host.current.innerHTML = "";
        C.initInlineWidget({ url: embedUrl, parentElement: host.current });
      }
    };
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT}"]`);
    if (existing) {
      init();
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.onload = init;
    document.body.appendChild(s);
  }, [open, embedUrl]);

  if (open) {
    return (
      <div>
        <div ref={host} className="h-[44rem] min-w-[280px] overflow-hidden rounded-[var(--radius-lg)] bg-white" />
        <a href={url} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-400 hover:underline">
          Trouble loading? Open the booking page <ExternalLink className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <span className="animate-pulse-ring grid size-14 place-items-center rounded-2xl bg-mint-400 text-forest-900">
        <CalendarCheck className="size-7" strokeWidth={1.75} />
      </span>
      <p className="mt-6 font-display text-2xl font-semibold text-white">Book a live demo</p>
      <p className="mt-2 max-w-md leading-relaxed text-muted-dark">
        Pick a time that suits you. We&apos;ll walk you through Anovate Inventory and answer questions about plans for your business.
      </p>
      <button
        type="button"
        onClick={() => { setOpen(true); track("cta_click", { cta: "calendly-open" }); }}
        className="group mt-8 inline-flex h-13 items-center gap-2.5 rounded-[var(--radius-md)] bg-mint-400 px-6 font-semibold text-forest-900 shadow-[0_8px_30px_-12px_rgb(63_252_170/0.8)] transition-colors hover:bg-mint-300"
      >
        <CalendarCheck className="size-5" /> Choose a time
      </button>
      <p className="mt-4 text-xs text-muted-dark">Scheduling is provided by Calendly, which loads when you choose a time.</p>
    </div>
  );
}
