import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import {
  formatDate,
  getPost,
  isPublished,
  publishedPosts,
  relatedPosts,
} from "@/content/blog/posts";

export const revalidate = 3600;
// Los artículos programados todavía no tienen ruta estática. Cuando llega su
// lunes, se generan a demanda en la primera visita.
export const dynamicParams = true;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return publishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post || !isPublished(post)) {
    return { title: "Artículo no encontrado", robots: { index: false, follow: false } };
  }

  const url = `https://drivadev.com.ar/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Driva Dev", url: "https://drivadev.com.ar" }],
    openGraph: {
      type: "article",
      title: `${post.title} | Driva Dev`,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      authors: ["Driva Dev"],
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);

  // No existe, o todavía no llegó su fecha de publicación.
  if (!post || !isPublished(post)) notFound();

  const { Body } = post;
  const url = `https://drivadev.com.ar/blog/${post.slug}`;
  const related = relatedPosts(post.slug);

  // El CTA del blog va directo a WhatsApp, con el articulo ya mencionado
  // para que no tengan que explicar de donde vienen.
  const whatsappHref = `https://wa.me/5491139139022?text=${encodeURIComponent(
    `Hola! Leí el artículo "${post.title}" en el blog de Driva Dev y quería hacerles una consulta.`
  )}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "es-AR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: "Driva Dev",
      url: "https://drivadev.com.ar",
    },
    publisher: {
      "@type": "Organization",
      name: "Driva Dev",
      url: "https://drivadev.com.ar",
      logo: {
        "@type": "ImageObject",
        url: "https://drivadev.com.ar/isotipo.svg",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://drivadev.com.ar" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://drivadev.com.ar/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article>
        {/* ===== CABECERA ===== */}
        <header className="pt-36 pb-10">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <nav aria-label="Miga de pan" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
                  <li>
                    <Link href="/" className="hover:text-principal transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/blog" className="hover:text-principal transition-colors">
                      Blog
                    </Link>
                  </li>
                </ol>
              </nav>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <time dateTime={post.publishedAt} className="text-xs text-white/40">
                  {formatDate(post.publishedAt)}
                </time>
                <span className="text-xs text-white/40">
                  {post.readingMinutes} min de lectura
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-acento leading-[1.15] mb-6">
                {post.title}
              </h1>
              <p className="text-lg text-white/65 leading-relaxed">{post.description}</p>
            </div>
          </div>
        </header>

        {/* ===== CUERPO ===== */}
        <div className="pb-16">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <hr className="border-white/10 mb-12" />
              <div className="article-body">
                <Body />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ===== CTA ===== */}
      <section className="pb-8" aria-labelledby="cta-post">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="glass-card p-8 text-center">
                <h2 id="cta-post" className="text-2xl font-bold text-acento mb-3">
                  ¿Te quedó una duda sobre tu proyecto?
                </h2>
                <p className="text-white/60 mb-7 leading-relaxed max-w-lg mx-auto text-sm">
                  Escribinos por WhatsApp y te damos una perspectiva honesta, sin costo ni
                  compromiso, aunque la respuesta sea que todavía no necesitás una web.
                </p>
                <a
                  href={whatsappHref}
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== RELACIONADOS ===== */}
      {related.length > 0 && (
        <section className="section" aria-labelledby="relacionados-heading">
          <div className="container-main">
            <ScrollReveal>
              <h2
                id="relacionados-heading"
                className="text-2xl md:text-3xl font-bold text-acento mb-8"
              >
                Seguí leyendo
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((other, i) => (
                <ScrollReveal key={other.slug} delay={i * 90}>
                  <Link href={`/blog/${other.slug}`} className="card-project block h-full group">
                    <article className="flex flex-col h-full">
                      <span className="text-xs font-medium text-principal bg-principal/15 border border-principal/25 px-2 py-0.5 rounded-full self-start mb-3">
                        {other.category}
                      </span>
                      <h3 className="text-base font-bold text-acento leading-snug mb-2 group-hover:text-principal transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-sm text-white/55 leading-relaxed flex-1">
                        {other.description}
                      </p>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
