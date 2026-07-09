import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://drivadev.com.ar/sitemap.xml",
    host: "https://drivadev.com.ar",
  };
}
