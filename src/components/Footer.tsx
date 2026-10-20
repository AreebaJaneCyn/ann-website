import Link from "next/link";
import { footerNav, legalNav, site } from "@/content/site";
import { ArrowMark } from "./ui/ArrowMark";
import { Logo } from "./ui/Logo";
import { CookieSettingsLink } from "./Consent";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-forest-950 text-white">
      <div aria-hidden className="brand-streak top-0 opacity-70" />
      <div className="container-x pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo variant="reversed" className="h-10 w-auto" />
            <p className="mt-6 leading-relaxed text-muted-dark">{site.tagline}</p>
            <p className="mt-3 text-sm text-muted-dark">Working with businesses in the United States, the UAE and Pakistan.</p>
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="mt-6 inline-block font-medium text-mint-400 hover:underline">
                {site.contact.email}
              </a>
            )}
            {site.social.linkedin && (
              <a href={site.social.linkedin} className="mt-3 block text-sm text-muted-dark hover:text-white" rel="noopener" target="_blank">
                LinkedIn
              </a>
            )}
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-mint-400">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group inline-flex items-center gap-2 text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                        {l.label}
                        <ArrowMark tone="mono" className="arrow-nudge size-2.5 text-mint-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName ?? site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
            {process.env.NEXT_PUBLIC_GTM_ID && <li><CookieSettingsLink /></li>}
          </ul>
        </div>
      </div>
    </footer>
  );
}
