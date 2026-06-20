import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getCaseStudyProjects } from "@/data/projects";
import { localizedPath } from "@/lib/localizedPath";
import { site, staticRoutes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const caseStudyRoutes = getCaseStudyProjects().map(
    (project) => `/projects/${project.id}`,
  );
  const routes = [...staticRoutes, ...caseStudyRoutes];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url:
        route === ""
          ? `${site.url}${localizedPath(locale)}`
          : `${site.url}${localizedPath(locale, route)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.7 : 0.8,
    })),
  );
}
