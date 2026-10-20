import Image from "next/image";
import Link from "next/link";
import type { ServicePage } from "@/content/services";
import { serviceBySlug } from "@/content/services";
import { site } from "@/content/site";
import { serviceLd } from "@/lib/seo";
import { CapabilityGrid, ProcessSteps } from "./Blocks";
import { CTABand } from "./CTABand";
import { FAQ } from "./FAQ";
import { PageHero } from "./PageHero";
import { ArrowMark } from "./ui/ArrowMark";
import { ButtonLink } from "./ui/Button";
import { JsonLd } from "./ui/JsonLd";
import { Section, SectionHeading } from "./ui/Section";

type Props = { page: ServicePage; parent: { name: string; path: string } };

export function ServiceTemplate({ page, parent }: Props) {
  const contactHref = `/contact?interest=${page.cta.interest}`;
  const related = page.related.map(serviceBySlug).filter(Boolean) as ServicePage[];

  return (
    <>
      <JsonLd data={serviceLd(page.label, page.meta.description, page.path)} />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        highlight={page.hero.highlight}
        lede={page.hero.lede}
        crumbs={[parent, { name: page.label, path: page.path }]}
        actions={
          <>
            <ButtonLink href={contactHref} size="lg">{page.slug === "staff-augmentation" ? site.cta.consult : site.cta.project}</ButtonLink>
            <ButtonLink href="#capabilities" variant="secondary" size="lg">What&apos;s included</ButtonLink>
          </>
        }
      />

      {/* Intro + problems */}
      <Section tone="light" labelledBy="intro-title">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <SectionHeading id="intro-title" eyebrow="Overview" title={page.intro.title} lede={page.intro.body} />
          {page.problems && (
            <ul className="grid gap-5 sm:grid-cols-2">
              {page.problems.map((p, i) => (
                <li key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="rounded-[var(--radius-lg)] border border-line bg-mist p-6">
                  <h3 className="font-sans text-base font-semibold text-forest-900">{p.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      {/* Capabilities / roles */}
      <Section tone="mist" id="capabilities" labelledBy="cap-title">
        <SectionHeading id="cap-title" eyebrow={page.slug === "staff-augmentation" ? "Available roles" : "Capabilities"} title={page.capabilities.title} lede={page.capabilities.lede} />
        <div className="mt-12">
          <CapabilityGrid items={page.capabilities.items} columns={page.capabilities.items.length % 4 === 0 ? 4 : 3} />
        </div>
        {page.stack && (
          <div data-reveal className="mt-12 grid gap-6 rounded-[var(--radius-lg)] border border-line bg-white p-7 sm:grid-cols-3">
            {page.stack.map((g) => (
              <div key={g.group}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">{g.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-sm font-medium text-forest-900">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Engagement models (staff augmentation) on brand artwork */}
      {page.models && (
        <section aria-labelledby="models-title" className="relative isolate overflow-hidden bg-forest-900 text-white">
          <Image src="/brand/anovate-symbol-bg.webp" alt="" fill sizes="100vw" className="-z-20 object-cover object-[80%_50%] opacity-35" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-900 via-forest-900/90 to-forest-900/60" />
          <div className="container-x py-20 sm:py-24 lg:py-28">
            <SectionHeading dark id="models-title" eyebrow="Engagement models" title="Choose how you want to work with us." lede="Every model can change as your needs do. Start small, scale up, or move between models over time." />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {page.models.map((m, i) => (
                <article key={m.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="group rounded-[var(--radius-lg)] border border-white/10 bg-forest-950/60 p-7 backdrop-blur-sm transition-colors hover:border-mint-400/40">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{m.title}</h3>
                    <ArrowMark className="arrow-nudge size-4" />
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-dark">{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {page.process && (
        <Section tone={page.models ? "light" : "dark"} labelledBy="process-title" grid>
          <SectionHeading
            id="process-title"
            dark={!page.models}
            eyebrow={page.models ? "Onboarding & collaboration" : "How we work"}
            title={page.models ? "From first conversation to a productive team member." : "A clear process from idea to production."}
          />
          <div className="mt-14"><ProcessSteps steps={page.process} dark={!page.models} /></div>
        </Section>
      )}

      {page.note && (
        <Section tone={page.models ? "mist" : "light"} labelledBy="note-title">
          <div data-reveal className="relative overflow-hidden rounded-[var(--radius-xl)] border border-line bg-white p-8 sm:p-12">
            <ArrowMark tone="outline" className="absolute -bottom-10 -right-6 size-48 text-forest-900/[0.06]" />
            <div className="max-w-3xl">
              <h2 id="note-title" className="text-2xl font-semibold text-forest-900 sm:text-3xl">{page.note.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{page.note.body}</p>
              {(page.slug === "crm" || page.slug === "erp") && (
                <p className="mt-6">
                  <Link href="/products/inventory-management" className="font-semibold text-mint-ink underline underline-offset-4">
                    Looking for subscription software? See Anovate Inventory
                  </Link>
                </p>
              )}
            </div>
          </div>
        </Section>
      )}

      <FAQ faqs={page.faqs} tone={page.note && !page.models ? "mist" : "light"} />

      {related.length > 0 && (
        <Section tone="mist" labelledBy="related-title" className="border-t border-line">
          <h2 id="related-title" className="text-2xl font-semibold text-forest-900">Related services</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={r.path} className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
                  <span className="flex items-center justify-between font-display text-lg font-semibold text-forest-900">
                    {r.label}
                    <ArrowMark tone="mono" className="arrow-nudge size-3.5 text-mint-ink" />
                  </span>
                  <span className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{r.hero.lede}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CTABand
        eyebrow="Start a conversation"
        title={page.cta.title}
        body={page.cta.body}
        primary={{ label: page.slug === "staff-augmentation" ? site.cta.consult : site.cta.project, href: contactHref }}
        secondary={{ label: "See all services", href: "/services" }}
      />
    </>
  );
}
