import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { getSiteContent } from "@/content/getSiteContent";
import { parseLocale } from "@/i18n/parseLocale";
import { buildPageMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return buildPageMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: "",
    fullTitle: true,
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = parseLocale((await params).locale);
  const content = getSiteContent(locale);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <SkipLink label={content.a11y.skipToContent} />
      <Header locale={locale} content={content} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
