import type { ReactNode } from "react";
import type { Photo } from "@/content/images";
import { StockImage } from "./StockImage";
import { ArrowMark } from "./ui/ArrowMark";

type Props = { photo: Photo; fallback: ReactNode; chips?: string[] };

/** Framed stock photo for page heroes, with floating brand chips. Falls back to the illustration. */
export function HeroPhoto({ photo, fallback, chips = [] }: Props) {
  return (
    <div data-reveal="scale" className="relative mx-auto w-full max-w-[34rem] py-6">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-full bg-mint-400/10 blur-3xl" />
      <div className="animate-float relative aspect-[4/3.4] overflow-hidden rounded-[2rem] bg-forest-850 ring-1 ring-mint-400/25 shadow-[var(--shadow-glow)] [animation-duration:9s]">
        <StockImage
          src={photo.src}
          alt={photo.alt}
          sizes="(min-width:1024px) 34rem, 92vw"
          priority
          fallback={<div className="absolute inset-0 grid place-items-center p-4">{fallback}</div>}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest-950/55 via-transparent to-mint-400/10" />
      </div>
      {chips.map((c, i) => (
        <div
          key={c}
          style={{ ["--d" as string]: `${600 + i * 500}ms` }}
          className={`pop absolute flex items-center gap-2 rounded-xl border border-white/10 bg-forest-950/90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl backdrop-blur ${
            i === 0 ? "-left-2 top-2 sm:-left-8" : i === 1 ? "-right-2 bottom-2 sm:-right-6" : "bottom-1/3 -left-2 hidden sm:-left-10 sm:flex"
          }`}
        >
          <ArrowMark className="size-3.5" /> {c}
        </div>
      ))}
    </div>
  );
}
