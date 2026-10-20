import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SaaS Products — Cloud Business Software",
  description: "Subscription-based, cloud software from Anovate Systems, including Anovate Inventory for product-based businesses.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Cloud software you can"
        highlight="subscribe to and start using."
        lede="Our growing portfolio of subscription-based software, built for businesses that want dependable tools without managing servers or custom builds."
        crumbs={[{ name: "Products", path: "/products" }]}
        actions={<ButtonLink href="/products/inventory-management" size="lg">{site.cta.inventory}</ButtonLink>}
      />
      <Section tone="light" labelledBy="dir-title">
        <SectionHeading id="dir-title" eyebrow="Product directory" title="Available products" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <li key={p.slug} data-reveal>
              <Link href={p.href} className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] bg-forest-900 p-8 text-white transition-shadow hover:shadow-[var(--shadow-glow)] sm:p-10">
                <ArrowMark tone="mono" className="absolute -right-8 -top-8 size-48 text-mint-400/[0.08] transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2" />
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mint-400/15 px-3 py-1 text-xs font-semibold text-mint-300">
                  <span className="size-1.5 rounded-full bg-mint-400" /> Available
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-mint-400">{p.category}</p>
                <p className="mt-4 leading-relaxed text-muted-dark">{p.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-mint-400">
                  View product &amp; plans <ArrowMark className="arrow-nudge size-3.5" />
                </span>
              </Link>
            </li>
          ))}
          <li data-reveal className="flex flex-col justify-center rounded-[var(--radius-xl)] border border-dashed border-forest-900/20 bg-mist p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-forest-900">More products in development</h3>
            <p className="mt-3 leading-relaxed text-muted">
              We&apos;re expanding our SaaS portfolio. New products will be listed here with their own pages, plans and FAQs as they become available.
            </p>
            <div className="mt-6"><ButtonLink href="/contact?interest=saas" variant="outline-dark">Tell us what you need</ButtonLink></div>
          </li>
        </ul>
      </Section>
      <Section tone="mist" labelledBy="custom-title">
        <div data-reveal className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="custom-title" className="text-2xl font-semibold text-forest-900 sm:text-3xl">Need software that doesn&apos;t exist off the shelf?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Our subscription products are ready-made. If your business needs something tailored, such as a CRM, ERP module or your own SaaS product, that&apos;s a custom development engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/services/custom-software-development" variant="dark">Custom software</ButtonLink>
            <ButtonLink href="/solutions" variant="outline-dark">CRM &amp; ERP</ButtonLink>
          </div>
        </div>
      </Section>
      <CTABand title="Questions about our products?" body="Tell us about your business and how you work today. We'll help you understand whether our software is the right fit." primary={{ label: "Contact us", href: "/contact?interest=saas" }} />
    </>
  );
}
