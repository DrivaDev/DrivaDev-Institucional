import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "como-escribir-el-contenido-de-tu-web-para-google",
  title: "Cómo escribir el contenido de tu web para que Google te encuentre",
  metaTitle: "Cómo Escribir el Contenido de tu Web para Google",
  description:
    "Cómo elegir palabras clave, entender la intención de búsqueda y estructurar textos que posicionen. Guía práctica de contenido SEO para negocios.",
  publishedAt: "2026-08-31",
  readingMinutes: 8,
  category: "SEO",
  keywords: [
    "contenido seo",
    "como escribir para google",
    "palabras clave",
    "intencion de busqueda",
  ],
  ogHeadline: ["Escribir contenido", "que Google encuentre"],
};

export default function Body() {
  return (
    <>
      <p>
        Tu sitio puede estar impecablemente construido y aun así ser invisible. El{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO on-code</Link> hace que Google pueda
        leerte. El contenido es lo que hace que quiera mostrarte.
      </p>
      <p>
        Y no, no se trata de repetir la palabra clave quince veces. Eso funcionaba en 2010 y
        hoy es una forma eficiente de que te ignoren.
      </p>

      <h2>Empezá por la intención, no por la palabra</h2>
      <p>
        Detrás de cada búsqueda hay una persona con un objetivo. Ese objetivo tiene, en
        general, una de cuatro formas:
      </p>
      <ul>
        <li>
          <strong>Informativa:</strong> quiere aprender algo. Ejemplo: qué es un menú digital.
        </li>
        <li>
          <strong>Comercial:</strong> está comparando antes de decidir. Ejemplo: WordPress o
          desarrollo a medida.
        </li>
        <li>
          <strong>Transaccional:</strong> quiere contratar ya. Ejemplo: desarrollador web en
          Buenos Aires.
        </li>
        <li>
          <strong>Navegacional:</strong> busca un sitio específico que ya conoce.
        </li>
      </ul>
      <p>
        Si escribís un artículo educativo para una búsqueda transaccional, no vas a rankear
        aunque el texto sea excelente. Google ya sabe qué tipo de página satisface esa
        búsqueda, porque mide qué hace la gente con los resultados que muestra.
      </p>
      <p>
        <strong>El truco más útil que existe:</strong> buscá en Google la frase que querés
        ganar y mirá qué tipo de páginas aparecen. Si son todas guías largas, no vas a ganar
        con una página de producto. Google ya te está diciendo qué espera.
      </p>

      <h2>Elegir las palabras clave correctas</h2>
      <p>
        El error clásico es apuntar a las frases más buscadas. Contra desarrollo web compiten
        miles de sitios con años de autoridad. Contra desarrollo de sistema de gestión de
        importaciones compiten muchos menos, y quien lo busca está mucho más cerca de
        contratarte.
      </p>
      <p>Se le llama cola larga: menos volumen, más intención, menos competencia.</p>
      <p>Para cada página de tu sitio, definí:</p>
      <ol>
        <li>Una palabra clave principal. Una sola.</li>
        <li>Dos o tres variantes o términos relacionados.</li>
        <li>La intención de búsqueda que estás respondiendo.</li>
      </ol>
      <p>
        Si dos páginas de tu sitio apuntan a la misma palabra clave, compiten entre sí y
        Google elige una. Se llama canibalización, y es un problema silencioso que se resuelve
        fusionando páginas o diferenciando su enfoque.
      </p>

      <h2>Dónde va la palabra clave</h2>
      <p>Sin forzar nada, tiene que aparecer naturalmente en:</p>
      <ul>
        <li>El <code>title</code> de la página, lo más al principio posible.</li>
        <li>El <code>h1</code>, que debe ser único.</li>
        <li>La meta description, porque se resalta en los resultados.</li>
        <li>El primer párrafo del texto.</li>
        <li>Al menos un <code>h2</code>.</li>
        <li>La URL.</li>
        <li>El texto alternativo de alguna imagen relevante.</li>
      </ul>
      <p>
        Si al leer en voz alta suena raro, está mal. Escribís para una persona que decide si
        te contrata, no para un algoritmo.
      </p>

      <h2>Estructura: cómo se lee en pantalla</h2>
      <p>
        Nadie lee de corrido en internet. La gente escanea buscando la parte que le sirve. Tu
        estructura tiene que permitirlo:
      </p>
      <ul>
        <li>Párrafos cortos, de tres o cuatro líneas.</li>
        <li>Subtítulos cada dos o tres párrafos, que digan de qué habla la sección.</li>
        <li>Listas cuando haya elementos enumerables.</li>
        <li>Negrita en la idea central, no en frases enteras.</li>
        <li>La respuesta primero, la explicación después.</li>
      </ul>
      <p>
        Esto último es clave. Si alguien pregunta cuánto cuesta algo, respondé en el primer
        párrafo. No lo hagas bajar tres pantallas. Google mide cuánta gente vuelve atrás
        inmediatamente, y lo interpreta como que no resolviste la búsqueda.
      </p>

      <h2>Los enlaces internos, el activo olvidado</h2>
      <p>
        Cada vez que enlazás de una página tuya a otra, le pasás autoridad y le explicás a
        Google de qué trata la página de destino. El texto del enlace importa: enlazar con la
        palabra <em>acá</em> no le dice nada a nadie.
      </p>
      <p>
        Este mismo artículo enlaza a{" "}
        <Link href="/blog/core-web-vitals-velocidad-y-ventas">Core Web Vitals</Link> y a{" "}
        <Link href="/blog/html-semantico-el-detalle-que-google-mira">HTML semántico</Link>{" "}
        usando exactamente esas frases. No es casualidad.
      </p>

      <h2>La extensión correcta</h2>
      <p>
        No hay un número mágico. La extensión correcta es la que responde completamente la
        búsqueda y ni una palabra más. Un artículo de 2.000 palabras relleno con contexto
        innecesario rankea peor que uno de 700 que va al grano.
      </p>
      <p>
        Dicho eso: si tu página de servicios tiene 150 palabras, Google no tiene material
        suficiente para entender de qué se trata. Y tampoco lo tiene tu potencial cliente.
      </p>

      <h2>Lo que Google premia de verdad</h2>
      <p>
        Google evalúa experiencia, especialización, autoridad y confianza. En criollo: si lo
        que escribís demuestra que sabés de lo que hablás porque lo hiciste, vale más que un
        texto genérico bien optimizado.
      </p>
      <p>
        Contá casos reales. Mostrá números. Admití lo que no sabés y lo que no conviene. La
        honestidad es, además de correcta, una ventaja competitiva: casi nadie la usa.
      </p>

      <h2>El resumen</h2>
      <p>
        Entendé qué busca la persona, respondé eso mejor que nadie, estructurá el texto para
        que sea escaneable y enlazá tus propias páginas con criterio. El resto es paciencia:
        el contenido tarda meses en madurar, y después trabaja durante años.
      </p>
      <p>
        Si querés que revisemos el contenido de tu sitio con esta grilla,{" "}
        <WhatsAppLink>escribinos</WhatsAppLink>.
      </p>
    </>
  );
}
