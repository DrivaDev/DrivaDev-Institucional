import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/content/i18n";
import { routeUrl, type Locale } from "@/lib/i18n";

// Datos de contacto: mismos en los dos idiomas, solo cambian etiqueta y nota.
const contactMeta = [
  {
    iconFill: true,
    iconPath:
      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    value: "+54 11 3913-9022",
    href: "https://wa.me/5491139139022",
  },
  {
    iconFill: false,
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    value: "driva.devv@gmail.com",
    href: "mailto:driva.devv@gmail.com",
  },
];

export default function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.contact;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: routeUrl("home", locale) },
      { "@type": "ListItem", position: 2, name: t.breadcrumb, item: routeUrl("contact", locale) },
    ],
  };

  const methods = contactMeta.map((meta, i) => ({ ...meta, ...t.formSection.methods[i] }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
            <ScrollReveal>
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                  {t.hero.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                  {t.hero.heading}
                </h1>
                <p className="text-lg text-white/65 leading-relaxed">{t.hero.body}</p>
              </div>
            </ScrollReveal>

            <RootFigure
              src="/root-pensando.webp"
              alt={t.hero.rootAlt}
              width={640}
              height={605}
            />
          </div>
        </div>
      </section>

      {/* ===== FORM + DATOS ===== */}
      <section className="section" aria-label={t.formSection.aria}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass-card p-8">
                  <h2 className="text-xl font-bold text-acento mb-6">{t.formSection.heading}</h2>
                  <ContactForm t={dict.form} />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="space-y-5">
                  <div>
                    <h2 className="text-xl font-bold text-acento mb-2">{t.formSection.directHeading}</h2>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {t.formSection.directBody}
                    </p>
                  </div>

                  {methods.map(({ label, value, href, note, iconPath, iconFill }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("https") ? "_blank" : undefined}
                      rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-5 glass-card !rounded-2xl hover:border-principal/40 hover:shadow-md hover:shadow-principal/10 transition-all group"
                      aria-label={`${label}: ${value}`}
                    >
                      <div className="w-10 h-10 bg-principal/20 rounded-xl flex items-center justify-center flex-shrink-0 text-principal group-hover:bg-principal group-hover:text-white transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill={iconFill ? "currentColor" : "none"}
                          stroke={iconFill ? "none" : "currentColor"}
                          viewBox="0 0 24 24"
                        >
                          {!iconFill && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                          )}
                          {iconFill && <path d={iconPath} />}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-0.5">{label}</p>
                        <p className="font-bold text-white/90 text-sm">{value}</p>
                        <p className="text-xs text-white/40 mt-0.5">{note}</p>
                      </div>
                    </a>
                  ))}

                  <div className="glass-card !rounded-2xl p-5 border-white/5">
                    <p className="text-xs text-white/50 leading-relaxed">
                      <strong className="text-acento/80">{t.formSection.unsureTitle}</strong>{" "}
                      {t.formSection.unsureBody}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REDES SOCIALES ===== */}
      <section className="section" aria-labelledby="redes-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-4 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                {t.social.badge}
              </span>
              <h2 id="redes-heading" className="text-3xl md:text-4xl font-bold text-acento">
                {t.social.heading}
              </h2>
              <p className="text-white/55 mt-3 text-sm">{t.social.body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/driva.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 glass-card !rounded-3xl px-8 py-6 hover:border-principal/40 hover:shadow-lg hover:shadow-principal/10 transition-all"
                aria-label={dict.footer.ariaInstagram}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-0.5">Instagram</p>
                  <p className="text-lg font-bold text-white/90 group-hover:text-principal transition-colors">@driva.dev</p>
                  <p className="text-xs text-white/40 mt-0.5">{t.social.cardNote}</p>
                </div>
                <svg className="w-5 h-5 text-white/25 group-hover:text-principal group-hover:translate-x-1 transition-all ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
