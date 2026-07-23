import type { Metadata } from "next";
import BlogIndexPage from "@/components/pages/BlogIndexPage";
import { pageMetadata } from "@/lib/metadata";

// Revalidar cada hora: así los artículos programados aparecen solos
// el lunes que corresponde, sin necesidad de un nuevo despliegue.
export const revalidate = 3600;

export const metadata: Metadata = pageMetadata("blog", "es");

export default function Page() {
  return <BlogIndexPage locale="es" />;
}
