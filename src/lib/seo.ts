import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = { title: string; description: string; path: string; image?: string; noindex?: boolean };

export function pageMetadata({ title, description, path, image = "/og-default.png", noindex }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [image] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: site.markets.map((m) => ({ "@type": "Country", name: m })),
  };
}
