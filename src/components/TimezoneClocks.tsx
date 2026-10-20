"use client";

import { useEffect, useState } from "react";

const zones = [
  { city: "New York", region: "United States", tz: "America/New_York" },
  { city: "Dubai", region: "UAE", tz: "Asia/Dubai" },
  { city: "Karachi", region: "Pakistan", tz: "Asia/Karachi" },
];

/** Live local times for the three primary markets. Renders placeholders until mounted to avoid hydration mismatch. */
export function TimezoneClocks({ dark = true }: { dark?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div data-reveal className="grid gap-4 sm:grid-cols-3">
      {zones.map((z, i) => {
        const time = now ? new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: z.tz }).format(now) : "--:--";
        const hour = now ? Number(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hourCycle: "h23", timeZone: z.tz }).format(now)) : 12;
        const deg = ((hour % 12) / 12) * 360;
        const working = hour >= 9 && hour < 18;
        return (
          <div
            key={z.city}
            style={{ ["--d" as string]: `${i * 120}ms` }}
            className={`pop group hover-lift rounded-[var(--radius-lg)] border p-6 ${dark ? "border-white/10 bg-forest-950/60" : "border-line bg-white shadow-[var(--shadow-card)]"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-mint-400" : "text-mint-ink"}`}>{z.region}</p>
                <p className={`mt-1 font-display text-lg font-semibold ${dark ? "text-white" : "text-forest-900"}`}>{z.city}</p>
              </div>
              <div aria-hidden className={`relative size-12 rounded-full border-2 ${dark ? "border-mint-400/40" : "border-forest-900/20"}`}>
                <span className="absolute bottom-1/2 left-1/2 h-4 w-0.5 origin-bottom -translate-x-1/2 rounded bg-mint-400 transition-transform duration-1000" style={{ transform: `rotate(${deg}deg)` }} />
                <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint-400" />
              </div>
            </div>
            <p className={`mt-4 font-display text-3xl font-semibold tabular-nums ${dark ? "text-white" : "text-forest-900"}`} suppressHydrationWarning>{time}</p>
            <p className={`mt-1 flex items-center gap-2 text-sm ${dark ? "text-muted-dark" : "text-muted"}`}>
              <span className={`size-2 rounded-full ${working ? "animate-pulse-ring bg-mint-400" : "bg-white/30"}`} />
              {working ? "Business hours" : "Outside business hours"}
            </p>
          </div>
        );
      })}
    </div>
  );
}
