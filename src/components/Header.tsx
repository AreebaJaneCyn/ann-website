"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/content/site";
import { ArrowMark } from "./ui/ArrowMark";
import { ButtonLink } from "./ui/Button";
import { Logo } from "./ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const hoverClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header
      className={`on-light sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || mobileOpen ? "border-line bg-white/90 shadow-[0_6px_24px_-18px_rgb(1_61_53/0.4)] backdrop-blur-md" : "border-transparent bg-white"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div ref={navRef} className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Logo priority className="h-9 w-auto sm:h-11" />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseEnter={() => hoverOpen(item.label)} onMouseLeave={hoverClose}>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
                    className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[0.9375rem] font-medium transition-colors hover:text-forest-900 ${
                      isActive(item.href) ? "text-forest-900" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                    <svg aria-hidden viewBox="0 0 12 12" className={`size-3 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}>
                      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    id={`menu-${item.label}`}
                    hidden={openMenu !== item.label}
                    className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3"
                  >
                    <ul className="rounded-[var(--radius-lg)] border border-line bg-white p-2 shadow-[var(--shadow-lift)]">
                      {item.children.map((c, ci) => (
                        <Fragment key={c.href}>
                        {c.group && c.group !== item.children![ci - 1]?.group && (
                          <li role="presentation" className="mt-1 border-t border-line px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">
                            {c.group}
                          </li>
                        )}
                        <li>
                          <Link href={c.href} className="group flex items-start gap-3 rounded-[var(--radius-md)] p-3 transition-colors hover:bg-mist">
                            <ArrowMark tone="mono" className="arrow-nudge mt-1 size-3 shrink-0 text-mint-ink" />
                            <span>
                              <span className="block font-semibold text-forest-900">{c.label}</span>
                              {c.description && <span className="mt-0.5 block text-sm text-muted">{c.description}</span>}
                            </span>
                          </Link>
                        </li>
                        </Fragment>
                      ))}
                      <li className="mt-1 border-t border-line px-3 pb-1 pt-3">
                        <Link href={item.href} className="text-sm font-semibold text-mint-ink hover:underline">
                          View all {item.label.toLowerCase()}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-md px-2.5 py-2 text-[0.9375rem] font-medium transition-colors hover:text-forest-900 ${
                      isActive(item.href) ? "text-forest-900" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/products/inventory-management"
            className="group hidden items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-forest-800 2xl:inline-flex transition-colors hover:border-mint-ink/50"
          >
            <span className="size-1.5 rounded-full bg-mint-500" aria-hidden />
            Inventory Software
          </Link>
          <ButtonLink href="/contact" variant="dark">
            {site.cta.project}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-forest-900 xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-6">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!mobileOpen} className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-line pb-3 pt-2">
                <Link href={item.href} className="block py-1.5 font-display text-lg font-semibold text-forest-900">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 space-y-0.5">
                    {item.children.map((c, ci) => (
                      <Fragment key={c.href}>
                        {c.group && c.group !== item.children![ci - 1]?.group && (
                          <li role="presentation" className="pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.14em] text-mint-ink">{c.group}</li>
                        )}
                        <li>
                          <Link href={c.href} className="flex items-center gap-2.5 py-2 text-[0.9375rem] text-ink-soft">
                            <ArrowMark tone="mono" className="size-2.5 text-mint-ink" />
                            {c.label}
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <ButtonLink href="/contact" variant="dark" size="lg">
              {site.cta.project}
            </ButtonLink>
            <ButtonLink href="/products/inventory-management" variant="outline-dark" size="lg">
              {site.cta.inventory}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
