import { defaultLocale, type Locale } from "@/lib/i18n";
import type { Post } from "./types";

import ComoEscribirContenido, { meta as comoEscribirContenido } from "./posts/como-escribir-el-contenido-de-tu-web-para-google";
import CoreWebVitals, { meta as coreWebVitals } from "./posts/core-web-vitals-velocidad-y-ventas";
import CuantoCuesta, { meta as cuantoCuesta } from "./posts/cuanto-cuesta-una-pagina-web-en-argentina";
import DesarrolloVsWordpress, { meta as desarrolloVsWordpress } from "./posts/desarrollo-a-medida-vs-wordpress";
import DisenoResponsive, { meta as disenoResponsive } from "./posts/diseno-responsive-por-que-importa";
import HostingWeb, { meta as hostingWeb } from "./posts/hosting-web-en-argentina-como-elegirlo";
import HtmlSemantico, { meta as htmlSemantico } from "./posts/html-semantico-el-detalle-que-google-mira";
import Mantenimiento, { meta as mantenimiento } from "./posts/por-que-tu-web-necesita-mantenimiento-mensual";
import SchemaMarkup, { meta as schemaMarkup } from "./posts/schema-markup-resultados-enriquecidos";
import SeoOnCode, { meta as seoOnCode } from "./posts/que-es-el-seo-on-code";
import SaaS, { meta as saas } from "./posts/que-es-una-aplicacion-web-saas";
import TiposDeWeb, { meta as tiposDeWeb } from "./posts/sitio-institucional-tienda-online-o-sistema-de-gestion";

/**
 * Todos los artículos, publicados y programados.
 * Cada `publishedAt` cae un lunes. Los que todavía no llegaron a su fecha
 * no se listan, no entran al sitemap y su URL devuelve 404.
 * Ver `publishedPosts()`.
 *
 * `locale` sale de `defaultLocale` salvo que el artículo lo declare: hoy todos
 * están en español. Un artículo en inglés se agrega igual, con `locale: "en"`
 * en su `meta`, y aparece solo en /en/blog.
 */
const allPosts: Post[] = [
  { locale: defaultLocale, ...cuantoCuesta, Body: CuantoCuesta },
  { locale: defaultLocale, ...desarrolloVsWordpress, Body: DesarrolloVsWordpress },
  { locale: defaultLocale, ...seoOnCode, Body: SeoOnCode },
  { locale: defaultLocale, ...coreWebVitals, Body: CoreWebVitals },
  { locale: defaultLocale, ...tiposDeWeb, Body: TiposDeWeb },
  { locale: defaultLocale, ...mantenimiento, Body: Mantenimiento },
  { locale: defaultLocale, ...hostingWeb, Body: HostingWeb },
  { locale: defaultLocale, ...htmlSemantico, Body: HtmlSemantico },
  { locale: defaultLocale, ...comoEscribirContenido, Body: ComoEscribirContenido },
  { locale: defaultLocale, ...saas, Body: SaaS },
  { locale: defaultLocale, ...disenoResponsive, Body: DisenoResponsive },
  { locale: defaultLocale, ...schemaMarkup, Body: SchemaMarkup },
];

/**
 * Portadas: `public/blog/<slug>.webp`, todas al mismo tamaño.
 * Se generan con `node scripts/download-blog-covers.mjs`.
 */
export const COVER_WIDTH = 960;
export const COVER_HEIGHT = 640;

export function coverSrc(slug: string): string {
  return `/blog/${slug}.webp`;
}

/** Un post está publicado cuando su fecha ya pasó (en hora de Argentina). */
export function isPublished(post: { publishedAt: string }, now = new Date()): boolean {
  // publishedAt es YYYY-MM-DD. Lo anclamos a las 00:00 ART (UTC-3).
  return new Date(`${post.publishedAt}T00:00:00-03:00`) <= now;
}

/** Publicados en un idioma, del más reciente al más antiguo. */
export function publishedPosts(locale: Locale = defaultLocale, now = new Date()): Post[] {
  return allPosts
    .filter((p) => p.locale === locale && isPublished(p, now))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string, locale: Locale = defaultLocale): Post | undefined {
  return allPosts.find((p) => p.slug === slug && p.locale === locale);
}

/** Hasta `limit` artículos publicados del mismo idioma, distintos del actual. */
export function relatedPosts(
  slug: string,
  limit = 3,
  locale: Locale = defaultLocale,
  now = new Date()
): Post[] {
  return publishedPosts(locale, now)
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

/** Formato de fecha propio de cada idioma; la zona horaria es siempre la nuestra. */
export function formatDate(iso: string, locale: Locale = defaultLocale): string {
  return new Date(`${iso}T00:00:00-03:00`).toLocaleDateString(
    locale === "en" ? "en-US" : "es-AR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Argentina/Buenos_Aires",
    }
  );
}
