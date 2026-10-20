import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/services", "/solutions", "/products", "/industries", "/about", "/work", "/insights", "/contact",
    ...services.map((s) => s.path),
    ...products.map((p) => p.href),
  ];
  return paths.map((p) => ({
    url: new URL(p, site.url).toString(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/products/") || p.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
