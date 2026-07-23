import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Desarrollo Web a Medida en Buenos Aires",
  description:
    "Desarrolladores web en Buenos Aires. Sitios, sistemas y aplicaciones a medida para empresas de CABA y GBA. Código propio, sin plantillas. Presupuesto sin costo.",
  keywords: [
    "desarrollo web buenos aires",
    "diseñador web buenos aires",
    "desarrollador web caba",
    "programador web buenos aires",
    "agencia desarrollo web buenos aires",
    "diseño web zona norte",
    "paginas web caba",
  ],
  openGraph: {
    title: "Desarrollo Web a Medida en Buenos Aires | Driva Dev",
    description:
      "Desarrolladores web en Buenos Aires. Sitios y sistemas a medida para empresas de CABA y GBA.",
    url: "https://drivadev.com.ar/desarrollo-web-buenos-aires",
  },
  alternates: { canonical: "https://drivadev.com.ar/desarrollo-web-buenos-aires" },
};

function Icon({ path }: { path: string }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={path} />
    </svg>
  );
}

const localAdvantages = [
  {
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Misma zona horaria",
    body: "Cuando escribís a las 10 de la mañana, hay alguien despierto. No esperás 12 horas por una respuesta ni coordinás reuniones a las 3 de la madrugada.",
  },
  {
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Facturación en pesos",
    body: "Cobramos en moneda local, con factura argentina. Sin conversiones, sin retenciones sorpresa ni intermediarios de pago internacional.",
  },
  {
    iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Conocemos el mercado",
    body: "Sabemos qué medios de pago usa la gente acá, cómo funciona la logística en el conurbano y qué espera un cliente argentino de una web.",
  },
  {
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Podemos vernos las caras",
    body: "Trabajamos a distancia sin problema, pero si tu proyecto lo pide, nos sentamos en una mesa. A veces una hora presencial ahorra tres semanas de idas y vueltas.",
  },
];

const faqs = [
  {
    q: "¿Trabajan solo con empresas de Buenos Aires?",
    a: "No. Trabajamos con clientes de todo el país y del exterior. Lo que ofrecemos a las empresas de Buenos Aires es la posibilidad de reunirnos presencialmente cuando el proyecto lo justifica, además de compartir zona horaria y contexto de mercado.",
  },
  {
    q: "¿Atienden en CABA y en el Gran Buenos Aires?",
    a: "Sí. Trabajamos con negocios de la Ciudad Autónoma de Buenos Aires y de todo el conurbano, zona norte, oeste y sur. La mayor parte del proceso es remota, con reuniones presenciales cuando hacen falta.",
  },
  {
    q: "¿Tienen oficina para visitar?",
    a: "Somos un equipo chico que trabaja de forma distribuida, así que no atendemos al público en una oficina fija. Coordinamos reuniones presenciales en el lugar que le quede cómodo al cliente, o por videollamada si preferís.",
  },
  {
    q: "¿Cuánto cuesta una página web en Buenos Aires?",
    a: "Depende del alcance real del proyecto y no de la ubicación. Un sitio institucional, una tienda online y un sistema de gestión tienen complejidades muy distintas. No damos un precio antes de entender tu negocio. La propuesta inicial no tiene costo ni compromiso.",
  },
  {
    q: "¿Pueden ayudarme a aparecer en Google cuando buscan mi rubro en mi barrio?",
    a: "Sí. Todo sitio que entregamos incluye SEO on-code, y en los proyectos con foco local trabajamos los datos estructurados de negocio local, la coherencia de tus datos de contacto y el contenido orientado a búsquedas con intención geográfica.",
  },
  {
    q: "¿En cuánto tiempo está listo mi sitio?",
    a: "Un sitio institucional suele tomar semanas y un sistema de gestión, meses. El plazo se define en la propuesta, después de la etapa de investigación, y no lo movemos sin avisarte.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://drivadev.com.ar/desarrollo-web-buenos-aires#localbusiness",
  name: "Driva Dev",
  url: "https://drivadev.com.ar/desarrollo-web-buenos-aires",
  logo: "https://drivadev.com.ar/isotipo.svg",
  image: "https://drivadev.com.ar/logo-horizontal.svg",
  description:
    "Desarrollo web a medida en Buenos Aires. Sitios institucionales, tiendas online, sistemas de gestión y plataformas SaaS para empresas de CABA y Gran Buenos Aires.",
  telephone: "+54-11-3913-9022",
  email: "driva.devv@gmail.com",
  priceRange: "$$",
  knowsLanguage: "es-AR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  areaServed: [
    { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  serviceType: [
    "Desarrollo web a medida",
    "Diseño web",
    "Desarrollo de sistemas de gestión",
    "Mantenimiento web",
    "Hosting web administrado",
  ],
  sameAs: ["https://www.instagram.com/driva.dev"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://drivadev.com.ar" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Desarrollo web en Buenos Aires",
      item: "https://drivadev.com.ar/desarrollo-web-buenos-aires",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function DesarrolloWebBuenosAiresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== HERO ===== */}
      <section className="pt-36 pb-16">
        <div className="container-main">
          <ScrollReveal>
            <nav aria-label="Miga de pan" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
                <li>
                  <Link href="/" className="hover:text-principal transition-colors">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Desarrollo web en Buenos Aires</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                CABA y Gran Buenos Aires
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                Desarrollo web a medida en Buenos Aires
              </h1>
              <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mb-10">
                Somos desarrolladores argentinos. Construimos sitios, sistemas y aplicaciones
                web desde cero para empresas y emprendedores de Buenos Aires, sin plantillas y
                sin intermediarios. Hablás siempre con quien escribe el código.
              </p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTA
                  label="Pedir presupuesto"
                  message="Hola! Soy de Buenos Aires y quería pedirles un presupuesto para un proyecto web."
                />
                <Link href="/portafolio" className="btn-secondary">
                  Ver proyectos
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== POR QUÉ UN EQUIPO LOCAL ===== */}
      <section className="section" aria-labelledby="local-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <h2 id="local-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Por qué importa que tu desarrollador esté acá
              </h2>
              <p className="text-white/65 leading-relaxed">
                Contratar afuera puede parecer más barato hasta que necesitás un cambio
                urgente un martes a las 9 de la mañana. La cercanía no es un detalle
                sentimental: es velocidad de respuesta y contexto compartido.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localAdvantages.map(({ iconPath, title, body }, i) => (
              <ScrollReveal key={title} delay={(i % 2) * 100}>
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
        </div>
      </section>

      {/* ===== PROYECTOS LOCALES ===== */}
      <section className="section" aria-labelledby="proyectos-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <h2 id="proyectos-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Trabajo hecho para negocios argentinos
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                No mostramos maquetas ni casos de estudio inventados. Construimos el sistema
                de comercio exterior de <strong className="text-acento/90">Wet Corp</strong>,
                que conecta importadores, proveedores y despachantes con seguimiento de gastos
                en pesos y dólares. Un flujo que ninguna plantilla del mundo contempla, porque
                responde a cómo se importa acá.
              </p>
              <p className="text-white/65 leading-relaxed mb-4">
                Desarrollamos el sitio de{" "}
                <strong className="text-acento/90">Running Team Cup</strong>, la competencia
                argentina de running por equipos, con soporte multiidioma para corredores del
                exterior.
              </p>
              <p className="text-white/65 leading-relaxed">
                Y operamos nuestros propios productos:{" "}
                <strong className="text-acento/90">Turnly</strong> para peluquerías, estéticas
                y consultorios, y <strong className="text-acento/90">MenuDig</strong> para la
                gastronomía. Pagamos sus costos y respondemos su soporte, así que las
                decisiones técnicas que tomamos en tu proyecto las tomamos también en el
                nuestro.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="glass-card p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-principal mb-5">
                  Lo que desarrollamos
                </p>
                <ul className="space-y-4">
                  {[
                    "Sitios institucionales que captan desde Google",
                    "Tiendas online con medios de pago locales",
                    "Sistemas de gestión internos a medida",
                    "Plataformas SaaS con suscripciones",
                    "Menús y catálogos digitales por QR",
                    "Integraciones con facturación, ERP y CRM",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <svg
                        className="w-5 h-5 text-principal flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-principal mt-7 hover:gap-3 transition-all"
                >
                  Ver todos los servicios
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SEO LOCAL ===== */}
      <section className="section" aria-labelledby="seo-local-heading">
        <div className="container-main">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 id="seo-local-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Que te encuentren cuando buscan tu rubro en tu zona
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                La mayoría de las búsquedas que terminan en una venta tienen intención
                geográfica. Alguien no busca contador: busca contador en Villa Urquiza. Si tu
                sitio no le dice a Google dónde trabajás y a quién servís, esa búsqueda se la
                lleva otro.
              </p>
              <p className="text-white/65 leading-relaxed mb-4">
                Todos nuestros proyectos salen con SEO on-code de primer nivel: estructura
                semántica correcta, velocidad optimizada, datos estructurados y metadatos
                únicos por página. En los proyectos con foco local sumamos el schema de
                negocio local, la coherencia de tus datos de contacto en toda la web y
                contenido pensado para búsquedas con ubicación.
              </p>
              <p className="text-white/65 leading-relaxed">
                Si querés entender cómo funciona esto por dentro, lo explicamos sin vueltas en{" "}
                <Link
                  href="/blog/que-es-el-seo-on-code"
                  className="text-principal font-medium underline underline-offset-4 decoration-principal/40 hover:decoration-principal"
                >
                  qué es el SEO on-code
                </Link>{" "}
                y en{" "}
                <Link
                  href="/blog/schema-markup-resultados-enriquecidos"
                  className="text-principal font-medium underline underline-offset-4 decoration-principal/40 hover:decoration-principal"
                >
                  cómo aparecer en los resultados enriquecidos de Google
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" aria-labelledby="faq-local-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 id="faq-local-heading" className="text-3xl md:text-4xl font-bold text-acento">
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
      <section className="section" aria-labelledby="cta-local">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-local" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              ¿Arrancamos con tu proyecto?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
              Contanos qué necesita tu negocio. Te respondemos en menos de 24 horas con una
              perspectiva honesta, sin costo ni compromiso.
            </p>
            <WhatsAppCTA
              label="Hablar de mi proyecto"
              message="Hola! Soy de Buenos Aires y tengo un proyecto web en mente."
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
