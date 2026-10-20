/**
 * Central company configuration.
 *
 * Anything set to `null` is a business detail that has not been confirmed yet.
 * Components hide or soften content when a value is missing, so nothing
 * unverified is published. Fill these in once confirmed.
 */
export const site = {
  name: "Anovate System",
  legalName: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.anovatesystem.com",
  tagline: "Software engineering, dedicated teams and cloud business software.",
  description:
    "Anovate System is a software development company providing dedicated engineering teams, custom software, mobile apps, CRM and ERP development, and cloud inventory management software for businesses in the US, UAE and Pakistan.",
  markets: ["United States", "United Arab Emirates", "Pakistan"],

  contact: {
    email: "info@anovatesystem.com" as string | null,
    phone: null as string | null,
    /** Only list locations that are real, registered or staffed offices. */
    offices: [] as { label: string; address: string }[],
    /** Publish only if the team can consistently meet it, e.g. "within one business day". */
    responseTime: null as string | null,
  },

  /** Calendly scheduling page for product demos, e.g. https://calendly.com/anovate/inventory-demo */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || null,

  social: {
    linkedin: null as string | null,
  },

  /** Primary CTA labels kept in one place so they stay consistent site-wide. */
  cta: {
    project: "Discuss Your Project",
    consult: "Book a Consultation",
    solutions: "Explore Our Solutions",
    inventory: "Explore Inventory Software",
    plans: "View Plans",
    demo: "Book a Demo",
  },
} as const;

export type NavItem = { label: string; href: string; description?: string };
export type NavGroup = NavItem & { children?: NavItem[] };

export const mainNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Staff Augmentation", href: "/services/staff-augmentation", description: "Dedicated developers and extended teams" },
      { label: "Custom Software", href: "/services/custom-software-development", description: "Web apps, SaaS, APIs and automation" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS, Android, Flutter and React Native" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "CRM Development", href: "/solutions/crm", description: "Sales pipelines, customer records, reporting" },
      { label: "ERP Development", href: "/solutions/erp", description: "Operations, purchasing and business data" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Inventory Management", href: "/products/inventory-management", description: "Cloud inventory software, by subscription" },
      { label: "All SaaS Products", href: "/products", description: "Our subscription software portfolio" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "CRM Development", href: "/solutions/crm" },
      { label: "ERP Development", href: "/solutions/erp" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Inventory Management", href: "/products/inventory-management" },
      { label: "Inventory Plans", href: "/products/inventory-management#plans" },
      { label: "SaaS Directory", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
