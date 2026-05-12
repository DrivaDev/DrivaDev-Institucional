import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios — Desarrollo web a medida",
  description:
    "Desarrollamos cualquier tipo de sitio o aplicación web completamente a medida. También ofrecemos planes de mantenimiento mensual y hosting para los sitios desarrollados.",
  openGraph: {
    title: "Servicios — Driva Dev",
    description: "Desarrollo web a medida, mantenimiento mensual y hosting. Sin plantillas.",
    url: "https://drivadev.com.ar/servicios",
  },
  alternates: { canonical: "https://drivadev.com.ar/servicios" },
};

const process = [
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
    body: "Lanzamos juntos y te acompañamos en los primeros pasos. El proyecto tuyo sigue siendo nuestro cuando más lo necesitás.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-acento/40 to-fondo">
        <div className="container-main">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-acento rounded-full">
                Servicios
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-titulares leading-tight mb-6">
                Desarrollo web completamente a medida
              </h1>
              <p className="text-lg md:text-xl text-texto/75 leading-relaxed max-w-2xl">
                Desarrollamos cualquier tipo de sitio o aplicación web. No usamos plantillas ni
                soluciones genéricas: cada proyecto se diseña y construye desde cero, pensado
                específicamente para tu negocio, tu industria y tus objetivos.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== DESARROLLO PRINCIPAL ===== */}
      <section className="section bg-white" aria-labelledby="dev-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-acento rounded-full">
                Desarrollo web
              </span>
              <h2 id="dev-heading" className="text-3xl md:text-4xl font-bold text-titulares mb-5">
                Cualquier idea, hecha realidad
              </h2>
              <p className="text-texto/75 leading-relaxed mb-4">
                El alcance de cada proyecto se define con vos. No listamos tipos de sitio porque
                la realidad es más amplia que cualquier categoría: si lo podés imaginar para tu
                negocio en la web, lo podemos construir.
              </p>
              <p className="text-texto/75 leading-relaxed mb-4">
                Usamos las tecnologías más modernas y eficientes del mercado, adaptadas a las
                necesidades reales de cada proyecto. Nada más, nada menos.
              </p>
              <p className="text-texto/75 leading-relaxed">
                Cada entregable es tuyo: código fuente, dominio, hosting. Sin dependencias ni
                candados con nosotros.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "⚡", label: "Performance" },
                  { emoji: "📱", label: "100% responsive" },
                  { emoji: "🔍", label: "SEO optimizado" },
                  { emoji: "♿", label: "Accesible" },
                  { emoji: "🔒", label: "Seguro" },
                  { emoji: "🎨", label: "Diseño propio" },
                ].map(({ emoji, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-fondo rounded-xl px-4 py-3 border border-acento"
                  >
                    <span className="text-xl">{emoji}</span>
                    <span className="text-sm font-medium text-texto">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MANTENIMIENTO ===== */}
      <section id="mantenimiento" className="section bg-fondo" aria-labelledby="mant-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal delay={120} className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 border border-acento">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-acento rounded-xl flex items-center justify-center text-xl">🔄</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-principal">Mantenimiento</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Modificaciones de contenido y diseño incluidas",
                    "Actualizaciones de seguridad y dependencias",
                    "Monitoreo de disponibilidad",
                    "Soporte por WhatsApp y email",
                    "Respaldo periódico del sitio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-texto/80">
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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-acento rounded-full">
                Mantenimiento mensual
              </span>
              <h2 id="mant-heading" className="text-3xl md:text-4xl font-bold text-titulares mb-5">
                Tu web, siempre al día
              </h2>
              <p className="text-texto/75 leading-relaxed mb-4">
                Lanzar el sitio es el principio. Con nuestros planes de mantenimiento mensual, tu
                presencia online se mantiene actualizada, segura y funcionando sin que tengas que
                preocuparte por nada técnico.
              </p>
              <p className="text-texto/75 leading-relaxed">
                Las modificaciones están incluidas: si necesitás actualizar precios, agregar un
                producto, cambiar un texto o incorporar una nueva sección, lo resolvemos dentro
                del plan.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HOSTING ===== */}
      <section id="hosting" className="section bg-white" aria-labelledby="hosting-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-acento rounded-full">
                Hosting
              </span>
              <h2 id="hosting-heading" className="text-3xl md:text-4xl font-bold text-titulares mb-5">
                Instalá y olvidate
              </h2>
              <p className="text-texto/75 leading-relaxed mb-4">
                Ofrecemos hosting para los sitios desarrollados por Driva Dev. Gestionamos el
                servidor, los certificados SSL, los dominios y cualquier configuración técnica.
              </p>
              <p className="text-texto/75 leading-relaxed">
                Vos te enfocás en tu negocio. Nosotros nos aseguramos de que tu sitio esté
                siempre en línea, rápido y seguro.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { emoji: "🔒", title: "SSL incluido", body: "Certificado de seguridad activo en todo momento." },
                  { emoji: "⚡", title: "Alta velocidad", body: "Servidores optimizados para tiempos de carga mínimos." },
                  { emoji: "📊", title: "Panel de control", body: "Acceso completo para que puedas ver el estado de tu sitio." },
                ].map(({ emoji, title, body }) => (
                  <div key={title} className="flex gap-4 items-start bg-fondo rounded-2xl p-5 border border-acento">
                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                    <div>
                      <p className="font-bold text-titulares text-sm">{title}</p>
                      <p className="text-xs text-texto/70 mt-0.5">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section className="section bg-fondo" aria-labelledby="proceso-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-acento rounded-full">
                Cómo trabajamos
              </span>
              <h2 id="proceso-heading" className="text-3xl md:text-4xl font-bold text-titulares">
                Un proceso claro de principio a fin
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, body }, i) => (
              <ScrollReveal key={step} delay={i * 90}>
                <div className="bg-white rounded-2xl p-6 border border-acento h-full">
                  <span className="text-4xl font-bold text-acento block mb-4">{step}</span>
                  <h3 className="font-bold text-titulares mb-2">{title}</h3>
                  <p className="text-sm text-texto/70 leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section bg-titulares" aria-labelledby="cta-servicios">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-servicios" className="text-3xl md:text-4xl font-bold text-fondo mb-5">
              ¿Querés saber qué podemos hacer por tu negocio?
            </h2>
            <p className="text-fondo/70 mb-8 max-w-lg mx-auto">
              Contanos tu idea y armamos una propuesta específica para vos. Sin costo ni compromiso.
            </p>
            <Link href="/contacto" className="btn-primary !bg-principal inline-block">
              Solicitar propuesta
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
