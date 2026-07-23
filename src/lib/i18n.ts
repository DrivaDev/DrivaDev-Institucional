/**
 * Configuración de idiomas del sitio.
 *
 * El español vive en la raíz (`/servicios`) y el inglés bajo `/en`
 * (`/en/services`). Las URLs en español no cambian: las que Google ya tiene
 * indexadas siguen siendo las mismas, sin redirecciones de por medio.
 */

export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const SITE_URL = "https://drivadev.com.ar";

/** Código que va en `hreflang` y en `og:locale`. */
export const hreflang: Record<Locale, string> = {
  es: "es-AR",
  en: "en-US",
};

export const ogLocale: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
};

/** Nombre del idioma en su propio idioma, para el selector. */
export const localeName: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export type RouteKey =
  | "home"
  | "services"
  | "portfolio"
  | "blog"
  | "contact"
  | "localBA";

/**
 * Ruta de cada página por idioma. `null` = esa página no existe en ese idioma
 * (y por lo tanto no lleva `hreflang` ni entra al selector).
 */
export const routes: Record<RouteKey, Record<Locale, string | null>> = {
  home: { es: "/", en: "/en" },
  services: { es: "/servicios", en: "/en/services" },
  portfolio: { es: "/portafolio", en: "/en/portfolio" },
  blog: { es: "/blog", en: "/en/blog" },
  contact: { es: "/contacto", en: "/en/contact" },
  // Landing local: solo tiene sentido en español.
  localBA: { es: "/desarrollo-web-buenos-aires", en: null },
};

/** Ruta relativa de una página. Cae al idioma por defecto si no está traducida. */
export function path(key: RouteKey, locale: Locale): string {
  return routes[key][locale] ?? routes[key][defaultLocale]!;
}

/** URL absoluta, sin barra final (la home queda `https://drivadev.com.ar`). */
export function absoluteUrl(pathname: string): string {
  return pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
}

export function routeUrl(key: RouteKey, locale: Locale): string {
  return absoluteUrl(path(key, locale));
}

/**
 * `alternates` de Next: canónica del idioma actual más un `hreflang` por cada
 * idioma en que la página existe. `x-default` apunta siempre al español.
 */
export function alternatesFor(key: RouteKey, locale: Locale) {
  const languages: Record<string, string> = {};

  for (const l of locales) {
    if (routes[key][l]) languages[hreflang[l]] = routeUrl(key, l);
  }
  languages["x-default"] = routeUrl(key, defaultLocale);

  return { canonical: routeUrl(key, locale), languages };
}

/** El otro idioma. Con dos locales alcanza; si se suma un tercero, revisar. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/**
 * Equivalente de `pathname` en `target`. Si la página actual no existe en el
 * otro idioma (un artículo del blog, la landing de Buenos Aires), cae a la
 * sección más cercana en lugar de a un 404.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/+$/, "") || "/";

  for (const key of Object.keys(routes) as RouteKey[]) {
    for (const l of locales) {
      if (routes[key][l] === clean) {
        return routes[key][target] ?? path("home", target);
      }
    }
  }

  // Artículos del blog: todavía solo existen en español.
  if (clean.startsWith("/blog/") || clean.startsWith("/en/blog/")) {
    return path("blog", target);
  }

  return path("home", target);
}
