import { Fragment, type ReactNode } from "react";

/**
 * Headings are title-cased with CSS (text-transform: capitalize). Words that start
 * lowercase but carry internal capitals (iOS, iPhone, eCommerce) would become "IOS",
 * so they are wrapped to keep their brand casing.
 */
export function tc(text: string): ReactNode {
  if (!/\b[a-z]+[A-Z]/.test(text)) return text;
  return text.split(/(\s+)/).map((w, i) =>
    /^[a-z]+[A-Z]/.test(w) ? <span key={i} className="keep-case">{w}</span> : <Fragment key={i}>{w}</Fragment>,
  );
}
