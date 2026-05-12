import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio — Proyectos desarrollados",
  description:
    "Conocé los proyectos desarrollados por Driva Dev: Turnly, el software de gestión de turnos, y MenuDig, el menú digital para restaurantes.",
  openGraph: {
    title: "Portafolio — Driva Dev",
    description: "Proyectos reales construidos por Driva Dev para clientes argentinos.",
    url: "https://drivadev.com.ar/portafolio",
  },
  alternates: { canonical: "https://drivadev.com.ar/portafolio" },
};

const projects = [
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
    accent: "#EA580C",
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
    accent: "#9A3412",
  },
];

export default function PortafolioPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-acento/40 to-fondo">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-acento rounded-full">
                Portafolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-titulares leading-tight mb-6">
                Nuestro trabajo habla por sí solo
              </h1>
              <p className="text-lg text-texto/75 leading-relaxed">
                Proyectos reales, resultados tangibles. Cada solución fue diseñada y construida
                mano a mano con el cliente, pensada para su negocio específico.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GRILLA DE PROYECTOS ===== */}
      <section className="section bg-fondo" aria-label="Proyectos">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map(({ name, tag, url, description, features }, i) => (
              <ScrollReveal key={name} delay={i * 100}>
                <article className="bg-white rounded-3xl border border-acento overflow-hidden h-full flex flex-col group hover:shadow-xl hover:shadow-principal/10 transition-all duration-300">
                  {/* Header strip */}
                  <div className="h-2 bg-principal" />

                  <div className="p-8 flex flex-col flex-1">
                    <div className="mb-5">
                      <h2 className="text-2xl font-bold text-titulares mb-1">{name}</h2>
                      <span className="text-xs font-medium text-principal bg-acento px-2.5 py-1 rounded-full inline-block">
                        {tag}
                      </span>
                    </div>

                    <p className="text-texto/75 leading-relaxed mb-6 text-sm flex-1">{description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-texto/70">
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
              </ScrollReveal>
            ))}
          </div>

          {/* Placeholder for future projects */}
          <ScrollReveal delay={200}>
            <div className="mt-8 rounded-3xl border-2 border-dashed border-acento p-10 text-center">
              <p className="text-texto/40 font-medium text-sm">Más proyectos próximamente</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section bg-titulares" aria-labelledby="cta-portafolio">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-portafolio" className="text-3xl md:text-4xl font-bold text-fondo mb-5">
              ¿Querés que tu proyecto sea el próximo?
            </h2>
            <p className="text-fondo/70 mb-8 max-w-lg mx-auto">
              Contanos tu idea y arrancamos. Sin costo ni compromiso inicial.
            </p>
            <Link href="/contacto" className="btn-primary !bg-principal inline-block">
              Iniciar mi proyecto
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
