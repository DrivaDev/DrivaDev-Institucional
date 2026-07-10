import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "por-que-tu-web-necesita-mantenimiento-mensual",
  title: "Por qué tu web necesita mantenimiento mensual",
  metaTitle: "Mantenimiento Web Mensual: Por Qué Tu Sitio Lo Necesita",
  description:
    "Qué incluye el mantenimiento web mensual, qué pasa si no lo hacés y cómo evaluar si te conviene. Seguridad, actualizaciones, contenido y monitoreo.",
  publishedAt: "2026-08-10",
  readingMinutes: 6,
  category: "Mantenimiento",
  keywords: [
    "mantenimiento web mensual",
    "mantenimiento de sitios web",
    "actualizar pagina web",
    "soporte web argentina",
  ],
  ogHeadline: ["Tu web necesita", "mantenimiento"],
};

export default function Body() {
  return (
    <>
      <p>
        Hay una creencia cómoda que dice que una web se hace una vez y queda hecha. Es la
        misma lógica de comprar un auto y no cambiarle nunca el aceite. Funciona un tiempo, y
        después deja de funcionar en el peor momento posible.
      </p>
      <p>
        Un sitio web vive en un ecosistema que cambia sin pedirte permiso: los navegadores se
        actualizan, aparecen vulnerabilidades nuevas, Google cambia lo que premia, y tu
        propio negocio cambia los precios y los servicios.
      </p>

      <h2>Qué se rompe cuando no hacés nada</h2>

      <h3>La seguridad se degrada sola</h3>
      <p>
        Cada dependencia que usa tu sitio es mantenida por alguien. Cuando se descubre una
        vulnerabilidad, se publica el arreglo <em>y también se publica la vulnerabilidad</em>.
        A partir de ese momento, todos los sitios que no actualizaron quedan expuestos, y hay
        bots que escanean internet buscándolos.
      </p>
      <p>
        No hace falta que seas un objetivo interesante. Los ataques automatizados no eligen:
        prueban en todos.
      </p>

      <h3>El contenido envejece</h3>
      <p>
        Precios de la temporada pasada, un servicio que ya no ofrecés, un teléfono que
        cambiaste. Cada dato viejo es una persona que te contacta mal informada, o que
        directamente no te contacta.
      </p>

      <h3>El posicionamiento se cae despacio</h3>
      <p>
        Google favorece los sitios que se actualizan. Un competidor que publica y mejora su
        contenido te va a pasar, aunque tu sitio esté mejor construido. La caída no es
        abrupta, es una erosión de meses que se nota cuando ya perdiste el terreno.
      </p>

      <h3>Los errores silenciosos</h3>
      <p>
        El caso más caro que vemos: el formulario de contacto dejó de enviar correos hace
        cinco meses. Nadie se dio cuenta. El sitio se ve perfecto. Simplemente todos los
        clientes que escribieron durante ese tiempo nunca recibieron respuesta.
      </p>

      <h2>Qué incluye un mantenimiento serio</h2>
      <ul>
        <li>
          <strong>Modificaciones de contenido y diseño.</strong> Cambiar textos, agregar una
          sección, actualizar fotos. Sin pedir presupuesto cada vez.
        </li>
        <li>
          <strong>Actualizaciones de seguridad y dependencias.</strong> Mantener el sitio al
          día con los parches, y verificar que nada se rompa al hacerlo.
        </li>
        <li>
          <strong>Monitoreo de disponibilidad.</strong> Saber que el sitio se cayó antes de
          que te lo diga un cliente.
        </li>
        <li>
          <strong>Respaldo periódico.</strong> Poder volver atrás si algo sale mal. Un
          respaldo que nunca se probó no es un respaldo.
        </li>
        <li>
          <strong>Soporte directo.</strong> Alguien que conoce tu sitio y te responde, sin
          tickets ni escalamientos.
        </li>
      </ul>

      <h2>Cómo lo hacemos en Driva Dev</h2>
      <p>
        Nuestros planes se miden en modificaciones mensuales. Elegís cuántas necesitás según
        el ritmo de tu negocio: hay sitios que cambian todas las semanas y otros que cambian
        cuatro veces al año.
      </p>
      <p>
        Y hay un detalle que nos gusta: <strong>si en el mes te sobran modificaciones, no se
        pierden.</strong> Usamos ese tiempo para analizar y mejorar el{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO de tu sitio</Link>. Revisamos métricas,
        ajustamos metadatos, buscamos oportunidades. En lugar de un crédito que se evapora,
        se convierte en posicionamiento.
      </p>
      <p>
        Podés ver el detalle completo en la{" "}
        <Link href="/servicios#mantenimiento">página de servicios</Link>.
      </p>

      <h2>¿Y si prefiero hacerlo yo?</h2>
      <p>
        Es una opción legítima, y depende de dos cosas: si tenés el conocimiento técnico y si
        tenés el tiempo. La segunda suele fallar antes que la primera.
      </p>
      <p>Si vas a encararlo por tu cuenta, mínimamente:</p>
      <ol>
        <li>Revisá que el formulario de contacto funcione, una vez por mes.</li>
        <li>Verificá que el certificado SSL no esté por vencer.</li>
        <li>Actualizá dependencias y probá el sitio después de hacerlo.</li>
        <li>Mirá las Core Web Vitals cada tanto en PageSpeed Insights.</li>
        <li>Tené un respaldo reciente, y probá restaurarlo alguna vez.</li>
      </ol>
      <p>
        Un sitio construido a medida necesita bastante menos mantenimiento que uno armado con
        plantillas y plugins, simplemente porque tiene menos piezas móviles. Lo comparamos en{" "}
        <Link href="/blog/desarrollo-a-medida-vs-wordpress">
          desarrollo a medida contra WordPress
        </Link>
        . Pero menos no es cero.
      </p>

      <h2>El resumen</h2>
      <p>
        El mantenimiento no es un gasto que te vende quien te hizo la web. Es lo que hace que
        la inversión que ya hiciste siga rindiendo. Un sitio abandonado se vuelve un pasivo:
        inseguro, desactualizado y cada vez más invisible.
      </p>
      <p>
        Si tenés una web y no sabés en qué estado está,{" "}
        <WhatsAppLink>escribinos</WhatsAppLink>. La revisamos y te contamos qué encontramos.
      </p>
    </>
  );
}
