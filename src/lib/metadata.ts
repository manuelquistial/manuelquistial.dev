import type { Metadata } from "next";
import { site } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  fullTitle?: boolean;
}

export function buildPageMetadata(page: PageMetadataInput): Metadata {
  const normalizedPath = page.path.startsWith("/") ? page.path : `/${page.path}`;
  const canonicalPath = normalizedPath === "/" ? "" : normalizedPath;
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const fullTitle = page.fullTitle ? page.title : `${page.title} | ${site.name}`;

  return {
    title: fullTitle,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: `${site.url}${site.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [`${site.url}${site.ogImage}`],
    },
  };
}
