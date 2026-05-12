import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios — Desarrollo web a medida",
  description:
    "Desarrollamos cualquier tipo de sitio o aplicación web completamente a medida. También ofrecemos planes de mantenimiento mensual y hosting.",
  openGraph: {
    title: "Servicios — Driva Dev",
    description: "Desarrollo web a medida, mantenimiento mensual y hosting. Sin plantillas.",
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

export default function ServiciosPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Servicios
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                Desarrollo web completamente a medida
              </h1>
              <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
                Desarrollamos cualquier tipo de sitio o aplicación web. No usamos plantillas ni
                soluciones genéricas: cada proyecto se diseña y construye desde cero, pensado
                específicamente para tu negocio, tu industria y tus objetivos.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== DESARROLLO PRINCIPAL ===== */}
      <section className="section section-alt" aria-labelledby="dev-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Desarrollo web
              </span>
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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Mantenimiento mensual
              </span>
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
      <section id="hosting" className="section section-alt" aria-labelledby="hosting-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Hosting
              </span>
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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                Cómo trabajamos
              </span>
              <h2 id="proceso-heading" className="text-3xl md:text-4xl font-bold text-acento">
                Un proceso claro de principio a fin
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

      {/* ===== CTA ===== */}
      <section className="section section-alt" aria-labelledby="cta-servicios">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-servicios" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              ¿Querés saber qué podemos hacer por tu negocio?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Contanos tu idea y armamos una propuesta específica para vos. Sin costo ni compromiso.
            </p>
            <Link href="/contacto" className="btn-primary inline-block">
              Solicitar propuesta
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
