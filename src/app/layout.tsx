import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground3DWrapper from "@/components/GlobalBackground3DWrapper";
import SpotlightCards from "@/components/SpotlightCards";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drivadev.com.ar"),
  title: {
    default: "Desarrollo Web a Medida en Argentina | Driva Dev",
    template: "%s | Driva Dev",
  },
  description:
    "Desarrollo web a medida en Argentina para empresas y emprendedores. Construimos sitios, aplicaciones web y sistemas desde cero. Sin plantillas, con acompañamiento real.",
  keywords: [
    "desarrollo web a medida",
    "diseñador web argentina",
    "desarrollador web argentina",
    "diseño web buenos aires",
    "aplicaciones web a medida",
    "desarrollo de software argentina",
    "programador web freelance",
    "agencia desarrollo web",
  ],
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
              "@type": ["Organization", "ProfessionalService"],
              name: "Driva Dev",
              url: "https://drivadev.com.ar",
              logo: "https://drivadev.com.ar/isotipo.svg",
              image: "https://drivadev.com.ar/logo-horizontal.svg",
              description:
                "Desarrollo web a medida en Argentina para empresas y emprendedores. Sitios, aplicaciones web y sistemas construidos desde cero.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              knowsLanguage: "es-AR",
              priceRange: "$$",
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
        <GlobalBackground3DWrapper />
        <SpotlightCards />
        <Navbar />
        <main id="main-content" className="relative" style={{ zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
