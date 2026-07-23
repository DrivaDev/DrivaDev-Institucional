import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("contact", "en");

export default function Page() {
  return <ContactPage locale="en" />;
}
