import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drivadev.com.ar";

  // Fechas estáticas: actualizar solo cuando la página cambia contenido real.
  // new Date() en cada build genera señales de fecha falsas que Google ignora.
  return [
    {
      url: base,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/servicios`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/portafolio`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contacto`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
