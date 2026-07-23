import type { Metadata } from "next";
import BlogIndexPage from "@/components/pages/BlogIndexPage";
import { publishedPosts } from "@/content/blog/posts";
import { pageMetadata } from "@/lib/metadata";

export const revalidate = 3600;

// Todavía no hay artículos en inglés. Mientras la lista esté vacía la página se
// marca `noindex`: un índice sin contenido solo suma una URL pobre al dominio.
// En cuanto se publique el primero, vuelve a indexarse sola.
const hasPosts = publishedPosts("en").length > 0;

export const metadata: Metadata = {
  ...pageMetadata("blog", "en"),
  ...(hasPosts ? {} : { robots: { index: false, follow: true } }),
};

export default function Page() {
  return <BlogIndexPage locale="en" />;
}
