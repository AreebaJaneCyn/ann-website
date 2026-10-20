import { CapabilityGrid, ProcessSteps } from "@/components/Blocks";
import { FAQ } from "@/components/FAQ";
import { InquiryForm } from "@/components/InquiryForm";
import { InventoryMockup } from "@/components/InventoryMockup";
import { PageHero } from "@/components/PageHero";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Pending } from "@/components/ui/Placeholder";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { inventoryAudiences, inventoryFeatures, inventoryProduct as product, inventorySteps } from "@/content/products";
import { site } from "@/content/site";
import { productCta } from "@/lib/product-cta";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cloud Inventory Management Software",
  description:
    "Anovate Inventory is cloud-based inventory management software for retail, wholesale, distribution, warehouses, manufacturing, ecommerce and pharmacies. Track products, stock, purchases and sales by subscription.",
  path: product.href,
});

const workflows = [
  { title: "Purchasing", body: "Stock comes in and is recorded against what you bought." },
  { title: "Stock on hand", body: "Quantities stay current as goods arrive and leave." },
  { title: "Sales", body: "Outgoing stock is recorded as you sell." },
  { title: "Reporting", body: "Movements and levels feed reports for planning." },
];

const faqs = [
  { q: "What is Anovate Inventory?", a: "A cloud-based inventory management system, offered by subscription, that helps product-based businesses manage products, stock levels, purchase records, sales records and inventory reporting." },
  { q: "Who is it designed for?", a: "Businesses that buy, hold and sell physical products, including retailers, wholesalers, distributors, warehouses, manufacturers, ecommerce sellers and pharmacies." },
  { q: "Do I need to install anything?", a: "No. Anovate Inventory is cloud-based and runs in a web browser, so there are no servers to install or maintain." },
  { q: "How much does it cost?", a: "Subscription plans and billing terms are listed in the plans section on this page. Request access and we'll share current plan details for your business." },
  { q: "Can I move my existing stock data into the system?", a: "Tell us how you manage stock today when you request access, and we'll explain the options for getting your products and opening stock into the system." },
  { q: "Is this the same as your custom ERP development?", a: "No. Anovate Inventory is a ready-to-use subscription product. ERP and CRM solutions are custom development services built for each client." },
];

export default function InventoryPage() {
  const cta = productCta(product);
  const ctaProps = cta.external ? { target: "_blank", rel: "noopener" } : {};

  const productLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    description: product.summary,
    url: absoluteUrl(product.href),
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={productLd} />
      <PageHero
        eyebrow={`${product.name} · Cloud inventory software`}
        title="Know exactly what's in stock,"
        highlight="wherever your business runs."
        lede="Cloud-based inventory management for product-based businesses. Track products, stock levels, purchases and sales in one place, and see how stock moves over time."
        crumbs={[{ name: "Products", path: "/products" }, { name: "Inventory Management", path: product.href }]}
        actions={
          <>
            <ButtonLink href={cta.href} size="lg" data-cta="inventory-hero" {...ctaProps}>{cta.label}</ButtonLink>
            <ButtonLink href="#plans" variant="secondary" size="lg">{site.cta.plans}</ButtonLink>
          </>
        }
        aside={<div className="lg:pl-4"><InventoryMockup /></div>}
      />

      {/* Value strip */}
      <Section tone="light" labelledBy="value-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <SectionHeading
            id="value-title"
            eyebrow="Why it matters"
            title="Stock is money sitting on a shelf."
            lede="When stock records live in spreadsheets, notebooks or memory, businesses over-order, run out of best-sellers and lose time reconciling numbers. Anovate Inventory gives your team one shared, up-to-date record."
          />
          <ul data-reveal className="grid gap-4 sm:grid-cols-3">
            {["One record for products and stock", "Purchases and sales kept in step", "Access from any browser"].map((t) => (
              <li key={t} className="rounded-[var(--radius-lg)] border border-line bg-mist p-5">
                <ArrowMark tone="mono" className="size-4 text-mint-ink" />
                <p className="mt-3 font-semibold leading-snug text-forest-900">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Features */}
      <Section tone="mist" id="features" labelledBy="features-title">
        <SectionHeading id="features-title" eyebrow="Features" title="Everything you need to keep stock under control." />
        <div className="mt-12"><CapabilityGrid items={inventoryFeatures} columns={4} /></div>
      </Section>

      {/* Workflows + how it works */}
      <Section tone="dark" grid labelledBy="how-title">
        <SectionHeading dark id="how-title" eyebrow="How it works" title="Simple daily routines, a reliable stock picture." />
        <div className="mt-14"><ProcessSteps steps={inventorySteps} dark /></div>
        <div data-reveal className="mt-16 rounded-[var(--radius-xl)] border border-white/10 bg-forest-950/50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-400">Supported workflow</p>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {workflows.map((w, i) => (
              <li key={w.title} className="relative rounded-[var(--radius-md)] bg-white/[0.04] p-5">
                <p className="font-display font-semibold text-white">{w.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-dark">{w.body}</p>
                {i < workflows.length - 1 && (
                  <ArrowMark className="absolute -right-3.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 rotate-45 md:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Audiences */}
      <Section tone="light" labelledBy="for-title">
        <SectionHeading id="for-title" eyebrow="Who it's for" title="Built for businesses that move physical products." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inventoryAudiences.map((a, i) => (
            <li key={a.title} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }} className="rounded-[var(--radius-lg)] border border-line p-6 transition-colors hover:border-mint-ink/40">
              <h3 className="font-sans text-base font-semibold text-forest-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Plans */}
      <Section tone="mist" id="plans" labelledBy="plans-title">
        <SectionHeading
          id="plans-title"
          eyebrow="Subscription plans"
          title="Plans that grow with your business."
          lede="Choose the plan that fits the size of your operation today and change as you grow."
          align="center"
        />
        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {product.plans.map((p, i) => (
            <li
              key={p.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className={`relative flex flex-col rounded-[var(--radius-xl)] p-8 ${
                p.highlighted ? "bg-forest-900 text-white shadow-[var(--shadow-glow)]" : "border border-line bg-white shadow-[var(--shadow-card)]"
              }`}
            >
              {p.highlighted && <ArrowMark className="absolute right-6 top-6 size-6" />}
              <h3 className={`text-xl font-semibold ${p.highlighted ? "text-white" : "text-forest-900"}`}>
                {p.name ?? <Pending dark={p.highlighted}>Plan name to be confirmed</Pending>}
              </h3>
              <p className={`mt-3 text-[0.9375rem] leading-relaxed ${p.highlighted ? "text-muted-dark" : "text-muted"}`}>{p.audience}</p>
              <div className="mt-8">
                {p.price ? (
                  <p className="font-display text-4xl font-semibold">{p.price}</p>
                ) : (
                  <Pending dark={p.highlighted}>Price to be confirmed</Pending>
                )}
                <p className={`mt-2 text-sm ${p.highlighted ? "text-muted-dark" : "text-muted"}`}>
                  {p.billing ?? "Billing terms to be confirmed"}
                </p>
              </div>
              <div className={`mt-8 border-t pt-6 ${p.highlighted ? "border-white/10" : "border-line"}`}>
                {p.includes.length ? (
                  <ul className="space-y-3 text-[0.9375rem]">
                    {p.includes.map((x) => (
                      <li key={x} className="flex gap-3"><ArrowMark tone={p.highlighted ? "mint" : "mono"} className="mt-1.5 size-3 shrink-0 text-mint-ink" />{x}</li>
                    ))}
                  </ul>
                ) : (
                  <Pending dark={p.highlighted}>Plan inclusions to be confirmed</Pending>
                )}
              </div>
              <div className="mt-auto pt-8">
                <ButtonLink href={cta.href} variant={p.highlighted ? "primary" : "dark"} className="w-full" data-plan={p.id} {...ctaProps}>
                  {cta.label}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
        <div data-reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-sm text-muted">
          <span className="inline-flex items-center gap-2">Free trial: {product.trial ?? <Pending />}</span>
          <span className="inline-flex items-center gap-2">Live demo: {product.demoUrl ? <a className="font-semibold text-mint-ink underline" href={product.demoUrl}>Open demo</a> : <Pending />}</span>
          <span className="inline-flex items-center gap-2">Integrations: {product.integrations.length ? product.integrations.join(", ") : <Pending />}</span>
        </div>
      </Section>

      <FAQ faqs={faqs} tone="light" title="Inventory software FAQs" />

      {/* Get started */}
      <section id="get-started" aria-labelledby="start-title" className="relative isolate overflow-hidden bg-forest-900 text-white">
        <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10 opacity-70" />
        <div aria-hidden className="brand-streak top-0" />
        <div className="container-x grid gap-14 py-20 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:py-28">
          <div>
            <Eyebrow dark>Get started</Eyebrow>
            <h2 id="start-title" className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Get your stock <span className="text-gradient-mint">under control.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-dark">
              Tell us a little about your business. We&apos;ll share plan details and help you get set up with {product.name}.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              {["Cloud-based, nothing to install", "Plans for different business sizes", "Guidance on getting started"].map((t) => (
                <li key={t} className="flex items-start gap-3"><ArrowMark className="mt-1.5 size-3 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-white/10 bg-forest-950/60 p-6 backdrop-blur-sm sm:p-9">
            {product.signupUrl ? (
              <div>
                <p className="text-xl font-semibold">Ready to subscribe?</p>
                <p className="mt-2 text-muted-dark">Create your account and choose a plan.</p>
                <div className="mt-6"><ButtonLink href={product.signupUrl} target="_blank" rel="noopener" size="lg">Start subscription</ButtonLink></div>
                <hr className="my-8 border-white/10" />
                <p className="mb-6 text-sm text-muted-dark">Have questions first? Send us a message.</p>
                <InquiryForm kind="product" dark />
              </div>
            ) : (
              <InquiryForm kind="product" dark />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
