"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Rendered instead of the photo if it fails to load */
  fallback?: ReactNode;
};

/** Unsplash's CDN resizes and converts the image, so Vercel's optimiser isn't needed. */
const unsplashLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) =>
  `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;

export function StockImage({ src, alt, sizes, className = "", priority, fallback = null }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <Image
      loader={src.startsWith("https://images.unsplash.com/") ? unsplashLoader : undefined}
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
