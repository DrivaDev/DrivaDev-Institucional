import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata("home", "es");

export default function Page() {
  return <HomePage locale="es" />;
}
