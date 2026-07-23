import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("services", "es");

export default function Page() {
  return <ServicesPage locale="es" />;
}
