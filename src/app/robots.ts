import type { MetadataRoute } from "next";

import { config } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    host: config.url,
    rules: {
      allow: "/",
      disallow: "/api/",
      userAgent: "*",
    },
    sitemap: `${config.url}/sitemap.xml`,
  };
}
