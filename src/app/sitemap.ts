import type { MetadataRoute } from "next";
import { getPublishedCaseStudyProjects } from "@/data/projects";
import { site, staticRoutes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const caseStudyRoutes = getPublishedCaseStudyProjects().map(
    (project) => `/projects/${project.id}`,
  );
  const routes = [...staticRoutes, ...caseStudyRoutes];

  return routes.map((route) => ({
    url: route === "" ? site.url : `${site.url}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/projects/") ? 0.7 : 0.8,
  }));
}
