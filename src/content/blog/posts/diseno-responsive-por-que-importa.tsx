import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "diseno-responsive-por-que-importa",
  title: "Diseño responsive: por qué la mayoría de tus visitas llega desde el celular",
  metaTitle: "Diseño Responsive: Por Qué Tu Web Debe Ser Mobile First",
  description:
    "Qué es el diseño responsive, qué significa mobile first y por qué Google indexa la versión móvil de tu sitio. Errores frecuentes y cómo detectarlos.",
  publishedAt: "2026-09-14",
  readingMinutes: 6,
  category: "Diseño",
  keywords: [
    "diseño responsive",
    "mobile first",
    "web adaptable celular",
    "indexacion movil google",
  ],
  ogHeadline: ["Diseño responsive", "y mobile first"],
  coverAlt: "Una persona sostiene un teléfono con las dos manos",
};

export default function Body() {
  return (
    <>
      <p>
        Abrí las estadísticas de tu sitio y mirá la proporción de visitas desde celular. Para
        la mayoría de los negocios en Argentina está entre el 60% y el 80%.
      </p>
      <p>
        Ahora abrí tu sitio en tu propio celular y usalo como lo usaría un cliente. Esa es la
        experiencia real de la mayoría de la gente que te encuentra. No la que ves en tu
        monitor de 27 pulgadas.
      </p>

      <h2>Responsive no es que se achique</h2>
      <p>
        Diseño responsive significa que el sitio <strong>se reorganiza</strong> según el
        espacio disponible. No que se encoja hasta que el texto sea ilegible.
      </p>
      <p>
        Una tabla de cuatro columnas en escritorio no se convierte en cuatro columnitas de
        dos centímetros. Se convierte en tarjetas apiladas. Un menú de siete secciones no se
        amontona en dos líneas: se transforma en un menú desplegable. Son decisiones de
        diseño, no de escala.
      </p>

      <h2>Mobile first, y por qué el orden importa</h2>
      <p>
        Diseñar primero para escritorio y después adaptar a móvil produce sitios móviles que
        son versiones mutiladas. Se recorta lo que no entra.
      </p>
      <p>
        Al revés, arrancando por la pantalla más chica, la restricción te obliga a jerarquizar
        desde el principio. Qué es lo primero que tiene que ver el usuario. Qué es
        prescindible. Cuando después expandís a escritorio, sumás espacio a una jerarquía que
        ya está resuelta.
      </p>

      <h2>Google indexa la versión móvil</h2>
      <p>
        Esto no es una opinión ni una tendencia: es cómo funciona hoy. Google rastrea tu
        sitio con un rastreador que simula un celular, y <strong>lo que ve ahí es lo que
        indexa</strong>.
      </p>
      <p>Las consecuencias son directas:</p>
      <ul>
        <li>
          Si escondés contenido en móvil para ahorrar espacio, ese contenido no existe para
          Google.
        </li>
        <li>
          Si la versión móvil tiene menos enlaces internos, esas páginas reciben menos
          autoridad.
        </li>
        <li>
          Si tus{" "}
          <Link href="/blog/core-web-vitals-velocidad-y-ventas">Core Web Vitals</Link> son
          malas en móvil, tu posicionamiento cae aunque en escritorio estés perfecto.
        </li>
      </ul>

      <h2>Los errores más comunes en móvil</h2>
      <ul>
        <li>
          <strong>Botones muy chicos o muy juntos.</strong> Un dedo no es un puntero. El área
          táctil mínima razonable es de 44 píxeles.
        </li>
        <li>
          <strong>Texto por debajo de 16 píxeles.</strong> Obliga a hacer zoom, y muchos
          navegadores lo interpretan como sitio no optimizado.
        </li>
        <li>
          <strong>Menús que tapan todo.</strong> Ventanas emergentes que no se pueden cerrar
          con el pulgar.
        </li>
        <li>
          <strong>Formularios sin el teclado correcto.</strong> Un campo de email debería
          abrir el teclado con arroba. Es un atributo, no una obra de ingeniería.
        </li>
        <li>
          <strong>Contenido que se corre mientras carga.</strong> Vas a tocar un enlace,
          aparece una imagen arriba y terminás en otro lado. Ese es el CLS.
        </li>
        <li>
          <strong>Imágenes de escritorio en móvil.</strong> Servir una imagen de 2000 píxeles
          a una pantalla de 400 quema los datos del usuario y su paciencia.
        </li>
      </ul>

      <h2>Cómo probarlo bien</h2>
      <ol>
        <li>
          Usá tu sitio en tu celular real, con datos móviles, no con el wifi de tu oficina.
        </li>
        <li>Intentá completar el formulario de contacto con una sola mano.</li>
        <li>
          Probá los tamaños intermedios. Las tablets y los celulares plegables suelen estar
          rotos porque nadie los miró nunca.
        </li>
        <li>
          Girá el teléfono a horizontal. Es donde más se rompen los diseños.
        </li>
        <li>
          Corré PageSpeed Insights y mirá la pestaña de móvil antes que la de escritorio.
        </li>
      </ol>

      <h2>Lo que no se ve, también importa</h2>
      <p>
        Un sitio puede verse bien en móvil y ser un desastre por dentro. Si la versión móvil
        oculta encabezados o reordena el contenido con CSS de forma que la estructura del
        documento deje de tener sentido, estás confundiendo a Google. Es la contracara del{" "}
        <Link href="/blog/html-semantico-el-detalle-que-google-mira">HTML semántico</Link>: el
        orden del código debe seguir teniendo lógica sin importar cómo se pinte.
      </p>

      <h2>El resumen</h2>
      <p>
        Ser 100% responsive no es una funcionalidad que se agrega al presupuesto. Es la
        condición mínima para que tu sitio exista para la mayoría de tus visitas y para el
        buscador que decide si te muestra.
      </p>
      <p>
        En Driva Dev es uno de nuestros requisitos no negociables, junto con la velocidad y el{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO on-code</Link>. Si querés que revisemos
        cómo se comporta tu sitio actual en móvil,{" "}
        <WhatsAppLink>mandanos la URL</WhatsAppLink>.
      </p>
    </>
  );
}
