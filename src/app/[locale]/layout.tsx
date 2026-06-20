import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return buildPageMetadata(locale, {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    path: "",
    fullTitle: true,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = parseLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <SkipLink label={dictionary.a11y.skipToContent} />
      <Header locale={locale} dictionary={dictionary} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
