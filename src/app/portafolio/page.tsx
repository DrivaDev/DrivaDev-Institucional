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
      "Software de gestión de turnos para peluquerías, estéticas y consultorios. Permite armar el gestor de forma 100% personalizada, mano a mano con un desarrollador. Cada negocio termina con su propia versión del sistema.",
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
      "Menú digital para restaurantes y cafeterías, accesible por QR o URL. Gestión de platos, categorías, fotos, alérgenos y diseño completo del menú (colores, nombre, logo del local).",
    features: [
      "Menú digital por QR o URL",
      "Gestión de platos y categorías",
      "Fotos y alérgenos",
      "Diseño personalizable del menú",
    ],
  },
];

function BrowserMockup({ url, name }: { url: string; name: string }) {
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&type=jpeg`;
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
      {/* macOS-style browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#252221]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex-1 ml-3 mr-1 bg-[#1a1716] rounded text-[11px] text-white/30 font-mono px-3 py-1 truncate">
          {url.replace("https://", "")}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] bg-[#111] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshotUrl}
          alt={`Vista previa de ${name}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
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
              <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                Lo que construimos
              </h1>
              <p className="text-lg text-white/65 leading-relaxed">
                Proyectos reales, problemas reales. Acá podés ver cómo trabajamos
                y lo que somos capaces de entregar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DESARROLLO INDEPENDIENTE ===== */}
      <section className="section" aria-labelledby="indie-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="mb-14 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 bg-principal rounded-full" />
                <h2 id="indie-heading" className="text-lg font-bold text-acento">
                  Desarrollo independiente
                </h2>
                <span className="text-sm text-white/35">· Productos propios de Driva Dev</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-28">
            {independentProjects.map((project, i) => (
              <ScrollReveal key={project.name} delay={100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start`}
                >
                  {/* Mockup */}
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <BrowserMockup url={project.url} name={project.name} />
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 lg:pt-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-3xl font-bold text-acento mb-2">{project.name}</h3>
                    <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2.5 py-1 rounded-full inline-block mb-5">
                      {project.tag}
                    </span>
                    <p className="text-white/65 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-white/55">
                          <svg
                            className="w-4 h-4 text-principal flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-3 !px-6 inline-flex items-center gap-2"
                      aria-label={`Ver proyecto ${project.name} (abre en nueva pestaña)`}
                    >
                      Ver proyecto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESARROLLO PARA TERCEROS ===== */}
      <section className="section" aria-labelledby="terceros-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="mb-10 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 bg-white/20 rounded-full" />
                <h2 id="terceros-heading" className="text-lg font-bold text-acento">
                  Desarrollo para terceros
                </h2>
                <span className="text-sm text-white/35">· Proyectos de clientes</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-3xl border-2 border-dashed border-white/12 p-12 text-center">
              <p className="text-white/35 font-medium text-sm mb-1">Próximamente</p>
              <p className="text-white/25 text-xs">
                Los proyectos de clientes aparecen acá a medida que se suman.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" aria-labelledby="cta-portafolio">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-portafolio" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              ¿Querés que tu proyecto sea el próximo?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Escribinos cuando quieras. Sin formulario eterno ni reunión de 40 minutos.
            </p>
            <Link href="/contacto" className="btn-primary inline-block">
              Hablar con nosotros
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
