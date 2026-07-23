import type { Metadata } from "next";
import "../globals.css";
import SiteLayout, { siteMetadata } from "@/components/SiteLayout";

export const metadata: Metadata = siteMetadata("en");

/** Root layout de la versión en inglés: todo lo que cuelga de `/en`. */
export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
