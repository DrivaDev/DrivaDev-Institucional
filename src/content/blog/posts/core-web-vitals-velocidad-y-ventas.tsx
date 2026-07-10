import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "core-web-vitals-velocidad-y-ventas",
  title: "Core Web Vitals: cómo la velocidad de tu web afecta tus ventas",
  metaTitle: "Core Web Vitals: Velocidad Web y Ventas",
  description:
    "Qué son LCP, INP y CLS, cómo los mide Google y qué hacer para mejorarlos. La velocidad de tu sitio afecta el posicionamiento y la conversión.",
  publishedAt: "2026-07-27",
  readingMinutes: 8,
  category: "Performance",
  keywords: [
    "core web vitals",
    "velocidad de carga web",
    "LCP INP CLS",
    "optimizar velocidad sitio web",
  ],
  ogHeadline: ["Core Web Vitals", "y tus ventas"],
  coverAlt: "El velocímetro iluminado del tablero de un auto",
};

export default function Body() {
  return (
    <>
      <p>
        Tu sitio puede tener el mejor diseño, el mejor texto y la mejor propuesta. Si tarda
        cinco segundos en mostrar algo, buena parte de tus visitas ya se fue antes de leer la
        primera palabra.
      </p>
      <p>
        Google entendió esto hace años y convirtió la velocidad en una señal de ranking
        medible. Se llaman <strong>Core Web Vitals</strong>, y son tres números que definen si
        tu sitio se siente rápido para una persona real.
      </p>

      <h2>Las tres métricas, sin tecnicismos</h2>

      <h3>LCP: cuánto tarda en aparecer lo importante</h3>
      <p>
        <em>Largest Contentful Paint</em> mide cuánto pasa hasta que se pinta el elemento más
        grande de la pantalla, que suele ser la imagen principal o el título. Es la respuesta
        a la pregunta del usuario: ¿esto cargó o no?
      </p>
      <ul>
        <li>Bueno: menos de 2,5 segundos.</li>
        <li>Necesita mejora: entre 2,5 y 4 segundos.</li>
        <li>Malo: más de 4 segundos.</li>
      </ul>

      <h3>INP: cuánto tarda en responderte</h3>
      <p>
        <em>Interaction to Next Paint</em> mide el tiempo entre que hacés clic y que la
        pantalla reacciona. Es la métrica de la frustración: el botón que apretás dos veces
        porque parecía que no había pasado nada.
      </p>
      <ul>
        <li>Bueno: menos de 200 milisegundos.</li>
        <li>Necesita mejora: entre 200 y 500 milisegundos.</li>
        <li>Malo: más de 500 milisegundos.</li>
      </ul>

      <h3>CLS: cuánto se mueve la página mientras carga</h3>
      <p>
        <em>Cumulative Layout Shift</em> mide los saltos. Vas a tocar un enlace, carga una
        imagen arriba, todo se corre hacia abajo y terminás en otra página. Ese salto tiene
        un puntaje, y cuanto más alto, peor.
      </p>
      <ul>
        <li>Bueno: menos de 0,1.</li>
        <li>Necesita mejora: entre 0,1 y 0,25.</li>
        <li>Malo: más de 0,25.</li>
      </ul>

      <h2>Por qué esto se traduce en plata</h2>
      <p>
        Las Core Web Vitals no son un capricho de ingeniería. Miden exactamente las tres
        formas en que un sitio lento te hace perder clientes:
      </p>
      <ol>
        <li>
          <strong>El que se va antes de ver nada.</strong> Cada segundo de espera aumenta la
          tasa de rebote. La gente no espera, vuelve a Google y entra al siguiente resultado,
          que es tu competencia.
        </li>
        <li>
          <strong>El que se frustra a mitad de camino.</strong> Un formulario que responde
          tarde, un carrito que no reacciona. La intención de compra existía y se disolvió en
          la fricción.
        </li>
        <li>
          <strong>El que hace clic donde no quería.</strong> El layout saltó y terminó en
          otro lado. Ese usuario aprende a desconfiar de tu sitio.
        </li>
      </ol>
      <p>
        Y por encima de todo eso, Google usa estas métricas para decidir a quién muestra
        primero. Un sitio lento no solo convierte peor: recibe menos visitas para empezar.
      </p>

      <h2>Qué es lo que hace lento a un sitio</h2>
      <p>Casi siempre es la misma lista de sospechosos:</p>
      <ul>
        <li>
          <strong>Imágenes sin optimizar.</strong> Una foto de 4 MB directo de la cámara,
          servida en un cuadro de 400 píxeles de ancho.
        </li>
        <li>
          <strong>JavaScript que no se usa.</strong> Librerías completas cargadas para usar
          una sola función. Es el pecado clásico de los sitios armados con plantillas y
          plugins.
        </li>
        <li>
          <strong>Fuentes tipográficas mal cargadas.</strong> El texto aparece, la fuente
          termina de descargar, todo se reacomoda. Ahí tenés tu CLS.
        </li>
        <li>
          <strong>Imágenes sin dimensiones declaradas.</strong> El navegador no sabe cuánto
          espacio reservar hasta que la imagen llega. Otro salto.
        </li>
        <li>
          <strong>Scripts de terceros.</strong> Chats, píxeles de publicidad, mapas
          embebidos. Cada uno bloquea el hilo principal.
        </li>
        <li>
          <strong>Hosting lento.</strong> Si el servidor tarda en responder, todo lo demás
          arranca tarde. Es el primer eslabón de la cadena.
        </li>
      </ul>

      <h2>Cómo se arregla de verdad</h2>
      <p>
        Existen plugins que prometen resolver la velocidad. Comprimen, cachean y minifican.
        Ayudan en el margen, pero no cambian el problema de fondo: un sitio que descarga
        código que no necesita va a seguir descargando código que no necesita, ahora
        comprimido.
      </p>
      <p>La solución real es no cargarlo nunca. En la práctica, eso significa:</p>
      <ul>
        <li>Servir el HTML ya renderizado desde el servidor, no armarlo con JavaScript.</li>
        <li>Enviar solo el JavaScript que esa página específica usa.</li>
        <li>Servir imágenes en formatos modernos, del tamaño exacto que se muestran.</li>
        <li>Declarar ancho y alto en cada imagen para reservar el espacio.</li>
        <li>Diferir todo lo que no sea crítico hasta después de la primera pintura.</li>
        <li>Elegir un hosting con red de distribución de contenido cerca del usuario.</li>
      </ul>
      <p>
        Todo eso son decisiones de arquitectura. Se toman cuando se escribe el sitio, no
        después. Es parte de lo que llamamos{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO on-code</Link>, y es la razón por la que
        preferimos construir desde cero antes que{" "}
        <Link href="/blog/desarrollo-a-medida-vs-wordpress">partir de una plantilla</Link>.
      </p>

      <h2>Medí tu sitio ahora mismo</h2>
      <p>
        Entrá a PageSpeed Insights, pegá la URL de tu página principal y mirá la sección de
        datos de campo. Ese bloque muestra la experiencia real de usuarios reales durante los
        últimos 28 días. Es lo que Google usa de verdad.
      </p>
      <p>
        Prestá atención a la versión móvil antes que a la de escritorio. La mayoría de tu
        tráfico llega desde un celular con una conexión mediocre, y esa es la experiencia que
        Google prioriza.
      </p>

      <h2>El resumen</h2>
      <p>
        La velocidad no es un lujo técnico: es la primera impresión de tu negocio. Un sitio
        rápido rankea mejor, retiene más y convierte más. Un sitio lento pierde en las tres
        dimensiones al mismo tiempo.
      </p>
      <p>
        Si querés saber cómo está el tuyo,{" "}
        <WhatsAppLink>mandanos la URL</WhatsAppLink>. Lo medimos y te decimos qué lo está
        frenando, sin compromiso.
      </p>
    </>
  );
}
