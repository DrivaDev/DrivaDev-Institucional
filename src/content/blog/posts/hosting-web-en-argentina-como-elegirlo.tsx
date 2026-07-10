import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "hosting-web-en-argentina-como-elegirlo",
  title: "Hosting web: qué es, para qué sirve y cómo elegirlo",
  metaTitle: "Hosting Web en Argentina: Qué Es y Cómo Elegirlo",
  description:
    "Qué es el hosting, en qué se diferencia del dominio, tipos de alojamiento y qué mirar antes de contratar. Guía práctica para negocios en Argentina.",
  publishedAt: "2026-08-17",
  readingMinutes: 7,
  category: "Infraestructura",
  keywords: [
    "hosting web argentina",
    "que es el hosting",
    "alojamiento web",
    "hosting o dominio diferencia",
  ],
  ogHeadline: ["Hosting web:", "cómo elegirlo"],
};

export default function Body() {
  return (
    <>
      <p>
        Si el dominio es la dirección de tu casa, el hosting es el terreno donde la casa está
        construida. Podés tener la mejor dirección del mundo, pero si el terreno se inunda,
        no importa.
      </p>
      <p>
        Es la parte más invisible de tener una web, y por eso es donde más gente termina
        pagando de más por menos.
      </p>

      <h2>Dominio y hosting no son lo mismo</h2>
      <ul>
        <li>
          <strong>Dominio:</strong> el nombre. <code>tuempresa.com.ar</code>. Se paga por año
          y se renueva. Es lo más barato de toda la ecuación.
        </li>
        <li>
          <strong>Hosting:</strong> la computadora encendida las 24 horas que guarda tus
          archivos y se los entrega a quien visite tu sitio. Se paga por mes o por año.
        </li>
      </ul>
      <p>
        Son servicios independientes. Podés tener el dominio en un lado y el hosting en otro.
        Lo importante, y esto es innegociable: <strong>ambos deben estar a tu nombre</strong>.
        Si tu proveedor los registra a nombre de él, no sos dueño de tu presencia online.
        Podés perderla en una discusión comercial.
      </p>

      <h2>Los tipos de hosting</h2>

      <h3>Hosting compartido</h3>
      <p>
        Tu sitio comparte un servidor con cientos de otros. Es lo más barato. El problema es
        el vecino ruidoso: si otro sitio del mismo servidor recibe un pico de tráfico o sufre
        un ataque, el tuyo se vuelve lento o se cae. No tenés control sobre eso.
      </p>

      <h3>Servidor virtual o dedicado</h3>
      <p>
        Alquilás una porción reservada, o una máquina entera. Tenés control y recursos
        garantizados. También tenés la responsabilidad de administrarlo: actualizaciones del
        sistema, configuración, seguridad. Si nadie de tu equipo sabe hacerlo, es una bomba
        de tiempo.
      </p>

      <h3>Plataformas modernas de despliegue</h3>
      <p>
        En lugar de alquilar una máquina, tu sitio se distribuye en una red global de
        servidores. El usuario recibe el contenido desde el nodo más cercano a él. Se escala
        solo cuando hay tráfico, y no hay servidor que administrar.
      </p>
      <p>
        Es lo que usamos en Driva Dev. Todos nuestros proyectos, propios y de clientes, se
        alojan en Vercel. La razón es simple: la velocidad de entrega impacta directamente en
        las{" "}
        <Link href="/blog/core-web-vitals-velocidad-y-ventas">Core Web Vitals</Link>, y las
        Core Web Vitals impactan en tu posicionamiento y en tus ventas.
      </p>

      <h2>Qué mirar antes de contratar</h2>
      <ol>
        <li>
          <strong>Tiempo de respuesta del servidor.</strong> Es el primer eslabón de todo lo
          demás. Si el servidor tarda 800 milisegundos en contestar, tu LCP nunca va a ser
          bueno.
        </li>
        <li>
          <strong>Red de distribución de contenido.</strong> Sin ella, un usuario en Buenos
          Aires que consulta un servidor en Estados Unidos paga el viaje en cada carga.
        </li>
        <li>
          <strong>Certificado SSL incluido y renovado solo.</strong> Sin HTTPS, el navegador
          marca tu sitio como no seguro y Google te penaliza.
        </li>
        <li>
          <strong>Respaldos automáticos.</strong> Y la posibilidad real de restaurarlos.
        </li>
        <li>
          <strong>Soporte que responde.</strong> Cuando el sitio se cae un sábado, importa
          mucho más que el precio mensual.
        </li>
        <li>
          <strong>Que puedas irte.</strong> Si migrar tu sitio a otro proveedor es imposible,
          no contrataste un servicio: firmaste una condena.
        </li>
      </ol>

      <h2>Las trampas más comunes</h2>
      <ul>
        <li>
          <strong>El precio promocional del primer año.</strong> Contratás a un valor y la
          renovación cuesta tres veces más. Mirá siempre el precio de renovación.
        </li>
        <li>
          <strong>Recursos ilimitados.</strong> No existen. Hay un límite escrito en algún
          lado de los términos y condiciones, y lo vas a descubrir el día que más tráfico
          tengas.
        </li>
        <li>
          <strong>El dominio a nombre del proveedor.</strong> Verificalo hoy mismo.
        </li>
        <li>
          <strong>Hosting incluido gratis para siempre.</strong> Nada es gratis. Averiguá qué
          estás pagando con otra cosa.
        </li>
      </ul>

      <h2>Cómo lo resolvemos nosotros</h2>
      <p>
        Ofrecemos hosting administrado para los sitios que desarrollamos. Nos encargamos del
        servidor, los certificados, el dominio y la configuración técnica. Vos no tocás nada
        de eso.
      </p>
      <p>
        Y lo decimos claro: <strong>no es una condición</strong>. El código es tuyo, el
        dominio es tuyo y podés llevarte el sitio a donde quieras. Ofrecemos el servicio
        porque a la mayoría de nuestros clientes no le interesa administrar infraestructura,
        no porque necesitemos atarte.
      </p>
      <p>
        Los detalles están en la <Link href="/servicios#hosting">página de servicios</Link>, y
        va de la mano con el{" "}
        <Link href="/blog/por-que-tu-web-necesita-mantenimiento-mensual">
          mantenimiento mensual
        </Link>
        .
      </p>

      <h2>El resumen</h2>
      <p>
        El hosting barato se paga con velocidad, y la velocidad se paga con posiciones en
        Google y con clientes que no esperan. No es el lugar donde conviene ahorrar cinco mil
        pesos por mes.
      </p>
      <p>
        Si no sabés dónde está alojado tu sitio o a nombre de quién está el dominio,{" "}
        <WhatsAppLink>escribinos</WhatsAppLink>. Lo averiguamos juntos.
      </p>
    </>
  );
}
