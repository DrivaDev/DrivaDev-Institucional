import type { Metadata } from "next";
import { alternatesFor, routeUrl, type Locale, type RouteKey } from "@/lib/i18n";
import { getDictionary } from "@/content/i18n";

/** Páginas cuyo texto de metadatos vive en el diccionario. */
type MetaRouteKey = Extract<
  RouteKey,
  "home" | "services" | "portfolio" | "contact" | "blog"
>;

/**
 * Metadatos de una página: título, descripción, Open Graph, canónica y los
 * `hreflang` de todos los idiomas en que existe.
 */
export function pageMetadata(key: MetaRouteKey, locale: Locale): Metadata {
  const t = getDictionary(locale)[key];

  return {
    // El `metaTitle` de la home ya trae la marca, así que se salta el template
    // del layout; si no, terminaría en "... | Driva Dev | Driva Dev".
    title: key === "home" ? { absolute: t.metaTitle } : t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: routeUrl(key, locale),
    },
    alternates: alternatesFor(key, locale),
  };
}
