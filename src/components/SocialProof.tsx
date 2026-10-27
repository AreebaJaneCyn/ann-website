import { Award as AwardIcon } from "lucide-react";
import Image from "next/image";
import type { Award, Partner } from "@/content/social-proof";
import type { Avatar, Member } from "@/content/team";
import { ArrowMark } from "./ui/ArrowMark";

/* ---------- Illustrated person avatar (placeholder for real team photos) ---------- */

export function PersonAvatar({ a, className = "" }: { a: Avatar; className?: string }) {
  const hijab = a.style === "hijab";
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id={`bg-${a.shirt}-${a.style}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3ffcaa" stopOpacity="0.35" />
          <stop offset="1" stopColor="#1fd09b" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#bg-${a.shirt}-${a.style})`} />
      {/* hair behind head */}
      {a.style === "long" && <path d="M60 96 C 56 48, 144 48, 140 96 L 146 160 C 125 148, 75 148, 54 160 Z" fill={a.hair} />}
      {hijab && <path d="M54 102 C 52 46, 148 46, 146 102 C 146 140, 128 162, 100 166 C 72 162, 54 140, 54 102 Z" fill={a.hair} />}
      {/* shoulders */}
      <path d="M26 200 C 28 152, 66 136, 100 136 C 134 136, 172 152, 174 200 Z" fill={a.shirt} />
      {hijab ? (
        <path d="M62 150 C 80 168, 120 168, 138 150 L 150 200 L 50 200 Z" fill={a.hair} opacity="0.95" />
      ) : (
        <>
          <rect x="88" y="118" width="24" height="24" rx="8" fill={a.skin} />
          <path d="M84 138 L 100 156 L 116 138" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
        </>
      )}
      {/* head */}
      <ellipse cx="100" cy="92" rx={hijab ? 29 : 33} ry={hijab ? 33 : 37} fill={a.skin} />
      {/* hair on top */}
      {a.style === "short" && <path d="M66 88 C 62 52, 94 44, 106 48 C 128 50, 140 64, 134 90 C 128 72, 110 64, 96 67 C 82 70, 71 77, 66 88 Z" fill={a.hair} />}
      {a.style === "buzz" && <path d="M68 82 C 70 54, 130 54, 132 82 C 120 68, 80 68, 68 82 Z" fill={a.hair} />}
      {a.style === "long" && <path d="M66 90 C 64 56, 136 56, 134 90 C 122 70, 100 66, 84 72 C 76 76, 70 82, 66 90 Z" fill={a.hair} />}
      {a.style === "bun" && (
        <>
          <circle cx="100" cy="48" r="15" fill={a.hair} />
          <path d="M66 88 C 64 56, 136 56, 134 88 C 124 70, 76 70, 66 88 Z" fill={a.hair} />
        </>
      )}
      {a.style === "curly" &&
        [[72, 76], [82, 62], [98, 56], [114, 60], [127, 72], [132, 86], [68, 90]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="12" fill={a.hair} />)}
      {/* face */}
      <circle cx="88" cy="94" r="2.8" fill="#1b1b1b" />
      <circle cx="112" cy="94" r="2.8" fill="#1b1b1b" />
      <path d="M90 109 Q 100 117 110 109" fill="none" stroke="#7a3e2a" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="82" cy="104" r="5" fill="#ff8a7a" opacity="0.18" />
      <circle cx="118" cy="104" r="5" fill="#ff8a7a" opacity="0.18" />
    </svg>
  );
}

export function TeamCard({ m, i }: { m: Member; i: number }) {
  return (
    <li data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }} className="group hover-lift overflow-hidden rounded-[var(--radius-xl)] border border-line bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-square overflow-hidden bg-mist">
        {m.photo ? (
          <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <PersonAvatar a={m.avatar} className="size-full transition-transform duration-700 group-hover:scale-105" />
        )}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center gap-2 bg-gradient-to-t from-forest-950/90 to-transparent px-4 pb-3 pt-8 transition-transform duration-500 group-hover:translate-y-0">
          <ArrowMark className="size-4" />
          <span className="text-xs font-semibold text-white">{m.role}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-sans text-lg font-semibold text-forest-900">{m.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-mint-ink">{m.role}</p>
      </div>
    </li>
  );
}

/* ---------- Awards ---------- */

function Laurel({ className = "" }: { className?: string }) {
  const leaves = Array.from({ length: 6 }, (_, i) => i);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {[1, -1].map((side) => (
        <g key={side} transform={side === -1 ? "translate(120 0) scale(-1 1)" : undefined}>
          <path d="M40 100 C 18 84, 14 52, 30 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {leaves.map((l) => {
            const t = l / 5;
            const x = 40 - 22 * Math.sin(t * 2.4) - 4;
            const y = 98 - t * 70;
            return <ellipse key={l} cx={x} cy={y} rx="4.5" ry="9" transform={`rotate(${-35 + t * 25} ${x} ${y})`} fill="currentColor" />;
          })}
        </g>
      ))}
    </svg>
  );
}

export function AwardBadge({ award, i }: { award: Award; i: number }) {
  const body = (
    <>
      <div className="relative mx-auto grid size-32 place-items-center">
        <Laurel className="absolute inset-0 size-full text-mint-400/80 transition-transform duration-700 group-hover:scale-105" />
        {award.badge ? (
          <Image src={award.badge} alt={`${award.platform} ${award.title ?? "award"} badge`} width={88} height={88} className="relative object-contain" />
        ) : (
          <span className="animate-pulse-ring relative grid size-16 place-items-center rounded-full bg-mint-400 text-forest-900">
            <AwardIcon className="size-8" strokeWidth={1.75} />
          </span>
        )}
      </div>
      <p className="mt-5 text-center font-display text-lg font-semibold text-white">{award.platform}</p>
      <p className="mt-1 text-center text-sm text-muted-dark">
        {award.title ? `${award.title}${award.year ? ` · ${award.year}` : ""}` : "Award details to be confirmed"}
      </p>
      {award.placeholder && (
        <p className="mx-auto mt-3 w-fit rounded-full border border-dashed border-mint-400/50 px-2.5 py-0.5 text-[11px] font-medium text-mint-300">Placeholder</p>
      )}
    </>
  );
  const cls = "group hover-lift block rounded-[var(--radius-xl)] border border-white/10 bg-forest-950/60 p-6 hover:border-mint-400/40";
  return (
    <li data-reveal="scale" style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
      {award.url ? <a href={award.url} target="_blank" rel="noopener" className={cls}>{body}</a> : <div className={cls}>{body}</div>}
    </li>
  );
}

/* ---------- Partner logo slider ---------- */

function PartnerTile({ p }: { p: Partner }) {
  return (
    <li className="flex h-20 w-48 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-line bg-white px-6 grayscale transition hover:grayscale-0">
      {p.logo ? (
        <Image src={p.logo} alt={p.name} width={140} height={48} className="max-h-10 w-auto object-contain" />
      ) : (
        <span className="flex items-center gap-2.5 text-forest-900/40">
          <span className="grid size-8 place-items-center rounded-lg border-2 border-dashed border-current">
            <ArrowMark tone="mono" className="size-3.5" />
          </span>
          <span className="font-display text-sm font-semibold">Partner Logo</span>
        </span>
      )}
    </li>
  );
}

export function PartnerSlider({ partners }: { partners: Partner[] }) {
  const row = [...partners, ...partners];
  return (
    <div className="marquee overflow-hidden">
      <ul className="marquee-track gap-5 py-2 [animation-duration:30s]" aria-label="Partners and clients">
        {row.map((p, i) => (
          <PartnerTile key={i} p={p} />
        ))}
      </ul>
    </div>
  );
}
