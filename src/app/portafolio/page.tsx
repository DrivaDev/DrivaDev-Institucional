import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio — Proyectos desarrollados",
  description:
    "Conocé los proyectos desarrollados por Driva Dev: Turnly y MenuDig, dos productos SaaS construidos de forma independiente.",
  openGraph: {
    title: "Portafolio — Driva Dev",
    description: "Proyectos reales construidos por Driva Dev.",
    url: "https://drivadev.com.ar/portafolio",
  },
  alternates: { canonical: "https://drivadev.com.ar/portafolio" },
};

const independentProjects = [
  {
    name: "Turnly",
    tag: "SaaS · Gestión de turnos",
    url: "https://turnly.com.ar",
    description:
      "Software de gestión de turnos para negocios como peluquerías, estéticas o consultorios. Permite desarrollar el gestor de forma 100% personalizada, diseñado mano a mano con un desarrollador. Cada negocio tiene su propia versión del sistema.",
    features: [
      "Agenda online personalizable",
      "Gestión de clientes y servicios",
      "Recordatorios automáticos",
      "Panel de administración propio",
    ],
  },
  {
    name: "MenuDig",
    tag: "SaaS · Gastronomía",
    url: "https://menudig.com.ar",
    description:
      "Software de menú digital para restaurantes y cafeterías, accesible por QR o URL. Permite gestionar platos, categorías, orden, fotos, alérgenos y la estética del menú completo (colores, nombre y logo del local).",
    features: [
      "Menú digital por QR o URL",
      "Gestión de platos y categorías",
      "Fotos y alérgenos",
      "Diseño personalizable del menú",
    ],
  },
];

function ProjectCard({ name, tag, url, description, features }: (typeof independentProjects)[0]) {
  return (
    <article className="glass-card overflow-hidden h-full flex flex-col group hover:shadow-xl hover:shadow-principal/10 transition-all duration-300 hover:border-principal/30">
      <div className="h-1 bg-principal" />
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-acento mb-1">{name}</h3>
          <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2.5 py-1 rounded-full inline-block">
            {tag}
          </span>
        </div>
        <p className="text-white/65 leading-relaxed mb-6 text-sm flex-1">{description}</p>
        <ul className="space-y-2 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/55">
              <svg className="w-4 h-4 text-principal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !py-3 inline-flex items-center justify-center gap-2 self-start"
          aria-label={`Ver proyecto ${name} (abre en nueva pestaña)`}
        >
          Ver proyecto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function PortafolioPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Portafolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                Nuestro trabajo habla por sí solo
              </h1>
              <p className="text-lg text-white/65 leading-relaxed">
                Proyectos reales, resultados tangibles. Cada solución fue diseñada y construida
                con foco en el negocio detrás.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DESARROLLO INDEPENDIENTE ===== */}
      <section className="section section-alt" aria-labelledby="indie-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-principal/20 rounded-lg flex items-center justify-center text-principal">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 id="indie-heading" className="text-2xl md:text-3xl font-bold text-acento">
                  Desarrollo independiente
                </h2>
              </div>
              <p className="text-white/55 text-sm ml-11">
                Productos propios diseñados, construidos y mantenidos por Driva Dev.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {independentProjects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESARROLLO PARA TERCEROS ===== */}
      <section className="section" aria-labelledby="terceros-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 id="terceros-heading" className="text-2xl md:text-3xl font-bold text-acento">
                  Desarrollo para terceros
                </h2>
              </div>
              <p className="text-white/55 text-sm ml-11">
                Proyectos desarrollados para clientes externos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div
              className="rounded-3xl border-2 border-dashed border-white/15 p-12 text-center"
              aria-label="Sin proyectos de terceros aún"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-white/35 font-medium text-sm mb-1">Próximamente</p>
              <p className="text-white/25 text-xs">
                Los proyectos para clientes aparecerán aquí a medida que se sumen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section-alt" aria-labelledby="cta-portafolio">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-portafolio" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              ¿Querés que tu proyecto sea el próximo?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Contanos tu idea y arrancamos. Sin costo ni compromiso inicial.
            </p>
            <Link href="/contacto" className="btn-primary inline-block">
              Iniciar mi proyecto
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
