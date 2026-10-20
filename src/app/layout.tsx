import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ConsentManager } from "@/components/Consent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Software Development, Dedicated Teams & SaaS`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/brand/icon-512.png", type: "image/png", sizes: "512x512" }], apple: "/brand/apple-icon.png" },
  openGraph: { type: "website", siteName: site.name, images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }], locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#013d35", width: "device-width", initialScale: 1 };

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: new URL("/brand/anovate-logo.png", site.url).toString(),
  description: site.description,
  areaServed: site.markets,
  ...(site.contact.email ? { email: site.contact.email } : {}),
  ...(site.social.linkedin ? { sameAs: [site.social.linkedin] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Opt in to scroll-reveal styles only when JS runs, so content never stays hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={orgLd} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <ConsentManager />
      </body>
    </html>
  );
}
