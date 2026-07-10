/** +54 9 11 3913-9022, en el formato que espera wa.me (sin signos ni espacios). */
export const WHATSAPP_NUMBER = "5491139139022";

/** Enlace a WhatsApp con el mensaje ya escrito en el chat del visitante. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Para CTAs genéricos, cuando no hay contexto de qué estaba leyendo. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola! Quería hacerles una consulta sobre un proyecto web.";

/** Para los enlaces dentro de los artículos del blog. */
export const WHATSAPP_BLOG_MESSAGE =
  "Hola! Los encontré por el blog de Driva Dev y quería hacerles una consulta.";
