import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowMark } from "./ArrowMark";

type Variant = "primary" | "secondary" | "dark" | "ghost-light" | "ghost-dark" | "outline-dark";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-md)] font-semibold tracking-tight transition-[background-color,color,box-shadow,border-color] duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Mint on deep green, the logo's own pairing
  primary: "bg-mint-400 text-forest-900 hover:bg-mint-300 shadow-[0_8px_30px_-12px_rgb(63_252_170/0.8)]",
  dark: "bg-forest-900 text-white hover:bg-forest-800 shadow-[var(--shadow-card)]",
  secondary: "border border-white/25 text-white hover:border-mint-400/70 hover:bg-white/5",
  "outline-dark": "border border-forest-900/20 text-forest-900 hover:border-forest-900/60 hover:bg-forest-900/[0.03]",
  "ghost-light": "text-white hover:text-mint-400 px-0!",
  "ghost-dark": "text-forest-800 hover:text-mint-ink px-0!",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

function Indicator({ variant }: { variant: Variant }) {
  const tone = variant === "primary" ? "text-forest-900" : variant === "dark" ? "text-mint-400" : "text-mint-500";
  return <ArrowMark tone="mono" className={`arrow-nudge size-3.5 ${tone}`} />;
}

type LinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
};

export function ButtonLink({ variant = "primary", size = "md", className = "", children, arrow = true, ...rest }: LinkProps) {
  return (
    <Link className={buttonClass(variant, size, className)} {...rest}>
      <span>{children}</span>
      {arrow && <Indicator variant={variant} />}
    </Link>
  );
}

type BtnProps = ComponentProps<"button"> & { variant?: Variant; size?: Size; arrow?: boolean };

export function Button({ variant = "primary", size = "md", className = "", children, arrow = false, ...rest }: BtnProps) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      <span>{children}</span>
      {arrow && <Indicator variant={variant} />}
    </button>
  );
}
