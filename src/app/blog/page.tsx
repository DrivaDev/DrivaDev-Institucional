import type { Metadata } from "next";
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
import { WHATSAPP_BLOG_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Blog de Desarrollo Web y SEO",
  description:
    "Artículos sobre desarrollo web, SEO, velocidad y negocio digital. Escritos por Driva Dev, desarrolladores de software en Argentina. Sin humo ni recetas mágicas.",
  openGraph: {
    title: "Blog de Desarrollo Web y SEO | Driva Dev",
    description: "Artículos sobre desarrollo web, SEO y negocio digital, escritos por desarrolladores.",
    url: "https://drivadev.com.ar/blog",
  },
  alternates: { canonical: "https://drivadev.com.ar/blog" },
};

// Revalidar cada hora: así los artículos programados aparecen solos
// el lunes que corresponde, sin necesidad de un nuevo despliegue.
export const revalidate = 3600;

export default function BlogPage() {
  const posts = publishedPosts();
  const [featured, ...rest] = posts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Driva Dev",
    description:
      "Artículos sobre desarrollo web, SEO, velocidad y negocio digital escritos por Driva Dev.",
    url: "https://drivadev.com.ar/blog",
    inLanguage: "es-AR",
    publisher: {
      "@type": "Organization",
      name: "Driva Dev",
      url: "https://drivadev.com.ar",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      url: `https://drivadev.com.ar/blog/${post.slug}`,
      image: `https://drivadev.com.ar${coverSrc(post.slug)}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://drivadev.com.ar" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://drivadev.com.ar/blog" },
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
                  Blog
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-acento leading-tight mb-6">
                  Desarrollo web, SEO y negocio digital
                </h1>
                <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
                  Escribimos sobre lo que hacemos todos los días: cómo se construye un sitio
                  rápido, qué mira Google de verdad y cómo decidir en qué gastar tu presupuesto.
                  Sin humo ni recetas mágicas.
                </p>
              </div>
            </ScrollReveal>

            <RootFigure
              src="/root-leyendo.webp"
              alt="Root, la mascota de Driva Dev, leyendo un libro"
              width={600}
              height={694}
            />
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section">
          <div className="container-main">
            <p className="text-white/60">Todavía no publicamos ningún artículo. Volvé pronto.</p>
          </div>
        </section>
      ) : (
        <>
          {/* ===== DESTACADO ===== */}
          <section className="pb-4" aria-labelledby="destacado-heading">
            <div className="container-main">
              <h2 id="destacado-heading" className="sr-only">
                Artículo más reciente
              </h2>
              <ScrollReveal className="max-w-3xl mx-auto">
                {/* La fila la mide el texto: la imagen se estira hasta ese alto
                    y recorta, nunca lo empuja hacia abajo. */}
                <Link href={`/blog/${featured.slug}`} className="card-project block group">
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
                          {formatDate(featured.publishedAt)}
                        </time>
                        <span className="text-xs text-white/40">
                          {featured.readingMinutes} min de lectura
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-acento leading-snug mb-3 group-hover:text-principal transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-5">
                        {featured.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-principal group-hover:gap-3 transition-all">
                        Leer artículo
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
                  Todos los artículos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={(i % 3) * 90}>
                      <Link href={`/blog/${post.slug}`} className="card-project block h-full group">
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
                              {post.readingMinutes} min
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
                            {formatDate(post.publishedAt)}
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
              ¿Querés aplicar todo esto a tu sitio?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
              Escribimos estos artículos porque es exactamente lo que hacemos en cada proyecto.
              Contanos el tuyo y lo vemos juntos.
            </p>
            <WhatsAppCTA label="Escribinos por WhatsApp" message={WHATSAPP_BLOG_MESSAGE} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
