import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { formatDate, publishedPosts } from "@/content/blog/posts";

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

const WHATSAPP_HREF = `https://wa.me/5491139139022?text=${encodeURIComponent(
  "Hola! Los encontré por el blog de Driva Dev y quería hacerles una consulta."
)}`;

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
              <ScrollReveal>
                <Link href={`/blog/${featured.slug}`} className="card-project block group">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
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
                  <h3 className="text-2xl md:text-4xl font-bold text-acento leading-tight mb-4 group-hover:text-principal transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-3xl mb-6">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-principal group-hover:gap-3 transition-all">
                    Leer artículo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
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
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5"
              aria-label="Escribir a Driva Dev por WhatsApp (abre en nueva pestaña)"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
