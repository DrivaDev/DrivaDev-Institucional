export type PostMeta = {
  /** Segmento de URL: /blog/<slug> */
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
};

export type Post = PostMeta & {
  Body: React.ComponentType;
};
