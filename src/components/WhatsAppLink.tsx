import { WHATSAPP_BLOG_MESSAGE, whatsappHref } from "@/lib/whatsapp";

/** Enlace a WhatsApp para usar dentro del texto de un artículo. */
export default function WhatsAppLink({
  children,
  message = WHATSAPP_BLOG_MESSAGE,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
