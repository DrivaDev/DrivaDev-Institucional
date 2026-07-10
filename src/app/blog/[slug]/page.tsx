import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
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
  const whatsappMessage = `Hola! Leí el artículo "${post.title}" en el blog de Driva Dev y quería hacerles una consulta.`;

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
                <WhatsAppCTA label="Escribinos por WhatsApp" message={whatsappMessage} />
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
