import { MetadataRoute } from "next";
import { publishedPosts } from "@/content/blog/posts";

// Se revalida cada hora, igual que el blog, para que un artículo programado
// entre al sitemap el mismo lunes en que se publica.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drivadev.com.ar";

  // Fechas estáticas: actualizar solo cuando la página cambia contenido real.
  // new Date() en cada build genera señales de fecha falsas que Google ignora.
  const pages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/servicios`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/portafolio`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/desarrollo-web-buenos-aires`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contacto`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Solo los artículos que ya llegaron a su fecha de publicación.
  const posts: MetadataRoute.Sitemap = publishedPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00-03:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
