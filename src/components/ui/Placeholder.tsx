import type { ReactNode } from "react";

/**
 * Visible marker for business information that has not been confirmed yet.
 * Search the codebase for <Pending to find every open item before launch.
 */
export function Pending({ children = "To be confirmed", dark }: { children?: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed px-2.5 py-0.5 text-xs font-medium ${
        dark ? "border-mint-400/50 text-mint-300" : "border-forest-700/40 text-forest-700"
      }`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${dark ? "bg-mint-400" : "bg-mint-ink"}`} />
      {children}
    </span>
  );
}
