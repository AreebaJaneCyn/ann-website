import { CapabilityGrid } from "@/components/Blocks";
import { CTABand } from "@/components/CTABand";
import { CapabilityStack } from "@/components/Illustrations";
import { PageHero } from "@/components/PageHero";
import { ServiceRows } from "@/components/ServiceRows";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description:
    "Staff augmentation, custom software development, mobile app development, and CRM and ERP development services from Anovate System.",
  path: "/services",
});

const serviceOrder = ["staff-augmentation", "custom-software-development", "mobile-app-development"];
const solutionOrder = ["crm", "erp"];

export default function ServicesPage() {
  const pick = (slugs: string[]) => slugs.map((s) => services.find((x) => x.slug === s)!);
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services for"
        highlight="every stage of your product."
        lede="Whether you need extra hands on an existing team or a partner to deliver a complete system, our services are built to fit around your business."
        crumbs={[{ name: "Services", path: "/services" }]}
        aside={<CapabilityStack />}
        actions={<ButtonLink href="/contact" size="lg">{site.cta.project}</ButtonLink>}
      />
      <Section tone="light" labelledBy="list-title">
        <SectionHeading id="list-title" eyebrow="Services" title="Engineering services" lede="People and delivery capacity to design, build and support your software." />
        <div className="mt-10"><ServiceRows items={pick(serviceOrder)} /></div>
      </Section>
      <Section tone="mist" id="solutions" labelledBy="solutions-title">
        <SectionHeading
          id="solutions-title"
          eyebrow="Solutions"
          title="Business systems solutions"
          lede="Custom CRM and ERP development, built around your processes. These are development engagements, not off-the-shelf products; for ready-to-use software, see our subscription products."
        />
        <div className="mt-10"><ServiceRows items={pick(solutionOrder)} /></div>
      </Section>
      <Section tone="light" labelledBy="models-title">
        <SectionHeading
          id="models-title"
          eyebrow="Engagement models"
          title="Three ways to engage."
          lede="Choose the model that fits the work. Many clients start with one and move to another as their needs evolve."
        />
        <div className="mt-12">
          <CapabilityGrid
            items={[
              { title: "Staff augmentation", body: "Specialists or a dedicated team who join your workflow and work under your direction." },
              { title: "Project delivery", body: "We take responsibility for delivering an agreed scope, with milestones, demos and a clear plan." },
              { title: "Ongoing development", body: "Continuous maintenance, improvements and new features for products already in use." },
            ]}
          />
        </div>
      </Section>
      <CTABand title="Not sure which service fits?" body="Describe what you're trying to achieve. We'll recommend the most practical way to get there, even if it's a smaller first step." />
    </>
  );
}
