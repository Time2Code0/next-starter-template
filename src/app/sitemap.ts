import type { MetadataRoute } from "next";

import { config } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 1,
      url: config.url,
    },
  ];
}
