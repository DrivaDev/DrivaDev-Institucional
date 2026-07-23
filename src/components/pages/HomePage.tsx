import Image from "next/image";
import Link from "next/link";
import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { COVER_HEIGHT, COVER_WIDTH, coverSrc, publishedPosts } from "@/content/blog/posts";
import { getDictionary } from "@/content/i18n";
import { path, type Locale } from "@/lib/i18n";

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

// Los iconos no son texto: se emparejan por posición con las listas del diccionario.
const servicesIcons = [
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
];

const portfolioUrls = ["https://turnly.com.ar", "https://menudig.com.ar"];

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const latestPosts = publishedPosts(locale).slice(0, 3);

  const servicesHrefs = [
    path("services", locale),
    `${path("services", locale)}#mantenimiento`,
    `${path("services", locale)}#hosting`,
  ];
  const businessUnitHrefs = [path("portfolio", locale), path("services", locale)];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/50 to-transparent pointer-events-none" />

        <div className="container-main relative pt-28 pb-20" style={{ zIndex: 2 }}>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-10">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                {t.hero.badge}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-acento leading-[1.1] mb-6">
                {t.hero.titleLead}{" "}
                <span className="text-principal">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                {t.hero.body}
              </p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppCTA
                  locale={locale}
                  label={t.hero.ctaPrimary}
                  message={dict.whatsapp.homeHero}
                />
                <Link href={path("portfolio", locale)} className="btn-secondary">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            <RootFigure
              src="/root.webp"
              alt={t.hero.rootAlt}
              width={880}
              height={1320}
              groundShadow
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS PREVIEW ===== */}
      <section className="section" aria-labelledby="servicios-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 id="servicios-heading" className="text-3xl md:text-4xl font-bold text-acento">
                {t.services.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.services.items.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <Link href={servicesHrefs[i]} className="card-project block h-full group">
                  <div className="w-10 h-10 flex items-center justify-center bg-principal/20 rounded-xl mb-4 text-principal group-hover:bg-principal group-hover:text-white transition-colors">
                    <Icon path={servicesIcons[i]} />
                  </div>
                  <h3 className="text-base font-bold text-acento mb-2 group-hover:text-principal transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-principal mt-4 group-hover:gap-2 transition-all">
                    {dict.common.learnMore}
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
              <Link href={path("services", locale)} className="btn-secondary inline-block">
                {t.services.cta}
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
                {t.portfolio.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.portfolio.items.map(({ name, tag, description }, i) => (
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
                    href={portfolioUrls[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2 self-start"
                    aria-label={`${dict.common.viewProject} ${name} (${dict.common.openInNewTab})`}
                  >
                    {dict.common.viewProject}
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
              <Link href={path("portfolio", locale)} className="btn-secondary inline-block">
                {t.portfolio.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== UNIDADES DE NEGOCIO ===== */}
      <section className="section" aria-labelledby="unidades-heading">
        <div className="container-main">
          <ScrollReveal>
            <div className="grid items-center gap-10 mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
              <div className="max-w-2xl">
                <h2 id="unidades-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                  {t.businessUnits.heading}
                </h2>
                <p className="text-white/65 leading-relaxed">
                  {t.businessUnits.body}
                </p>
              </div>

              <RootFigure
                src="/root-trabajando.webp"
                alt={t.businessUnits.rootAlt}
                width={760}
                height={676}
              />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.businessUnits.items.map(({ label, title, body, cta }, i) => (
              <ScrollReveal key={label} delay={i * 120}>
                <div className="card-project h-full flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-principal mb-4">
                    {label}
                  </span>
                  <h3 className="text-xl font-bold text-acento leading-snug mb-3">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">{body}</p>
                  <Link
                    href={businessUnitHrefs[i]}
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
                {t.standards.badge}
              </span>
              <h2 id="estandares-heading" className="text-3xl md:text-4xl font-bold text-acento mb-5">
                {t.standards.heading}
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                {t.standards.body1}
              </p>
              <p className="text-white/65 leading-relaxed">
                {t.standards.body2}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.standards.items.map((label) => (
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
                {t.why.headingLine1}<br />{t.why.headingLine2}
              </h2>
              <p className="text-white/55 leading-relaxed text-lg">
                {t.why.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="divide-y divide-white/10">
                {t.why.items.map(({ title, body }) => (
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
              <div className="grid items-center gap-10 mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
                <div className="max-w-xl">
                  <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-acento">
                    {t.blog.heading}
                  </h2>
                  <p className="text-white/60 leading-relaxed mt-3">
                    {t.blog.body1}
                  </p>
                  <p className="text-white/60 leading-relaxed mt-4">
                    {t.blog.body2}
                  </p>
                </div>

                <RootFigure
                  src="/root-leyendo.webp"
                  alt={t.blog.rootAlt}
                  width={600}
                  height={694}
                />
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap justify-start gap-8">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 90} className="max-w-72 w-full">
                  {/* El hover levanta la tarjeta entera; el reveal ya usa el
                      transform del contenedor, por eso va sobre el enlace. */}
                  <Link
                    href={`${path("blog", locale)}/${post.slug}`}
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
                <Link href={path("blog", locale)} className="btn-secondary inline-block">
                  {t.blog.cta}
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
              {t.finalCta.heading}
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              {t.finalCta.body}
            </p>
            <WhatsAppCTA
              locale={locale}
              label={t.finalCta.cta}
              message={dict.whatsapp.homeFinal}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
