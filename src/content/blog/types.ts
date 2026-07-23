import type { Locale } from "@/lib/i18n";

export type PostMeta = {
  /**
   * Idioma del artículo. Se omite en los archivos de post: el registro de
   * `posts.ts` completa `"es"`, que es lo que son todos hoy.
   */
  locale?: Locale;
  /** Segmento de URL: /blog/<slug> (los de inglés cuelgan de /en/blog/<slug>) */
  slug: string;
  /** H1 del artículo */
  title: string;
  /** <title> del documento. El template de layout agrega " | Driva Dev". */
  metaTitle: string;
  /** Meta description, apuntar a ~155 caracteres. */
  description: string;
  /** Fecha de publicación ISO (YYYY-MM-DD). Siempre un lunes. */
  publishedAt: string;
  /** Minutos estimados de lectura. */
  readingMinutes: number;
  category: string;
  keywords: string[];
  /**
   * Titular de la imagen OG, partido en dos para el bicolor de marca.
   * [texto en color acento, texto en color principal]
   */
  ogHeadline: [string, string];
  /**
   * Texto alternativo de la portada. Describe la foto, no repite el título.
   * La ruta del archivo sale del slug: ver `coverSrc()`.
   */
  coverAlt: string;
};

export type Post = PostMeta & {
  locale: Locale;
  Body: React.ComponentType;
};
