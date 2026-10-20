"use client";

import { ChartColumn, LayoutDashboard, Package, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { InventoryMockup, type Screen } from "./InventoryMockup";

const tabs: { id: Screen; label: string; body: string; Icon: typeof Package }[] = [
  { id: "overview", label: "Overview", body: "Stock levels, low-stock items and recent movement at a glance.", Icon: LayoutDashboard },
  { id: "products", label: "Products", body: "One organised catalogue with current quantities for every item.", Icon: Package },
  { id: "purchases", label: "Purchases", body: "Record incoming stock against what you bought and from whom.", Icon: Truck },
  { id: "reports", label: "Reports", body: "See how stock moves in and out to plan your next purchase.", Icon: ChartColumn },
];

/** Auto-advancing tour of the product preview. Pauses on hover/focus and when reduced motion is preferred. */
export function ProductTour() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % tabs.length), 5500);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div role="tablist" aria-label="Product screens" aria-orientation="vertical" className="grid gap-3">
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={on}
              aria-controls="tour-panel"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-[var(--radius-lg)] border p-5 text-left transition-colors ${on ? "border-mint-400/40 bg-forest-850" : "border-white/10 hover:border-white/25"}`}
            >
              <span className="flex items-center gap-3">
                <span className={`icon-tile grid size-10 place-items-center rounded-xl ${on ? "bg-mint-400 text-forest-900" : "bg-mint-400/10 text-mint-400"}`}>
                  <t.Icon className="size-5 transition-transform duration-500" strokeWidth={1.75} />
                </span>
                <span className="font-display text-lg font-semibold text-white">{t.label}</span>
              </span>
              <span className={`mt-2 block text-sm leading-relaxed text-muted-dark ${on ? "" : "hidden lg:block lg:opacity-60"}`}>{t.body}</span>
              {on && (
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5">
                  <span key={`${active}-${paused}`} className={`block h-full origin-left bg-mint-400 ${paused ? "w-full" : "animate-[progress_5.5s_linear_both]"}`} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div id="tour-panel" role="tabpanel" aria-labelledby={`tab-${tabs[active].id}`}>
        <InventoryMockup screen={tabs[active].id} />
      </div>
    </div>
  );
}
