import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { site } from "@/config/site";
import { localizedPath } from "@/lib/utils";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  fullTitle?: boolean;
}

export function buildPageMetadata(
  locale: Locale,
  page: PageMetadataInput,
): Metadata {
  const canonicalPath = localizedPath(locale, page.path);
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const fullTitle = page.fullTitle ? page.title : `${page.title} | ${site.name}`;

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${site.url}${localizedPath(loc, page.path)}`]),
  );

  return {
    title: fullTitle,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonicalUrl,
      siteName: site.name,
      locale: locale === "es" ? "es_CO" : "en_US",
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
