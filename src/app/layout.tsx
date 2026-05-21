import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    "Desarrollamos sitios y aplicaciones web a medida para empresas y emprendedores. Investigamos tu negocio y construimos la solución ideal.",
  openGraph: {
    siteName: "Driva Dev",
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/isotipo.svg", apple: "/isotipo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={firaSans.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Driva Dev",
              url: "https://drivadev.com.ar",
              logo: "https://drivadev.com.ar/isotipo.svg",
              description:
                "Desarrollamos sitios y aplicaciones web a medida para empresas y emprendedores.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-11-3913-9022",
                email: "driva.devv@gmail.com",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: ["https://www.instagram.com/driva.dev"],
            }),
          }}
        />
        <Navbar />
        <main id="main-content" className="relative" style={{ zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
