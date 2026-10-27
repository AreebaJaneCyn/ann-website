import Link from "next/link";
import { tc } from "@/lib/title";
import type { ServicePage } from "@/content/services";
import { ArrowMark } from "./ui/ArrowMark";

/** Large editorial rows linking to service pages. */
export function ServiceRows({ items }: { items: ServicePage[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((s, i) => (
        <li key={s.slug} data-reveal>
          <Link href={s.path} className="group grid gap-4 py-10 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8">
            <span className="font-display text-sm font-semibold text-mint-ink">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-2xl font-semibold text-forest-900 transition-colors group-hover:text-forest-700 sm:text-3xl">{s.label}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{s.hero.lede}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.capabilities.items.slice(0, 5).map((c) => (
                  <li key={c.title} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">{c.title}</li>
                ))}
              </ul>
            </div>
            <span className="grid size-12 place-items-center rounded-full border border-line transition-colors group-hover:border-forest-900 group-hover:bg-forest-900">
              <ArrowMark tone="mono" className="arrow-nudge size-4 text-forest-900 group-hover:text-mint-400" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
