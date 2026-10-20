# Anovate System — website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4. No CMS, database or UI library. Content lives in `src/content/*.ts`.

## Run
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Structure
- `src/content/` — site config, services, products, industries, work. **Unconfirmed business facts are `null`** and render as "To be confirmed" badges (`<Pending>`) or are hidden.
- `src/components/ui/` — design-system primitives (ArrowMark, Button, Section, Logo, Pending).
- `src/app/globals.css` — design tokens (sampled from the brand files) and motion (respects `prefers-reduced-motion`).
- `src/app/api/contact/route.ts` — inquiry endpoint: server-side validation, honeypot, rate limit, delivery via Resend or webhook. Returns **503 in production if no delivery is configured** (never fakes success).
- `public/brand/` — supplied logo/symbol (originals kept untouched), reversed logo for dark backgrounds, crops, icons.

## Pre-launch checklist
- [ ] Configure inquiry delivery (`RESEND_*` or `CONTACT_WEBHOOK_URL`) and send a test submission
- [ ] Confirm the domain and inbox: site uses `anovatesystem.com` and `info@anovatesystem.com`
- [ ] Set `NEXT_PUBLIC_CALENDLY_URL` (demo booking embed; falls back to a demo request form when unset)
- [ ] `src/content/site.ts`: phone, offices, legal name, LinkedIn, response time
- [ ] `src/content/products.ts`: plan names, prices, billing, inclusions, trial, demo, integrations, `NEXT_PUBLIC_INVENTORY_SIGNUP_URL`
- [ ] Confirm inventory feature list against the live product
- [ ] Replace the illustrated product preview (`InventoryMockup`, `ProductTour`) with real product screenshots
- [ ] Optional: swap in real team photography (stock photo hosts are blocked in the build environment, so illustrations are code-drawn in `src/components/Illustrations.tsx`)
- [ ] Replace sample concepts in `src/content/work.ts` with verified case studies
- [ ] Legal review of `/privacy`, `/terms`, `/cookies`, then remove `noindex`
- [ ] Approve the reversed (white) logo variant used on dark backgrounds
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain
- [ ] Optional: `NEXT_PUBLIC_GTM_ID` (consent banner appears automatically)
