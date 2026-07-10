import { WHATSAPP_DEFAULT_MESSAGE, whatsappHref } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

type Props = {
  /** Texto del botón. */
  label: string;
  /** Mensaje precargado en el chat. */
  message?: string;
  /** Estilo del botón. `secondary` para el que acompaña a un CTA principal. */
  variant?: "primary" | "secondary";
  className?: string;
};

/** Botón que abre WhatsApp con el mensaje ya escrito. */
export default function WhatsAppCTA({
  label,
  message = WHATSAPP_DEFAULT_MESSAGE,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${label} por WhatsApp (abre en nueva pestaña)`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
