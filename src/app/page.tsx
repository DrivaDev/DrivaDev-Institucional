import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { COVER_HEIGHT, COVER_WIDTH, coverSrc, publishedPosts } from "@/content/blog/posts";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Desarrollo Web a Medida en Argentina | Driva Dev",
  description:
    "Desarrollo web a medida en Argentina para empresas y emprendedores. Construimos sitios, aplicaciones web y sistemas desde cero. Sin plantillas, con acompañamiento real.",
  openGraph: {
    title: "Desarrollo Web a Medida en Argentina | Driva Dev",
    description: "Desarrollamos sitios y aplicaciones web a medida para empresas y emprendedores argentinos. Sin plantillas, código propio.",
    url: "https://drivadev.com.ar",
  },
  alternates: { canonical: "https://drivadev.com.ar" },
};

// SVG icon helper
function Icon({ path, fill = false }: { path: string; fill?: boolean }) {
  return (
    <svg
      className="w-5 h-5"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={fill ? undefined : 1.8} d={path} />
    </svg>
  );
}

const whyUs = [
  {
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Investigamos antes de proponer",
    body: "No hacemos una cotización hasta entender quién sos, qué vendés y qué necesitás realmente.",
  },
  {
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "100% código propio",
    body: "Nada de plantillas ni constructores. Cada línea está escrita para tu proyecto específico.",
  },
  {
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Relación directa con el dev",
    body: "Hablás siempre con quien desarrolla. Sin intermediarios, sin malentendidos.",
  },
  {
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Acompañamiento continuo",
    body: "El lanzamiento es el inicio. Mantenimiento y soporte para que nunca quedes solo.",
  },
];

const servicesPreview = [
  {
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Desarrollo a medida",
    body: "Sitios, tiendas, sistemas y aplicaciones web construidos desde cero según tu necesidad.",
    href: "/servicios",
  },
  {
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Mantenimiento",
    body: "Planes mensuales con modificaciones incluidas. Tu web siempre actualizada y segura.",
    href: "/servicios#mantenimiento",
  },
  {
    iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    title: "Hosting",
    body: "Gestionamos el servidor por vos. Instalá y olvidate de la parte técnica.",
    href: "/servicios#hosting",
  },
];

const portfolioPreview = [
  {
    name: "Turnly",
    tag: "SaaS · Gestión de turnos",
    description:
      "Software de gestión de turnos para peluquerías, estéticas y consultorios. Completamente personalizable, diseñado mano a mano con el cliente.",
    url: "https://turnly.com.ar",
  },
  {
    name: "MenuDig",
    tag: "SaaS · Gastronomía",
    description:
      "Menú digital para restaurantes y cafeterías accesible por QR o URL. Gestión de platos, fotos, categorías y diseño del menú.",
    url: "https://menudig.com.ar",
  },
];

const businessUnits = [
  {
    label: "Productos propios",
    title: "Construimos software que nosotros mismos operamos",
    body: "Turnly y MenuDig son nuestros. Los desarrollamos, los mantenemos, pagamos sus costos y respondemos su soporte. Eso significa que cuando hablamos de escalabilidad, seguridad o suscripciones, no hablamos desde la teoría.",
    href: "/portafolio",
    cta: "Ver nuestros productos",
  },
  {
    label: "Desarrollo para terceros",
    title: "Y construimos el software que tu negocio necesita",
    body: "Sitios, sistemas y plataformas a medida para empresas y emprendedores, con mantenimiento y hosting si los necesitás. La misma exigencia técnica que aplicamos a lo nuestro.",
    href: "/servicios",
    cta: "Ver servicios",
  },
];

const standards = [
  "Estructura semántica perfecta",
  "Velocidad garantizada",
  "SEO on-code de primer nivel",
  "Experiencia de usuario cuidada",
  "100% responsive",
  "Cumplimiento legal",
];

export default function HomePage() {
  const latestPosts = publishedPosts().slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/50 to-transparent pointer-events-none" />

        <div className="container-main relative pt-28 pb-20" style={{ zIndex: 2 }}>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
              Desarrollo web · Argentina
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-acento leading-[1.1] mb-6">
              Desarrollo web a medida,{" "}
              <span className="text-principal">construido para crecer.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Desarrollamos sitios y aplicaciones web a medida que generan resultados reales.
              Primero entendemos tu negocio, después escribimos el código.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppCTA
                label="Solicitar proyecto"
                message="Hola! Quería consultarles por el desarrollo de un proyecto web."
              />
              <Link href="/portafolio" className="btn-secondary">
                Ver portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS PREVIEW ===== */}
      <section className="section" aria-labelledby="servicios-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 id="servicios-heading" className="text-3xl md:text-4xl font-bold text-acento">
                Lo que desarrollamos
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesPreview.map(({ iconPath, title, body, href }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <Link href={href} className="card-project block h-full group">
                  <div className="w-10 h-10 flex items-center justify-center bg-principal/20 rounded-xl mb-4 text-principal group-hover:bg-principal group-hover:text-white transition-colors">
                    <Icon path={iconPath} />
                  </div>
                  <h3 className="text-base font-bold text-acento mb-2 group-hover:text-principal transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-principal mt-4 group-hover:gap-2 transition-all">
                    Saber más
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link href="/servicios" className="btn-secondary inline-block">
                Ver todos los servicios
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="section" aria-labelledby="portfolio-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold text-acento">
                Algunos proyectos
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioPreview.map(({ name, tag, description, url }, i) => (
              <ScrollReveal key={name} delay={i * 120}>
                <article className="card-project h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-acento">{name}</h3>
                      <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2 self-start"
                    aria-label={`Ver proyecto ${name} (abre en nueva pestaña)`}
                  >
                    Ver proyecto
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={240}>
            <div className="text-center mt-10">
              <Link href="/portafolio" className="btn-secondary inline-block">
                Ver portafolio completo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== UNIDADES DE NEGOCIO ===== */}
      <section className="section" aria-labelledby="unidades-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <h2 id="unidades-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                No solo desarrollamos para otros
              </h2>
              <p className="text-white/65 leading-relaxed">
                Driva Dev tiene dos patas. Una construye software para clientes. La otra
                construye y sostiene productos propios. La segunda es la que nos mantiene
                honestos: cargamos con las consecuencias de cada decisión técnica que tomamos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessUnits.map(({ label, title, body, href, cta }, i) => (
              <ScrollReveal key={label} delay={i * 120}>
                <div className="card-project h-full flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-principal mb-4">
                    {label}
                  </span>
                  <h3 className="text-xl font-bold text-acento leading-snug mb-3">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">{body}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-principal hover:gap-3 transition-all self-start"
                  >
                    {cta}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ESTÁNDARES ===== */}
      <section className="section" aria-labelledby="estandares-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                No negociable
              </span>
              <h2 id="estandares-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                Seis cosas que entregamos siempre
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                No dependen del presupuesto ni del tamaño del proyecto. Si no podemos cumplir
                con estos seis puntos, no entregamos el sitio.
              </p>
              <p className="text-white/65 leading-relaxed">
                Es la lista de lo que tenés derecho a exigirle a cualquiera que te desarrolle
                una web. Incluidos nosotros.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {standards.map((label) => (
                  <div key={label} className="flex items-center gap-3 glass-card !rounded-xl px-4 py-3.5">
                    <svg
                      className="w-5 h-5 text-principal flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-white/80">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIRNOS ===== */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-acento leading-tight mb-6">
                ¿Por qué<br />Driva Dev?
              </h2>
              <p className="text-white/55 leading-relaxed text-lg">
                Somos un equipo chico que trabaja de forma directa. Sin capas, sin cuentas de
                agencia, sin malentendidos. Cuando hablás con nosotros, hablás con quien hace el trabajo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="divide-y divide-white/10">
                {whyUs.map(({ title, body }) => (
                  <div key={title} className="py-5">
                    <h3 className="font-bold text-acento mb-1.5">{title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      {latestPosts.length > 0 && (
        <section className="section" aria-labelledby="blog-heading">
          <div className="container-main">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center mb-12">
                <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-acento">
                  Nuestros últimos blogs
                </h2>
                <p className="text-white/60 leading-relaxed mt-3 max-w-lg">
                  Escribimos sobre desarrollo, SEO y decisiones de negocio digital. Sin humo
                  ni recetas mágicas.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-8">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 90} className="max-w-72 w-full">
                  {/* El hover levanta la tarjeta entera; el reveal ya usa el
                      transform del contenedor, por eso va sobre el enlace. */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group hover:-translate-y-0.5 transition duration-300"
                  >
                    <article>
                      <Image
                        src={coverSrc(post.slug)}
                        alt={post.coverAlt}
                        width={COVER_WIDTH}
                        height={COVER_HEIGHT}
                        sizes="(min-width: 640px) 18rem, 100vw"
                        className="rounded-xl w-full h-auto aspect-[3/2] object-cover"
                      />
                      <h3 className="text-base font-medium text-acento leading-snug mt-3 group-hover:text-principal transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs font-medium text-principal mt-1">{post.category}</p>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={270}>
              <div className="text-center mt-12">
                <Link href="/blog" className="btn-secondary inline-block">
                  Ver todos
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ===== CTA FINAL ===== */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-acento mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Escribinos cuando quieras. Sin reuniones previas ni presupuesto de 48 hs.
            </p>
            <WhatsAppCTA
              label="Hablar de mi proyecto"
              message="Hola! Tengo un proyecto en mente y quería consultarles."
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
