/**
 * Todo el texto del sitio en español.
 *
 * Este archivo es la fuente de la forma del diccionario: `en.ts` está tipado
 * contra él, así que agregar una clave acá obliga a traducirla allá.
 * Los `iconPath` no viven acá: son SVG, no texto, y quedan en cada página.
 */
const es = {
  meta: {
    /** Se antepone al `title` de cada página vía el template del layout. */
    titleTemplate: "%s | Driva Dev",
    defaultTitle: "Desarrollo Web a Medida en Argentina | Driva Dev",
    defaultDescription:
      "Desarrollo web a medida en Argentina para empresas y emprendedores. Construimos sitios, aplicaciones web y sistemas desde cero. Sin plantillas, con acompañamiento real.",
    keywords: [
      "desarrollo web a medida",
      "diseñador web argentina",
      "desarrollador web argentina",
      "diseño web buenos aires",
      "aplicaciones web a medida",
      "desarrollo de software argentina",
      "programador web freelance",
      "agencia desarrollo web",
    ],
    /** Descripción de la organización en el JSON-LD del layout. */
    organizationDescription:
      "Desarrollo web a medida en Argentina para empresas y emprendedores. Sitios, aplicaciones web y sistemas construidos desde cero.",
    availableLanguage: "Spanish",
  },

  nav: {
    ariaMain: "Navegación principal",
    ariaLogo: "Driva Dev, ir al inicio",
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    blog: "Blog",
    contact: "Contacto",
    cta: "Solicitar proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "Ver el sitio en inglés",
  },

  footer: {
    aria: "Pie de página",
    tagline:
      "Tu presencia online, construida para crecer. Desarrollo web a medida para empresas y emprendedores.",
    ariaSecondaryNav: "Navegación secundaria",
    pagesLabel: "Páginas",
    localBA: "Desarrollo web en Buenos Aires",
    quickContactLabel: "Contacto rápido",
    ariaWhatsApp: "WhatsApp Driva Dev",
    ariaEmail: "Email Driva Dev",
    ariaInstagram: "Instagram @driva.dev",
    rights: "© 2025 Driva Dev. Todos los derechos reservados.",
    builtBy: "Desarrollado por",
  },

  whatsapp: {
    default: "Hola! Quería hacerles una consulta sobre un proyecto web.",
    blog: "Hola! Los encontré por el blog de Driva Dev y quería hacerles una consulta.",
    homeHero: "Hola! Quería consultarles por el desarrollo de un proyecto web.",
    homeFinal: "Hola! Tengo un proyecto en mente y quería consultarles.",
    services: "Hola! Vi sus servicios y quería pedirles una propuesta para mi negocio.",
    portfolio: "Hola! Vi su portafolio y quería consultarles por un proyecto.",
    /** Sufijo del `aria-label` de los botones de WhatsApp. */
    ariaSuffix: "por WhatsApp (abre en nueva pestaña)",
  },

  common: {
    openInNewTab: "abre en nueva pestaña",
    viewProject: "Ver proyecto",
    learnMore: "Saber más",
    readArticle: "Leer artículo",
    minRead: "min de lectura",
    min: "min",
  },

  home: {
    metaTitle: "Desarrollo Web a Medida en Argentina | Driva Dev",
    metaDescription:
      "Desarrollo web a medida en Argentina para empresas y emprendedores. Construimos sitios, aplicaciones web y sistemas desde cero. Sin plantillas, con acompañamiento real.",
    ogTitle: "Desarrollo Web a Medida en Argentina | Driva Dev",
    ogDescription:
      "Desarrollamos sitios y aplicaciones web a medida para empresas y emprendedores argentinos. Sin plantillas, código propio.",

    hero: {
      badge: "Desarrollo web · Argentina",
      titleLead: "Desarrollo web a medida,",
      titleAccent: "construido para crecer.",
      body: "Desarrollamos sitios y aplicaciones web a medida que generan resultados reales. Primero entendemos tu negocio, después escribimos el código.",
      ctaPrimary: "Solicitar proyecto",
      ctaSecondary: "Ver portafolio",
      rootAlt: "Root, la mascota de Driva Dev, de brazos cruzados",
    },

    services: {
      heading: "Lo que desarrollamos",
      cta: "Ver todos los servicios",
      items: [
        {
          title: "Desarrollo a medida",
          body: "Sitios, tiendas, sistemas y aplicaciones web construidos desde cero según tu necesidad.",
        },
        {
          title: "Mantenimiento",
          body: "Planes mensuales con modificaciones incluidas. Tu web siempre actualizada y segura.",
        },
        {
          title: "Hosting",
          body: "Gestionamos el servidor por vos. Instalá y olvidate de la parte técnica.",
        },
      ],
    },

    portfolio: {
      heading: "Algunos proyectos",
      cta: "Ver portafolio completo",
      items: [
        {
          name: "Turnly",
          tag: "SaaS · Gestión de turnos",
          description:
            "Software de gestión de turnos para peluquerías, estéticas y consultorios. Completamente personalizable, diseñado mano a mano con el cliente.",
        },
        {
          name: "MenuDig",
          tag: "SaaS · Gastronomía",
          description:
            "Menú digital para restaurantes y cafeterías accesible por QR o URL. Gestión de platos, fotos, categorías y diseño del menú.",
        },
      ],
    },

    businessUnits: {
      heading: "No solo desarrollamos para otros",
      body: "Driva Dev tiene dos patas. Una construye software para clientes. La otra construye y sostiene productos propios. La segunda es la que nos mantiene honestos: cargamos con las consecuencias de cada decisión técnica que tomamos.",
      rootAlt: "Root, la mascota de Driva Dev, programando en su notebook",
      items: [
        {
          label: "Productos propios",
          title: "Construimos software que nosotros mismos operamos",
          body: "Turnly y MenuDig son nuestros. Los desarrollamos, los mantenemos, pagamos sus costos y respondemos su soporte. Eso significa que cuando hablamos de escalabilidad, seguridad o suscripciones, no hablamos desde la teoría.",
          cta: "Ver nuestros productos",
        },
        {
          label: "Desarrollo para terceros",
          title: "Y construimos el software que tu negocio necesita",
          body: "Sitios, sistemas y plataformas a medida para empresas y emprendedores, con mantenimiento y hosting si los necesitás. La misma exigencia técnica que aplicamos a lo nuestro.",
          cta: "Ver servicios",
        },
      ],
    },

    standards: {
      badge: "No negociable",
      heading: "Seis cosas que entregamos siempre",
      body1:
        "No dependen del presupuesto ni del tamaño del proyecto. Si no podemos cumplir con estos seis puntos, no entregamos el sitio.",
      body2:
        "Es la lista de lo que tenés derecho a exigirle a cualquiera que te desarrolle una web. Incluidos nosotros.",
      items: [
        "Estructura semántica perfecta",
        "Velocidad garantizada",
        "SEO on-code de primer nivel",
        "Experiencia de usuario cuidada",
        "100% responsive",
        "Cumplimiento legal",
      ],
    },

    why: {
      headingLine1: "¿Por qué",
      headingLine2: "Driva Dev?",
      body: "Somos un equipo chico que trabaja de forma directa. Sin capas, sin cuentas de agencia, sin malentendidos. Cuando hablás con nosotros, hablás con quien hace el trabajo.",
      items: [
        {
          title: "Investigamos antes de proponer",
          body: "No hacemos una cotización hasta entender quién sos, qué vendés y qué necesitás realmente.",
        },
        {
          title: "100% código propio",
          body: "Nada de plantillas ni constructores. Cada línea está escrita para tu proyecto específico.",
        },
        {
          title: "Relación directa con el dev",
          body: "Hablás siempre con quien desarrolla. Sin intermediarios, sin malentendidos.",
        },
        {
          title: "Acompañamiento continuo",
          body: "El lanzamiento es el inicio. Mantenimiento y soporte para que nunca quedes solo.",
        },
      ],
    },

    blog: {
      heading: "Nuestros últimos blogs",
      body1:
        "Escribimos sobre desarrollo, SEO y decisiones de negocio digital. Sin humo ni recetas mágicas: lo que publicamos sale de proyectos reales, de errores que cometimos y de las preguntas que nos hacen los clientes antes de contratarnos.",
      body2:
        "Si estás por encarar una web y no sabés por dónde empezar, cuánto debería costarte o por qué el sitio que ya tenés no aparece en Google, es probable que la respuesta esté acá abajo.",
      rootAlt: "Root, la mascota de Driva Dev, leyendo un libro",
      cta: "Ver todos",
    },

    finalCta: {
      heading: "¿Tenés un proyecto en mente?",
      body: "Escribinos cuando quieras. Sin reuniones previas ni presupuesto de 48 hs.",
      cta: "Hablar de mi proyecto",
    },
  },

  services: {
    metaTitle: "Servicios de Desarrollo Web a Medida en Argentina",
    metaDescription:
      "Desarrollo web a medida en Argentina: sitios, tiendas online, sistemas y aplicaciones web desde cero. Planes de mantenimiento mensual y hosting incluidos. Sin plantillas.",
    ogTitle: "Servicios de Desarrollo Web a Medida | Driva Dev",
    ogDescription:
      "Desarrollo web a medida, mantenimiento mensual y hosting en Argentina. Código propio, sin plantillas.",
    breadcrumb: "Servicios",

    hero: {
      badge: "Servicios",
      heading: "Desarrollo web a medida para empresas y emprendedores",
      body: "Desarrollamos cualquier tipo de sitio o aplicación web. No usamos plantillas ni soluciones genéricas: cada proyecto se diseña y construye desde cero, pensado específicamente para tu negocio, tu industria y tus objetivos.",
      rootAlt: "Root, la mascota de Driva Dev, señalando al frente",
    },

    dev: {
      heading: "Cualquier idea, hecha realidad",
      body1:
        "El alcance de cada proyecto se define con vos. No listamos tipos de sitio porque la realidad es más amplia que cualquier categoría: si lo podés imaginar para tu negocio en la web, lo podemos construir.",
      body2:
        "Usamos las tecnologías más modernas y eficientes del mercado, adaptadas a las necesidades reales de cada proyecto. Nada más, nada menos.",
      body3:
        "Cada entregable es tuyo: código fuente, dominio, hosting. Sin dependencias ni candados con nosotros.",
      features: [
        "Performance",
        "100% responsive",
        "SEO optimizado",
        "Accesible",
        "Seguro",
        "Diseño propio",
      ],
    },

    projectTypes: {
      heading: "Qué tipo de proyectos desarrollamos",
      body: "Estas son las categorías más frecuentes, pero la lista no es un menú cerrado. Lo que define el proyecto no es la etiqueta: es el problema que tenés que resolver.",
      items: [
        {
          title: "Sitios institucionales",
          body: "Tu empresa presentada con claridad y credibilidad. Es la puerta de entrada de quien te busca en Google, y bien construido capta clientes las 24 horas.",
        },
        {
          title: "Tiendas online",
          body: "Catálogo, carrito, medios de pago y gestión de stock. La transacción completa, de punta a punta, sin intermediarios ni comisiones de plataformas.",
        },
        {
          title: "Sistemas de gestión",
          body: "Software interno que reemplaza planillas y cadenas de correos. Usuarios, permisos, estados y el flujo real de trabajo de tu empresa.",
        },
        {
          title: "Plataformas SaaS",
          body: "Cuando el software es tu producto. Suscripciones, aislamiento de datos y escalabilidad. Construimos y operamos los nuestros, así que sabemos lo que implica.",
        },
        {
          title: "Menús y catálogos digitales",
          body: "Accesibles por QR o URL, con gestión propia de productos, fotos y diseño. Sin apps que descargar ni PDFs que nadie lee en el celular.",
        },
        {
          title: "Integraciones a medida",
          body: "Conectamos tu web con los sistemas que ya usás: medios de pago, facturación, ERP, CRM o cualquier API de terceros.",
        },
      ],
    },

    standards: {
      badge: "No negociable",
      heading: "Lo que entregamos siempre, sin excepción",
      body1:
        "Hay cosas que no dependen del presupuesto ni del tamaño del proyecto. Son requisitos internos que cumplimos en cada entrega, cobremos lo que cobremos.",
      body2:
        "No las listamos para venderte nada. Las listamos para que sepas qué tenés derecho a exigirle a cualquiera que te desarrolle un sitio, incluidos nosotros.",
      items: [
        {
          title: "Estructura semántica perfecta",
          body: "El HTML se escribe para que Google y los lectores de pantalla entiendan cada parte de la página. Sin errores, sin cajas genéricas.",
        },
        {
          title: "Velocidad garantizada",
          body: "Optimizamos las Core Web Vitals desde el primer commit. El navegador descarga solo lo que tu página necesita, nada más.",
        },
        {
          title: "SEO on-code de primer nivel",
          body: "Metadatos únicos, datos estructurados, sitemap, URLs canónicas. No es un servicio que se cotiza aparte: viene en todo lo que entregamos.",
        },
        {
          title: "Experiencia de usuario cuidada",
          body: "Cada interacción se piensa. La forma en que un sitio se siente es parte de lo que tu cliente compra.",
        },
        {
          title: "100% responsive",
          body: "La mayoría de tus visitas llega desde un celular, y Google indexa esa versión. Diseñamos para esa realidad, no la parcheamos después.",
        },
        {
          title: "Cumplimiento legal",
          body: "Los requisitos legales que corresponden a tu sitio quedan resueltos antes de salir al aire, no después del primer reclamo.",
        },
      ],
    },

    maintenance: {
      label: "Mantenimiento",
      heading: "Tu web, siempre al día",
      body1:
        "Lanzar el sitio es el principio. Con nuestros planes de mantenimiento mensual, tu presencia online se mantiene actualizada, segura y funcionando sin que tengas que preocuparte por nada técnico.",
      body2:
        "Las modificaciones están incluidas: si necesitás actualizar precios, agregar un producto, cambiar un texto o incorporar una nueva sección, lo resolvemos dentro del plan.",
      features: [
        "Modificaciones de contenido y diseño incluidas",
        "Actualizaciones de seguridad y dependencias",
        "Monitoreo de disponibilidad",
        "Soporte por WhatsApp y email",
        "Respaldo periódico del sitio",
      ],
    },

    hosting: {
      heading: "Instalá y olvidate",
      body1:
        "Ofrecemos hosting para los sitios desarrollados por Driva Dev. Gestionamos el servidor, los certificados SSL, los dominios y cualquier configuración técnica.",
      body2:
        "Vos te enfocás en tu negocio. Nosotros nos aseguramos de que tu sitio esté siempre en línea, rápido y seguro.",
      features: [
        { title: "SSL incluido", body: "Certificado de seguridad activo en todo momento." },
        { title: "Alta velocidad", body: "Servidores optimizados para tiempos de carga mínimos." },
        { title: "Panel de control", body: "Acceso completo para ver el estado de tu sitio." },
      ],
    },

    process: {
      heading: "Cómo trabajamos",
      steps: [
        {
          title: "Investigación",
          body: "Conocemos tu negocio, tu público objetivo, tu competencia y tus objetivos reales. No proponemos nada hasta tener ese panorama claro.",
        },
        {
          title: "Propuesta a medida",
          body: "Con ese contexto, diseñamos una solución específica para vos: qué construir, cómo, con qué tecnología y en qué tiempo.",
        },
        {
          title: "Desarrollo",
          body: "Construimos el proyecto con atención al detalle, comunicación constante y foco en la calidad del resultado final.",
        },
        {
          title: "Entrega y acompañamiento",
          body: "Lanzamos juntos y te acompañamos en los primeros pasos. El proyecto sigue siendo nuestro cuando más lo necesitás.",
        },
      ],
    },

    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué tipo de sitios y aplicaciones web desarrollan?",
          a: "Desarrollamos cualquier tipo de sitio o aplicación web: sitios institucionales, tiendas online, sistemas de gestión, plataformas SaaS y más. Cada proyecto se construye desde cero, sin plantillas, adaptado a las necesidades específicas de cada negocio.",
        },
        {
          q: "¿Cuánto cuesta desarrollar una página web?",
          a: "Depende del alcance real del proyecto: el tipo de sitio, cuánto hay que diseñar desde cero, las integraciones con otros sistemas y el contenido. No damos un precio antes de entender tu negocio, porque sería un número inventado. La propuesta inicial no tiene costo ni compromiso.",
        },
        {
          q: "¿Qué incluye el plan de mantenimiento mensual?",
          a: "Los planes de mantenimiento incluyen modificaciones de contenido y diseño, actualizaciones de seguridad y dependencias, monitoreo de disponibilidad, soporte por WhatsApp y email, y respaldo periódico del sitio. Si en el mes sobran modificaciones, las usamos para analizar y mejorar el SEO de tu sitio.",
        },
        {
          q: "¿Ofrecen servicio de hosting?",
          a: "Sí. Gestionamos el hosting para los sitios desarrollados por Driva Dev. Nos encargamos del servidor, certificados SSL, dominios y toda la configuración técnica, con alta velocidad y panel de control incluido. No es obligatorio: podés llevarte el sitio a donde quieras.",
        },
        {
          q: "¿El código fuente queda a mi nombre?",
          a: "Sí. El código, el dominio y el hosting son tuyos. No trabajamos con dependencias ni candados: si algún día querés seguir con otro equipo, te llevás todo sin pedirnos permiso.",
        },
        {
          q: "¿Usan WordPress o plantillas?",
          a: "No. Cada proyecto se escribe desde cero con el stack más adecuado para el caso. Las plantillas cargan código que tu sitio nunca usa, y eso se paga en velocidad y en posicionamiento.",
        },
        {
          q: "¿Cómo es el proceso de desarrollo?",
          a: "El proceso tiene cuatro etapas: investigación del negocio y objetivos, propuesta a medida con tecnología y tiempos definidos, desarrollo con comunicación constante, y entrega con acompañamiento en el lanzamiento.",
        },
        {
          q: "¿Con quién hablo durante el proyecto?",
          a: "Con quien desarrolla. Somos un equipo chico y trabajamos de forma directa: sin cuentas de agencia, sin intermediarios y sin que la información se pierda en el camino.",
        },
      ],
    },

    cta: {
      heading: "¿Querés saber qué podemos hacer por tu negocio?",
      body: "Contanos tu idea y armamos una propuesta específica para vos. Sin costo ni compromiso.",
      button: "Solicitar propuesta",
    },

    schema: {
      areaServed: "Argentina",
      items: [
        {
          name: "Desarrollo web a medida",
          serviceType: "Desarrollo de sitios y aplicaciones web",
          description:
            "Sitios institucionales, tiendas online, sistemas de gestión y plataformas SaaS construidos desde cero, sin plantillas.",
        },
        {
          name: "Mantenimiento web mensual",
          serviceType: "Mantenimiento y soporte de sitios web",
          description:
            "Planes mensuales con modificaciones de contenido y diseño incluidas, actualizaciones de seguridad, monitoreo y respaldo.",
        },
        {
          name: "Hosting web administrado",
          serviceType: "Hosting y administración de servidores",
          description:
            "Gestión de servidor, certificados SSL, dominios y configuración técnica con alta velocidad y panel de control.",
        },
      ],
    },
  },

  portfolio: {
    metaTitle: "Portafolio de Proyectos de Desarrollo Web",
    metaDescription:
      "Proyectos de desarrollo web a medida hechos por Driva Dev en Argentina: productos SaaS propios y sistemas para clientes. Sitios, apps y plataformas construidos desde cero.",
    ogTitle: "Portafolio de Desarrollo Web | Driva Dev",
    ogDescription:
      "Proyectos reales de desarrollo web a medida en Argentina. Productos propios y trabajos para clientes.",
    breadcrumb: "Portafolio",

    hero: {
      badge: "Portafolio",
      heading: "Proyectos de desarrollo web a medida",
      body: "Proyectos reales, problemas reales. Acá podés ver cómo trabajamos y lo que somos capaces de entregar.",
      rootAlt: "Root, la mascota de Driva Dev, festejando con los brazos en alto",
    },

    independent: {
      heading: "Desarrollo independiente",
      note: "· Productos propios de Driva Dev",
      projects: [
        {
          name: "Turnly",
          tag: "SaaS · Gestión de turnos",
          description:
            "Software de gestión de turnos para peluquerías, estéticas y consultorios. Permite armar el gestor de forma 100% personalizada, mano a mano con un desarrollador. Cada negocio termina con su propia versión del sistema.",
          features: [
            "Agenda online personalizable",
            "Gestión de clientes y servicios",
            "Recordatorios automáticos",
            "Panel de administración propio",
          ],
        },
        {
          name: "MenuDig",
          tag: "SaaS · Gastronomía",
          description:
            "Menú digital para restaurantes y cafeterías, accesible por QR o URL. Gestión de platos, categorías, fotos, alérgenos y diseño completo del menú (colores, nombre, logo del local).",
          features: [
            "Menú digital por QR o URL",
            "Gestión de platos y categorías",
            "Fotos y alérgenos",
            "Diseño personalizable del menú",
          ],
        },
      ],
    },

    thirdParty: {
      heading: "Desarrollo para terceros",
      note: "· Proyectos de clientes",
      projects: [
        {
          name: "Running Team Cup",
          tag: "Deporte · Sitio institucional",
          description:
            "Sitio web para la competencia argentina de running por equipos. Información del evento, ediciones anteriores, resultados y todo lo que los participantes necesitan saber antes de correr.",
          features: [
            "Información del evento y ediciones",
            "Diseño adaptado a la identidad del evento",
            "Soporte multiidioma",
            "100% responsive",
          ],
        },
        {
          name: "Wet Corp - Comex",
          tag: "Software · Comercio exterior",
          description:
            "Sistema de gestión de importaciones que conecta importadores, proveedores y despachantes en un único flujo de trabajo. Permite gestionar órdenes de compra completas: desde los datos del proveedor hasta los gastos de importación, documentos y exportación a PDF.",
          features: [
            "Gestión de órdenes de compra por etapas",
            "Seguimiento de gastos de importación en ARS y USD",
            "Carga y organización de documentos",
            "Dashboard con estadísticas en tiempo real",
          ],
        },
      ],
    },

    /** `{name}` se reemplaza por el nombre del proyecto. */
    screenshotAlt: "Captura del proyecto {name} desarrollado por Driva Dev",

    cta: {
      heading: "¿Querés que tu proyecto sea el próximo?",
      body: "Escribinos cuando quieras. Sin formulario eterno ni reunión de 40 minutos.",
      button: "Hablar con nosotros",
    },
  },

  contact: {
    metaTitle: "Contacto y Presupuesto de Desarrollo Web",
    metaDescription:
      "Pedí tu presupuesto de desarrollo web a medida en Argentina. Contactate con Driva Dev por WhatsApp, email o formulario. Te respondemos en menos de 24 horas.",
    ogTitle: "Contacto | Driva Dev",
    ogDescription:
      "Hablemos de tu proyecto de desarrollo web. Te respondemos en menos de 24 horas.",
    breadcrumb: "Contacto",

    hero: {
      badge: "Contacto",
      heading: "Hablemos de tu proyecto web",
      body: "Contanos sobre tu idea o tu negocio. Sin compromisos. Te respondemos en menos de 24 horas con una perspectiva honesta de lo que podemos hacer por vos.",
      rootAlt: "Root, la mascota de Driva Dev, pensativo con un café",
    },

    formSection: {
      aria: "Formulario de contacto",
      heading: "Envianos un mensaje",
      directHeading: "Contacto directo",
      directBody: "Preferís hablar directamente? Escribinos por WhatsApp o email.",
      unsureTitle: "¿No sabés bien qué necesitás?",
      unsureBody:
        "Igual escribinos. Parte de nuestro trabajo es ayudarte a entender qué solución te conviene más.",
      methods: [
        { label: "WhatsApp", note: "Respuesta inmediata" },
        { label: "Email", note: "Respondemos en menos de 24 h" },
      ],
    },

    social: {
      badge: "Redes sociales",
      heading: "Seguinos en Instagram",
      body: "Proyectos, proceso y novedades de Driva Dev.",
      cardNote: "Seguinos para ver nuestro trabajo",
    },
  },

  form: {
    aria: "Formulario de contacto",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre completo",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Contanos sobre tu proyecto o idea...",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado! Te contactamos en menos de 24 horas.",
    error: "Hubo un problema al enviar el mensaje. Intentá por WhatsApp o email directamente.",
  },

  blog: {
    metaTitle: "Blog de Desarrollo Web y SEO",
    metaDescription:
      "Artículos sobre desarrollo web, SEO, velocidad y negocio digital. Escritos por Driva Dev, desarrolladores de software en Argentina. Sin humo ni recetas mágicas.",
    ogTitle: "Blog de Desarrollo Web y SEO | Driva Dev",
    ogDescription:
      "Artículos sobre desarrollo web, SEO y negocio digital, escritos por desarrolladores.",
    breadcrumb: "Blog",

    schemaName: "Blog de Driva Dev",
    schemaDescription:
      "Artículos sobre desarrollo web, SEO, velocidad y negocio digital escritos por Driva Dev.",

    hero: {
      badge: "Blog",
      heading: "Desarrollo web, SEO y negocio digital",
      body: "Escribimos sobre lo que hacemos todos los días: cómo se construye un sitio rápido, qué mira Google de verdad y cómo decidir en qué gastar tu presupuesto. Sin humo ni recetas mágicas.",
      rootAlt: "Root, la mascota de Driva Dev, leyendo un libro",
    },

    empty: "Todavía no publicamos ningún artículo. Volvé pronto.",
    srFeatured: "Artículo más reciente",
    srAll: "Todos los artículos",

    cta: {
      heading: "¿Querés aplicar todo esto a tu sitio?",
      body: "Escribimos estos artículos porque es exactamente lo que hacemos en cada proyecto. Contanos el tuyo y lo vemos juntos.",
      button: "Escribinos por WhatsApp",
    },
  },
};

export default es;
