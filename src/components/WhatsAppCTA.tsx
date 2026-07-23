import { whatsappHref } from "@/lib/whatsapp";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/i18n";
import WhatsAppIcon from "./WhatsAppIcon";

type Props = {
  /** Texto del botón. */
  label: string;
  /** Mensaje precargado en el chat. Por defecto, el genérico del idioma. */
  message?: string;
  /** Estilo del botón. `secondary` para el que acompaña a un CTA principal. */
  variant?: "primary" | "secondary";
  locale?: Locale;
  className?: string;
};

/** Botón que abre WhatsApp con el mensaje ya escrito. */
export default function WhatsAppCTA({
  label,
  message,
  variant = "primary",
  locale = defaultLocale,
  className = "",
}: Props) {
  const t = getDictionary(locale).whatsapp;

  return (
    <a
      href={whatsappHref(message ?? t.default)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${label} ${t.ariaSuffix}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
