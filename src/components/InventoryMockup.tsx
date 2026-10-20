/**
 * Illustrative product preview with sample data.
 * Replace with genuine product screenshots (e.g. /public/products/inventory/*.png) once supplied.
 */
export type Screen = "overview" | "products" | "purchases" | "reports";

const nav: { id: Screen; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "purchases", label: "Purchases" },
  { id: "reports", label: "Reports" },
];

const rows = [
  { sku: "SKU-1042", name: "Sample product A", qty: 248, status: "In stock" },
  { sku: "SKU-1187", name: "Sample product B", qty: 36, status: "Low" },
  { sku: "SKU-2210", name: "Sample product C", qty: 912, status: "In stock" },
  { sku: "SKU-3305", name: "Sample product D", qty: 0, status: "Out" },
  { sku: "SKU-4120", name: "Sample product E", qty: 154, status: "In stock" },
];
const bars = [38, 52, 44, 66, 58, 74, 62, 81, 70, 88, 76, 92];
const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Status({ s }: { s: string }) {
  const c = s === "In stock" || s === "Received" ? "bg-mint-400/15 text-mint-300" : s === "Low" || s === "Pending" ? "bg-amber-300/15 text-amber-200" : "bg-rose-300/15 text-rose-200";
  return <span className={`rounded-full px-2 py-0.5 text-center text-[10px] ${c}`}>{s}</span>;
}

function Table() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/5">
      {rows.map((r, i) => (
        <div key={r.sku} style={d(150 + i * 90)} className="pop grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/5 px-3 py-2 text-[11px] last:border-0 sm:grid-cols-[5rem_1fr_3rem_4rem]">
          <span className="hidden text-white/40 sm:block">{r.sku}</span>
          <span className="truncate text-white/80">{r.name}</span>
          <span className="text-right tabular-nums text-white/70">{r.qty}</span>
          <Status s={r.status} />
        </div>
      ))}
    </div>
  );
}

function Overview() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[["Products", "1,284"], ["Low stock", "17"], ["Movements", "342"]].map(([k, v], i) => (
          <div key={k} style={d(i * 100)} className="pop rounded-lg border border-white/5 bg-white/[0.03] p-2.5 sm:p-3">
            <div className="text-[10px] text-white/45">{k}</div>
            <div className="mt-1 font-display text-sm font-semibold text-white sm:text-lg">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.03] p-3">
        <div className="text-[10px] text-white/45">Stock movement</div>
        <div className="mt-2 flex h-16 items-end gap-1 sm:h-20">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%`, ...d(200 + i * 60) }} className="grow-bar flex-1 rounded-t-sm bg-gradient-to-t from-mint-600/50 to-mint-400" />
          ))}
        </div>
      </div>
      <div className="mt-3"><Table /></div>
    </>
  );
}

function Products() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-[11px] text-white/40">
          <span className="size-3 rounded-full border border-white/30" /> Search products
        </div>
        <span className="rounded-md bg-mint-400 px-3 py-2 text-[11px] font-semibold text-forest-900">+ Add product</span>
      </div>
      <div className="mt-3 flex gap-2 text-[10px]">
        {["All", "In stock", "Low", "Out"].map((f, i) => (
          <span key={f} className={`rounded-full px-2.5 py-1 ${i === 0 ? "bg-white/15 text-white" : "bg-white/5 text-white/50"}`}>{f}</span>
        ))}
      </div>
      <div className="mt-3"><Table /></div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["Categories", "Locations"].map((t, i) => (
          <div key={t} style={d(500 + i * 100)} className="pop rounded-lg border border-white/5 bg-white/[0.03] p-3">
            <div className="text-[10px] text-white/45">{t}</div>
            <div className="mt-2 flex gap-1">{[0, 1, 2].map((j) => <span key={j} className="h-1.5 flex-1 rounded bg-white/15" />)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Purchases() {
  const pos = [
    { id: "PO-0381", sup: "Sample supplier 1", items: 12, s: "Received" },
    { id: "PO-0382", sup: "Sample supplier 2", items: 5, s: "Pending" },
    { id: "PO-0383", sup: "Sample supplier 3", items: 28, s: "Received" },
    { id: "PO-0384", sup: "Sample supplier 1", items: 9, s: "Pending" },
  ];
  return (
    <>
      <div className="rounded-lg border border-mint-400/20 bg-mint-400/[0.06] p-3">
        <div className="text-[10px] text-mint-300">New purchase</div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {["Supplier", "Product", "Quantity"].map((f) => (
            <div key={f} className="rounded-md bg-forest-950/60 p-2"><div className="text-[9px] text-white/40">{f}</div><div className="mt-1 h-1.5 w-3/4 rounded bg-white/30" /></div>
          ))}
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-white/5">
        {pos.map((p, i) => (
          <div key={p.id} style={d(150 + i * 100)} className="pop grid grid-cols-[4rem_1fr_auto_auto] items-center gap-3 border-b border-white/5 px-3 py-2.5 text-[11px] last:border-0">
            <span className="text-white/40">{p.id}</span>
            <span className="truncate text-white/80">{p.sup}</span>
            <span className="tabular-nums text-white/60">{p.items} items</span>
            <Status s={p.s} />
          </div>
        ))}
      </div>
    </>
  );
}

function Reports() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr]">
      <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
        <div className="text-[10px] text-white/45">Stock by status</div>
        <svg viewBox="0 0 42 42" className="mx-auto mt-2 size-28 -rotate-90">
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="5" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#3ffcaa" strokeWidth="5" strokeDasharray="72 28" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#fcd34d" strokeWidth="5" strokeDasharray="18 82" strokeDashoffset="-72" />
          <circle cx="21" cy="21" r="15.9" fill="none" stroke="#fda4af" strokeWidth="5" strokeDasharray="10 90" strokeDashoffset="-90" />
        </svg>
        <div className="mt-2 flex justify-center gap-3 text-[9px] text-white/50">
          <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-mint-400" />In stock</span>
          <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-amber-300" />Low</span>
          <span className="flex items-center gap-1"><i className="size-1.5 rounded-full bg-rose-300" />Out</span>
        </div>
      </div>
      <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
        <div className="text-[10px] text-white/45">Purchases vs sales</div>
        <div className="mt-3 flex h-36 items-end gap-2">
          {[[50, 40], [62, 55], [45, 60], [70, 64], [58, 72], [80, 76]].map(([a, b], i) => (
            <div key={i} className="flex flex-1 items-end gap-0.5">
              <span style={{ height: `${a}%`, ...d(i * 80) }} className="grow-bar flex-1 rounded-t-sm bg-white/25" />
              <span style={{ height: `${b}%`, ...d(80 + i * 80) }} className="grow-bar flex-1 rounded-t-sm bg-mint-400" />
            </div>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2"><Table /></div>
    </div>
  );
}

export function InventoryMockup({ className = "", screen = "overview", caption = true }: { className?: string; screen?: Screen; caption?: boolean }) {
  return (
    <figure data-reveal="scale" className={`relative ${className}`}>
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[#0b2a25] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-mint-400/10" aria-hidden>
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white/5 px-2 text-[10px] text-white/35">Anovate Inventory · {screen}</span>
        </div>
        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[9rem_1fr]">
          <div className="space-y-2 border-r border-white/5 p-3">
            {nav.map((l) => (
              <div key={l.id} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] transition-colors ${l.id === screen ? "bg-mint-400/15 text-mint-300" : "text-white/45"}`}>
                <span className={`size-2 shrink-0 rounded-sm ${l.id === screen ? "bg-mint-400" : "bg-white/20"}`} />
                <span className="hidden sm:inline">{l.label}</span>
              </div>
            ))}
          </div>
          <div key={screen} className="min-h-[19rem] p-4 sm:p-5">
            {screen === "overview" && <Overview />}
            {screen === "products" && <Products />}
            {screen === "purchases" && <Purchases />}
            {screen === "reports" && <Reports />}
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted-dark">
          <span className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">Preview</span>
          Illustrative interface with sample data.
        </figcaption>
      )}
    </figure>
  );
}
