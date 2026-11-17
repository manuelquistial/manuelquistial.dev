import type { Metadata } from "next";
import { locales, openGraphLocales, type Locale } from "@/i18n/config";
import { translateLearnPath } from "@/content/learn/routes";
import { localizedPath } from "@/lib/localizedPath";
import { site } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  fullTitle?: boolean;
  locale?: Locale;
  availableLocales?: readonly Locale[];
}

function pathForLocale(path: string, locale: Locale): string {
  return translateLearnPath(path, locale) ?? path;
}

export function buildPageMetadata(page: PageMetadataInput): Metadata {
  const locale = page.locale ?? "en";
  const normalizedPath = page.path.startsWith("/") ? page.path : `/${page.path}`;
  const localePath = pathForLocale(
    normalizedPath === "/" ? "" : normalizedPath,
    locale,
  );
  const canonicalPath = localizedPath(
    locale,
    localePath === "/" ? "" : localePath,
  );
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const fullTitle = page.fullTitle ? page.title : `${page.title} | ${site.name}`;

  const languageLocales = page.availableLocales ?? locales;
  const languages = Object.fromEntries(
    languageLocales.map((item) => {
      const itemPath = pathForLocale(
        normalizedPath === "/" ? "" : normalizedPath,
        item,
      );
      return [
        item,
        `${site.url}${localizedPath(item, itemPath === "/" ? "" : itemPath)}`,
      ];
    }),
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
      locale: openGraphLocales[locale],
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
