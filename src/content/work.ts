/**
 * Portfolio entries.
 *
 * No verified case studies have been supplied yet, so every entry is a
 * clearly labelled SAMPLE CONCEPT that illustrates the kind of work offered.
 * Replace with real projects (with client permission) and set `kind: "case-study"`.
 * Never add results, metrics or quotes that cannot be verified.
 */
import { photos, type Photo } from "./images";

export type WorkItem = {
  slug: string;
  kind: "sample-concept" | "case-study";
  title: string;
  category: string;
  summary: string;
  scope: string[];
  visual: "mobile" | "dashboard" | "pipeline" | "inventory";
  photo: Photo;
};

export const work: WorkItem[] = [
  {
    slug: "field-service-app",
    kind: "sample-concept",
    title: "Field service mobile app",
    category: "Mobile app development",
    summary: "A cross-platform app for technicians to receive jobs, capture site notes and photos, and close work orders on the move.",
    scope: ["Flutter", "Offline-friendly flows", "REST API", "Admin web panel"],
    visual: "mobile",
    photo: photos.mobile,
  },
  {
    slug: "b2b-sales-crm",
    kind: "sample-concept",
    title: "B2B sales CRM",
    category: "CRM development",
    summary: "A custom pipeline with stages matched to a quote-led sales process, automated follow-ups and a manager reporting view.",
    scope: ["Pipeline stages", "Customer records", "Email integration", "Reporting"],
    visual: "pipeline",
    photo: photos.meeting,
  },
  {
    slug: "operations-portal",
    kind: "sample-concept",
    title: "Operations & purchasing portal",
    category: "ERP modules",
    summary: "A central portal connecting purchasing requests, approvals and supplier records with an existing accounting system.",
    scope: ["Approval workflows", "Role-based access", "Accounting integration", "Audit trail"],
    visual: "dashboard",
    photo: photos.dashboard,
  },
];
