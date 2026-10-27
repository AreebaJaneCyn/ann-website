import Image from "next/image";
import Link from "next/link";
import { CapabilityGrid, ProcessSteps, TextLink } from "@/components/Blocks";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { CapabilityMarquee, FloatingArrows } from "@/components/Illustrations";
import { InventoryMockup } from "@/components/InventoryMockup";
import { IconTile } from "@/lib/icons";
import { AwardBadge, PartnerSlider, TeamCard } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { WorkCard } from "@/components/WorkCard";
import { awards, partners, testimonials } from "@/content/social-proof";
import { team } from "@/content/team";
import { ArrowMark } from "@/components/ui/ArrowMark";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { inventoryFeatures, inventoryProduct } from "@/content/products";
import { deliveryProcess, homeFaqs } from "@/content/services";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Software Development, Dedicated Teams & SaaS",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} — Software Development, Dedicated Teams & SaaS` },
};

const capabilityList = ["Dedicated engineering teams", "Custom software", "Mobile apps", "CRM & ERP systems", "Cloud & SaaS products"];

const serviceCards = [
  {
    href: "/services/custom-software-development",
    title: "Custom software development",
    body: "Web applications, business software, SaaS products, APIs and workflow automation, built around your processes.",
    tags: ["Web apps", "SaaS", "APIs", "Automation"],
  },
  {
    href: "/services/mobile-app-development",
    title: "Mobile app development",
    body: "iOS, Android and cross-platform apps with Flutter and React Native, from prototype to app store and beyond.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
  },
  {
    href: "/solutions/crm",
    title: "CRM development",
    body: "Custom CRM systems for pipelines, customer records, communication workflows and reporting.",
    tags: ["Pipelines", "Customer data", "Reporting"],
  },
  {
    href: "/solutions/erp",
    title: "ERP development",
    body: "Custom ERP modules and integrations that connect operations, purchasing and business data.",
    tags: ["Operations", "Purchasing", "Integrations"],
  },
];

const reasons = [
  { title: "Flexible engagement models", body: "Add a single specialist, a dedicated team or a defined project. The model follows your needs, not ours." },
  { title: "The right technical expertise", body: "Frontend, backend, mobile, design and QA, matched to the work instead of whoever is available." },
  { title: "Collaborative delivery", body: "You see progress through regular demos and shared tools. Decisions are made with you, not handed to you." },
  { title: "Scalable engineering support", body: "Increase or reduce capacity as your roadmap changes, with terms agreed up front." },
  { title: "Long-term product support", body: "Launch is the start. We stay on for maintenance, improvements and the next phase of growth." },
];

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative isolate overflow-hidden bg-forest-900 text-white">
        <div aria-hidden className="bg-grid-dark absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
        <FloatingArrows count={7} />
        <div className="container-x grid items-center gap-14 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-32 lg:pt-24">
          <div className="animate-fade-up">
            <Eyebrow dark>Software engineering partner</Eyebrow>
            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[3.9rem]">
              Your technology partner.{" "}
              <span className="text-gradient-mint">From product development to scale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-dark sm:text-xl">
              Anovate System provides dedicated engineering talent, custom software, mobile applications and cloud business software,
              so you can build what&apos;s next without building every capability in-house.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" data-cta="hero-project">{site.cta.project}</ButtonLink>
              <ButtonLink href="#services" variant="secondary" size="lg">{site.cta.solutions}</ButtonLink>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70" aria-label="Capabilities">
              {capabilityList.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span aria-hidden className="size-1.5 rounded-full bg-mint-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-mint-400/10 blur-3xl" />
            <div className="animate-float relative aspect-square overflow-hidden rounded-[2rem] ring-1 ring-mint-400/20 shadow-[var(--shadow-glow)]">
              <Image
                src="/brand/anovate-symbol-crop.webp"
                alt="The Anovate System brand symbol: an oversized O-V-A monogram with the signature arrow above the V"
                fill
                priority
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="object-cover"
              />
            </div>
            <div className="animate-pop absolute -bottom-8 left-4 right-4 rounded-[var(--radius-lg)] border border-white/10 bg-forest-950/85 p-5 backdrop-blur-md [animation-delay:0.9s] sm:-left-8 sm:right-auto sm:w-72">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-400">Two ways to work with us</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <Link href="/services" className="group flex items-center justify-between gap-3 text-white hover:text-mint-300">
                    Build with our engineers <ArrowMark tone="mint" className="arrow-nudge size-3.5" />
                  </Link>
                </li>
                <li className="border-t border-white/10 pt-2.5">
                  <Link href="/products" className="group flex items-center justify-between gap-3 text-white hover:text-mint-300">
                    Subscribe to our software <ArrowMark tone="mint" className="arrow-nudge size-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div aria-hidden className="brand-streak bottom-0 animate-streak" />
      </section>

      <CapabilityMarquee />

      {/* 2 — Two paths: services vs subscriptions */}
      <Section tone="light" labelledBy="paths-title">
        <SectionHeading
          id="paths-title"
          eyebrow="What we do"
          title="Engineering services and ready-to-use software, under one roof."
          lede="Some clients need people and expertise to build something specific. Others need software they can start using. We offer both, and we keep them clearly separate."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-reveal className="group hover-lift relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] bg-forest-900 p-8 text-white hover:shadow-[var(--shadow-glow)] sm:p-10">
            <ArrowMark tone="mono" className="absolute -right-10 -top-10 size-56 text-mint-400/[0.07] transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2" />
            <IconTile title="Dedicated teams" dark size="lg" />
            <p className="mt-6 text-sm font-semibold text-mint-400">For businesses that need to build</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Services &amp; dedicated teams</h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-dark">
              Staff augmentation, custom software, mobile apps, and CRM and ERP development, delivered with your goals and your processes in mind.
            </p>
            <div className="mt-auto flex flex-wrap gap-4 pt-10">
              <ButtonLink href="/contact">{site.cta.consult}</ButtonLink>
              <ButtonLink href="/services" variant="ghost-light">See services</ButtonLink>
            </div>
          </article>
          <article data-reveal style={{ ["--reveal-delay" as string]: "90ms" }} className="group hover-lift relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-line bg-mist p-8 hover:shadow-[var(--shadow-lift)] sm:p-10">
            <ArrowMark tone="outline" className="absolute -right-8 -top-8 size-52 text-forest-900/[0.06] transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2" />
            <IconTile title="Cloud-based access" size="lg" />
            <p className="mt-6 text-sm font-semibold text-mint-ink">For businesses that need software now</p>
            <h3 className="mt-3 text-2xl font-semibold text-forest-900 sm:text-3xl">Subscription software</h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Cloud-based products you subscribe to and start using, beginning with {inventoryProduct.name}, our inventory management system.
            </p>
            <div className="mt-auto flex flex-wrap gap-4 pt-10">
              <ButtonLink href={`${inventoryProduct.href}#plans`} variant="dark">{site.cta.plans}</ButtonLink>
              <ButtonLink href="/products" variant="ghost-dark">All products</ButtonLink>
            </div>
          </article>
        </div>
      </Section>

      {/* Partners & clients slider */}
      <section aria-labelledby="partners-title" className="on-light border-y border-line bg-paper py-14">
        <div className="container-x">
          <p id="partners-title" className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Trusted by teams and partners
          </p>
        </div>
        <div className="mt-8"><PartnerSlider partners={partners} /></div>
        {partners.some((p) => p.placeholder) && (
          <p className="mt-6 text-center text-xs text-muted">Placeholder logos. Client and partner logos will appear here with permission.</p>
        )}
      </section>

      {/* 3 — Services overview */}
      <Section tone="mist" id="services" labelledBy="services-title">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Capabilities that cover the full product lifecycle."
            lede="From adding a single developer to delivering a complete platform, each service is designed to plug into how your business already works."
          />
          <div data-reveal><TextLink href="/services">All services</TextLink></div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Staff augmentation: featured, on brand artwork */}
          <Link
            href="/services/staff-augmentation"
            data-reveal
            className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[var(--radius-xl)] bg-forest-900 p-8 text-white sm:p-10 lg:col-span-5"
          >
            <Image src="/brand/anovate-symbol-crop-900.webp" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="-z-20 object-cover object-[50%_20%] opacity-90 transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/85 via-45% to-forest-950/0" />
            <IconTile title="Staff augmentation" dark size="lg" />
            <p className="mt-5 text-sm font-semibold text-mint-400">Staff augmentation</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Dedicated developers and extended teams</h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/75">
              Frontend, backend, full-stack and mobile developers, UI/UX designers and QA engineers who work inside your team, your tools and your time zone overlap.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-mint-400">
              Explore staff augmentation <ArrowMark tone="mint" className="arrow-nudge size-3.5" />
            </span>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {serviceCards.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i + 1) * 70}ms` }}
              className="group hover-lift flex flex-col rounded-[var(--radius-xl)] border border-line bg-white p-7 shadow-[var(--shadow-card)] hover:border-mint-ink/30 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-start justify-between gap-4">
                <IconTile title={s.title.charAt(0).toUpperCase() + s.title.slice(1)} />
                <ArrowMark tone="mono" className="arrow-nudge mt-1 size-4 shrink-0 text-mint-ink" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-forest-900">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">{t}</li>
                ))}
              </ul>
            </Link>
          ))}
          </div>
        </div>
      </Section>

      {/* 4 — Featured subscription product */}
      <Section tone="deep" labelledBy="product-title">
        <FloatingArrows count={5} />
        <div aria-hidden className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-mint-400/10 blur-[120px]" />
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              dark
              id="product-title"
              eyebrow="Featured product"
              title={<>Inventory management, <span className="text-gradient-mint">in the cloud.</span></>}
              lede={`${inventoryProduct.name} helps product-based businesses keep track of products, stock levels, purchases and sales in one place, without installing or maintaining servers.`}
            />
            <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {inventoryFeatures.slice(0, 6).map((f) => (
                <li key={f.title} className="flex items-start gap-3 text-[0.9375rem] text-white/85">
                  <ArrowMark className="mt-1 size-3 shrink-0" />
                  {f.title}
                </li>
              ))}
            </ul>
            <p data-reveal className="mt-6 text-sm text-muted-dark">For retail, wholesale, distribution, warehousing, manufacturing, ecommerce, pharmacies and other product businesses.</p>
            <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={inventoryProduct.href} size="lg">{site.cta.inventory}</ButtonLink>
              <ButtonLink href={`${inventoryProduct.href}#plans`} variant="secondary" size="lg">{site.cta.plans}</ButtonLink>
            </div>
          </div>
          <InventoryMockup className="animate-float [animation-duration:9s]" />
        </div>
      </Section>

      {/* 5 — Why Anovate */}
      <Section tone="light" labelledBy="why-title">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="why-title"
              eyebrow="Why Anovate System"
              title="A partner that adapts to how you build."
              lede="Good software comes from clear communication, the right people and a long-term view. That's how we approach every engagement."
            />
            <div data-reveal className="mt-8"><ButtonLink href="/about" variant="outline-dark">About us</ButtonLink></div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {reasons.map((r, i) => (
              <li key={r.title} data-reveal="right" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="group grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <IconTile title={r.title} size="sm" />
                <div>
                  <h3 className="flex items-center gap-3 text-xl font-semibold text-forest-900">
                    {r.title}
                    <ArrowMark tone="mono" className="arrow-nudge size-3 text-mint-ink opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 6 — How we work */}
      <Section tone="mist" grid labelledBy="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          title="A delivery process you can see into."
          lede="Six stages, each with clear outputs. You always know what has been done, what's next and what decisions need your input."
          align="center"
        />
        <div className="mt-16"><ProcessSteps steps={deliveryProcess} /></div>
      </Section>

      {/* 7 — Industries */}
      <Section tone="dark" labelledBy="industries-title">
        <FloatingArrows count={4} />
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            dark
            id="industries-title"
            eyebrow="Industries"
            title="Software for the way your sector works."
            lede="Our services apply across industries that run on processes, data and customer relationships. These are some of the sectors we can support."
          />
          <div data-reveal><TextLink href="/industries" dark>Explore industries</TextLink></div>
        </div>
        <div className="mt-14">
          <CapabilityGrid
            dark
            columns={4}
            items={industries.map((i) => ({ title: i.title, body: i.body }))}
            tail={
              <div className="flex h-full flex-col">
                <p className="text-lg font-semibold text-white">Don&apos;t see your sector?</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-dark">Tell us how your business works and we&apos;ll be straightforward about how we can help.</p>
                <div className="mt-auto pt-6"><TextLink href="/contact" dark>Talk to us</TextLink></div>
              </div>
            }
          />
        </div>
      </Section>

      {/* 8 — Work */}
      <Section tone="light" labelledBy="work-title">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="work-title"
            eyebrow="Work"
            title="The kind of products we build."
            lede="The examples below are sample concepts that illustrate typical engagements. Verified client case studies will be published here with permission."
          />
          <div data-reveal><TextLink href="/work">View work</TextLink></div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => <WorkCard key={w.slug} item={w} />)}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="mist" labelledBy="testimonials-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading
            id="testimonials-title"
            eyebrow="Testimonials"
            title="What our clients say"
            lede="Feedback from the founders, technology leaders and operations teams we work with."
          />
          <div data-reveal><Testimonials items={testimonials} /></div>
        </div>
      </Section>

      {/* Awards & recognition */}
      <Section tone="deep" labelledBy="awards-title">
        <FloatingArrows count={4} />
        <SectionHeading dark align="center" id="awards-title" eyebrow="Recognition" title="Awards & recognition" lede="Independent platforms where our work and client reviews are recognised." />
        <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((aw, i) => <AwardBadge key={aw.platform} award={aw} i={i} />)}
        </ul>
      </Section>

      {/* Team preview */}
      <Section tone="light" labelledBy="team-title">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="team-title" eyebrow="Our people" title="Meet our team" lede="The engineers, designers and delivery leads behind your product." />
          <div data-reveal><TextLink href="/about#team">Meet the full team</TextLink></div>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.slice(0, 4).map((m, i) => <TeamCard key={m.name} m={m} i={i} />)}
        </ul>
        {team.some((m) => m.placeholder) && <p className="mt-6 text-xs text-muted">Placeholder profiles. Team photos and names will be updated.</p>}
      </Section>

      {/* 9 — FAQ */}
      <FAQ faqs={homeFaqs} tone="mist" lede="Answers to common questions about working with us and our software." />

      {/* 10 — Final CTA */}
      <CTABand
        title={<>Ready to move your <span className="text-gradient-mint">product forward?</span></>}
        body="Tell us what you're building, the team you need or the problem you want to solve. We'll respond with a practical next step."
      />
    </>
  );
}
