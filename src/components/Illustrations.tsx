/**
 * Brand illustrations, drawn in code (SVG + HTML) so they stay crisp, light and on-palette.
 * They are illustrative scenes, not screenshots of client or product work.
 * Animations are CSS-only and switch off under prefers-reduced-motion.
 */
import { BadgeCheck, Bell, Code, GitBranch, Plug, Rocket, ShoppingCart, Truck, Users, Building2, ChartColumn, Package, Landmark } from "lucide-react";
import { ArrowMark } from "./ui/ArrowMark";

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

/** Small brand arrows rising through a dark section. Purely decorative. */
export function FloatingArrows({ count = 6, className = "" }: { count?: number; className?: string }) {
  const spots = [
    [8, 78, 0, 0.9], [22, 92, 2.4, 0.6], [38, 85, 5.2, 0.75], [57, 95, 1.2, 0.55], [71, 82, 3.6, 0.8], [86, 90, 6.4, 0.6], [94, 70, 4.4, 0.5],
  ].slice(0, count);
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {spots.map(([x, y, delay], i) => (
        <span key={i} className="animate-drift absolute" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s`, animationDuration: `${9 + (i % 3) * 2}s` }}>
          <ArrowMark className="size-4" />
        </span>
      ))}
    </div>
  );
}

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-[#0b2a25] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-mint-400/10 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      {children}
    </div>
  );
}

function Chip({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div style={d(delay)} className={`pop absolute flex items-center gap-2 rounded-xl border border-white/10 bg-forest-950/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

/** Staff augmentation: specialists connecting into the client's team. */
export function TeamNetwork() {
  const people = [
    { x: 14, y: 18, label: "Frontend", c: "from-mint-400 to-mint-600" },
    { x: 84, y: 16, label: "Backend", c: "from-[#7ce7ff] to-mint-500" },
    { x: 90, y: 66, label: "Mobile", c: "from-mint-300 to-mint-500" },
    { x: 50, y: 92, label: "QA", c: "from-[#b7f5d8] to-mint-600" },
    { x: 8, y: 70, label: "UI/UX", c: "from-mint-400 to-[#18a07a]" },
  ];
  return (
    <div data-reveal="scale" aria-hidden className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <circle cx="50" cy="50" r="34" fill="none" stroke="rgb(63 252 170 / 0.12)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgb(63 252 170 / 0.07)" strokeWidth="0.3" />
        {people.map((p) => (
          <line key={p.label} x1="50" y1="50" x2={p.x} y2={p.y} stroke="rgb(63 252 170 / 0.55)" strokeWidth="0.35" className="animate-dash" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-mint-400/30 bg-forest-950/90 p-4 text-center shadow-[var(--shadow-glow)]">
        <span className="animate-pulse-ring mx-auto grid size-11 place-items-center rounded-full bg-mint-400 text-forest-900">
          <Users className="size-5" strokeWidth={2} />
        </span>
        <p className="mt-3 text-sm font-semibold text-white">Your team</p>
        <p className="text-[11px] text-muted-dark">Your tools · your rituals</p>
      </div>
      {people.map((p, i) => (
        <div key={p.label} style={{ left: `${p.x}%`, top: `${p.y}%`, ...d(200 + i * 140) }} className="pop absolute -translate-x-1/2 -translate-y-1/2">
          <div className={i % 2 ? "animate-float-alt" : "animate-float"} style={{ animationDelay: `${i * 0.7}s` }}>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-forest-950/90 py-1.5 pl-1.5 pr-3 shadow-xl">
              <span className={`size-7 rounded-full bg-gradient-to-br ${p.c}`} />
              <span className="text-xs font-semibold text-white">{p.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Custom software: an editor with code lines typing in. */
export function CodeEditor() {
  const lines: [number, string, string][] = [
    [0, "text-mint-300", "export async function syncOrders() {"],
    [1, "text-white/70", "const orders = await api.orders.list();"],
    [1, "text-[#7ce7ff]", "await workflow.run(\"approve\", orders);"],
    [1, "text-white/70", "await crm.customers.update(orders);"],
    [1, "text-mint-400", "return { synced: orders.length };"],
    [0, "text-mint-300", "}"],
  ];
  return (
    <div data-reveal="scale" aria-hidden className="relative mx-auto w-full max-w-[32rem] pb-10 pt-6">
      <Frame>
        <div className="flex text-[11px] text-white/40">
          <span className="border-b border-mint-400 px-4 py-2 text-white/80">workflow.ts</span>
          <span className="px-4 py-2">api.ts</span>
        </div>
        <pre className="overflow-hidden px-4 pb-6 pt-2 font-mono text-[12px] leading-6 sm:text-[13px]">
          {lines.map(([indent, color, text], i) => (
            <div key={i} className="flex">
              <span className="w-6 shrink-0 select-none text-white/20">{i + 1}</span>
              <span style={{ paddingLeft: `${indent * 1.25}rem`, ...d(300 + i * 450) }} className={`type-line block whitespace-pre ${color}`}>{text}</span>
            </div>
          ))}
          <div className="flex"><span className="w-6 text-white/20">7</span><span className="animate-caret inline-block h-4 w-2 translate-y-1 bg-mint-400" /></div>
        </pre>
      </Frame>
      <Chip className="-left-2 top-0 sm:-left-8" delay={900}><Plug className="size-4 text-mint-400" /> API connected</Chip>
      <Chip className="-right-2 bottom-2 sm:-right-6" delay={3200}><Rocket className="size-4 text-mint-400" /> Deployed to production</Chip>
      <Chip className="right-6 top-2 hidden sm:flex" delay={1800}><GitBranch className="size-4 text-mint-400" /> feature/approvals</Chip>
    </div>
  );
}

function Phone({ variant, className = "" }: { variant: 0 | 1; className?: string }) {
  return (
    <div className={`w-44 rounded-[2rem] border border-white/15 bg-forest-950 p-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.7)] sm:w-48 ${className}`}>
      <div className="relative h-[22rem] overflow-hidden rounded-[1.6rem] bg-forest-850 p-3 sm:h-[24rem]">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-black/40" />
        {variant === 0 ? (
          <>
            <div className="flex items-center justify-between"><div className="h-2 w-16 rounded bg-white/40" /><span className="size-6 rounded-full bg-gradient-to-br from-mint-400 to-mint-600" /></div>
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 p-3 text-forest-900">
              <div className="text-[10px] font-semibold opacity-70">Today</div>
              <div className="mt-1 font-display text-lg font-semibold">4 jobs</div>
              <div className="mt-2 h-1.5 rounded-full bg-forest-900/20"><div className="h-full w-2/3 rounded-full bg-forest-900/60" /></div>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={d(400 + i * 150)} className="pop mt-2.5 flex items-center gap-2 rounded-xl bg-white/5 p-2">
                <span className="size-7 rounded-lg bg-white/10" />
                <div className="flex-1 space-y-1"><div className="h-1.5 w-3/4 rounded bg-white/30" /><div className="h-1.5 w-1/2 rounded bg-white/10" /></div>
                {i === 0 && <span className="size-2 rounded-full bg-mint-400" />}
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="h-2 w-20 rounded bg-white/40" />
            <div className="mt-4 h-28 rounded-2xl bg-white/5 p-3">
              <div className="flex h-full items-end gap-1.5">
                {[40, 65, 50, 80, 60, 92, 74].map((h, i) => (
                  <span key={i} style={{ height: `${h}%`, ...d(200 + i * 90) }} className="grow-bar flex-1 rounded-t bg-gradient-to-t from-mint-600/60 to-mint-400" />
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => <div key={i} className="h-14 rounded-xl bg-white/5 p-2"><div className="h-1.5 w-8 rounded bg-white/25" /><div className="mt-2 h-2.5 w-12 rounded bg-white/50" /></div>)}
            </div>
          </>
        )}
        <div className="absolute inset-x-3 bottom-3 flex justify-around rounded-2xl bg-black/30 py-2.5">
          {[0, 1, 2, 3].map((i) => <span key={i} className={`size-4 rounded-md ${i === variant ? "bg-mint-400" : "bg-white/20"}`} />)}
        </div>
      </div>
    </div>
  );
}

/** Mobile apps: two phones floating out of phase. */
export function PhoneDuo() {
  return (
    <div data-reveal aria-hidden className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center gap-4 py-8">
      <div className="animate-float"><Phone variant={0} /></div>
      <div className="animate-float-alt mt-16 hidden sm:block" style={{ animationDelay: "1.2s" }}><Phone variant={1} /></div>
      <Chip className="left-0 top-6 sm:-left-4" delay={1200}><Bell className="size-4 text-mint-400" /> New job assigned</Chip>
      <Chip className="bottom-6 right-0 sm:-right-2" delay={2000}><BadgeCheck className="size-4 text-mint-400" /> Ready for App Store</Chip>
    </div>
  );
}

/** CRM: pipeline board with deals arriving. */
export function PipelineBoard() {
  const cols = [
    { name: "New", n: 3 },
    { name: "Qualified", n: 2 },
    { name: "Proposal", n: 2 },
    { name: "Won", n: 1 },
  ];
  return (
    <div data-reveal="scale" aria-hidden className="relative mx-auto w-full max-w-[34rem] pb-8">
      <Frame>
        <div className="grid grid-cols-4 gap-2 p-3 sm:p-4">
          {cols.map((c, ci) => (
            <div key={c.name} className="space-y-2 rounded-lg bg-white/[0.04] p-2">
              <div className="flex items-center justify-between text-[10px] font-medium text-white/55">{c.name}<span className="rounded bg-white/10 px-1">{c.n}</span></div>
              {Array.from({ length: c.n }).map((_, j) => (
                <div key={j} style={d(200 + ci * 260 + j * 120)} className={`pop space-y-1.5 rounded-md border p-2 ${c.name === "Won" ? "border-mint-400/50 bg-mint-400/10" : "border-white/10 bg-forest-850"}`}>
                  <div className="h-1.5 w-4/5 rounded bg-white/35" />
                  <div className="h-1.5 w-1/2 rounded bg-white/10" />
                  <div className="flex items-center gap-1 pt-0.5"><span className="size-3 rounded-full bg-gradient-to-br from-mint-400 to-mint-600" /><span className="h-1 w-6 rounded bg-white/15" /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Frame>
      <Chip className="-bottom-1 left-6" delay={1600}><ChartColumn className="size-4 text-mint-400" /> Pipeline report updated</Chip>
    </div>
  );
}

/** ERP: departments connected through one central system. */
export function OpsFlow() {
  const nodes = [
    { x: 18, y: 18, label: "Sales", Icon: ShoppingCart },
    { x: 82, y: 18, label: "Purchasing", Icon: Truck },
    { x: 88, y: 72, label: "Finance", Icon: Landmark },
    { x: 50, y: 92, label: "Inventory", Icon: Package },
    { x: 12, y: 72, label: "Reports", Icon: ChartColumn },
  ];
  return (
    <div data-reveal="scale" aria-hidden className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        {nodes.map((n) => (
          <path key={n.label} d={`M50 50 Q ${(50 + n.x) / 2 + 6} ${(50 + n.y) / 2 - 6} ${n.x} ${n.y}`} fill="none" stroke="rgb(63 252 170 / 0.55)" strokeWidth="0.35" className="animate-dash" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-pulse-ring grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-mint-400 to-mint-600 text-forest-900 shadow-[var(--shadow-glow)]">
          <Building2 className="size-9" strokeWidth={1.75} />
        </div>
        <p className="mt-2 text-center text-xs font-semibold text-white">One system</p>
      </div>
      {nodes.map(({ x, y, label, Icon }, i) => (
        <div key={label} style={{ left: `${x}%`, top: `${y}%`, ...d(200 + i * 150) }} className="pop absolute -translate-x-1/2 -translate-y-1/2">
          <div className={i % 2 ? "animate-float-alt" : "animate-float"} style={{ animationDelay: `${i * 0.6}s` }}>
            <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-forest-950/90 px-3 py-2.5 shadow-xl">
              <Icon className="size-5 text-mint-400" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold text-white">{label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Services hub / generic: stacked capability cards. */
export function CapabilityStack() {
  const items = [
    { Icon: Users, t: "Dedicated teams" },
    { Icon: Code, t: "Custom software" },
    { Icon: Package, t: "Cloud products" },
  ];
  return (
    <div data-reveal="scale" aria-hidden className="relative mx-auto h-80 w-full max-w-[26rem]">
      {items.map(({ Icon, t }, i) => (
        <div
          key={t}
          className={`absolute w-64 rounded-2xl border border-white/10 bg-forest-950/90 p-5 shadow-2xl ${i % 2 ? "animate-float-alt" : "animate-float"}`}
          style={{ left: `${i * 16}%`, top: `${i * 28}%`, animationDelay: `${i * 0.8}s` }}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-mint-400/15 text-mint-400"><Icon className="size-5" strokeWidth={1.75} /></span>
            <span className="font-semibold text-white">{t}</span>
          </div>
          <div className="mt-4 space-y-2"><div className="h-1.5 w-full rounded bg-white/10" /><div className="h-1.5 w-2/3 rounded bg-white/10" /></div>
        </div>
      ))}
    </div>
  );
}

/** Capabilities ticker, limited to confirmed services and technologies. */
export function CapabilityMarquee({ dark = false }: { dark?: boolean }) {
  const items = ["Dedicated developers", "Web applications", "SaaS products", "iOS", "Android", "Flutter", "React Native", "UI/UX design", "QA & testing", "APIs & integrations", "Workflow automation", "CRM", "ERP", "Cloud inventory"];
  const row = [...items, ...items];
  return (
    <div className={`marquee overflow-hidden border-y py-5 ${dark ? "border-white/10 bg-forest-950" : "border-line bg-white"}`} aria-label="Capabilities">
      <ul className="marquee-track gap-10">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length} className={`flex items-center gap-3 whitespace-nowrap font-display text-lg font-semibold ${dark ? "text-white/80" : "text-forest-900/80"}`}>
            <ArrowMark tone={dark ? "mint" : "mono"} className={`size-3.5 ${dark ? "" : "text-mint-ink"}`} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
