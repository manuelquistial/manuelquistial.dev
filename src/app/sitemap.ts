import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site, staticRoutes } from "@/config/site";
import { localizedPath } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${site.url}${localizedPath(locale, route)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
