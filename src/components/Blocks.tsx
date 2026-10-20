import Link from "next/link";
import type { Block } from "@/content/services";
import { ArrowMark } from "./ui/ArrowMark";

/** Numbered delivery steps joined by a forward-moving rail. */
export function ProcessSteps({ steps, dark }: { steps: Block[]; dark?: boolean }) {
  const cols = steps.length >= 6 ? "lg:grid-cols-6" : steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`relative grid gap-x-6 gap-y-10 sm:grid-cols-2 ${cols}`}>
      <span aria-hidden className={`absolute left-0 right-0 top-[1.1rem] hidden h-px lg:block ${dark ? "bg-white/10" : "bg-line"}`} />
      {steps.map((s, i) => (
        <li key={s.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="relative">
          <div className="flex items-center gap-3">
            <span
              className={`relative z-10 grid size-9 place-items-center rounded-full font-display text-sm font-semibold ${
                dark ? "bg-forest-850 text-mint-400 ring-1 ring-mint-400/30" : "bg-forest-900 text-mint-400"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && <ArrowMark tone="mono" className={`hidden size-3 lg:block ${dark ? "text-mint-400/60" : "text-mint-ink/60"}`} />}
          </div>
          <h3 className={`mt-5 text-lg font-semibold ${dark ? "text-white" : "text-forest-900"}`}>{s.title}</h3>
          <p className={`mt-2 text-[0.9375rem] leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Restrained outline cards for capability lists. */
export function CapabilityGrid({ items, dark, columns = 3, tail }: { items: Block[]; dark?: boolean; columns?: 2 | 3 | 4; tail?: React.ReactNode }) {
  const col = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <ul className={`grid gap-px overflow-hidden rounded-[var(--radius-lg)] border sm:grid-cols-2 ${col} ${dark ? "border-line-dark bg-line-dark" : "border-line bg-line"}`}>
      {items.map((it, i) => (
        <li
          key={it.title}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}
          className={`group relative p-7 transition-colors duration-300 ${dark ? "bg-forest-900 hover:bg-forest-850" : "bg-white hover:bg-mist"}`}
        >
          <ArrowMark tone={dark ? "mint" : "mono"} className={`arrow-nudge size-4 ${dark ? "" : "text-mint-ink"}`} />
          <h3 className={`mt-5 text-lg font-semibold ${dark ? "text-white" : "text-forest-900"}`}>{it.title}</h3>
          <p className={`mt-2 text-[0.9375rem] leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{it.body}</p>
        </li>
      ))}
      {tail && <li className={`p-7 ${dark ? "bg-forest-850" : "bg-mist"}`}>{tail}</li>}
    </ul>
  );
}

export function TextLink({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-semibold ${dark ? "text-mint-400 hover:text-mint-300" : "text-forest-800 hover:text-mint-ink"}`}>
      {children}
      <ArrowMark tone="mono" className="arrow-nudge size-3" />
    </Link>
  );
}
