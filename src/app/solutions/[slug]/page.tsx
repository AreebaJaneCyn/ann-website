import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { serviceBySlug } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const SLUGS = ["crm", "erp"];

export const dynamicParams = false;
export const generateStaticParams = () => SLUGS.map((slug) => ({ slug }));

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const page = serviceBySlug((await params).slug);
  if (!page) return {};
  return pageMetadata({ title: page.meta.title, description: page.meta.description, path: page.path });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const page = SLUGS.includes(slug) ? serviceBySlug(slug) : undefined;
  if (!page) notFound();
  return <ServiceTemplate page={page} parent={{ name: "Services", path: "/services" }} />;
}
