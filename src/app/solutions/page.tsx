import { CTABand } from "@/components/CTABand";
import { OpsFlow } from "@/components/Illustrations";
import { PageHero } from "@/components/PageHero";
import { ServiceRows } from "@/components/ServiceRows";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Software Solutions — CRM, ERP & Cloud",
  description:
    "Custom CRM and ERP development, cloud-based business systems and SaaS products. Understand the difference between our custom solutions and ready-to-use subscription software.",
  path: "/solutions",
});

export default function SolutionsPage() {
  const items = services.filter((s) => s.slug === "crm" || s.slug === "erp");
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Business systems that give you"
        highlight="a clear view of your operations."
        lede="Custom CRM and ERP solutions that organise customers, sales, purchasing and operations, plus cloud software you can subscribe to today."
        crumbs={[{ name: "Solutions", path: "/solutions" }]}
        aside={<OpsFlow />}
        actions={<ButtonLink href="/contact?interest=crm" size="lg">{site.cta.consult}</ButtonLink>}
      />
      <Section tone="light" labelledBy="custom-title">
        <SectionHeading id="custom-title" eyebrow="Custom-built" title="Custom CRM and ERP development" lede="Designed and built for your business. These are development engagements, not off-the-shelf products." />
        <div className="mt-10"><ServiceRows items={items} /></div>
      </Section>
      <Section tone="mist" labelledBy="compare-title">
        <SectionHeading id="compare-title" eyebrow="Choosing the right route" title="Custom solution or subscription software?" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article data-reveal="left" className="hover-lift rounded-[var(--radius-xl)] border border-line bg-white p-8 hover:shadow-[var(--shadow-lift)] sm:p-10">
            <p className="text-sm font-semibold text-mint-ink">Custom development</p>
            <h3 className="mt-2 text-2xl font-semibold text-forest-900">Built around your processes</h3>
            <ul className="mt-6 space-y-3 text-muted">
              {["Scoped and designed with your team", "Matches your workflows, roles and data", "Integrates with your existing systems", "Owned and extended as your business changes"].map((t) => (
                <li key={t} className="flex gap-3"><ArrowMark tone="mono" className="mt-1.5 size-3 shrink-0 text-mint-ink" />{t}</li>
              ))}
            </ul>
            <div className="mt-8"><ButtonLink href="/contact" variant="dark">{site.cta.project}</ButtonLink></div>
          </article>
          <article data-reveal="right" className="hover-lift rounded-[var(--radius-xl)] bg-forest-900 p-8 text-white hover:shadow-[var(--shadow-glow)] sm:p-10">
            <p className="text-sm font-semibold text-mint-400">Subscription software</p>
            <h3 className="mt-2 text-2xl font-semibold">Ready to use, by subscription</h3>
            <ul className="mt-6 space-y-3 text-muted-dark">
              {["Cloud-based, accessed through the browser", "No servers to install or maintain", "Updates delivered as part of the service", "Available today: inventory management"].map((t) => (
                <li key={t} className="flex gap-3"><ArrowMark className="mt-1.5 size-3 shrink-0" />{t}</li>
              ))}
            </ul>
            <div className="mt-8"><ButtonLink href="/products">Browse products</ButtonLink></div>
          </article>
        </div>
      </Section>
      <CTABand title="Let's find the right fit for your operations." body="Tell us how your teams work today and where information gets lost. We'll suggest whether a custom solution or existing software makes more sense." />
    </>
  );
}
