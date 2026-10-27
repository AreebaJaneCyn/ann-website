import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { articles } from "@/content/articles";
import { site } from "@/content/site";
import { IconTile } from "@/lib/icons";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights — Software Development, Staff Augmentation & Inventory Guides",
  description:
    "Practical guides on staff augmentation, mobile app development, custom CRM, MVP scoping and cloud inventory management from the Anovate System team.",
  path: "/insights",
});

const categoryIcon: Record<string, string> = {
  "Staff Augmentation": "Staff augmentation",
  "Product Development": "Product development",
  "Mobile Apps": "Mobile apps",
  "Business Systems": "Business systems",
  "Inventory Management": "Inventory management",
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;
  const listLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Insights`,
    url: absoluteUrl("/insights"),
    blogPost: articles.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: absoluteUrl(`/insights/${a.slug}`), datePublished: a.published })),
  };
  return (
    <>
      <JsonLd data={listLd} />
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on"
        highlight="building better software."
        lede="Clear, practical guides for founders, technology leaders and operations teams, from engagement models to inventory control."
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />
      <Section tone="light" labelledBy="featured-title">
        <h2 id="featured-title" className="sr-only">Featured article</h2>
        <Link href={`/insights/${featured.slug}`} data-reveal className="group hover-lift relative grid overflow-hidden rounded-[var(--radius-xl)] bg-forest-900 text-white hover:shadow-[var(--shadow-glow)] lg:grid-cols-[1.3fr_1fr]">
          <div className="p-8 sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-400">Featured · {featured.category}</span>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{featured.title}</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-dark">{featured.answer}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-mint-400">Read article · {featured.readingMinutes} min <ArrowMark className="arrow-nudge size-3.5" /></span>
          </div>
          <div aria-hidden className="relative hidden min-h-64 lg:block">
            <div className="bg-grid-dark absolute inset-0" />
            <ArrowMark className="animate-arrow-float absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 opacity-90" />
          </div>
        </Link>

        <div className="mt-16">
          <SectionHeading eyebrow="Latest" title="All articles" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <li key={a.slug} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                <Link href={`/insights/${a.slug}`} className="group hover-lift flex h-full flex-col rounded-[var(--radius-xl)] border border-line bg-white p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]">
                  <div className="flex items-center gap-3">
                    <IconTile title={categoryIcon[a.category]} size="sm" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">{a.category}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-forest-900">{a.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[0.9375rem] leading-relaxed text-muted">{a.description}</p>
                  <span className="mt-auto flex items-center justify-between pt-6 text-sm">
                    <span className="text-muted">{a.readingMinutes} min read</span>
                    <span className="inline-flex items-center gap-2 font-semibold text-forest-800">Read <ArrowMark tone="mono" className="arrow-nudge size-3 text-mint-ink" /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CTABand title="Have a question we should write about?" body="Or a project you'd like to discuss now? We'd be glad to hear from you." />
    </>
  );
}
