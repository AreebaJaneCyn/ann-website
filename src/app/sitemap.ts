import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/services", "/products", "/industries", "/about", "/work", "/insights", "/contact",
    ...services.map((s) => s.path),
    ...products.map((p) => p.href),
    ...articles.map((a) => `/insights/${a.slug}`),
  ];
  return paths.map((p) => ({
    url: new URL(p, site.url).toString(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/products/") || p.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
