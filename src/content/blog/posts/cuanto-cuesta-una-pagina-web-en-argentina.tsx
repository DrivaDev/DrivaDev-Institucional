import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "cuanto-cuesta-una-pagina-web-en-argentina",
  title: "¿Cuánto cuesta una página web en Argentina?",
  metaTitle: "Cuánto Cuesta una Página Web en Argentina (2026)",
  description:
    "Qué define el precio de una página web en Argentina: alcance, tipo de proyecto, mantenimiento y hosting. Guía honesta para presupuestar sin sorpresas.",
  publishedAt: "2026-07-06",
  readingMinutes: 7,
  category: "Negocio",
  keywords: [
    "cuanto cuesta una pagina web",
    "precio pagina web argentina",
    "presupuesto desarrollo web",
    "cuanto sale una web a medida",
  ],
  ogHeadline: ["¿Cuánto cuesta una", "página web?"],
};

export default function Body() {
  return (
    <>
      <p>
        Es la primera pregunta que recibimos, y la más difícil de responder en una sola
        línea. Preguntar cuánto cuesta una página web se parece a preguntar cuánto cuesta
        una casa: depende de cuántos ambientes tiene, dónde está, con qué materiales se
        construye y quién la construye.
      </p>
      <p>
        Lo que sí podemos hacer es explicarte con total honestidad qué variables mueven el
        precio, para que puedas leer cualquier presupuesto (el nuestro y el de cualquier
        otro) sabiendo exactamente qué estás comparando.
      </p>

      <h2>Por qué nadie te da un número por teléfono</h2>
      <p>
        Cuando alguien te tira un precio cerrado antes de conocer tu negocio, está haciendo
        una de dos cosas: te está vendiendo una plantilla, o está poniendo un número alto
        para cubrirse de lo que no sabe. Ninguna de las dos te conviene.
      </p>
      <p>
        En <strong>Driva Dev</strong> no cotizamos hasta entender qué vendés, a quién, y qué
        problema real tiene que resolver el sitio. Esa etapa de investigación no es un
        trámite comercial: es lo que evita que pagues por funcionalidades que no vas a usar,
        o que te falten las que sí necesitás.
      </p>

      <h2>Las cinco variables que definen el precio</h2>

      <h3>1. El tipo de proyecto</h3>
      <p>
        No cuesta lo mismo un sitio institucional de cinco secciones que un sistema de
        gestión con usuarios, permisos, base de datos y reportes. La diferencia no es
        estética, es de complejidad técnica. Un sitio institucional muestra información. Un
        sistema procesa información, y todo lo que procesa hay que pensarlo, construirlo y
        probarlo.
      </p>
      <ul>
        <li>
          <strong>Sitio institucional:</strong> tu empresa presentada de forma clara y
          profesional. Es el proyecto más acotado.
        </li>
        <li>
          <strong>Tienda online:</strong> suma catálogo, carrito, medios de pago y gestión
          de stock. Cada uno de esos módulos es trabajo real.
        </li>
        <li>
          <strong>Sistema de gestión o plataforma SaaS:</strong> el extremo más complejo.
          Usuarios, roles, lógica de negocio, integraciones. Meses, no semanas.
        </li>
      </ul>

      <h3>2. Cuánto hay que diseñar desde cero</h3>
      <p>
        Si ya tenés identidad de marca definida (logo, colores, tipografía), parte del
        trabajo está resuelto. Si hay que construir todo eso, es un proyecto dentro del
        proyecto. Nosotros no usamos plantillas, así que el diseño siempre se piensa para tu
        caso, pero partir de una identidad existente acorta camino.
      </p>

      <h3>3. Las integraciones con otros sistemas</h3>
      <p>
        Conectar tu web con un medio de pago, un ERP, un CRM, un sistema de facturación o
        una API de terceros suma tiempo. Cada integración tiene su documentación, sus casos
        de error y sus pruebas. Es una de las variables que más subestima la gente al pedir
        un presupuesto.
      </p>

      <h3>4. El contenido</h3>
      <p>
        Los textos, las fotos y los videos son parte del sitio. Si los tenés listos, se
        integran. Si hay que producirlos, es otro trabajo. Y el contenido no es un detalle
        cosmético: es exactamente lo que Google lee para decidir si te muestra o no.
      </p>

      <h3>5. Qué pasa después del lanzamiento</h3>
      <p>
        Un sitio no se termina el día que sale al aire. Necesita actualizaciones de
        seguridad, cambios de contenido, monitoreo. Podés hacerlo vos, contratarlo aparte o
        tomarlo como servicio mensual. Es un costo recurrente que conviene tener en el
        cálculo desde el día uno, no descubrirlo a los seis meses.
      </p>

      <h2>Los tres costos que casi nadie te menciona</h2>
      <ol>
        <li>
          <strong>Dominio:</strong> el nombre de tu sitio. Se paga por año y es lo más
          barato de toda la ecuación.
        </li>
        <li>
          <strong>Hosting:</strong> dónde vive tu sitio. Varía muchísimo según la
          infraestructura, y el barato se paga con velocidad de carga.
        </li>
        <li>
          <strong>Mantenimiento:</strong> el costo de que tu sitio siga funcionando bien.
          Ignorarlo es la forma más común de terminar con una web rota a los dos años.
        </li>
      </ol>

      <h2>Barato sale caro: el costo real de una plantilla</h2>
      <p>
        Existe la opción de armar algo por muy poca plata con un constructor visual. Y para
        ciertos casos, funciona. El problema aparece después.
      </p>
      <p>
        Las plantillas cargan código que tu sitio no usa. Eso las hace lentas, y la
        velocidad afecta directamente tu posicionamiento y tus conversiones. Además, cuando
        el negocio crece y necesitás algo que la plantilla no contempla, la respuesta suele
        ser rehacer todo. Terminás pagando dos veces.
      </p>
      <h2>Cómo leer un presupuesto de desarrollo web</h2>
      <p>Antes de firmar, pedí que el presupuesto responda estas preguntas:</p>
      <ul>
        <li>¿El código fuente queda a mi nombre?</li>
        <li>¿El dominio y el hosting están a mi nombre o al del proveedor?</li>
        <li>¿Qué incluye exactamente y qué queda afuera?</li>
        <li>¿Cuántas rondas de revisión entran en el precio?</li>
        <li>¿Qué pasa si necesito un cambio a los tres meses?</li>
        <li>¿El sitio se entrega optimizado para buscadores o eso se cotiza aparte?</li>
      </ul>
      <p>
        Si alguna de esas respuestas es ambigua, ahí está tu riesgo. En nuestro caso, el
        código, el dominio y el hosting son tuyos. Sin candados.
      </p>

      <h2>Entonces, ¿cuánto cuesta?</h2>
      <p>
        Cuesta lo que cuesta resolver tu problema específico, ni un peso más. Por eso
        nuestra propuesta se arma después de entenderlo, y no antes. La conversación inicial
        no tiene costo ni compromiso, y muchas veces termina con nosotros diciéndote que
        necesitás algo más chico de lo que pensabas.
      </p>
      <p>
        Si querés un número real para tu caso concreto,{" "}
        <Link href="/contacto">contanos qué tenés en mente</Link>. Te respondemos en menos
        de 24 horas con una perspectiva honesta, aunque la respuesta sea que todavía no
        necesitás una web.
      </p>
    </>
  );
}
