import WhatsAppLink from "@/components/WhatsAppLink";
import Link from "next/link";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "sitio-institucional-tienda-online-o-sistema-de-gestion",
  title: "Sitio institucional, tienda online o sistema de gestión: cuál necesita tu negocio",
  metaTitle: "Sitio Institucional, Tienda Online o Sistema de Gestión",
  description:
    "Guía para elegir qué tipo de web necesita tu negocio: sitio institucional, e-commerce, sistema de gestión o plataforma SaaS. Diferencias, costos y casos reales.",
  publishedAt: "2026-08-03",
  readingMinutes: 7,
  category: "Negocio",
  keywords: [
    "tipos de sitios web",
    "sitio institucional o tienda online",
    "sistema de gestion web",
    "que tipo de web necesito",
  ],
  ogHeadline: ["¿Qué tipo de web", "necesita tu negocio?"],
  coverAlt: "Una mano sostiene una tarjeta frente a una tienda online abierta en una notebook",
};

export default function Body() {
  return (
    <>
      <p>
        Mucha gente nos escribe pidiendo una página web cuando en realidad necesita un
        sistema. Y otra tanta pide un sistema completo cuando con tres secciones bien hechas
        resolvía el problema y se ahorraba meses de trabajo.
      </p>
      <p>
        La diferencia entre estas categorías no es de tamaño. Es de <strong>qué hace</strong>{" "}
        el software. Vamos una por una.
      </p>

      <h2>Sitio institucional: tu negocio explicado</h2>
      <p>
        Muestra información. Quién sos, qué hacés, por qué deberían elegirte y cómo
        contactarte. El usuario lee, se convence y te escribe. La transacción ocurre afuera:
        por teléfono, por WhatsApp, en tu local.
      </p>
      <p>
        <strong>Lo necesitás si:</strong> vendés servicios, trabajás con presupuestos a
        medida, tu ciclo de venta requiere una conversación, o simplemente necesitás
        existir con credibilidad cuando alguien te busca en Google.
      </p>
      <p>
        <strong>El error común:</strong> creer que es solo un folleto. Un sitio institucional
        bien hecho es tu principal máquina de captar clientes desde buscadores. Si el{" "}
        <Link href="/blog/que-es-el-seo-on-code">SEO on-code</Link> está bien resuelto,
        trabaja para vos las 24 horas.
      </p>
      <p>
        Un ejemplo real: el sitio que desarrollamos para{" "}
        <a href="https://www.runningteamcup.com.ar/es" target="_blank" rel="noopener noreferrer">
          Running Team Cup
        </a>
        , donde los corredores encuentran todo lo del evento antes de inscribirse.
      </p>

      <h2>Tienda online: tu negocio vendiendo</h2>
      <p>
        Acá el sitio procesa una transacción de punta a punta. Catálogo, carrito, medio de
        pago, envío, seguimiento del pedido. Cada uno de esos pasos es un módulo que hay que
        construir, probar y mantener.
      </p>
      <p>
        <strong>Lo necesitás si:</strong> vendés productos físicos o digitales con precio
        definido, y el cliente puede completar la compra sin hablar con nadie.
      </p>
      <p>
        <strong>El error común:</strong> subestimar la logística. La tienda es la parte
        visible. Detrás hay stock, facturación, devoluciones y atención al cliente. Si eso no
        está resuelto en tu negocio, la web no lo va a resolver por vos.
      </p>

      <h2>Sistema de gestión: tu negocio funcionando</h2>
      <p>
        No es para tus clientes. Es para vos y tu equipo. Reemplaza planillas de cálculo,
        cuadernos y cadenas de correos. Tiene usuarios, permisos, estados, y refleja el flujo
        real de trabajo de tu empresa.
      </p>
      <p>
        <strong>Lo necesitás si:</strong> tenés un proceso interno que hoy vive en Excel,
        varias personas tocan la misma información, y los errores de coordinación te cuestan
        plata.
      </p>
      <p>
        Es exactamente lo que construimos para{" "}
        <a href="https://www.wetcorp-comex.com.ar" target="_blank" rel="noopener noreferrer">
          Wet Corp
        </a>
        : un sistema de comercio exterior que conecta importadores, proveedores y despachantes
        en un solo flujo, con seguimiento de gastos en pesos y dólares, carga de documentos y
        estadísticas en tiempo real. Nada de eso existe como plantilla, porque el proceso de
        cada empresa es distinto.
      </p>

      <h2>Plataforma SaaS: tu negocio, siendo el producto</h2>
      <p>
        Acá el software es lo que vendés. Múltiples clientes pagan una suscripción para usar
        el mismo sistema, cada uno con sus datos aislados. Es el proyecto más complejo:
        implica facturación recurrente, aislamiento de datos, escalabilidad y soporte.
      </p>
      <p>
        Nosotros construimos y operamos los nuestros.{" "}
        <a href="https://turnly.com.ar" target="_blank" rel="noopener noreferrer">
          Turnly
        </a>{" "}
        gestiona turnos para peluquerías, estéticas y consultorios.{" "}
        <a href="https://menudig.com.ar" target="_blank" rel="noopener noreferrer">
          MenuDig
        </a>{" "}
        es un menú digital por QR para restaurantes. Los hicimos para nosotros, así que
        sabemos exactamente lo que implica sostener uno: facturación recurrente, aislamiento
        de datos entre clientes y soporte que no se toma vacaciones.
      </p>

      <h2>Cómo decidir en cinco preguntas</h2>
      <ol>
        <li>
          <strong>¿El usuario tiene que iniciar sesión?</strong> Si no, casi seguro es un
          sitio institucional.
        </li>
        <li>
          <strong>¿Se completa una compra sin intervención humana?</strong> Si sí, es una
          tienda online.
        </li>
        <li>
          <strong>¿Lo usa tu equipo o tus clientes?</strong> Tu equipo apunta a sistema de
          gestión.
        </li>
        <li>
          <strong>¿Varias empresas distintas van a pagar por usarlo?</strong> Eso es SaaS.
        </li>
        <li>
          <strong>¿Hoy resolvés esto con una planilla compartida?</strong> Ahí tenés tu
          sistema de gestión esperando a nacer.
        </li>
      </ol>

      <h2>La combinación es lo normal</h2>
      <p>
        En la práctica, la mayoría de los negocios termina con más de una pieza. Un sitio
        institucional que capta desde Google, y detrás un sistema de gestión donde el equipo
        trabaja. Lo importante es no construir el sistema antes de tener claro el proceso, ni
        el sitio antes de saber qué querés que haga.
      </p>
      <p>
        Nuestro proceso arranca siempre por la{" "}
        <Link href="/servicios">investigación del negocio</Link>, justamente para no
        equivocarnos de categoría. Muchas veces la conversación termina con una propuesta más
        chica de la que el cliente venía a pedir.
      </p>
      <p>
        Si no tenés claro dónde encaja tu caso,{" "}
        <WhatsAppLink>contanos qué hacés</WhatsAppLink> y lo pensamos juntos. Sin costo ni
        compromiso.
      </p>
    </>
  );
}
