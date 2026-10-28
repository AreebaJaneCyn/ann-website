/**
 * Stock photography (Unsplash License: free for commercial use, no attribution required).
 *
 * Photos are loaded from images.unsplash.com by the visitor's browser and resized by
 * Unsplash's image CDN. Every slot has an illustrated fallback that renders automatically
 * if a photo fails to load, so the site never shows a broken image.
 *
 * NOTE: these photo IDs could not be previewed from the build environment (stock hosts are
 * blocked there). Review each photo on the live site and swap any that don't fit by changing
 * the ID below. To use your own photos instead, put files in /public/images and use a local path.
 */
export type Photo = { src: string; alt: string };

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  // Services
  team: { src: u("1522071820081-009f0129c71c"), alt: "Software team collaborating around laptops" },
  officeTeam: { src: u("1551434678-e076c223a692"), alt: "Developers working together in a modern office" },
  coding: { src: u("1517694712202-14dd9538aa97"), alt: "Laptop showing code in a development environment" },
  codeScreen: { src: u("1555066931-4365d14bab8c"), alt: "Source code on a monitor" },
  mobile: { src: u("1512941937669-90a1b58e7e9c"), alt: "Person using a mobile app on a smartphone" },
  dashboard: { src: u("1460925895917-afdab827c52f"), alt: "Business analytics dashboard on a laptop" },
  analytics: { src: u("1551288049-bebda4e38f71"), alt: "Charts and reports on an analytics dashboard" },
  meeting: { src: u("1600880292203-757bb62b4baf"), alt: "Business team reviewing work in a meeting" },
  planning: { src: u("1552664730-d307ca884978"), alt: "Team planning a product in a workshop" },
  office: { src: u("1497366216548-37526070297c"), alt: "Bright modern office workspace" },
  // Industries
  retail: { src: u("1441986300917-64674bd600d8"), alt: "Retail store interior with products on display" },
  logistics: { src: u("1494412574643-ff11b0a5c1c3"), alt: "Shipping containers at a logistics port" },
  healthcare: { src: u("1576091160399-112ba8d25d1d"), alt: "Healthcare professional using a digital device" },
  fintech: { src: u("1563013544-824ae1b704d3"), alt: "Card payment for a digital transaction" },
  education: { src: u("1522202176988-66273c2fd55f"), alt: "Students learning together on laptops" },
  manufacturing: { src: u("1581091226825-a6a2a5aee158"), alt: "Engineer working with technology in a production setting" },
  business: { src: u("1486406146926-c627a92ad1ab"), alt: "Modern office buildings" },
  warehouse: { src: u("1586528116311-ad8dd3c8310d"), alt: "Warehouse with stocked shelves" },
} satisfies Record<string, Photo>;

/** Placeholder team portraits (stock models, not Anovate System staff). */
export const portraits = [
  u("1472099645785-5658abf4ff4e"),
  u("1494790108377-be9c29b29330"),
  u("1507003211169-0a1dd7228f2d"),
  u("1438761681033-6461ffad8d80"),
  u("1500648767791-00dcc994a43e"),
  u("1544005313-94ddf0286df2"),
  u("1506794778202-cad84cf45f1d"),
  u("1534528741775-53994a69daeb"),
];

export const industryPhoto: Record<string, Photo> = {
  "retail-ecommerce": photos.retail,
  "logistics-distribution": photos.logistics,
  healthcare: photos.healthcare,
  "finance-fintech": photos.fintech,
  education: photos.education,
  manufacturing: photos.manufacturing,
  other: photos.business,
};

export const servicePhoto: Record<string, Photo> = {
  "staff-augmentation": photos.team,
  "custom-software-development": photos.coding,
  "mobile-app-development": photos.mobile,
  crm: photos.meeting,
  erp: photos.analytics,
};

export const articlePhoto: Record<string, Photo> = {
  "what-is-staff-augmentation": photos.team,
  "staff-augmentation-vs-outsourcing": photos.meeting,
  "native-vs-cross-platform-app-development": photos.mobile,
  "custom-crm-vs-off-the-shelf-crm": photos.dashboard,
  "cloud-inventory-management-software-guide": photos.warehouse,
  "how-to-scope-an-mvp": photos.planning,
};
