import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceParticles from "@/components/SpaceParticles";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drivadev.com.ar"),
  title: {
    default: "Driva Dev — Tu presencia online, construida para crecer",
    template: "%s | Driva Dev",
  },
  description:
    "Desarrollamos sitios y aplicaciones web a medida para empresas y emprendedores argentinos. Investigamos tu negocio, proponemos la solución ideal y la construimos.",
  openGraph: {
    siteName: "Driva Dev",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Driva Dev" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/isotipo.svg", apple: "/isotipo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={firaSans.variable}>
      <body className="font-sans antialiased">
        {/* Fixed space background — spans entire viewport */}
        <SpaceParticles />

        <Navbar />
        <main id="main-content" className="relative" style={{ zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
