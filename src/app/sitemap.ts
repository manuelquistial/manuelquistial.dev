import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getCaseStudyProjects } from "@/data/projects";
import { localizedPath } from "@/lib/localizedPath";
import { getLearnSitemapEntries } from "@/content/learn/routes";
import { site, staticRoutes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const caseStudyRoutes = getCaseStudyProjects().map(
    (project) => `/projects/${project.id}`,
  );
  const routes = [...staticRoutes, ...caseStudyRoutes];

  const localizedRoutes = locales.flatMap((locale) =>
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

  const learnRoutes = getLearnSitemapEntries().map((entry) => ({
    url: `${site.url}${localizedPath(entry.locale, entry.path)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: entry.path === "/aprendamos" ? 0.6 : 0.5,
  }));

  return [...localizedRoutes, ...learnRoutes];
}
