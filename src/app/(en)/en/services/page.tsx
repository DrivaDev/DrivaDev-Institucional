import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("services", "en");

export default function Page() {
  return <ServicesPage locale="en" />;
}
