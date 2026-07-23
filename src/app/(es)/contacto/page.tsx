import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("contact", "es");

export default function Page() {
  return <ContactPage locale="es" />;
}
