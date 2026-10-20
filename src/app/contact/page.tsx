import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata = pageMetadata({
  title: "Contact Us — Discuss Your Project",
  description: "Tell Anovate System about your project, team needs or software requirements. Staff augmentation, custom software, mobile apps, CRM, ERP and inventory software.",
  path: "/contact",
});

const steps = [
  "We review your inquiry and the details you shared.",
  "We reply by email to arrange a conversation, or with any questions.",
  "We discuss your goals and suggest a practical next step.",
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest = "" } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        highlight="what you're building."
        lede="Tell us about your project, the team you need or the problem you want to solve. The more context you share, the more useful our first conversation will be."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <Section tone="light" labelledBy="form-title">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[var(--radius-xl)] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
            <h2 id="form-title" className="text-2xl font-semibold text-forest-900">Project inquiry</h2>
            <p className="mt-2 text-muted">Fields marked optional can be left blank.</p>
            <div className="mt-8"><InquiryForm defaultInterest={interest} /></div>
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-forest-900">What happens next</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-forest-900 font-display text-xs font-semibold text-mint-400">{i + 1}</span>
                    <span className="leading-relaxed text-muted">{s}</span>
                  </li>
                ))}
              </ol>
              {site.contact.responseTime && <p className="mt-5 text-sm font-medium text-forest-800">We usually respond {site.contact.responseTime}.</p>}
            </div>
            <div className="rounded-[var(--radius-lg)] bg-forest-900 p-7 text-white">
              <p className="font-semibold">Looking for inventory software?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-dark">See features and plans, and book a live demo from the product page.</p>
              <Link href="/products/inventory-management#book-demo" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint-400">
                Book an inventory demo <ArrowMark className="arrow-nudge size-3" />
              </Link>
            </div>
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="group hover-lift flex items-center gap-4 rounded-[var(--radius-lg)] border border-line p-5 hover:shadow-[var(--shadow-lift)]">
                <span className="icon-tile grid size-11 place-items-center rounded-xl bg-forest-900 text-mint-400"><Mail className="size-5 transition-transform duration-500" strokeWidth={1.75} /></span>
                <span>
                  <span className="block text-sm font-semibold text-forest-900">Email us directly</span>
                  <span className="text-mint-ink underline-offset-2 group-hover:underline">{site.contact.email}</span>
                </span>
              </a>
            )}
            {(site.contact.phone || site.contact.offices.length > 0) && (
              <div>
                <h2 className="text-lg font-semibold text-forest-900">Contact details</h2>
                <dl className="mt-4 space-y-3 text-muted">
                  {site.contact.phone && (<div><dt className="text-sm font-semibold text-forest-900">Phone</dt><dd>{site.contact.phone}</dd></div>)}
                  {site.contact.offices.map((o) => (<div key={o.label}><dt className="text-sm font-semibold text-forest-900">{o.label}</dt><dd>{o.address}</dd></div>))}
                </dl>
              </div>
            )}
            <p className="text-sm leading-relaxed text-muted">We work with businesses in the United States, the UAE and Pakistan, and collaborate remotely across time zones.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
