import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("portfolio", "en");

export default function Page() {
  return <PortfolioPage locale="en" />;
}
