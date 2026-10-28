import { CalendarDays, Clock, ListChecks, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { articleBySlug, articles } from "@/content/articles";
import { site } from "@/content/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { tc } from "@/lib/title";
import { StockImage } from "@/components/StockImage";
import { articlePhoto } from "@/content/images";

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const a = articleBySlug((await params).slug);
  if (!a) return {};
  const meta = pageMetadata({ title: a.title, description: a.description, path: `/insights/${a.slug}` });
  return {
    ...meta,
    title: { absolute: `${a.title} | ${site.name}` },
    keywords: a.keywords,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: a.published, modifiedTime: a.updated },
  };
}

const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function ArticlePage({ params }: Params) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();
  const url = absoluteUrl(`/insights/${a.slug}`);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated,
    keywords: a.keywords.join(", "),
    articleSection: a.category,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/brand/anovate-logo.png") } },
    image: absoluteUrl("/og-default.png"),
    // Marks the direct answer as the speakable summary for voice/answer engines
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#answer"] },
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <PageHero
        eyebrow={a.category}
        title={a.title}
        lede={a.description}
        crumbs={[{ name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }]}
      />
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_17rem]">
          <article className="min-w-0 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-mint-ink" /> <time dateTime={a.updated}>Updated {fmt(a.updated)}</time></span>
              <span className="inline-flex items-center gap-2"><Clock className="size-4 text-mint-ink" /> {a.readingMinutes} min read</span>
              <span>By the {site.name} team</span>
            </div>

            <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-[var(--radius-xl)] bg-forest-900">
              <StockImage src={articlePhoto[a.slug].src} alt={articlePhoto[a.slug].alt} sizes="(min-width:1024px) 48rem, 100vw" priority fallback={<div className="bg-grid-dark absolute inset-0" />} />
            </div>

            {/* Direct answer first: what answer engines and skimmers need */}
            <div data-reveal className="mt-8 rounded-[var(--radius-lg)] border-l-4 border-mint-500 bg-mist p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink"><Sparkles className="size-4" /> Quick answer</p>
              <p id="answer" className="mt-3 text-lg leading-relaxed text-forest-900">{a.answer}</p>
            </div>

            <div data-reveal className="mt-6 rounded-[var(--radius-lg)] border border-line p-6">
              <h2 className="flex items-center gap-2 font-sans text-base font-semibold text-forest-900"><ListChecks className="size-5 text-mint-ink" /> Key takeaways</h2>
              <ul className="mt-4 space-y-2.5">
                {a.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 leading-relaxed text-ink-soft"><ArrowMark tone="mono" className="mt-1.5 size-3 shrink-0 text-mint-ink" />{t}</li>
                ))}
              </ul>
            </div>

            <div className="prose-anovate mt-4">
              {a.sections.map((s) => (
                <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                  <h2 id={anchor(s.heading)} className="scroll-mt-28">{tc(s.heading)}</h2>
                  {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                </section>
              ))}
            </div>

            <div data-reveal className="mt-12 flex flex-col items-start justify-between gap-4 rounded-[var(--radius-lg)] bg-forest-900 p-6 text-white sm:flex-row sm:items-center">
              <p className="font-display text-lg font-semibold">Want to talk this through for your business?</p>
              <Link href={a.related.href} className="group inline-flex items-center gap-2 font-semibold text-mint-400">
                {a.related.label} <ArrowMark className="arrow-nudge size-3.5" />
              </Link>
            </div>
          </article>

          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28 rounded-[var(--radius-lg)] border border-line p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">On this page</p>
              <ol className="mt-4 space-y-2.5 text-sm">
                {a.sections.map((s) => (
                  <li key={s.heading}><a href={`#${anchor(s.heading)}`} className="text-ink-soft hover:text-forest-900">{s.heading}</a></li>
                ))}
                <li><a href="#faq" className="text-ink-soft hover:text-forest-900">FAQs</a></li>
              </ol>
            </nav>
          </aside>
        </div>
      </Section>

      <FAQ faqs={a.faqs} tone="mist" title="Frequently asked questions" />

      <Section tone="light" labelledBy="more-title">
        <h2 id="more-title" className="text-2xl font-semibold text-forest-900">More insights</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {more.map((m) => (
            <li key={m.slug}>
              <Link href={`/insights/${m.slug}`} className="group hover-lift flex h-full flex-col rounded-[var(--radius-lg)] border border-line p-6 hover:shadow-[var(--shadow-lift)]">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">{m.category}</span>
                <span className="mt-3 font-display text-lg font-semibold capitalize text-forest-900">{m.title}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-forest-800">Read article <ArrowMark tone="mono" className="arrow-nudge size-3 text-mint-ink" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand title="Have a project in mind?" body="Tell us what you're building. We'll respond with a practical next step." />
    </>
  );
}
