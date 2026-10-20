import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { IconTile } from "@/lib/icons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Practical articles on software development, staff augmentation, mobile apps, business systems and inventory management from Anovate System.",
  path: "/insights",
});

/** Planned editorial topics. Articles will be added here once published (CMS or MDX). */
const topics = [
  { title: "Staff augmentation", body: "When extending your team makes sense, and how to make it work day to day." },
  { title: "Product development", body: "Scoping MVPs, choosing a stack and planning releases." },
  { title: "Mobile apps", body: "Native vs cross-platform, app store readiness and life after launch." },
  { title: "Business systems", body: "CRM, ERP and automation: what to build, buy or integrate." },
  { title: "Inventory management", body: "Practical stock control for product-based businesses." },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on"
        highlight="building better software."
        lede="Guides and perspectives for founders, technology leaders and operations teams. Our first articles are being prepared."
        crumbs={[{ name: "Insights", path: "/insights" }]}
      />
      <Section tone="light" labelledBy="topics-title">
        <SectionHeading id="topics-title" eyebrow="Coming soon" title="Topics we'll cover" lede="We're preparing our first articles. Here's what to expect." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <li key={t.title} data-reveal className="group hover-lift rounded-[var(--radius-lg)] border border-dashed border-forest-900/20 p-7 hover:border-solid hover:shadow-[var(--shadow-lift)]">
              <IconTile title={t.title} />
              <h2 className="mt-4 text-lg font-semibold text-forest-900">{t.title}</h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CTABand title="Have a question we should write about?" body="Or a project you'd like to discuss now? We'd be glad to hear from you." />
    </>
  );
}
