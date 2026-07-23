import type { Metadata } from "next";
import "../globals.css";
import SiteLayout, { siteMetadata } from "@/components/SiteLayout";

export const metadata: Metadata = siteMetadata("es");

/**
 * Root layout del sitio en español, que vive en la raíz del dominio.
 * El inglés tiene el suyo en `(en)/layout.tsx`: son dos root layouts, así que
 * cada uno declara su propio `<html lang>`.
 */
export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="es">{children}</SiteLayout>;
}
