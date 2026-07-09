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
 */
const allPosts: Post[] = [
  { ...cuantoCuesta, Body: CuantoCuesta },
  { ...desarrolloVsWordpress, Body: DesarrolloVsWordpress },
  { ...seoOnCode, Body: SeoOnCode },
  { ...coreWebVitals, Body: CoreWebVitals },
  { ...tiposDeWeb, Body: TiposDeWeb },
  { ...mantenimiento, Body: Mantenimiento },
  { ...hostingWeb, Body: HostingWeb },
  { ...htmlSemantico, Body: HtmlSemantico },
  { ...comoEscribirContenido, Body: ComoEscribirContenido },
  { ...saas, Body: SaaS },
  { ...disenoResponsive, Body: DisenoResponsive },
  { ...schemaMarkup, Body: SchemaMarkup },
];

/** Un post está publicado cuando su fecha ya pasó (en hora de Argentina). */
export function isPublished(post: { publishedAt: string }, now = new Date()): boolean {
  // publishedAt es YYYY-MM-DD. Lo anclamos a las 00:00 ART (UTC-3).
  return new Date(`${post.publishedAt}T00:00:00-03:00`) <= now;
}

/** Publicados, del más reciente al más antiguo. */
export function publishedPosts(now = new Date()): Post[] {
  return allPosts
    .filter((p) => isPublished(p, now))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** Hasta `limit` artículos publicados distintos del actual. */
export function relatedPosts(slug: string, limit = 3, now = new Date()): Post[] {
  return publishedPosts(now)
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00-03:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}
