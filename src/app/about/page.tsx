import Image from "next/image";
import { CapabilityGrid } from "@/components/Blocks";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Anovate Systems",
  description:
    "Anovate Systems is a software engineering and technology solutions company providing dedicated development teams, custom software, mobile apps and cloud business software.",
  path: "/about",
});

const principles = [
  { title: "Useful over impressive", body: "We build software that solves a real business problem and gets used, rather than features that only look good in a demo." },
  { title: "Clear communication", body: "Plain language, honest estimates and visible progress. If something changes, you hear about it early." },
  { title: "Ownership and care", body: "We treat the products we work on as if they were our own, with attention to quality, security and maintainability." },
  { title: "Long-term partnership", body: "We aim to be the team you call for the next phase as well, not just the current project." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We build technology"
        highlight="that moves businesses forward."
        lede="Anovate Systems is a technology company focused on software engineering, product development, staff augmentation, business systems and cloud-based software."
        crumbs={[{ name: "About", path: "/about" }]}
      />
      <Section tone="light" labelledBy="mission-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="mission-title" eyebrow="Our mission" title="To be a reliable technology partner for businesses at every stage." />
            <div data-reveal className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                We work with startups, small and medium-sized businesses, established companies and agencies that need dependable engineering capability, whether that means a few additional developers, a complete product, or software they can subscribe to and use straight away.
              </p>
              <p>
                Our work spans dedicated development teams, custom software and SaaS development, mobile applications, CRM and ERP systems, and our own cloud products, starting with Anovate Inventory.
              </p>
              <p>
                We work with businesses in the United States, the UAE and Pakistan, and we&apos;re set up for collaboration across time zones.
              </p>
            </div>
          </div>
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] bg-forest-900">
            <Image src="/brand/anovate-symbol-bg.webp" alt="Anovate Systems brand symbol" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-[55%_45%]" />
          </div>
        </div>
      </Section>
      <Section tone="mist" labelledBy="principles-title">
        <SectionHeading id="principles-title" eyebrow="How we work" title="The principles behind our work" />
        <div className="mt-12"><CapabilityGrid items={principles} columns={4} /></div>
      </Section>
      <Section tone="dark" labelledBy="name-title">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading dark align="center" id="name-title" eyebrow="Our identity" title="The arrow above the V" lede="The arrow in our logo stands for forward movement: the progress our clients make when technology works for them. You'll see it throughout our work as a reminder of what we're here to do." />
          <div data-reveal className="mt-10"><ButtonLink href="/contact">{site.cta.project}</ButtonLink></div>
        </div>
      </Section>
      <CTABand title="Let's build something useful together." body="Tell us about your goals. We'll help you find the right next step." />
    </>
  );
}
