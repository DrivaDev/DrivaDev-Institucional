import Image from "next/image";
import Link from "next/link";
import RootFigure from "@/components/RootFigure";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import {
  COVER_HEIGHT,
  COVER_WIDTH,
  coverSrc,
  formatDate,
  publishedPosts,
} from "@/content/blog/posts";
import { getDictionary } from "@/content/i18n";
import { absoluteUrl, hreflang, path, routeUrl, SITE_URL, type Locale } from "@/lib/i18n";

export default function BlogIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.blog;
  const posts = publishedPosts(locale);
  const [featured, ...rest] = posts;
  const blogBase = path("blog", locale);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t.schemaName,
    description: t.schemaDescription,
    url: routeUrl("blog", locale),
    inLanguage: hreflang[locale],
    publisher: {
      "@type": "Organization",
      name: "Driva Dev",
      url: SITE_URL,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      url: absoluteUrl(`${blogBase}/${post.slug}`),
      image: `${SITE_URL}${coverSrc(post.slug)}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: routeUrl("home", locale) },
      { "@type": "ListItem", position: 2, name: t.breadcrumb, item: routeUrl("blog", locale) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ===== HERO ===== */}
      <section className="pt-36 pb-16">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)]">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-principal mb-5 px-3 py-1 bg-principal/15 border border-principal/30 rounded-full">
                  {t.hero.badge}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                  {t.hero.heading}
                </h1>
                <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
                  {t.hero.body}
                </p>
              </div>
            </ScrollReveal>

            <RootFigure
              src="/root-leyendo.webp"
              alt={t.hero.rootAlt}
              width={600}
              height={694}
            />
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section">
          <div className="container-main">
            <p className="text-white/60">{t.empty}</p>
          </div>
        </section>
      ) : (
        <>
          {/* ===== DESTACADO ===== */}
          <section className="pb-4" aria-labelledby="destacado-heading">
            <div className="container-main">
              <h2 id="destacado-heading" className="sr-only">
                {t.srFeatured}
              </h2>
              <ScrollReveal className="max-w-3xl mx-auto">
                {/* La fila la mide el texto: la imagen se estira hasta ese alto
                    y recorta, nunca lo empuja hacia abajo. */}
                <Link href={`${blogBase}/${featured.slug}`} className="card-project block group">
                  <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:items-stretch">
                    <Image
                      src={coverSrc(featured.slug)}
                      alt={featured.coverAlt}
                      width={COVER_WIDTH}
                      height={COVER_HEIGHT}
                      priority
                      sizes="(min-width: 768px) 17rem, 100vw"
                      className="rounded-xl w-full object-cover aspect-[3/2] md:aspect-auto md:h-full"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2.5 py-0.5 rounded-full">
                          {featured.category}
                        </span>
                        <time
                          dateTime={featured.publishedAt}
                          className="text-xs text-white/40"
                        >
                          {formatDate(featured.publishedAt, locale)}
                        </time>
                        <span className="text-xs text-white/40">
                          {featured.readingMinutes} {dict.common.minRead}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-acento leading-snug mb-3 group-hover:text-principal transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-5">
                        {featured.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-principal group-hover:gap-3 transition-all">
                        {dict.common.readArticle}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* ===== RESTO ===== */}
          {rest.length > 0 && (
            <section className="section" aria-labelledby="todos-heading">
              <div className="container-main">
                <h2 id="todos-heading" className="sr-only">
                  {t.srAll}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={(i % 3) * 90}>
                      <Link href={`${blogBase}/${post.slug}`} className="card-project block h-full group">
                        <article className="flex flex-col h-full">
                          <Image
                            src={coverSrc(post.slug)}
                            alt={post.coverAlt}
                            width={COVER_WIDTH}
                            height={COVER_HEIGHT}
                            sizes="(min-width: 1024px) 22rem, (min-width: 768px) 45vw, 100vw"
                            className="rounded-xl w-full h-auto aspect-[3/2] object-cover mb-4"
                          />
                          <div className="flex flex-wrap items-center gap-2.5 mb-3">
                            <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2 py-0.5 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-white/35">
                              {post.readingMinutes} {dict.common.min}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-acento leading-snug mb-2.5 group-hover:text-principal transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-white/55 leading-relaxed flex-1">
                            {post.description}
                          </p>
                          <time
                            dateTime={post.publishedAt}
                            className="text-xs text-white/35 mt-5 block"
                          >
                            {formatDate(post.publishedAt, locale)}
                          </time>
                        </article>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ===== CTA ===== */}
      <section className="section" aria-labelledby="cta-blog">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 id="cta-blog" className="text-3xl md:text-4xl font-bold text-acento mb-5">
              {t.cta.heading}
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
              {t.cta.body}
            </p>
            <WhatsAppCTA locale={locale} label={t.cta.button} message={dict.whatsapp.blog} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
