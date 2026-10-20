import type { FAQ as FAQItem } from "@/content/services";
import { faqLd } from "@/lib/seo";
import { JsonLd } from "./ui/JsonLd";
import { Section, SectionHeading, type Tone, isDark } from "./ui/Section";

type Props = { faqs: FAQItem[]; title?: string; eyebrow?: string; tone?: Tone; lede?: string };

export function FAQ({ faqs, title = "Frequently asked questions", eyebrow = "FAQ", tone = "light", lede }: Props) {
  const dark = isDark(tone);
  return (
    <Section tone={tone} labelledBy="faq-title" id="faq">
      <JsonLd data={faqLd(faqs)} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} dark={dark} id="faq-title" />
        <div data-reveal className={`divide-y border-y ${dark ? "divide-line-dark border-line-dark" : "divide-line border-line"}`}>
          {faqs.map((f) => (
            <details key={f.q} className="group py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5">
                <h3 className={`font-sans text-lg font-semibold leading-snug tracking-tight ${dark ? "text-white" : "text-forest-900"}`}>{f.q}</h3>
                <span
                  aria-hidden
                  className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-open:rotate-45 ${
                    dark ? "border-white/20 text-mint-400" : "border-line text-forest-800"
                  }`}
                >
                  <svg viewBox="0 0 12 12" className="size-3"><path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
              </summary>
              <p className={`-mt-1 max-w-2xl pb-6 leading-relaxed ${dark ? "text-muted-dark" : "text-muted"}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
