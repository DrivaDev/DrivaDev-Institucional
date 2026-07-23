import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getDictionary } from "@/content/i18n";
import { routeUrl, type Locale } from "@/lib/i18n";

/**
 * URLs y capturas de cada proyecto. No son texto traducible, así que viven acá
 * y se emparejan por posición con las listas del diccionario.
 */
const independentMeta = [
  { url: "https://turnly.com.ar" },
  { url: "https://menudig.com.ar" },
];

const thirdPartyMeta = [
  { url: "https://www.runningteamcup.com.ar/es" },
  { url: "https://www.wetcorp-comex.com.ar", screenshot: "/screenshots/wetcorp-comex.png" },
];

// Fetch screenshot URL server-side at build time (cached 24h via ISR).
// microlink generates the screenshot once and caches it on their CDN —
// users get the pre-resolved CDN URL instead of triggering generation on load.
async function getScreenshotUrl(url: string): Promise<string> {
  const fallback = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&type=jpeg`;
  try {
    const res = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return fallback;
    const json = await res.json();
    return (json?.data?.screenshot?.url as string) ?? fallback;
  } catch {
    return fallback;
  }
}

function resolveScreenshot(meta: { url: string; screenshot?: string }): Promise<string> {
  return meta.screenshot ? Promise.resolve(meta.screenshot) : getScreenshotUrl(meta.url);
}

function BrowserMockup({ screenshotUrl, url, alt }: { screenshotUrl: string; url: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
      {/* macOS-style browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#252221]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="flex-1 ml-3 mr-1 bg-[#1a1716] rounded text-[11px] text-white/30 font-mono px-3 py-1 truncate">
          {url.replace("https://", "").replace("http://", "")}
        </div>
      </div>
      <div className="bg-[#111] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshotUrl}
          alt={alt}
          className="w-full h-auto block"
          width={1280}
          height={800}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default async function PortfolioPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.portfolio;

  // Static screenshot takes priority; fall back to microlink for public sites
  const [indieScreenshots, thirdScreenshots] = await Promise.all([
    Promise.all(independentMeta.map(resolveScreenshot)),
    Promise.all(thirdPartyMeta.map(resolveScreenshot)),
  ]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: routeUrl("home", locale) },
      { "@type": "ListItem", position: 2, name: t.breadcrumb, item: routeUrl("portfolio", locale) },
    ],
  };

  const groups = [
    {
      id: "indie-heading",
      heading: t.independent.heading,
      note: t.independent.note,
      barClass: "bg-principal",
      spacing: "mb-14",
      projects: t.independent.projects,
      meta: independentMeta,
      screenshots: indieScreenshots,
    },
    {
      id: "terceros-heading",
      heading: t.thirdParty.heading,
      note: t.thirdParty.note,
      barClass: "bg-white/20",
      spacing: "mb-10",
      projects: t.thirdParty.projects,
      meta: thirdPartyMeta,
      screenshots: thirdScreenshots,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)]">
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
              src="/root-festejando.webp"
              alt={t.hero.rootAlt}
              width={640}
              height={1106}
              groundShadow
            />
          </div>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.id} className="section" aria-labelledby={group.id}>
          <div className="container-main">
            <ScrollReveal>
              <div className={`${group.spacing} pb-6 border-b border-white/10`}>
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-5 ${group.barClass} rounded-full`} />
                  <h2 id={group.id} className="text-lg font-bold text-acento">
                    {group.heading}
                  </h2>
                  <span className="text-sm text-white/35">{group.note}</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-28">
              {group.projects.map((project, i) => (
                <ScrollReveal key={project.name} delay={100}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                    <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <BrowserMockup
                        screenshotUrl={group.screenshots[i]}
                        url={group.meta[i].url}
                        alt={t.screenshotAlt.replace("{name}", project.name)}
                      />
                    </div>
                    <div className={`lg:col-span-2 lg:pt-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <h3 className="text-3xl font-bold text-acento mb-2">{project.name}</h3>
                      <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2.5 py-1 rounded-full inline-block mb-5">
                        {project.tag}
                      </span>
                      <p className="text-white/65 leading-relaxed mb-6 text-sm">{project.description}</p>
                      <ul className="space-y-2.5 mb-8">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-white/55">
                            <svg className="w-4 h-4 text-principal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={group.meta[i].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !py-3 !px-6 inline-flex items-center gap-2"
                        aria-label={`${dict.common.viewProject} ${project.name} (${dict.common.openInNewTab})`}
                      >
                        {dict.common.viewProject}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA ===== */}
      <section className="section" aria-labelledby="cta-portafolio">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-portafolio" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              {t.cta.heading}
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">{t.cta.body}</p>
            <WhatsAppCTA
              locale={locale}
              label={t.cta.button}
              message={dict.whatsapp.portfolio}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
