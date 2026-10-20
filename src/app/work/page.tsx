import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { WorkCard } from "@/components/WorkCard";
import { Section } from "@/components/ui/Section";
import { work } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work & Case Studies",
  description: "Examples of the web, mobile, CRM and business system products Anovate System builds.",
  path: "/work",
});

export default function WorkPage() {
  const hasCaseStudies = work.some((w) => w.kind === "case-study");
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Products we design,"
        highlight="build and support."
        lede="A look at the kinds of software we build for clients, from mobile apps to sales and operations systems."
        crumbs={[{ name: "Work", path: "/work" }]}
      />
      <Section tone="light" labelledBy="work-title">
        <h2 id="work-title" className="sr-only">Portfolio</h2>
        {!hasCaseStudies && (
          <p data-reveal className="mb-10 max-w-3xl rounded-[var(--radius-md)] border border-dashed border-forest-700/30 bg-mist p-5 text-[0.9375rem] leading-relaxed text-ink-soft">
            <strong className="text-forest-900">About these examples:</strong> the projects below are sample concepts that illustrate typical engagements. They are not client projects. Verified case studies will be published here with our clients&apos; permission.
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => <WorkCard key={w.slug} item={w} />)}
        </div>
      </Section>
      <CTABand title="Your product could be next." body="Tell us what you want to build, and we'll show you how we'd approach it." />
    </>
  );
}
