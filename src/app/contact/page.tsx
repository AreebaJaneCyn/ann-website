import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Contact Us — Discuss Your Project",
  description: "Tell Anovate Systems about your project, team needs or software requirements. Staff augmentation, custom software, mobile apps, CRM, ERP and inventory software.",
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
              <p className="mt-2 text-sm leading-relaxed text-muted-dark">See features and plans, and request access directly from the product page.</p>
              <Link href="/products/inventory-management#get-started" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint-400">
                Go to Anovate Inventory <ArrowMark className="arrow-nudge size-3" />
              </Link>
            </div>
            {(site.contact.email || site.contact.phone || site.contact.offices.length > 0) && (
              <div>
                <h2 className="text-lg font-semibold text-forest-900">Contact details</h2>
                <dl className="mt-4 space-y-3 text-muted">
                  {site.contact.email && (<div><dt className="text-sm font-semibold text-forest-900">Email</dt><dd><a className="text-mint-ink underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd></div>)}
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
