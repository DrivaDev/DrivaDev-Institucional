import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de tu proyecto",
  description:
    "Contactate con Driva Dev por WhatsApp, email o formulario. Te respondemos en menos de 24 horas. Sin compromisos.",
  openGraph: {
    title: "Contacto — Driva Dev",
    description: "Hablemos de tu proyecto. Te respondemos en menos de 24 horas.",
    url: "https://drivadev.com.ar/contacto",
  },
  alternates: { canonical: "https://drivadev.com.ar/contacto" },
};

const contactMethods = [
  {
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
    svgProps: { fill: "currentColor", viewBox: "0 0 24 24" },
    label: "WhatsApp",
    value: "+54 11 3913-9022",
    href: "https://wa.me/5491139139022",
    note: "Respuesta inmediata",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    svgProps: { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
    label: "Email",
    value: "driva.devv@gmail.com",
    href: "mailto:driva.devv@gmail.com",
    note: "Respondemos en menos de 24 h",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-acento/40 to-fondo">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-acento rounded-full">
                Contacto
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-titulares leading-tight mb-6">
                Hablemos de tu proyecto
              </h1>
              <p className="text-lg text-texto/75 leading-relaxed">
                Contanos sobre tu idea o tu negocio. Sin compromisos. Te respondemos en menos
                de 24 horas con una perspectiva honesta de lo que podemos hacer por vos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FORM + DATOS ===== */}
      <section className="section bg-fondo" aria-label="Formulario de contacto">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — wider */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 border border-acento shadow-sm">
                  <h2 className="text-xl font-bold text-titulares mb-6">Envianos un mensaje</h2>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-titulares mb-2">Contacto directo</h2>
                    <p className="text-sm text-texto/65 leading-relaxed">
                      Preferís hablar directamente? Escribinos por WhatsApp o email.
                    </p>
                  </div>

                  {contactMethods.map(({ label, value, href, note, icon, svgProps }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("https") ? "_blank" : undefined}
                      rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-acento hover:border-principal hover:shadow-md hover:shadow-principal/10 transition-all group"
                      aria-label={`${label}: ${value}`}
                    >
                      <div className="w-10 h-10 bg-acento rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-principal transition-colors">
                        <svg className="w-5 h-5 text-principal group-hover:text-white transition-colors" {...svgProps}>
                          {icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-texto/40 mb-0.5">{label}</p>
                        <p className="font-bold text-texto text-sm">{value}</p>
                        <p className="text-xs text-texto/50 mt-0.5">{note}</p>
                      </div>
                    </a>
                  ))}

                  <div className="bg-acento/40 rounded-2xl p-5 border border-acento">
                    <p className="text-xs text-texto/60 leading-relaxed">
                      <strong className="text-titulares">¿No sabés bien qué necesitás?</strong>{" "}
                      Igual escribinos. Parte de nuestro trabajo es ayudarte a entender qué solución
                      te conviene más.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
