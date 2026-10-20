import type { Product } from "@/content/products";

/**
 * Primary CTA for a product. Until a live self-serve signup exists (signupUrl),
 * prospects book a demo (Calendly) or request one via the form.
 */
export function productCta(p: Product) {
  return p.signupUrl
    ? { label: "Start subscription", href: p.signupUrl, external: true }
    : { label: "Book a Demo", href: `${p.href}#book-demo`, external: false };
}
