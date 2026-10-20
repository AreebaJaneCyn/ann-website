import Image from "next/image";
import Link from "next/link";

type Props = { variant?: "default" | "reversed"; className?: string; priority?: boolean; linked?: boolean };

/**
 * Official Anovate System logo (supplied asset, proportions preserved: 1067×407).
 * "reversed" swaps only the dark-green letterforms to white for dark backgrounds,
 * following the white/mint treatment used in the supplied brand symbol artwork.
 */
export function Logo({ variant = "default", className = "h-9 w-auto", priority, linked = true }: Props) {
  const img = (
    <Image
      src={variant === "reversed" ? "/brand/anovate-logo-reversed.png" : "/brand/anovate-logo.png"}
      alt="Anovate System"
      width={1067}
      height={407}
      priority={priority}
      loading={priority ? undefined : "eager"}
      sizes="240px"
      className={className}
    />
  );
  if (!linked) return img;
  return (
    <Link href="/" aria-label="Anovate System — home" className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  );
}
