/**
 * CONCEPT MOCKUP — illustrative only.
 * Not a screenshot of the live product. Replace with genuine product
 * screenshots (e.g. /public/products/inventory/*.png) once supplied.
 * Values shown are fictional sample data, labelled as such in the UI.
 */
const rows = [
  { sku: "SKU-1042", name: "Sample product A", qty: 248, status: "In stock" },
  { sku: "SKU-1187", name: "Sample product B", qty: 36, status: "Low" },
  { sku: "SKU-2210", name: "Sample product C", qty: 912, status: "In stock" },
  { sku: "SKU-3305", name: "Sample product D", qty: 0, status: "Out" },
  { sku: "SKU-4120", name: "Sample product E", qty: 154, status: "In stock" },
];
const bars = [38, 52, 44, 66, 58, 74, 62, 81, 70, 88, 76, 92];

export function InventoryMockup({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[#0b2a25] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-mint-400/10" aria-hidden>
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
        </div>
        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[9rem_1fr]">
          <div className="space-y-2 border-r border-white/5 p-3">
            {["Overview", "Products", "Purchases", "Sales", "Movements", "Reports"].map((l, i) => (
              <div key={l} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${i === 1 ? "bg-mint-400/15 text-mint-300" : "text-white/45"}`}>
                <span className={`size-2 shrink-0 rounded-sm ${i === 1 ? "bg-mint-400" : "bg-white/20"}`} />
                <span className="hidden sm:inline">{l}</span>
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[["Products", "1,284"], ["Low stock", "17"], ["Movements", "342"]].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5 sm:p-3">
                  <div className="text-[10px] text-white/45">{k}</div>
                  <div className="mt-1 font-display text-sm font-semibold text-white sm:text-lg">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
              <div className="text-[10px] text-white/45">Stock movement</div>
              <div className="mt-2 flex h-16 items-end gap-1 sm:h-20">
                {bars.map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-mint-600/50 to-mint-400" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-3 overflow-hidden rounded-lg border border-white/5">
              {rows.map((r) => (
                <div key={r.sku} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/5 px-3 py-2 text-[11px] last:border-0 sm:grid-cols-[5rem_1fr_3rem_4rem]">
                  <span className="hidden text-white/40 sm:block">{r.sku}</span>
                  <span className="truncate text-white/80">{r.name}</span>
                  <span className="text-right tabular-nums text-white/70">{r.qty}</span>
                  <span className={`rounded-full px-2 py-0.5 text-center text-[10px] ${r.status === "In stock" ? "bg-mint-400/15 text-mint-300" : r.status === "Low" ? "bg-amber-300/15 text-amber-200" : "bg-rose-300/15 text-rose-200"}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted-dark">
        <span className="rounded border border-white/15 px-1.5 py-0.5 font-semibold uppercase tracking-wider text-[10px]">Concept</span>
        Illustrative interface with sample data. Not a product screenshot.
      </figcaption>
    </figure>
  );
}
