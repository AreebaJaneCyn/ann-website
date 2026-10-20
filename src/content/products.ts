/**
 * Subscription software portfolio.
 *
 * IMPORTANT: Feature areas below come from the project brief and must be checked
 * against the live product before launch. Prices, billing terms, trials and
 * integrations are intentionally `null` until confirmed. Never fill them with
 * estimates.
 */

export type Plan = {
  id: string;
  name: string | null;
  audience: string;
  /** e.g. "$49" — null until confirmed */
  price: string | null;
  /** e.g. "per month, billed annually" — null until confirmed */
  billing: string | null;
  includes: string[];
  highlighted?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  status: "available" | "coming-soon";
  category: string;
  summary: string;
  href: string;
  /** External signup URL for the live product. When missing, CTAs route to demo booking. */
  signupUrl: string | null;
  demoUrl: string | null;
  trial: string | null;
  plans: Plan[];
  /** Integrations offered by the product. Empty until confirmed. */
  integrations: string[];
};

export const inventoryProduct: Product = {
  slug: "inventory-management",
  name: "Anovate Inventory",
  status: "available",
  category: "Inventory & stock management",
  summary:
    "Cloud-based inventory management for product-based businesses. Track products, stock levels, purchases and sales in one place, from any location.",
  href: "/products/inventory-management",
  signupUrl: process.env.NEXT_PUBLIC_INVENTORY_SIGNUP_URL || null,
  demoUrl: null,
  trial: null,
  integrations: [],
  plans: [
    {
      id: "plan-1",
      name: null,
      audience: "For a single store, shop or small stockroom getting organised.",
      price: null,
      billing: null,
      includes: [],
    },
    {
      id: "plan-2",
      name: null,
      audience: "For growing teams managing more products, users and daily movements.",
      price: null,
      billing: null,
      includes: [],
      highlighted: true,
    },
    {
      id: "plan-3",
      name: null,
      audience: "For multi-location, wholesale or warehouse operations.",
      price: null,
      billing: null,
      includes: [],
    },
  ],
};

export const products: Product[] = [inventoryProduct];

export const inventoryFeatures = [
  {
    title: "Product & stock management",
    body: "Keep a single, organised catalogue of the products you hold, with current stock quantities for each item.",
  },
  {
    title: "Inventory tracking",
    body: "Know what is in stock and what is running low, so reordering is a decision rather than a surprise.",
  },
  {
    title: "Purchase records",
    body: "Record what you buy and from whom, so incoming stock is accounted for and easy to trace later.",
  },
  {
    title: "Sales records",
    body: "Record what leaves the business, keeping stock levels aligned with what you have actually sold.",
  },
  {
    title: "Stock movement visibility",
    body: "See how stock moves in and out over time instead of reconciling spreadsheets at the end of the month.",
  },
  {
    title: "Inventory reporting",
    body: "Review inventory activity in clear reports that help owners and managers plan purchasing.",
  },
  {
    title: "Cloud-based access",
    body: "Runs in the browser, so authorised team members can work from the office, the warehouse or on the move.",
  },
  {
    title: "Subscription access",
    body: "Subscribe instead of buying and maintaining servers. Updates are delivered as part of the service.",
  },
];

export const inventoryAudiences = [
  { title: "Retail", body: "Shops and multi-outlet retailers keeping shelves stocked without over-ordering." },
  { title: "Wholesale", body: "Wholesalers managing larger volumes, purchase records and repeat buyers." },
  { title: "Distributors", body: "Distribution businesses that need clear records of stock coming in and going out." },
  { title: "Warehouses", body: "Warehouse teams that need a reliable picture of what is on hand." },
  { title: "Manufacturing", body: "Manufacturers tracking finished goods and the stock that feeds production." },
  { title: "Ecommerce", body: "Online sellers who need stock numbers they can trust before taking orders." },
  { title: "Pharmacies", body: "Pharmacies and other product-based businesses keeping careful stock records." },
  { title: "Other product businesses", body: "Any organisation that buys, holds and sells physical products." },
];

export const inventorySteps = [
  { title: "Set up your catalogue", body: "Add the products you manage and your opening stock quantities." },
  { title: "Record purchases", body: "Log incoming stock as you buy it so quantities update as goods arrive." },
  { title: "Record sales", body: "Log outgoing stock so your numbers reflect what has actually left the business." },
  { title: "Review and reorder", body: "Use stock movement views and reports to see trends and plan the next purchase." },
];
