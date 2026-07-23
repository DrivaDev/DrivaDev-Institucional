import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getDictionary } from "@/content/i18n";
import { routeUrl, SITE_URL, type Locale } from "@/lib/i18n";

function Icon({ path }: { path: string }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={path} />
    </svg>
  );
}

// Emparejados por posición con las listas del diccionario.
const devFeatureIcons = [
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
];

const projectTypeIcons = [
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
  "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
];

const hostingFeatureIcons = [
  "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
];

export default function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.services;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: routeUrl("home", locale) },
      { "@type": "ListItem", position: 2, name: t.breadcrumb, item: routeUrl("services", locale) },
    ],
  };

  const provider = {
    "@type": "Organization",
    name: "Driva Dev",
    url: SITE_URL,
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: t.schema.items.map((service, i) => ({
      "@type": "Service",
      position: i + 1,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      provider,
      areaServed: { "@type": "Country", name: t.schema.areaServed },
    })),
  };

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
                  {t.hero.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                  {t.hero.heading}
                </h1>
                <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl">
                  {t.hero.body}
                </p>
              </ScrollReveal>
            </div>

            <RootFigure
              src="/root-senalando.webp"
              alt={t.hero.rootAlt}
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
                {t.dev.heading}
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">{t.dev.body1}</p>
              <p className="text-white/65 leading-relaxed mb-4">{t.dev.body2}</p>
              <p className="text-white/65 leading-relaxed">{t.dev.body3}</p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {t.dev.features.map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 glass-card !rounded-xl px-4 py-3"
                  >
                    <div className="text-principal flex-shrink-0">
                      <Icon path={devFeatureIcons[i]} />
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
                {t.projectTypes.heading}
              </h2>
              <p className="text-white/65 leading-relaxed">{t.projectTypes.body}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projectTypes.items.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={(i % 3) * 90}>
                <div className="card-project h-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-principal/20 rounded-xl mb-4 text-principal">
                    <Icon path={projectTypeIcons[i]} />
                  </div>
                  <h3 className="text-base font-bold text-acento mb-2">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ESTÁNDARES ===== */}
      <section className="section" aria-labelledby="estandares-heading">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                {t.standards.badge}
              </span>
              <h2 id="estandares-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                {t.standards.heading}
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">{t.standards.body1}</p>
              <p className="text-white/65 leading-relaxed">{t.standards.body2}</p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="divide-y divide-white/10">
                {t.standards.items.map(({ title, body }) => (
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
                  <span className="text-xs font-bold uppercase tracking-widest text-principal">
                    {t.maintenance.label}
                  </span>
                </div>
                <ul className="space-y-4">
                  {t.maintenance.features.map((item) => (
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
                {t.maintenance.heading}
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">{t.maintenance.body1}</p>
              <p className="text-white/65 leading-relaxed">{t.maintenance.body2}</p>
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
                {t.hosting.heading}
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">{t.hosting.body1}</p>
              <p className="text-white/65 leading-relaxed">{t.hosting.body2}</p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="space-y-4">
                {t.hosting.features.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4 items-start glass-card !rounded-2xl p-5">
                    <div className="w-9 h-9 bg-principal/20 rounded-lg flex items-center justify-center text-principal flex-shrink-0">
                      <Icon path={hostingFeatureIcons[i]} />
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
                {t.process.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 90}>
                <div className="glass-card p-6 h-full">
                  <span className="text-4xl font-bold text-principal/30 block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
                {t.faq.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {t.faq.items.map(({ q, a }, i) => (
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
              {t.cta.heading}
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">{t.cta.body}</p>
            <WhatsAppCTA
              locale={locale}
              label={t.cta.button}
              message={dict.whatsapp.services}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
