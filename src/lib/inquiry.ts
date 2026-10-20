/** Shared inquiry schema and validation, used by the form (client) and the API route (server). */

export const interestOptions = [
  { value: "staff-augmentation", label: "Staff augmentation / dedicated team" },
  { value: "custom-software", label: "Custom software development" },
  { value: "mobile-app", label: "Mobile app development" },
  { value: "crm", label: "CRM development" },
  { value: "erp", label: "ERP development" },
  { value: "inventory", label: "Anovate Inventory (subscription)" },
  { value: "saas", label: "Other SaaS products" },
  { value: "other", label: "Something else" },
] as const;

export const budgetOptions = [
  { value: "lt-10k", label: "Under $10,000" },
  { value: "10-25k", label: "$10,000 – $25,000" },
  { value: "25-50k", label: "$25,000 – $50,000" },
  { value: "50-100k", label: "$50,000 – $100,000" },
  { value: "gt-100k", label: "More than $100,000" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3m", label: "Within 1–3 months" },
  { value: "3-6m", label: "In 3–6 months" },
  { value: "exploring", label: "Just exploring" },
] as const;

export const businessTypeOptions = [
  "Retail",
  "Wholesale",
  "Distribution",
  "Warehouse",
  "Manufacturing",
  "Ecommerce",
  "Pharmacy",
  "Other",
].map((v) => ({ value: v.toLowerCase(), label: v }));

export type InquiryKind = "project" | "product";

export type Inquiry = {
  kind: InquiryKind;
  name: string;
  email: string;
  company: string;
  interest: string;
  budget: string;
  timeline: string;
  businessType: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty */
  website: string;
  /** Page the form was submitted from */
  source: string;
};

export type Errors = Partial<Record<keyof Inquiry, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const values = <T extends readonly { value: string }[]>(o: T) => o.map((x) => x.value) as string[];

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function normalise(raw: Record<string, unknown>): Inquiry {
  return {
    kind: raw.kind === "product" ? "product" : "project",
    name: str(raw.name, 120),
    email: str(raw.email, 200),
    company: str(raw.company, 160),
    interest: str(raw.interest, 40),
    budget: str(raw.budget, 20),
    timeline: str(raw.timeline, 20),
    businessType: str(raw.businessType, 40),
    message: str(raw.message, 5000),
    consent: raw.consent === true || raw.consent === "on" || raw.consent === "true",
    website: str(raw.website, 200),
    source: str(raw.source, 200),
  };
}

export function validate(d: Inquiry): Errors {
  const e: Errors = {};
  if (d.name.length < 2) e.name = "Please enter your name.";
  if (!EMAIL.test(d.email)) e.email = "Please enter a valid email address.";
  if (!d.consent) e.consent = "Please confirm so we can use your details to respond.";

  if (d.kind === "project") {
    if (!values(interestOptions).includes(d.interest)) e.interest = "Please choose what you need help with.";
    if (d.budget && !values(budgetOptions).includes(d.budget)) e.budget = "Please choose a budget range.";
    if (d.timeline && !values(timelineOptions).includes(d.timeline)) e.timeline = "Please choose a timeline.";
    if (d.message.length < 20) e.message = "Please share a few details (at least 20 characters).";
  } else {
    if (d.company.length < 2) e.company = "Please enter your business name.";
    if (!values(businessTypeOptions).includes(d.businessType)) e.businessType = "Please choose your business type.";
  }
  return e;
}

export const labelFor = (opts: readonly { value: string; label: string }[], v: string) => opts.find((o) => o.value === v)?.label ?? (v || "—");
