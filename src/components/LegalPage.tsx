import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Section } from "./ui/Section";

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string | null; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lede={updated ? `Last updated ${updated}.` : "Draft — pending legal review before publication."} crumbs={[{ name: title, path }]} />
      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <p className="rounded-[var(--radius-md)] border border-dashed border-amber-600/40 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            <strong>Draft for review.</strong> This document is a starting template written to reflect how this website currently works. It must be reviewed by a qualified legal adviser, and completed with Anovate System&apos;s registered legal entity details and contact information, before launch.
          </p>
          <div className="prose-anovate mt-8">{children}</div>
        </div>
      </Section>
    </>
  );
}
