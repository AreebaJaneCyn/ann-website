import type { Product } from "@/content/products";

/**
 * Subscription CTA for a product. Until a live signup/billing flow exists
 * (signupUrl), the CTA honestly routes to an access request instead of a
 * button that pretends to start a subscription.
 */
export function productCta(p: Product) {
  return p.signupUrl
    ? { label: "Start subscription", href: p.signupUrl, external: true }
    : { label: "Request access", href: `${p.href}#get-started`, external: false };
}
