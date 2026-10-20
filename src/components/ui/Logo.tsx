import Image from "next/image";
import Link from "next/link";

type Props = { variant?: "default" | "reversed"; className?: string; priority?: boolean; linked?: boolean };

/**
 * Official Anovate Systems logo (supplied asset, proportions preserved: 1067×407).
 * "reversed" swaps only the dark-green letterforms to white for dark backgrounds,
 * following the white/mint treatment used in the supplied brand symbol artwork.
 */
export function Logo({ variant = "default", className = "h-9 w-auto", priority, linked = true }: Props) {
  const img = (
    <Image
      src={variant === "reversed" ? "/brand/anovate-logo-reversed.png" : "/brand/anovate-logo.png"}
      alt="Anovate Systems"
      width={1067}
      height={407}
      priority={priority}
      sizes="240px"
      className={className}
    />
  );
  if (!linked) return img;
  return (
    <Link href="/" aria-label="Anovate Systems — home" className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  );
}
