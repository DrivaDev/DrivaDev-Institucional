/** +54 9 11 3913-9022, en el formato que espera wa.me (sin signos ni espacios). */
export const WHATSAPP_NUMBER = "5491139139022";

/** Enlace a WhatsApp con el mensaje ya escrito en el chat del visitante. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Para los enlaces dentro de los artículos del blog, que hoy son todos en
 * español. El resto de los mensajes vive en el diccionario de cada idioma
 * (`content/i18n/*.ts`, rama `whatsapp`).
 */
export const WHATSAPP_BLOG_MESSAGE =
  "Hola! Los encontré por el blog de Driva Dev y quería hacerles una consulta.";
