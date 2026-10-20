import type { WorkItem } from "@/content/work";

function Visual({ kind }: { kind: WorkItem["visual"] }) {
  if (kind === "mobile") {
    return (
      <div className="flex h-full items-end justify-center gap-4 pt-8">
        {[0, 1].map((i) => (
          <div key={i} className={`w-28 rounded-[1.4rem] border border-white/10 bg-forest-950 p-2 shadow-2xl ${i ? "translate-y-6" : ""}`}>
            <div className="h-48 space-y-2 rounded-[1rem] bg-forest-850 p-2.5">
              <div className="h-2 w-10 rounded bg-white/25" />
              <div className="h-14 rounded-lg bg-gradient-to-br from-mint-400/60 to-mint-600/30" />
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex items-center gap-1.5">
                  <span className="size-4 rounded bg-white/10" />
                  <span className="h-1.5 flex-1 rounded bg-white/15" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "pipeline") {
    return (
      <div className="grid h-full grid-cols-3 gap-2.5 p-6 pt-8">
        {["New", "Qualified", "Proposal"].map((c, i) => (
          <div key={c} className="space-y-2 rounded-lg bg-white/[0.04] p-2">
            <div className="text-[10px] font-medium text-white/50">{c}</div>
            {[...Array(3 - (i === 2 ? 1 : 0))].map((_, j) => (
              <div key={j} className="space-y-1.5 rounded-md border border-white/10 bg-forest-850 p-2">
                <div className="h-1.5 w-3/4 rounded bg-white/30" />
                <div className="h-1.5 w-1/2 rounded bg-white/10" />
                {j === 0 && <div className="h-1.5 w-8 rounded bg-mint-400/70" />}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="h-full space-y-3 p-6 pt-8">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-forest-850 p-2.5">
            <div className="h-1.5 w-8 rounded bg-white/25" />
            <div className="mt-2 h-3 w-12 rounded bg-white/50" />
          </div>
        ))}
      </div>
      <div className="space-y-1.5 rounded-lg border border-white/10 bg-forest-850 p-3">
        {[70, 45, 85, 30].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-12 rounded bg-white/15" />
            <span className="h-1.5 rounded bg-gradient-to-r from-mint-600 to-mint-400" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article data-reveal className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-line bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
      <div aria-hidden className="relative h-64 overflow-hidden bg-forest-900">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="relative h-full transition-transform duration-700 group-hover:-translate-y-1">
          <Visual kind={item.visual} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          {item.kind === "sample-concept" && (
            <span className="rounded border border-dashed border-forest-700/40 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
              Sample concept
            </span>
          )}
          <span className="text-sm font-medium text-mint-ink">{item.category}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-forest-900">{item.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{item.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Scope">
          {item.scope.map((s) => (
            <li key={s} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
