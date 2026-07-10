import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "html-semantico-el-detalle-que-google-mira",
  title: "HTML semántico: el detalle invisible que Google sí mira",
  metaTitle: "HTML Semántico: El Detalle Que Google Sí Mira",
  description:
    "Qué es el HTML semántico, por qué mejora tu SEO y tu accesibilidad, y los errores de estructura más frecuentes en sitios web. Con ejemplos concretos.",
  publishedAt: "2026-08-24",
  readingMinutes: 7,
  category: "SEO",
  keywords: [
    "html semantico",
    "estructura html seo",
    "etiquetas semanticas",
    "accesibilidad web",
  ],
  ogHeadline: ["HTML semántico:", "lo que Google mira"],
};

export default function Body() {
  return (
    <>
      <p>
        Dos sitios pueden verse exactamente iguales en pantalla y ser completamente distintos
        por dentro. Uno le entrega a Google un documento ordenado, con capítulos y títulos. El
        otro le entrega una pila de cajas sin etiquetar.
      </p>
      <p>
        El usuario no ve la diferencia. El buscador no ve otra cosa.
      </p>

      <h2>Qué significa semántico</h2>
      <p>
        HTML tiene etiquetas que <em>describen lo que contienen</em>. Un{" "}
        <code>&lt;nav&gt;</code> contiene navegación. Un <code>&lt;article&gt;</code> contiene
        un contenido autónomo. Un <code>&lt;button&gt;</code> es algo que se presiona.
      </p>
      <p>
        También existe el <code>&lt;div&gt;</code>, que no significa nada. Es una caja
        genérica. Se puede construir un sitio entero usando solo <code>div</code>, y va a
        verse perfecto. Simplemente no le va a decir nada a nadie que no tenga ojos.
      </p>
      <p>Escribir HTML semántico es elegir la etiqueta que corresponde al contenido real.</p>

      <h2>Por qué le importa a Google</h2>
      <p>
        El rastreador de Google no ve tu diseño. Lee la estructura y trata de entender de qué
        trata cada parte de la página. Las etiquetas semánticas le responden preguntas que de
        otra forma tendría que adivinar:
      </p>
      <ul>
        <li>¿Cuál es el tema principal de esta página? Lo dice el <code>h1</code>.</li>
        <li>¿Cuáles son los subtemas? Los <code>h2</code> y <code>h3</code>.</li>
        <li>¿Qué es contenido y qué es menú repetido en todas las páginas?</li>
        <li>¿Esto es un artículo publicado o un widget de la barra lateral?</li>
      </ul>
      <p>
        Cuanta menos ambigüedad le dejes, mejor entiende de qué hablás, y con más confianza te
        muestra para las búsquedas correctas.
      </p>

      <h2>Los errores que encontramos una y otra vez</h2>

      <h3>Varios h1 en la misma página</h3>
      <p>
        El <code>h1</code> es el título del documento. Uno solo. Cuando hay tres, Google tiene
        que elegir, y elige mal. Suele pasar cuando el logo del encabezado está marcado como{" "}
        <code>h1</code> en todas las páginas.
      </p>

      <h3>Encabezados usados por su tamaño</h3>
      <p>
        Alguien necesita un texto grande y usa un <code>h2</code>. Después necesita uno chico y
        usa un <code>h4</code>, salteándose el <code>h3</code>. La jerarquía queda rota. Los
        encabezados definen estructura, no tamaño: para el tamaño está el CSS.
      </p>

      <h3>Divs que deberían ser botones o enlaces</h3>
      <p>
        Un <code>div</code> con un evento de clic funciona con el mouse y falla con el
        teclado. No aparece en la navegación por tabulación, no se anuncia en un lector de
        pantalla y, si debía ser un enlace, Google nunca lo sigue.
      </p>

      <h3>Imágenes sin texto alternativo</h3>
      <p>
        El atributo <code>alt</code> es la única forma que tiene un buscador, o una persona
        ciega, de saber qué hay en esa imagen. Dejarlo vacío en una imagen informativa es
        tirar contenido a la basura.
      </p>

      <h3>Formularios sin etiquetas asociadas</h3>
      <p>
        Un campo con el nombre escrito al lado, en un <code>span</code>, no está etiquetado.
        Necesita un <code>&lt;label&gt;</code> vinculado al campo. Sin eso, un lector de
        pantalla anuncia campo de texto y nada más.
      </p>

      <h2>La accesibilidad es el mismo trabajo</h2>
      <p>
        Acá está lo interesante: todo lo que hacés para que Google entienda tu sitio es lo
        mismo que hacés para que lo entienda un lector de pantalla. Google navega tu sitio de
        forma muy parecida a como lo hace una persona ciega.
      </p>
      <p>
        No son dos tareas. Es una. Un sitio accesible está bien posicionado casi por
        consecuencia, y además cumple con los requisitos legales de accesibilidad que cada vez
        más países exigen.
      </p>

      <h2>Por qué las plantillas fallan acá</h2>
      <p>
        Un tema genérico tiene que servir para un blog de cocina y para el sitio de un
        estudio jurídico. Como no sabe qué vas a poner adentro, envuelve todo en{" "}
        <code>div</code> anidados. Es la decisión segura para el que fabrica el tema, y la
        peor para el que lo usa.
      </p>
      <p>
        Ningún plugin de SEO puede arreglarlo, porque el problema no está en los metadatos:
        está en el esqueleto. Lo desarrollamos en{" "}
        <Link href="/blog/desarrollo-a-medida-vs-wordpress">
          desarrollo a medida contra WordPress
        </Link>
        .
      </p>

      <h2>Cómo revisar tu sitio hoy</h2>
      <ol>
        <li>Abrí tu página y presioná Ctrl+U para ver el código fuente.</li>
        <li>
          Buscá <code>&lt;h1</code>. Debería aparecer exactamente una vez.
        </li>
        <li>
          Buscá <code>&lt;nav</code>, <code>&lt;main</code>, <code>&lt;footer</code>. Si no
          están, tu sitio es una pila de cajas.
        </li>
        <li>
          Buscá <code>alt=&quot;&quot;</code> en imágenes que sí comunican algo.
        </li>
        <li>Navegá tu sitio usando solo la tecla Tab. Si te perdés, tus usuarios también.</li>
      </ol>

      <h2>El resumen</h2>
      <p>
        La estructura semántica no se ve, no se vende en una presentación y no impresiona a
        nadie en una reunión. Es, exactamente por eso, donde casi todos aflojan. Y es la base
        del <Link href="/blog/que-es-el-seo-on-code">SEO on-code</Link>.
      </p>
      <p>
        En Driva Dev, que un sitio esté semánticamente perfecto no es una opción del
        presupuesto: es un requisito de todo lo que entregamos.{" "}
        <WhatsAppLink>Escribinos</WhatsAppLink> si querés que revisemos el tuyo.
      </p>
    </>
  );
}
