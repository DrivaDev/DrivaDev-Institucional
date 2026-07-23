import { MetadataRoute } from "next";
import { publishedPosts } from "@/content/blog/posts";
import { path, routeUrl, SITE_URL } from "@/lib/i18n";

// Se revalida cada hora, igual que el blog, para que un artículo programado
// entre al sitemap el mismo lunes en que se publica.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const esPosts = publishedPosts("es");
  const enPosts = publishedPosts("en");

  // El indice del blog cambia cada vez que se publica un articulo, asi que su
  // lastModified es la fecha del mas reciente. Sin esto le diriamos a Google
  // que /blog no cambia nunca, y tardaria en volver a rastrearlo.
  const lastPostDate = (posts: typeof esPosts) =>
    posts.length ? new Date(`${posts[0].publishedAt}T00:00:00-03:00`) : new Date("2026-07-09");

  // Fechas estáticas: actualizar solo cuando la página cambia contenido real.
  // new Date() en cada build genera señales de fecha falsas que Google ignora.
  const contentUpdate = new Date("2026-07-09");
  // El sitio en inglés se publicó junto con esta versión.
  const englishLaunch = new Date("2026-07-22");

  const pages: MetadataRoute.Sitemap = [
    {
      url: routeUrl("home", "es"),
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: routeUrl("services", "es"),
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: routeUrl("portfolio", "es"),
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: routeUrl("blog", "es"),
      lastModified: lastPostDate(esPosts),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: routeUrl("localBA", "es"),
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: routeUrl("contact", "es"),
      lastModified: contentUpdate,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // Versión en inglés.
    {
      url: routeUrl("home", "en"),
      lastModified: englishLaunch,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: routeUrl("services", "en"),
      lastModified: englishLaunch,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: routeUrl("portfolio", "en"),
      lastModified: englishLaunch,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: routeUrl("contact", "en"),
      lastModified: englishLaunch,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // El índice del blog en inglés todavía está vacío y va `noindex`: entra al
  // sitemap recién cuando exista el primer artículo.
  if (enPosts.length) {
    pages.push({
      url: routeUrl("blog", "en"),
      lastModified: lastPostDate(enPosts),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Solo los artículos que ya llegaron a su fecha de publicación.
  const postEntries: MetadataRoute.Sitemap = [
    ...esPosts.map((post) => ({ post, base: path("blog", "es") })),
    ...enPosts.map((post) => ({ post, base: path("blog", "en") })),
  ].map(({ post, base }) => ({
    url: `${SITE_URL}${base}/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00-03:00`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...postEntries];
}
