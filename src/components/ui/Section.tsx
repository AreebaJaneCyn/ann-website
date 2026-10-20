import type { ReactNode } from "react";
import { ArrowMark } from "./ArrowMark";

export type Tone = "light" | "mist" | "dark" | "deep";

const tones: Record<Tone, string> = {
  light: "on-light bg-paper text-ink",
  mist: "on-light bg-mist text-ink",
  dark: "bg-forest-900 text-white",
  deep: "bg-forest-950 text-white",
};

export function isDark(tone: Tone) {
  return tone === "dark" || tone === "deep";
}

type SectionProps = {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
  grid?: boolean;
};

export function Section({ tone = "light", id, className = "", children, labelledBy, grid }: SectionProps) {
  const gridCls = grid ? (isDark(tone) ? "bg-grid-dark" : "bg-grid-light") : "";
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative isolate overflow-hidden ${tones[tone]} ${className}`}>
      {grid && <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${gridCls} [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]`} />}
      <div className="container-x py-20 sm:py-24 lg:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] ${dark ? "text-mint-400" : "text-mint-ink"}`}>
      <ArrowMark tone={dark ? "mint" : "mono"} className="size-3.5" />
      {children}
    </p>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ eyebrow, title, lede, dark, id, align = "left", as: H = "h2", className = "" }: HeadingProps) {
  const center = align === "center";
  return (
    <div data-reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <H id={id} className={`mt-4 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-forest-900"}`}>
        {title}
      </H>
      {lede && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-muted-dark" : "text-muted"} ${center ? "mx-auto" : ""} max-w-2xl`}>{lede}</p>}
    </div>
  );
}
