/**
 * Social proof: testimonials, awards and partner/client logos.
 *
 * EVERYTHING HERE IS PLACEHOLDER CONTENT until verified. Before launch:
 *  - Testimonials: use real quotes, with the client's written permission to publish name, role and company.
 *  - Awards: only list awards actually received. Clutch, DesignRush and similar platforms provide
 *    official badge widgets/images to listed companies — use those assets and link to the profile.
 *  - Partners/clients: only show logos of organisations you have worked with AND have permission
 *    to display. Third-party logos are trademarks; showing them implies endorsement.
 * Set `placeholder: false` once an entry is real; the "Sample" labels disappear automatically.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sample testimonial. Replace with a real client quote about working with the team: how they communicated, what they delivered and the difference it made.",
    name: "Client Name",
    role: "Founder & CEO",
    company: "Client Company",
    placeholder: true,
  },
  {
    quote:
      "Sample testimonial. A staff augmentation client could describe how augmented developers joined their workflow and helped them ship.",
    name: "Client Name",
    role: "CTO",
    company: "Client Company",
    placeholder: true,
  },
  {
    quote:
      "Sample testimonial. An inventory software customer could describe how they track stock, purchases and sales today.",
    name: "Client Name",
    role: "Operations Manager",
    company: "Client Company",
    placeholder: true,
  },
];

export type Award = {
  /** Awarding platform, e.g. "Clutch" */
  platform: string;
  /** Award title exactly as issued, e.g. "Top Software Developers" */
  title: string | null;
  year: string | null;
  /** Link to the public profile or award page */
  url: string | null;
  /** Official badge image supplied by the platform, e.g. /awards/clutch-2026.png */
  badge: string | null;
  placeholder: boolean;
};

export const awards: Award[] = [
  { platform: "Clutch", title: null, year: null, url: null, badge: null, placeholder: true },
  { platform: "DesignRush", title: null, year: null, url: null, badge: null, placeholder: true },
  { platform: "Top Developers", title: null, year: null, url: null, badge: null, placeholder: true },
  { platform: "GoodFirms", title: null, year: null, url: null, badge: null, placeholder: true },
];

export type Partner = {
  name: string;
  /** Logo file in /public/partners, used with permission */
  logo: string | null;
  placeholder: boolean;
};

/** Placeholder slots for the logo slider. Replace with permitted client/partner logos. */
export const partners: Partner[] = Array.from({ length: 8 }, (_, i) => ({ name: `Partner ${i + 1}`, logo: null, placeholder: true }));
