import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "que-es-el-seo-on-code",
  title: "Qué es el SEO on-code y por qué define tu posicionamiento",
  metaTitle: "SEO On-Code: Qué Es y Por Qué Define tu Posicionamiento",
  description:
    "El SEO on-code es la optimización que vive en el código de tu sitio: metadatos, estructura, velocidad y datos estructurados. Qué es y cómo se implementa.",
  publishedAt: "2026-07-20",
  readingMinutes: 8,
  category: "SEO",
  keywords: [
    "seo on code",
    "seo tecnico",
    "optimizacion seo codigo",
    "seo on page vs on code",
  ],
  ogHeadline: ["Qué es el", "SEO on-code"],
};

export default function Body() {
  return (
    <>
      <p>
        Hay una idea muy instalada de que el SEO es escribir palabras clave y conseguir
        enlaces. Esa es una parte. La otra, la que nadie ve y casi nadie audita, vive dentro
        del código de tu sitio. Y si esa parte está mal, todo el contenido del mundo no te va
        a salvar.
      </p>
      <p>
        Le llamamos <strong>SEO on-code</strong>: las decisiones técnicas que se toman
        mientras se escribe el sitio y que determinan si Google puede entenderte, indexarte y
        recomendarte.
      </p>

      <h2>Las tres capas del SEO</h2>
      <ul>
        <li>
          <strong>SEO off-page:</strong> lo que pasa fuera de tu sitio. Enlaces que otros te
          hacen, menciones, reputación.
        </li>
        <li>
          <strong>SEO on-page:</strong> el contenido. Títulos, textos, imágenes, la
          intención de búsqueda que respondés.
        </li>
        <li>
          <strong>SEO on-code:</strong> la infraestructura. Cómo está construido el HTML, qué
          tan rápido carga, qué le decís a Google en lenguaje de máquina.
        </li>
      </ul>
      <p>
        Las tres importan. Pero el on-code es la base: si tu sitio tarda ocho segundos en
        cargar y tiene la estructura rota, ni el mejor artículo del mundo va a rankear.
      </p>

      <h2>Qué incluye el SEO on-code, concretamente</h2>

      <h3>1. Metadatos únicos por página</h3>
      <p>
        Cada página necesita su propio <code>title</code> y su propia{" "}
        <code>meta description</code>. Suena obvio, pero es el error más común que
        encontramos: sitios enteros donde las cinco páginas comparten el mismo título.
        Google lo interpreta como contenido duplicado y elige mostrar una sola.
      </p>
      <p>
        El título debe contener la palabra clave que esa página quiere ganar, y leerse
        naturalmente para un humano. La descripción no influye directamente en el ranking,
        pero sí en cuánta gente hace clic cuando te ve en los resultados.
      </p>

      <h3>2. Estructura semántica correcta</h3>
      <p>
        Un <code>h1</code> por página, jerarquía de encabezados sin saltos, etiquetas que
        describen lo que contienen. Es la diferencia entre entregarle a Google un documento
        ordenado o una pila de cajas sin etiquetar. Lo desarrollamos en{" "}
        <Link href="/blog/html-semantico-el-detalle-que-google-mira">
          HTML semántico, el detalle invisible que Google sí mira
        </Link>
        .
      </p>

      <h3>3. Velocidad y Core Web Vitals</h3>
      <p>
        Google mide cuánto tarda en aparecer el contenido principal, cuánto salta el layout
        mientras carga y qué tan rápido responde a la primera interacción. Son señales de
        ranking confirmadas. Todo eso se define en el código, no en un plugin. Más en{" "}
        <Link href="/blog/core-web-vitals-velocidad-y-ventas">
          Core Web Vitals y su impacto en las ventas
        </Link>
        .
      </p>

      <h3>4. Datos estructurados</h3>
      <p>
        Son un bloque de código que le explica a Google qué es cada cosa en tu página: esto
        es una empresa, esto es un artículo, esto es una pregunta frecuente. Bien
        implementados, habilitan los resultados enriquecidos. Lo cubrimos en{" "}
        <Link href="/blog/schema-markup-resultados-enriquecidos">
          schema markup y resultados enriquecidos
        </Link>
        .
      </p>

      <h3>5. Sitemap y robots</h3>
      <p>
        El <code>sitemap.xml</code> es el mapa que le entregás a Google con todas tus
        páginas. El <code>robots.txt</code> le dice qué puede rastrear y qué no. Sin sitemap,
        Google encuentra tus páginas eventualmente. Con sitemap, las encuentra hoy.
      </p>

      <h3>6. URLs canónicas</h3>
      <p>
        Si la misma página es accesible desde varias direcciones, Google no sabe cuál
        indexar y reparte la autoridad entre todas. La etiqueta canónica resuelve la
        ambigüedad: esta es la versión oficial.
      </p>

      <h3>7. Imágenes optimizadas</h3>
      <p>
        Formatos modernos, dimensiones declaradas para que el layout no salte, texto
        alternativo que describa la imagen. El texto alternativo no es solo accesibilidad:
        es la única forma que tiene un buscador de saber qué hay en esa foto.
      </p>

      <h3>8. Renderizado del servidor</h3>
      <p>
        Si tu contenido solo aparece después de que el navegador ejecuta JavaScript, estás
        apostando a que el rastreador de Google lo ejecute bien y a tiempo. A veces lo hace.
        A veces no. Entregar el HTML ya renderizado desde el servidor elimina la apuesta.
      </p>

      <h2>Por qué esto no se agrega después</h2>
      <p>
        Se puede corregir un título. Se puede agregar un sitemap. Lo que no se puede es
        cambiarle los cimientos a una casa terminada.
      </p>
      <p>
        Si el sitio se construyó sobre un tema que genera HTML desordenado, o sobre un stack
        que renderiza todo del lado del cliente, las opciones son parchar o rehacer. Por eso
        en Driva Dev el SEO on-code no es un servicio adicional que se cotiza aparte: es un
        requisito no negociable de todo lo que entregamos. Igual que el sitio sea{" "}
        <Link href="/blog/diseno-responsive-por-que-importa">100% responsive</Link>.
      </p>

      <h2>Cómo saber si tu sitio actual está bien</h2>
      <p>Un chequeo rápido que podés hacer vos mismo hoy:</p>
      <ol>
        <li>
          Buscá en Google <code>site:tudominio.com</code>. Si aparecen menos páginas de las
          que tenés, hay un problema de indexación.
        </li>
        <li>
          Mirá si cada resultado tiene un título distinto. Si se repiten, tenés metadatos
          duplicados.
        </li>
        <li>
          Abrí tu sitio y presioná Ctrl+U para ver el código fuente. Si no ves tus textos
          ahí, se están renderizando con JavaScript.
        </li>
        <li>
          Pasá tu URL por PageSpeed Insights. Si estás en rojo, la velocidad te está
          costando posiciones.
        </li>
        <li>
          Entrá a <code>tudominio.com/sitemap.xml</code>. Si da error, Google está
          descubriendo tus páginas a ciegas.
        </li>
      </ol>

      <h2>El resumen</h2>
      <p>
        El contenido convence a las personas. El código convence a los buscadores de mostrar
        ese contenido. Necesitás los dos, y el segundo se define el día que se escribe la
        primera línea del proyecto.
      </p>
      <p>
        Si querés saber en qué estado está el código de tu sitio actual,{" "}
        <Link href="/contacto">escribinos</Link>. Le damos una mirada y te decimos qué
        encontramos, sin vueltas.
      </p>
    </>
  );
}
