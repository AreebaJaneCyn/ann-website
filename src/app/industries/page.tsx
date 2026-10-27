import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { IconTile } from "@/lib/icons";
import { IndustryScene } from "@/components/IndustryScenes";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries — Software for Retail, Logistics, Healthcare & More",
  description:
    "Custom software, mobile apps, CRM, ERP and inventory solutions for retail and ecommerce, logistics, healthcare, fintech, education, manufacturing and other sectors.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology that fits"
        highlight="the way your sector works."
        lede="Every industry has its own workflows, data and customer expectations. Our engineering services and software adapt to the sector you operate in."
        crumbs={[{ name: "Industries", path: "/industries" }]}
        actions={<ButtonLink href="/contact" size="lg">{site.cta.project}</ButtonLink>}
      />
      <Section tone="light" labelledBy="ind-title">
        <SectionHeading
          id="ind-title"
          eyebrow="Sectors we can support"
          title="Where our services apply"
          lede="These are industries where our capabilities are relevant. Ask us about your specific context and we'll be clear about how we can help."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <li key={ind.slug} id={ind.slug} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }} tabIndex={0} className="group hover-lift overflow-hidden rounded-[var(--radius-xl)] border border-line bg-white shadow-[var(--shadow-card)] outline-none hover:shadow-[var(--shadow-lift)] focus-visible:ring-2 focus-visible:ring-forest-700">
              {/* Image area: brand pattern by default, industry scene on hover/focus (always shown on touch screens) */}
              <div className="relative h-52 overflow-hidden bg-forest-900">
                <div className="swap-a absolute inset-0 grid place-items-center transition-[opacity,transform] duration-700">
                  <div aria-hidden className="bg-grid-dark absolute inset-0" />
                  <ArrowMark tone="mono" className="absolute -right-6 -top-6 size-40 text-mint-400/10" />
                  <IconTile title={ind.title} dark size="lg" className="relative scale-125" />
                </div>
                <IndustryScene slug={ind.slug} className="swap-b absolute inset-0 size-full transition-[opacity,transform] duration-700" />
              </div>
              <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <IconTile title={ind.title} size="lg" />
                  <h2 className="text-2xl font-semibold text-forest-900">{ind.title}</h2>
                </div>
                <ArrowMark tone="mono" className="arrow-nudge mt-2 size-4 shrink-0 text-mint-ink" />
              </div>
              <p className="mt-3 leading-relaxed text-muted">{ind.body}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">Typical solutions</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ind.examples.map((e) => <li key={e} className="rounded-full bg-mist px-3 py-1 text-sm text-ink-soft">{e}</li>)}
              </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <CTABand title="Tell us about your industry." body="Share the processes and challenges specific to your business, and we'll explain how our services or software could help." />
    </>
  );
}
