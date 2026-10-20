/**
 * Conversion tracking helper. Pushes events to the GTM dataLayer when analytics
 * has been enabled and consented to; otherwise it is a no-op.
 */
type EventName = "cta_click" | "inquiry_submit" | "inquiry_error" | "plan_select";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

export function track(event: EventName, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
