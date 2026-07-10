import type { Metadata } from "next";
import Link from "next/link";
import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web a Medida en Argentina",
  description:
    "Desarrollo web a medida en Argentina: sitios, tiendas online, sistemas y aplicaciones web desde cero. Planes de mantenimiento mensual y hosting incluidos. Sin plantillas.",
  openGraph: {
    title: "Servicios de Desarrollo Web a Medida | Driva Dev",
    description: "Desarrollo web a medida, mantenimiento mensual y hosting en Argentina. Código propio, sin plantillas.",
    url: "https://drivadev.com.ar/servicios",
  },
  alternates: { canonical: "https://drivadev.com.ar/servicios" },
};

function Icon({ path }: { path: string }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={path} />
    </svg>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Investigación",
    body: "Conocemos tu negocio, tu público objetivo, tu competencia y tus objetivos reales. No proponemos nada hasta tener ese panorama claro.",
  },
  {
    step: "02",
    title: "Propuesta a medida",
    body: "Con ese contexto, diseñamos una solución específica para vos: qué construir, cómo, con qué tecnología y en qué tiempo.",
  },
  {
    step: "03",
    title: "Desarrollo",
    body: "Construimos el proyecto con atención al detalle, comunicación constante y foco en la calidad del resultado final.",
  },
  {
    step: "04",
    title: "Entrega y acompañamiento",
    body: "Lanzamos juntos y te acompañamos en los primeros pasos. El proyecto sigue siendo nuestro cuando más lo necesitás.",
  },
];

const devFeatures = [
  { iconPath: "M13 10V3L4 14h7v7l9-11h-7z", label: "Performance" },
  { iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "100% responsive" },
  { iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "SEO optimizado" },
  { iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", label: "Accesible" },
  { iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Seguro" },
  { iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", label: "Diseño propio" },
];

const maintFeatures = [
  "Modificaciones de contenido y diseño incluidas",
  "Actualizaciones de seguridad y dependencias",
  "Monitoreo de disponibilidad",
  "Soporte por WhatsApp y email",
  "Respaldo periódico del sitio",
];

const hostingFeatures = [
  { iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "SSL incluido", body: "Certificado de seguridad activo en todo momento." },
  { iconPath: "M13 10V3L4 14h7v7l9-11h-7z", title: "Alta velocidad", body: "Servidores optimizados para tiempos de carga mínimos." },
  { iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Panel de control", body: "Acceso completo para ver el estado de tu sitio." },
];

const projectTypes = [
  {
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Sitios institucionales",
    body: "Tu empresa presentada con claridad y credibilidad. Es la puerta de entrada de quien te busca en Google, y bien construido capta clientes las 24 horas.",
  },
  {
    iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Tiendas online",
    body: "Catálogo, carrito, medios de pago y gestión de stock. La transacción completa, de punta a punta, sin intermediarios ni comisiones de plataformas.",
  },
  {
    iconPath: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Sistemas de gestión",
    body: "Software interno que reemplaza planillas y cadenas de correos. Usuarios, permisos, estados y el flujo real de trabajo de tu empresa.",
  },
  {
    iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    title: "Plataformas SaaS",
    body: "Cuando el software es tu producto. Suscripciones, aislamiento de datos y escalabilidad. Construimos y operamos los nuestros, así que sabemos lo que implica.",
  },
  {
    iconPath: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
    title: "Menús y catálogos digitales",
    body: "Accesibles por QR o URL, con gestión propia de productos, fotos y diseño. Sin apps que descargar ni PDFs que nadie lee en el celular.",
  },
  {
    iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    title: "Integraciones a medida",
    body: "Conectamos tu web con los sistemas que ya usás: medios de pago, facturación, ERP, CRM o cualquier API de terceros.",
  },
];

const standards = [
  {
    title: "Estructura semántica perfecta",
    body: "El HTML se escribe para que Google y los lectores de pantalla entiendan cada parte de la página. Sin errores, sin cajas genéricas.",
  },
  {
    title: "Velocidad garantizada",
    body: "Optimizamos las Core Web Vitals desde el primer commit. El navegador descarga solo lo que tu página necesita, nada más.",
  },
  {
    title: "SEO on-code de primer nivel",
    body: "Metadatos únicos, datos estructurados, sitemap, URLs canónicas. No es un servicio que se cotiza aparte: viene en todo lo que entregamos.",
  },
  {
    title: "Experiencia de usuario cuidada",
    body: "Cada interacción se piensa. La forma en que un sitio se siente es parte de lo que tu cliente compra.",
  },
  {
    title: "100% responsive",
    body: "La mayoría de tus visitas llega desde un celular, y Google indexa esa versión. Diseñamos para esa realidad, no la parcheamos después.",
  },
  {
    title: "Cumplimiento legal",
    body: "Los requisitos legales que corresponden a tu sitio quedan resueltos antes de salir al aire, no después del primer reclamo.",
  },
];

const faqs = [
  {
    q: "¿Qué tipo de sitios y aplicaciones web desarrollan?",
    a: "Desarrollamos cualquier tipo de sitio o aplicación web: sitios institucionales, tiendas online, sistemas de gestión, plataformas SaaS y más. Cada proyecto se construye desde cero, sin plantillas, adaptado a las necesidades específicas de cada negocio.",
  },
  {
    q: "¿Cuánto cuesta desarrollar una página web?",
    a: "Depende del alcance real del proyecto: el tipo de sitio, cuánto hay que diseñar desde cero, las integraciones con otros sistemas y el contenido. No damos un precio antes de entender tu negocio, porque sería un número inventado. La propuesta inicial no tiene costo ni compromiso.",
  },
  {
    q: "¿Qué incluye el plan de mantenimiento mensual?",
    a: "Los planes de mantenimiento incluyen modificaciones de contenido y diseño, actualizaciones de seguridad y dependencias, monitoreo de disponibilidad, soporte por WhatsApp y email, y respaldo periódico del sitio. Si en el mes sobran modificaciones, las usamos para analizar y mejorar el SEO de tu sitio.",
  },
  {
    q: "¿Ofrecen servicio de hosting?",
    a: "Sí. Gestionamos el hosting para los sitios desarrollados por Driva Dev. Nos encargamos del servidor, certificados SSL, dominios y toda la configuración técnica, con alta velocidad y panel de control incluido. No es obligatorio: podés llevarte el sitio a donde quieras.",
  },
  {
    q: "¿El código fuente queda a mi nombre?",
    a: "Sí. El código, el dominio y el hosting son tuyos. No trabajamos con dependencias ni candados: si algún día querés seguir con otro equipo, te llevás todo sin pedirnos permiso.",
  },
  {
    q: "¿Usan WordPress o plantillas?",
    a: "No. Cada proyecto se escribe desde cero con el stack más adecuado para el caso. Las plantillas cargan código que tu sitio nunca usa, y eso se paga en velocidad y en posicionamiento.",
  },
  {
    q: "¿Cómo es el proceso de desarrollo?",
    a: "El proceso tiene cuatro etapas: investigación del negocio y objetivos, propuesta a medida con tecnología y tiempos definidos, desarrollo con comunicación constante, y entrega con acompañamiento en el lanzamiento.",
  },
  {
    q: "¿Con quién hablo durante el proyecto?",
    a: "Con quien desarrolla. Somos un equipo chico y trabajamos de forma directa: sin cuentas de agencia, sin intermediarios y sin que la información se pierda en el camino.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://drivadev.com.ar" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://drivadev.com.ar/servicios" },
  ],
};

const provider = {
  "@type": "Organization",
  name: "Driva Dev",
  url: "https://drivadev.com.ar",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Desarrollo web a medida",
      serviceType: "Desarrollo de sitios y aplicaciones web",
      description:
        "Sitios institucionales, tiendas online, sistemas de gestión y plataformas SaaS construidos desde cero, sin plantillas.",
      provider,
      areaServed: { "@type": "Country", name: "Argentina" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Mantenimiento web mensual",
      serviceType: "Mantenimiento y soporte de sitios web",
      description:
        "Planes mensuales con modificaciones de contenido y diseño incluidas, actualizaciones de seguridad, monitoreo y respaldo.",
      provider,
      areaServed: { "@type": "Country", name: "Argentina" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Hosting web administrado",
      serviceType: "Hosting y administración de servidores",
      description:
        "Gestión de servidor, certificados SSL, dominios y configuración técnica con alta velocidad y panel de control.",
      provider,
      areaServed: { "@type": "Country", name: "Argentina" },
    },
  ],
};

export default function ServiciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)]">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                  Servicios
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                  Desarrollo web a medida para empresas y emprendedores
                </h1>
                <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
                  Desarrollamos cualquier tipo de sitio o aplicación web. No usamos plantillas ni
                  soluciones genéricas: cada proyecto se diseña y construye desde cero, pensado
                  específicamente para tu negocio, tu industria y tus objetivos.
                </p>
              </ScrollReveal>
            </div>

            <RootFigure
              src="/root-senalando.webp"
              alt="Root, la mascota de Driva Dev, señalando al frente"
              width={640}
              height={1203}
              groundShadow
            />
          </div>
        </div>
      </section>

      {/* ===== DESARROLLO PRINCIPAL ===== */}
      <section className="section" aria-labelledby="dev-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <h2 id="dev-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Cualquier idea, hecha realidad
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                El alcance de cada proyecto se define con vos. No listamos tipos de sitio porque
                la realidad es más amplia que cualquier categoría: si lo podés imaginar para tu
                negocio en la web, lo podemos construir.
              </p>
              <p className="text-white/65 leading-relaxed mb-4">
                Usamos las tecnologías más modernas y eficientes del mercado, adaptadas a las
                necesidades reales de cada proyecto. Nada más, nada menos.
              </p>
              <p className="text-white/65 leading-relaxed">
                Cada entregable es tuyo: código fuente, dominio, hosting. Sin dependencias ni
                candados con nosotros.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {devFeatures.map(({ iconPath, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 glass-card !rounded-xl px-4 py-3"
                  >
                    <div className="text-principal flex-shrink-0">
                      <Icon path={iconPath} />
                    </div>
                    <span className="text-sm font-medium text-white/80">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE PROYECTO ===== */}
      <section className="section" aria-labelledby="tipos-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <h2 id="tipos-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Qué tipo de proyectos desarrollamos
              </h2>
              <p className="text-white/65 leading-relaxed">
                Estas son las categorías más frecuentes, pero la lista no es un menú cerrado.
                Lo que define el proyecto no es la etiqueta: es el problema que tenés que
                resolver.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map(({ iconPath, title, body }, i) => (
              <ScrollReveal key={title} delay={(i % 3) * 90}>
                <div className="card-project h-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-principal/20 rounded-xl mb-4 text-principal">
                    <Icon path={iconPath} />
                  </div>
                  <h3 className="text-base font-bold text-acento mb-2">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={270}>
            <p className="text-sm text-white/50 leading-relaxed mt-10 max-w-2xl">
              ¿No sabés en cuál encaja tu caso? Lo desarrollamos en{" "}
              <Link
                href="/blog/sitio-institucional-tienda-online-o-sistema-de-gestion"
                className="text-principal font-medium underline underline-offset-4 decoration-principal/40 hover:decoration-principal"
              >
                esta guía para elegir qué tipo de web necesita tu negocio
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ESTÁNDARES ===== */}
      <section className="section" aria-labelledby="estandares-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                No negociable
              </span>
              <h2 id="estandares-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Lo que entregamos siempre, sin excepción
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                Hay cosas que no dependen del presupuesto ni del tamaño del proyecto. Son
                requisitos internos que cumplimos en cada entrega, cobremos lo que cobremos.
              </p>
              <p className="text-white/65 leading-relaxed">
                No las listamos para venderte nada. Las listamos para que sepas qué tenés
                derecho a exigirle a cualquiera que te desarrolle un sitio, incluidos
                nosotros.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="divide-y divide-white/10">
                {standards.map(({ title, body }) => (
                  <div key={title} className="py-5 flex gap-4">
                    <svg
                      className="w-5 h-5 text-principal flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-acento mb-1.5">{title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MANTENIMIENTO ===== */}
      <section id="mantenimiento" className="section" aria-labelledby="mant-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal delay={120} className="order-2 lg:order-1">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-principal/20 rounded-xl flex items-center justify-center text-principal">
                    <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-principal">Mantenimiento</span>
                </div>
                <ul className="space-y-4">
                  {maintFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <svg className="w-5 h-5 text-principal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <h2 id="mant-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Tu web, siempre al día
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                Lanzar el sitio es el principio. Con nuestros planes de mantenimiento mensual, tu
                presencia online se mantiene actualizada, segura y funcionando sin que tengas que
                preocuparte por nada técnico.
              </p>
              <p className="text-white/65 leading-relaxed">
                Las modificaciones están incluidas: si necesitás actualizar precios, agregar un
                producto, cambiar un texto o incorporar una nueva sección, lo resolvemos dentro
                del plan.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HOSTING ===== */}
      <section id="hosting" className="section" aria-labelledby="hosting-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <h2 id="hosting-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Instalá y olvidate
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                Ofrecemos hosting para los sitios desarrollados por Driva Dev. Gestionamos el
                servidor, los certificados SSL, los dominios y cualquier configuración técnica.
              </p>
              <p className="text-white/65 leading-relaxed">
                Vos te enfocás en tu negocio. Nosotros nos aseguramos de que tu sitio esté
                siempre en línea, rápido y seguro.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="space-y-4">
                {hostingFeatures.map(({ iconPath, title, body }) => (
                  <div key={title} className="flex gap-4 items-start glass-card !rounded-2xl p-5">
                    <div className="w-9 h-9 bg-principal/20 rounded-lg flex items-center justify-center text-principal flex-shrink-0">
                      <Icon path={iconPath} />
                    </div>
                    <div>
                      <p className="font-bold text-acento text-sm">{title}</p>
                      <p className="text-xs text-white/55 mt-0.5">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="section" aria-labelledby="proceso-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 id="proceso-heading" className="text-3xl md:text-4xl font-bold text-acento">
                Cómo trabajamos
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ step, title, body }, i) => (
              <ScrollReveal key={step} delay={i * 90}>
                <div className="glass-card p-6 h-full">
                  <span className="text-4xl font-bold text-principal/30 block mb-4">{step}</span>
                  <h3 className="font-bold text-acento mb-2">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-acento">
                Preguntas frecuentes
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }, i) => (
              <ScrollReveal key={q} delay={Math.min(i, 4) * 60}>
                <details className="glass-card !rounded-2xl group">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-bold text-acento text-sm md:text-base">
                    {q}
                    <svg
                      className="w-5 h-5 text-principal flex-shrink-0 transition-transform group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" aria-labelledby="cta-servicios">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-servicios" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              ¿Querés saber qué podemos hacer por tu negocio?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Contanos tu idea y armamos una propuesta específica para vos. Sin costo ni compromiso.
            </p>
            <WhatsAppCTA
              label="Solicitar propuesta"
              message="Hola! Vi sus servicios y quería pedirles una propuesta para mi negocio."
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
