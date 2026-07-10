import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "schema-markup-resultados-enriquecidos",
  title: "Schema markup: cómo aparecer en los resultados enriquecidos de Google",
  metaTitle: "Schema Markup: Cómo Lograr Resultados Enriquecidos",
  description:
    "Qué son los datos estructurados, qué tipos de schema conviene implementar y cómo habilitan estrellas, preguntas frecuentes y otros resultados enriquecidos.",
  publishedAt: "2026-09-21",
  readingMinutes: 7,
  category: "SEO",
  keywords: [
    "schema markup",
    "datos estructurados",
    "rich snippets",
    "resultados enriquecidos google",
  ],
  ogHeadline: ["Schema markup y", "resultados enriquecidos"],
};

export default function Body() {
  return (
    <>
      <p>
        Cuando buscás una receta y ves las estrellas de valoración, el tiempo de cocción y las
        calorías directamente en el resultado, eso no lo adivinó Google. Se lo dijo el sitio,
        en un lenguaje que las máquinas entienden sin ambigüedad.
      </p>
      <p>
        Ese lenguaje se llama <strong>schema markup</strong>, o datos estructurados. Es un
        bloque de código invisible para el usuario que le explica a los buscadores qué es cada
        cosa en tu página.
      </p>

      <h2>El problema que resuelve</h2>
      <p>
        Google lee tu página y ve texto. Puede inferir bastante, pero infiere. Ve el número
        4,8 al lado de la palabra valoración y probablemente entienda. Ve un teléfono y
        probablemente lo reconozca.
      </p>
      <p>
        El schema elimina el probablemente. En lugar de que Google interprete, vos declarás:
        esto es una organización, este es su teléfono, este es un artículo, esta es su fecha de
        publicación, este es su autor.
      </p>
      <p>
        Va de la mano con el{" "}
        <Link href="/blog/html-semantico-el-detalle-que-google-mira">HTML semántico</Link>. El
        HTML semántico describe la <em>estructura</em>. El schema describe el{" "}
        <em>significado</em>.
      </p>

      <h2>Qué ganás concretamente</h2>
      <ul>
        <li>
          <strong>Resultados enriquecidos.</strong> Estrellas, precios, preguntas
          desplegables, migas de pan, imágenes. Ocupás más espacio en la pantalla y recibís
          más clics con la misma posición.
        </li>
        <li>
          <strong>Panel de conocimiento.</strong> Ese recuadro con los datos de tu empresa a
          la derecha de los resultados.
        </li>
        <li>
          <strong>Búsquedas por voz e inteligencia artificial.</strong> Los asistentes y los
          modelos de lenguaje leen datos estructurados con preferencia sobre texto libre. Si
          querés que te citen, se lo tenés que poner fácil.
        </li>
      </ul>
      <p>
        Importante y honesto: <strong>el schema no es una señal directa de ranking</strong>.
        No te sube de posición por existir. Lo que hace es aumentar cuánta gente hace clic
        cuando ya apareciste, y eso sí termina impactando.
      </p>

      <h2>Los tipos que le sirven a casi cualquier negocio</h2>

      <h3>Organization o LocalBusiness</h3>
      <p>
        Quién sos, dónde estás, cómo te contactan, tus redes sociales. Es el primero que hay
        que implementar. Si atendés en un lugar físico, <code>LocalBusiness</code> con horarios
        y coordenadas te habilita para las búsquedas locales.
      </p>

      <h3>BreadcrumbList</h3>
      <p>
        Las migas de pan. Reemplaza la URL cruda en el resultado por una ruta legible del tipo
        Inicio, Blog, Este artículo. Sencillo de implementar y siempre conviene.
      </p>

      <h3>FAQPage</h3>
      <p>
        Preguntas frecuentes con sus respuestas. Puede mostrarlas desplegables debajo de tu
        resultado. Requisito clave: las preguntas tienen que estar <strong>visibles en la
        página</strong>. Marcar preguntas que el usuario no ve es una violación de las guías y
        se penaliza.
      </p>

      <h3>Article</h3>
      <p>
        Para el contenido del blog. Título, fecha de publicación, fecha de actualización,
        autor, imagen. Ayuda a que Google entienda la frescura y la autoría del contenido.
      </p>

      <h3>Product y Service</h3>
      <p>
        Para lo que vendés. <code>Product</code> con precio y disponibilidad habilita los
        resultados de compra. <code>Service</code> describe servicios sin precio fijo, que es
        el caso de la mayoría de los negocios que trabajan a medida.
      </p>

      <h2>Los errores que anulan todo</h2>
      <ol>
        <li>
          <strong>Marcar contenido que no está visible.</strong> El motivo número uno de
          penalización manual por datos estructurados.
        </li>
        <li>
          <strong>Inventar valoraciones.</strong> Poner cinco estrellas sin reseñas reales.
          Google lo detecta y castiga el dominio entero.
        </li>
        <li>
          <strong>Schema que contradice la página.</strong> Un precio en el código y otro en el
          texto.
        </li>
        <li>
          <strong>Implementarlo y no validarlo nunca.</strong> Un error de sintaxis y Google
          ignora el bloque completo, en silencio.
        </li>
        <li>
          <strong>Poner el mismo schema en todas las páginas.</strong> Cada página debe
          describirse a sí misma.
        </li>
      </ol>

      <h2>Cómo validarlo</h2>
      <p>
        Google tiene una prueba de resultados enriquecidos y un validador de schema. Pegás la
        URL, te dice qué tipos detectó y qué errores encontró. En Search Console, además, hay
        un informe permanente de datos estructurados con los problemas de todo el sitio.
      </p>
      <p>
        Hacelo cada vez que cambies el sitio. Un rediseño que rompe el schema no muestra
        ningún síntoma visible: simplemente dejás de aparecer enriquecido y no te enterás.
      </p>

      <h2>Cómo lo hacemos nosotros</h2>
      <p>
        Cada página de este sitio lleva los datos estructurados que le corresponden. Esta que
        estás leyendo declara <code>Article</code> y <code>BreadcrumbList</code>. La de
        servicios declara <code>Service</code> y <code>FAQPage</code>, con las preguntas
        visibles en pantalla, como corresponde. El sitio entero declara{" "}
        <code>Organization</code>.
      </p>
      <p>
        No es un extra: es parte de lo que entendemos por{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO on-code de primer nivel</Link>, y va en
        todos los proyectos que entregamos.
      </p>

      <h2>El resumen</h2>
      <p>
        El schema es la traducción de tu página al idioma de las máquinas. Cuesta poco
        implementarlo bien, no cuesta nada mantenerlo, y es una de las pocas cosas del SEO que
        depende enteramente de vos y no de la competencia.
      </p>
      <p>
        Si querés saber qué datos estructurados tiene tu sitio hoy,{" "}
        <WhatsAppLink>escribinos</WhatsAppLink> y lo revisamos.
      </p>
    </>
  );
}
