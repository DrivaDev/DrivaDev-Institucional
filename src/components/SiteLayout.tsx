import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground3DWrapper from "@/components/GlobalBackground3DWrapper";
import SpotlightCards from "@/components/SpotlightCards";
import { getDictionary } from "@/content/i18n";
import { ogLocale, SITE_URL, type Locale } from "@/lib/i18n";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-fira",
  display: "swap",
});

/**
 * Metadata base de cada idioma. La usa el root layout de su grupo de rutas:
 * `(es)` sirve la raíz y `(en)` sirve todo lo que cuelga de /en.
 */
export function siteMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.defaultTitle,
      template: t.titleTemplate,
    },
    description: t.defaultDescription,
    keywords: t.keywords,
    openGraph: {
      siteName: "Driva Dev",
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    icons: { icon: "/isotipo.svg", apple: "/isotipo.svg" },
  };
}

/**
 * Estructura común de las dos versiones del sitio. Vive fuera de `app/` porque
 * hay dos root layouts —uno por idioma— y solo cambian el `lang` y el
 * diccionario que reciben los componentes.
 */
export default function SiteLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Driva Dev",
    url: SITE_URL,
    logo: `${SITE_URL}/isotipo.svg`,
    image: `${SITE_URL}/logo-horizontal.svg`,
    description: dict.meta.organizationDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed:
      locale === "en"
        ? [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Argentina" },
          ]
        : { "@type": "Country", name: "Argentina" },
    knowsLanguage: locale === "en" ? ["en-US", "es-AR"] : "es-AR",
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-11-3913-9022",
      email: "driva.devv@gmail.com",
      contactType: "customer service",
      availableLanguage: dict.meta.availableLanguage,
    },
    sameAs: ["https://www.instagram.com/driva.dev"],
  };

  return (
    <html lang={locale} className={firaSans.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GlobalBackground3DWrapper />
        <SpotlightCards />
        <Navbar locale={locale} t={dict.nav} />
        <main id="main-content" className="relative" style={{ zIndex: 1 }}>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
