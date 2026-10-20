import { useId } from "react";

type Props = {
  className?: string;
  /** "mint" mirrors the logo's two-tone folded arrow; "mono" uses currentColor */
  tone?: "mint" | "mono" | "outline";
  title?: string;
};

/**
 * The Anovate signature: the folded arrow that sits above the V in the logo.
 * Redrawn as a vector motif for UI accents. It is not a replacement for the logo.
 */
export function ArrowMark({ className, tone = "mint", title }: Props) {
  const id = useId().replace(/:/g, "");
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };
  const left = "M25 27 L66 9 L51 56 L14 69 Z";
  const right = "M66 9 L88 50 L72 89 L51 56 Z";

  if (tone === "outline") {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" {...a11y}>
        <path d={left} stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d={right} stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    );
  }

  const lf = tone === "mono" ? "currentColor" : `url(#l${id})`;
  const rf = tone === "mono" ? "currentColor" : `url(#r${id})`;
  return (
    <svg viewBox="0 0 100 100" className={className} {...a11y}>
      {tone === "mint" && (
        <defs>
          <linearGradient id={`l${id}`} x1="0.8" y1="0" x2="0.1" y2="1">
            <stop offset="0" stopColor="#3FFCAA" />
            <stop offset="1" stopColor="#2AD9A0" />
          </linearGradient>
          <linearGradient id={`r${id}`} x1="0.3" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#2CD49E" />
            <stop offset="1" stopColor="#3FFCAA" />
          </linearGradient>
        </defs>
      )}
      <path d={left} fill={lf} stroke={lf} strokeWidth="7" strokeLinejoin="round" />
      <path d={right} fill={rf} stroke={rf} strokeWidth="7" strokeLinejoin="round" opacity={tone === "mono" ? 0.78 : 1} />
    </svg>
  );
}
