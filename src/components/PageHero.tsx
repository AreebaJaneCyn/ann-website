import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbLd } from "@/lib/seo";
import { ArrowMark } from "./ui/ArrowMark";
import { JsonLd } from "./ui/JsonLd";
import { Eyebrow } from "./ui/Section";

type Crumb = { name: string; path: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  highlight?: ReactNode;
  lede: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
};

/** Inner-page hero: deep green, engineering grid, oversized arrow motif. */
export function PageHero({ eyebrow, title, highlight, lede, crumbs, actions, aside }: Props) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="relative isolate overflow-hidden bg-forest-900 text-white">
      <JsonLd data={breadcrumbLd(all)} />
      <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden className="absolute -right-24 -top-10 -z-10 hidden w-[34rem] opacity-[0.12] md:block">
        <ArrowMark tone="mono" className="w-full text-mint-400" />
      </div>
      <div aria-hidden className="brand-streak bottom-0 animate-streak" />
      <div className="container-x pb-20 pt-10 sm:pb-24 lg:pb-28">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-dark">
            {all.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">/</span>}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-white/90">{c.name}</span>
                ) : (
                  <Link href={c.path} className="hover:text-white">{c.name}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className={`mt-14 grid gap-12 ${aside ? "lg:grid-cols-[1.15fr_1fr] lg:items-center" : ""}`}>
          <div className="max-w-3xl animate-fade-up">
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.6rem]">
              {title} {highlight && <span className="text-gradient-mint">{highlight}</span>}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-dark sm:text-xl">{lede}</p>
            {actions && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
