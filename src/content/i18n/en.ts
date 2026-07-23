import type es from "./es";

/**
 * Every string on the site, in English.
 *
 * This is not a word-for-word translation of `es.ts`. The Spanish copy sells to
 * Argentine businesses; this one sells to US companies looking for a nearshore
 * team, so the pitch leans on time-zone overlap, ownership of the code and
 * direct access to the developers instead of on the local market.
 */
const en: typeof es = {
  meta: {
    titleTemplate: "%s | Driva Dev",
    defaultTitle: "Custom Web Development for US Companies | Driva Dev",
    defaultDescription:
      "Nearshore custom web development for US companies and founders. We build websites, web apps and internal systems from scratch. No templates, no account managers.",
    keywords: [
      "custom web development",
      "nearshore software development",
      "custom web application development",
      "nearshore development team",
      "hire web developers",
      "saas development company",
      "custom software development company",
      "web development agency",
    ],
    organizationDescription:
      "Nearshore custom web development for US companies and founders. Websites, web apps and internal systems built from scratch.",
    availableLanguage: "English, Spanish",
  },

  nav: {
    ariaMain: "Main navigation",
    ariaLogo: "Driva Dev, go to homepage",
    home: "Home",
    services: "Services",
    portfolio: "Work",
    blog: "Blog",
    contact: "Contact",
    cta: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Change language",
  },

  footer: {
    aria: "Site footer",
    tagline:
      "Your online presence, built to grow. Custom web development for companies and founders.",
    ariaSecondaryNav: "Secondary navigation",
    pagesLabel: "Pages",
    localBA: "Desarrollo web en Buenos Aires",
    quickContactLabel: "Quick contact",
    ariaWhatsApp: "WhatsApp Driva Dev",
    ariaEmail: "Email Driva Dev",
    ariaInstagram: "Instagram @driva.dev",
    rights: "© 2025 Driva Dev. All rights reserved.",
    builtBy: "Built by",
  },

  whatsapp: {
    default: "Hi! I'd like to ask you about a web project.",
    blog: "Hi! I found you through the Driva Dev blog and wanted to ask a question.",
    homeHero: "Hi! I'd like to talk to you about building a web project.",
    homeFinal: "Hi! I have a project in mind and wanted to reach out.",
    services: "Hi! I saw your services and wanted to request a proposal for my business.",
    portfolio: "Hi! I saw your work and wanted to ask about a project.",
    ariaSuffix: "on WhatsApp (opens in a new tab)",
  },

  common: {
    openInNewTab: "opens in a new tab",
    viewProject: "View project",
    learnMore: "Learn more",
    readArticle: "Read article",
    minRead: "min read",
    min: "min",
  },

  home: {
    metaTitle: "Custom Web Development for US Companies | Driva Dev",
    metaDescription:
      "Nearshore custom web development for US companies and founders. We build websites, web apps and internal systems from scratch. No templates, no account managers.",
    ogTitle: "Custom Web Development for US Companies | Driva Dev",
    ogDescription:
      "We build custom websites and web applications for US companies and founders. No templates — code written for your business.",

    hero: {
      badge: "Custom web development · Nearshore",
      titleLead: "Custom web development,",
      titleAccent: "built to grow.",
      body: "We build websites and web applications that move the numbers that matter. First we understand your business, then we write the code.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See our work",
      rootAlt: "Root, the Driva Dev mascot, standing with arms crossed",
    },

    services: {
      heading: "What we build",
      cta: "See all services",
      items: [
        {
          title: "Custom development",
          body: "Websites, stores, internal systems and web apps built from scratch around what your business actually needs.",
        },
        {
          title: "Maintenance",
          body: "Monthly plans with changes included. Your site stays current, secure and online.",
        },
        {
          title: "Hosting",
          body: "We run the server for you. Launch it and forget the infrastructure exists.",
        },
      ],
    },

    portfolio: {
      heading: "Selected projects",
      cta: "See the full portfolio",
      items: [
        {
          name: "Turnly",
          tag: "SaaS · Appointment scheduling",
          description:
            "Booking and scheduling software for salons, clinics and studios. Fully customizable, designed side by side with each client.",
        },
        {
          name: "MenuDig",
          tag: "SaaS · Restaurants",
          description:
            "Digital menu for restaurants and cafés, opened by QR code or URL. Dishes, photos, categories and full menu branding.",
        },
      ],
    },

    businessUnits: {
      heading: "We don't only build for other people",
      body: "Driva Dev runs on two legs. One builds software for clients. The other builds and operates products of our own. The second one keeps us honest: we live with the consequences of every technical decision we make.",
      rootAlt: "Root, the Driva Dev mascot, coding on a laptop",
      items: [
        {
          label: "Our own products",
          title: "We build software we operate ourselves",
          body: "Turnly and MenuDig are ours. We develop them, maintain them, pay their bills and answer their support tickets. So when we talk about scalability, security or subscription billing, we're not talking theory.",
          cta: "See our products",
        },
        {
          label: "Client work",
          title: "And we build the software your business needs",
          body: "Websites, internal systems and custom platforms for companies and founders, with maintenance and hosting if you want them. The same technical bar we hold our own products to.",
          cta: "See services",
        },
      ],
    },

    standards: {
      badge: "Non-negotiable",
      heading: "Six things we ship every time",
      body1:
        "They don't depend on the budget or the size of the project. If we can't deliver these six, we don't hand over the site.",
      body2:
        "It's the list of what you're entitled to demand from anyone who builds your website. Us included.",
      items: [
        "Clean semantic structure",
        "Guaranteed speed",
        "First-class technical SEO",
        "Considered user experience",
        "Fully responsive",
        "Legal compliance",
      ],
    },

    why: {
      headingLine1: "Why",
      headingLine2: "Driva Dev?",
      body: "We're a small team that works with you directly. No layers, no account managers, no telephone game. When you talk to us, you're talking to the people writing the code.",
      items: [
        {
          title: "We research before we pitch",
          body: "No quote until we understand who you are, what you sell and what you actually need.",
        },
        {
          title: "100% custom code",
          body: "No templates, no page builders. Every line is written for your specific project.",
        },
        {
          title: "Direct line to the developer",
          body: "You always talk to whoever is building it. No middlemen, nothing lost in translation.",
        },
        {
          title: "We stay after launch",
          body: "Launch day is the start. Maintenance and support so you're never left on your own.",
        },
      ],
    },

    blog: {
      heading: "From our blog",
      body1:
        "We write about development, SEO and digital business decisions. No hype, no magic formulas: everything we publish comes out of real projects, mistakes we made and the questions clients ask before hiring us.",
      body2:
        "If you're about to commission a site and don't know where to start, what it should cost or why the one you already have doesn't show up on Google, the answer is probably below.",
      rootAlt: "Root, the Driva Dev mascot, reading a book",
      cta: "See all posts",
    },

    finalCta: {
      heading: "Got a project in mind?",
      body: "Reach out whenever. No discovery call required, no 48-hour quote process.",
      cta: "Talk about my project",
    },
  },

  services: {
    metaTitle: "Custom Web Development Services",
    metaDescription:
      "Custom web development services: websites, online stores, internal systems and web apps built from scratch. Monthly maintenance plans and managed hosting. No templates.",
    ogTitle: "Custom Web Development Services | Driva Dev",
    ogDescription:
      "Custom web development, monthly maintenance and managed hosting. Code written for your business, no templates.",
    breadcrumb: "Services",

    hero: {
      badge: "Services",
      heading: "Custom web development for companies and founders",
      body: "We build any kind of website or web application. No templates, no off-the-shelf solutions: every project is designed and built from scratch around your business, your industry and your goals.",
      rootAlt: "Root, the Driva Dev mascot, pointing ahead",
    },

    dev: {
      heading: "Any idea, made real",
      body1:
        "The scope of each project gets defined with you. We don't lead with a list of site types because reality is wider than any category: if you can picture it for your business on the web, we can build it.",
      body2:
        "We use the most modern and efficient technologies available, matched to what each project actually needs. Nothing more, nothing less.",
      body3:
        "Everything we deliver is yours: source code, domain, hosting. No lock-in, no dependency on us.",
      features: [
        "Performance",
        "Fully responsive",
        "SEO optimized",
        "Accessible",
        "Secure",
        "Original design",
      ],
    },

    projectTypes: {
      heading: "The kind of projects we build",
      body: "These are the most common categories, but the list isn't a fixed menu. What defines a project isn't the label — it's the problem you need solved.",
      items: [
        {
          title: "Company websites",
          body: "Your business presented with clarity and credibility. It's the front door for everyone who searches for you, and built right it brings in customers around the clock.",
        },
        {
          title: "Online stores",
          body: "Catalog, cart, payments and inventory. The full transaction end to end, without marketplace middlemen or platform commissions.",
        },
        {
          title: "Internal systems",
          body: "Software that replaces spreadsheets and email threads. Users, permissions, statuses and the way your company actually works.",
        },
        {
          title: "SaaS platforms",
          body: "For when the software is the product. Subscriptions, data isolation and scale. We build and run our own, so we know what it takes.",
        },
        {
          title: "Digital menus and catalogs",
          body: "Opened by QR code or URL, with your own management of products, photos and design. No app to download, no PDF nobody reads on a phone.",
        },
        {
          title: "Custom integrations",
          body: "We connect your site to the systems you already use: payment processors, invoicing, ERP, CRM or any third-party API.",
        },
      ],
    },

    standards: {
      badge: "Non-negotiable",
      heading: "What we ship every time, without exception",
      body1:
        "Some things don't depend on the budget or the size of the project. They're internal requirements we meet on every delivery, whatever we charge.",
      body2:
        "We don't list them to sell you anything. We list them so you know what you're entitled to demand from anyone who builds you a site — us included.",
      items: [
        {
          title: "Clean semantic structure",
          body: "The HTML is written so search engines and screen readers understand every part of the page. No errors, no generic boxes.",
        },
        {
          title: "Guaranteed speed",
          body: "We optimize Core Web Vitals from the first commit. The browser downloads only what your page needs, nothing else.",
        },
        {
          title: "First-class technical SEO",
          body: "Unique metadata, structured data, sitemap, canonical URLs. It isn't a separate line item — it's in everything we deliver.",
        },
        {
          title: "Considered user experience",
          body: "Every interaction gets thought through. The way a site feels is part of what your customer is buying.",
        },
        {
          title: "Fully responsive",
          body: "Most of your traffic arrives on a phone, and that's the version Google indexes. We design for that reality instead of patching it later.",
        },
        {
          title: "Legal compliance",
          body: "The legal requirements that apply to your site are handled before it goes live, not after the first complaint.",
        },
      ],
    },

    maintenance: {
      label: "Maintenance",
      heading: "Your site, always current",
      body1:
        "Launching is the beginning. With our monthly maintenance plans your online presence stays updated, secure and running without you having to think about anything technical.",
      body2:
        "Changes are included: if you need to update prices, add a product, rewrite a section or add a new one, we handle it inside the plan.",
      features: [
        "Content and design changes included",
        "Security and dependency updates",
        "Uptime monitoring",
        "Support over WhatsApp and email",
        "Regular site backups",
      ],
    },

    hosting: {
      heading: "Launch it and forget it",
      body1:
        "We offer hosting for the sites we build. We manage the server, SSL certificates, domains and every piece of technical configuration.",
      body2:
        "You focus on your business. We make sure your site stays online, fast and secure.",
      features: [
        { title: "SSL included", body: "A valid security certificate, active at all times." },
        { title: "High speed", body: "Servers tuned for the lowest possible load times." },
        { title: "Control panel", body: "Full access to check the status of your site." },
      ],
    },

    process: {
      heading: "How we work",
      steps: [
        {
          title: "Research",
          body: "We learn your business, your audience, your competitors and your real goals. We don't propose anything until that picture is clear.",
        },
        {
          title: "Tailored proposal",
          body: "With that context we design a solution specific to you: what to build, how, on what stack and on what timeline.",
        },
        {
          title: "Development",
          body: "We build the project with attention to detail, constant communication and focus on the quality of the final result.",
        },
        {
          title: "Launch and support",
          body: "We launch together and stay with you through the first weeks. The project is still ours when you need it most.",
        },
      ],
    },

    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          q: "What kind of websites and web applications do you build?",
          a: "Any kind: company websites, online stores, internal management systems, SaaS platforms and more. Every project is built from scratch, without templates, around the specific needs of the business.",
        },
        {
          q: "How much does a website cost?",
          a: "It depends on the real scope: the type of site, how much has to be designed from scratch, the integrations with other systems and the content. We don't quote a number before understanding your business, because it would be made up. The initial proposal is free and comes with no commitment.",
        },
        {
          q: "What does the monthly maintenance plan include?",
          a: "Maintenance plans include content and design changes, security and dependency updates, uptime monitoring, support over WhatsApp and email, and regular backups. If a month goes by with changes to spare, we spend them analyzing and improving your site's SEO.",
        },
        {
          q: "Do you offer hosting?",
          a: "Yes. We manage hosting for the sites Driva Dev builds. We handle the server, SSL certificates, domains and all technical configuration, with high speed and a control panel included. It's not mandatory: you can take the site anywhere you want.",
        },
        {
          q: "Do I own the source code?",
          a: "Yes. The code, the domain and the hosting are yours. We don't build in lock-in: if you ever want to continue with another team, you take everything without asking our permission.",
        },
        {
          q: "Do you use WordPress or templates?",
          a: "No. Every project is written from scratch on the stack that fits the case. Templates load code your site never uses, and you pay for that in speed and in rankings.",
        },
        {
          q: "How does the development process work?",
          a: "It has four stages: research into the business and its goals, a tailored proposal with the stack and timeline defined, development with constant communication, and delivery with support through launch.",
        },
        {
          q: "Who do I talk to during the project?",
          a: "The people building it. We're a small team and we work directly: no agency account managers, no middlemen, nothing lost along the way.",
        },
      ],
    },

    cta: {
      heading: "Want to know what we could do for your business?",
      body: "Tell us your idea and we'll put together a proposal specific to you. Free, no commitment.",
      button: "Request a proposal",
    },

    schema: {
      areaServed: "United States",
      items: [
        {
          name: "Custom web development",
          serviceType: "Website and web application development",
          description:
            "Company websites, online stores, internal systems and SaaS platforms built from scratch, without templates.",
        },
        {
          name: "Monthly website maintenance",
          serviceType: "Website maintenance and support",
          description:
            "Monthly plans with content and design changes included, security updates, uptime monitoring and backups.",
        },
        {
          name: "Managed web hosting",
          serviceType: "Hosting and server administration",
          description:
            "Server management, SSL certificates, domains and technical configuration with high speed and a control panel.",
        },
      ],
    },
  },

  portfolio: {
    metaTitle: "Web Development Portfolio",
    metaDescription:
      "Custom web development projects built by Driva Dev: our own SaaS products and systems built for clients. Websites, apps and platforms written from scratch.",
    ogTitle: "Web Development Portfolio | Driva Dev",
    ogDescription:
      "Real custom web development projects. Our own products and client work.",
    breadcrumb: "Work",

    hero: {
      badge: "Work",
      heading: "Custom web development projects",
      body: "Real projects, real problems. Here you can see how we work and what we're able to deliver.",
      rootAlt: "Root, the Driva Dev mascot, celebrating with both arms up",
    },

    independent: {
      heading: "Our own products",
      note: "· Built and operated by Driva Dev",
      projects: [
        {
          name: "Turnly",
          tag: "SaaS · Appointment scheduling",
          description:
            "Booking and scheduling software for salons, clinics and studios. The system gets assembled fully custom, side by side with a developer, so each business ends up with its own version.",
          features: [
            "Customizable online calendar",
            "Client and service management",
            "Automated reminders",
            "Dedicated admin panel",
          ],
        },
        {
          name: "MenuDig",
          tag: "SaaS · Restaurants",
          description:
            "Digital menu for restaurants and cafés, opened by QR code or URL. Dishes, categories, photos, allergens and full control of the menu's design (colors, name, venue logo).",
          features: [
            "Digital menu by QR code or URL",
            "Dish and category management",
            "Photos and allergens",
            "Customizable menu design",
          ],
        },
      ],
    },

    thirdParty: {
      heading: "Client work",
      note: "· Projects built for clients",
      projects: [
        {
          name: "Running Team Cup",
          tag: "Sports · Company website",
          description:
            "Website for Argentina's team-based running competition. Event information, past editions, results and everything participants need to know before race day.",
          features: [
            "Event and past-edition information",
            "Design matched to the event's identity",
            "Multilingual support",
            "Fully responsive",
          ],
        },
        {
          name: "Wet Corp - Comex",
          tag: "Software · International trade",
          description:
            "Import management system connecting importers, suppliers and customs brokers in a single workflow. It handles complete purchase orders: from supplier details through import costs, documents and PDF export.",
          features: [
            "Stage-by-stage purchase order management",
            "Import cost tracking in ARS and USD",
            "Document upload and organization",
            "Dashboard with real-time statistics",
          ],
        },
      ],
    },

    screenshotAlt: "Screenshot of {name}, a project built by Driva Dev",

    cta: {
      heading: "Want your project to be the next one?",
      body: "Reach out whenever. No endless intake form, no 40-minute discovery call.",
      button: "Talk to us",
    },
  },

  contact: {
    metaTitle: "Contact and Project Quotes",
    metaDescription:
      "Request a quote for custom web development. Get in touch with Driva Dev over WhatsApp, email or the form. We reply in under 24 hours.",
    ogTitle: "Contact | Driva Dev",
    ogDescription: "Let's talk about your web project. We reply in under 24 hours.",
    breadcrumb: "Contact",

    hero: {
      badge: "Contact",
      heading: "Let's talk about your web project",
      body: "Tell us about your idea or your business. No strings attached. We reply in under 24 hours with an honest read on what we can do for you.",
      rootAlt: "Root, the Driva Dev mascot, thinking over a cup of coffee",
    },

    formSection: {
      aria: "Contact form",
      heading: "Send us a message",
      directHeading: "Reach us directly",
      directBody: "Prefer to talk directly? Message us on WhatsApp or by email.",
      unsureTitle: "Not sure what you need?",
      unsureBody:
        "Write anyway. Part of our job is helping you figure out which solution actually fits.",
      methods: [
        { label: "WhatsApp", note: "Immediate reply" },
        { label: "Email", note: "We reply in under 24 h" },
      ],
    },

    social: {
      badge: "Social",
      heading: "Follow us on Instagram",
      body: "Projects, process and news from Driva Dev.",
      cardNote: "Follow along to see our work",
    },
  },

  form: {
    aria: "Contact form",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project or idea...",
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent! We'll get back to you in under 24 hours.",
    error: "Something went wrong sending your message. Try WhatsApp or email instead.",
  },

  blog: {
    metaTitle: "Web Development and SEO Blog",
    metaDescription:
      "Articles on web development, SEO, speed and digital business, written by the developers at Driva Dev. No hype, no magic formulas.",
    ogTitle: "Web Development and SEO Blog | Driva Dev",
    ogDescription:
      "Articles on web development, SEO and digital business, written by developers.",
    breadcrumb: "Blog",

    schemaName: "The Driva Dev blog",
    schemaDescription:
      "Articles on web development, SEO, speed and digital business written by Driva Dev.",

    hero: {
      badge: "Blog",
      heading: "Web development, SEO and digital business",
      body: "We write about what we do every day: how a fast site actually gets built, what Google really looks at, and how to decide where your budget should go. No hype, no magic formulas.",
      rootAlt: "Root, the Driva Dev mascot, reading a book",
    },

    empty:
      "Our English articles are on the way. In the meantime, the Spanish blog is already full of them.",
    srFeatured: "Most recent article",
    srAll: "All articles",

    cta: {
      heading: "Want all of this applied to your site?",
      body: "We write these articles because it's exactly what we do on every project. Tell us about yours and we'll take a look together.",
      button: "Message us on WhatsApp",
    },
  },
};

export default en;
