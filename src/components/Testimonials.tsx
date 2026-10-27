"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/social-proof";

/** Auto-advancing testimonial slider. Pauses on hover/focus and under reduced motion. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;

  useEffect(() => {
    if (paused || n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((x) => (x + 1) % n), 6500);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  const t = items[i];
  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <figure key={i} className="animate-pop relative overflow-hidden rounded-[var(--radius-xl)] border border-line bg-white p-8 shadow-[var(--shadow-card)] sm:p-12" aria-live="polite">
        <Quote aria-hidden className="absolute -right-4 -top-4 size-40 text-mint-400/15" strokeWidth={1.25} />
        {t.placeholder && (
          <span className="inline-flex rounded border border-dashed border-forest-700/40 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
            Sample testimonial
          </span>
        )}
        <blockquote className="relative mt-5 font-display text-xl font-medium leading-relaxed text-forest-900 sm:text-2xl">&ldquo;{t.quote}&rdquo;</blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span aria-hidden className="grid size-12 place-items-center rounded-full bg-forest-900 font-display font-semibold text-mint-400">
            {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </span>
          <span>
            <span className="block font-semibold text-forest-900">{t.name}</span>
            <span className="text-sm text-muted">{t.role}, {t.company}</span>
          </span>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((_, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`Testimonial ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-forest-900" : "w-2 bg-forest-900/20 hover:bg-forest-900/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous testimonial" onClick={() => setI((x) => (x - 1 + n) % n)} className="grid size-11 place-items-center rounded-full border border-line text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900 hover:text-mint-400">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => setI((x) => (x + 1) % n)} className="grid size-11 place-items-center rounded-full border border-line text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900 hover:text-mint-400">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
