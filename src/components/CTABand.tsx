import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "./ui/Button";
import { Eyebrow } from "./ui/Section";

type Props = {
  title: ReactNode;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  eyebrow?: string;
};

/** Closing call to action, using the supplied brand symbol artwork as the backdrop. */
export function CTABand({
  title,
  body,
  eyebrow = "Next step",
  primary = { label: site.cta.project, href: "/contact" },
  secondary = { label: site.cta.inventory, href: "/products/inventory-management" },
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-white" aria-label="Get in touch">
      <Image
        src="/brand/anovate-symbol-bg.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="-z-20 object-cover object-[70%_45%] opacity-60 sm:object-[right_45%] lg:left-auto! lg:w-[60%]! lg:opacity-90"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900 via-forest-900/95 to-forest-900/30 lg:via-forest-900/85 lg:to-transparent" />
      <div className="container-x py-24 sm:py-28 lg:py-32">
        <div data-reveal className="max-w-2xl">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} size="lg">{primary.label}</ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" size="lg">{secondary.label}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
