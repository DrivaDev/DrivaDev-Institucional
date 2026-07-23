import type { Locale } from "@/lib/i18n";
import es from "./es";
import en from "./en";

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

/**
 * Diccionario del idioma pedido. Es síncrono a propósito: los diccionarios son
 * chicos y viajan en el bundle del servidor, así que no hace falta `await`.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { es, en };
