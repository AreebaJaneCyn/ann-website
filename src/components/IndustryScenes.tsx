/**
 * Illustrated industry scenes (SVG). Shown on industry cards on hover/focus.
 * Swap for photography by setting `image` on the industry in content/industries.ts.
 */
const M = "#3ffcaa";
const M2 = "#1fd09b";
const W = "rgb(255 255 255 / 0.85)";
const S = "rgb(255 255 255 / 0.14)";
const D = "#01231e";

function Retail() {
  return (
    <>
      <rect x="40" y="70" width="170" height="130" rx="8" fill={S} />
      {Array.from({ length: 6 }, (_, i) => (
        <path key={i} d={`M${40 + i * 28.3} 70 h28.3 v22 a14 14 0 0 1 -28.3 0 Z`} fill={i % 2 ? W : M} />
      ))}
      <rect x="62" y="120" width="56" height="80" rx="4" fill={D} />
      <rect x="132" y="120" width="56" height="44" rx="4" fill={M2} opacity="0.5" />
      <g className="animate-float">
        <rect x="230" y="78" width="130" height="86" rx="8" fill={D} stroke={M} strokeOpacity="0.5" />
        <path d="M262 102 h10 l10 34 h40 l8 -24 h-52" fill="none" stroke={M} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="286" cy="146" r="5" fill={M} />
        <circle cx="316" cy="146" r="5" fill={M} />
      </g>
      <g className="animate-float-alt">
        <path d="M300 180 h46 l-5 46 h-36 Z" fill={M} />
        <path d="M312 180 v-8 a11 11 0 0 1 22 0 v8" fill="none" stroke={W} strokeWidth="3" />
      </g>
    </>
  );
}

function Logistics() {
  return (
    <>
      <path d="M20 190 C 120 150, 230 210, 380 160" fill="none" stroke={S} strokeWidth="18" strokeLinecap="round" />
      <path d="M20 190 C 120 150, 230 210, 380 160" fill="none" stroke={M} strokeWidth="2" className="animate-dash" />
      {[[70, 70], [200, 50], [320, 80]].map(([x, y], i) => (
        <g key={i} className={i % 2 ? "animate-float-alt" : "animate-float"}>
          <path d={`M${x} ${y + 34} c -14 -16 -18 -24 -18 -32 a18 18 0 0 1 36 0 c0 8 -4 16 -18 32 Z`} fill={i === 1 ? M : W} />
          <circle cx={x} cy={y + 2} r="6" fill={D} />
        </g>
      ))}
      <g className="animate-float">
        <rect x="130" y="128" width="96" height="50" rx="6" fill={M} />
        <path d="M226 140 h30 l18 20 v18 h-48 Z" fill={W} />
        <rect x="236" y="146" width="16" height="12" rx="2" fill={D} />
        <circle cx="156" cy="182" r="10" fill={D} stroke={W} strokeWidth="4" />
        <circle cx="250" cy="182" r="10" fill={D} stroke={W} strokeWidth="4" />
      </g>
    </>
  );
}

function Healthcare() {
  return (
    <>
      <rect x="40" y="50" width="220" height="140" rx="12" fill={D} stroke={M} strokeOpacity="0.4" />
      <path d="M56 130 h50 l12 -36 l18 70 l16 -50 l10 16 h82" fill="none" stroke={M} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" className="animate-dash" />
      <g className="animate-float">
        <rect x="290" y="60" width="70" height="70" rx="16" fill={M} />
        <path d="M325 76 v38 M306 95 h38" stroke={D} strokeWidth="10" strokeLinecap="round" />
      </g>
      <g className="animate-float-alt">
        <g transform="rotate(-30 320 180)">
          <rect x="285" y="166" width="72" height="28" rx="14" fill={W} />
          <path d="M321 166 h22 a14 14 0 0 1 0 28 h-22 Z" fill={M2} />
        </g>
      </g>
    </>
  );
}

function Fintech() {
  return (
    <>
      <g className="animate-float">
        <rect x="40" y="60" width="180" height="112" rx="14" fill={M} />
        <rect x="60" y="84" width="34" height="24" rx="4" fill={D} opacity="0.7" />
        <rect x="60" y="134" width="120" height="8" rx="4" fill={D} opacity="0.5" />
        <rect x="60" y="150" width="70" height="8" rx="4" fill={D} opacity="0.35" />
      </g>
      <rect x="240" y="50" width="130" height="150" rx="10" fill={D} stroke={M} strokeOpacity="0.4" />
      <path d="M256 170 L 284 140 L 306 152 L 332 112 L 356 96" fill="none" stroke={M} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {[[284, 140], [306, 152], [332, 112], [356, 96]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5" fill={W} />
      ))}
      <g className="animate-float-alt">
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx="130" cy={210 - i * 10} rx="30" ry="9" fill={i === 2 ? M : W} stroke={D} strokeWidth="2" />
        ))}
      </g>
    </>
  );
}

function Education() {
  return (
    <>
      <path d="M60 180 C 100 160, 150 160, 190 180 L 190 90 C 150 70, 100 70, 60 90 Z" fill={W} />
      <path d="M190 180 C 230 160, 280 160, 320 180 L 320 90 C 280 70, 230 70, 190 90 Z" fill={M} />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M80 ${104 + i * 16} q 45 -10 90 0`} stroke={D} strokeOpacity="0.3" strokeWidth="4" fill="none" strokeLinecap="round" />
      ))}
      <g className="animate-float">
        <path d="M250 40 l70 26 l-70 26 l-70 -26 Z" fill={D} stroke={M} strokeWidth="2" />
        <path d="M216 78 v22 c 20 14 48 14 68 0 v-22" fill={D} stroke={M} strokeWidth="2" />
        <path d="M320 66 v34" stroke={M} strokeWidth="3" />
        <circle cx="320" cy="104" r="6" fill={M} />
      </g>
    </>
  );
}

function Manufacturing() {
  return (
    <>
      <path d="M30 200 V 120 l50 -30 v30 l50 -30 v30 l50 -30 V 200 Z" fill={S} />
      <rect x="190" y="60" width="26" height="140" fill={S} />
      <rect x="226" y="90" width="22" height="110" fill={S} />
      {[[60, 150], [110, 150], [160, 150]].map(([x, y]) => (
        <rect key={x} x={x - 14} y={y} width="28" height="22" rx="3" fill={M} opacity="0.85" />
      ))}
      <g className="animate-spin-slow" style={{ transformOrigin: "320px 110px" }}>
        <circle cx="320" cy="110" r="34" fill="none" stroke={M} strokeWidth="14" strokeDasharray="14 10" />
        <circle cx="320" cy="110" r="16" fill={W} />
      </g>
      <rect x="20" y="206" width="360" height="10" rx="5" fill={W} opacity="0.3" />
      <g className="animate-float-alt">
        <rect x="270" y="176" width="30" height="28" rx="4" fill={W} />
        <rect x="310" y="176" width="30" height="28" rx="4" fill={M} />
      </g>
    </>
  );
}

function Other() {
  return (
    <>
      {[[40, 90, 70, 120], [120, 50, 80, 160], [210, 110, 60, 100], [280, 70, 80, 140]].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="6" fill={i === 1 ? M : S} opacity={i === 1 ? 0.9 : 1} />
          {Array.from({ length: Math.floor(h / 28) }, (_, r) =>
            [0, 1].map((c) => <rect key={`${r}-${c}`} x={x + 12 + c * (w / 2 - 4)} y={y + 14 + r * 26} width={w / 2 - 20} height="12" rx="2" fill={i === 1 ? D : W} opacity={i === 1 ? 0.5 : 0.4} />),
          )}
        </g>
      ))}
      <g className="animate-float">
        <path d="M300 30 h70 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-46 l-14 12 v-12 h-10 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10 Z" fill={W} />
        {[0, 1, 2].map((i) => <circle key={i} cx={320 + i * 15} cy="55" r="4" fill={D} />)}
      </g>
    </>
  );
}

const scenes: Record<string, () => React.ReactElement> = {
  "retail-ecommerce": Retail,
  "logistics-distribution": Logistics,
  healthcare: Healthcare,
  "finance-fintech": Fintech,
  education: Education,
  manufacturing: Manufacturing,
  other: Other,
};

export function IndustryScene({ slug, className = "" }: { slug: string; className?: string }) {
  const Scene = scenes[slug] ?? Other;
  return (
    <svg viewBox="0 0 400 240" className={className} aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#013d35" />
      <Scene />
    </svg>
  );
}
