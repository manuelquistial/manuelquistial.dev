"use client";

import { usePathname } from "next/navigation";
import { getSiteContent } from "@/content/getSiteContent";
import { getLocaleFromPathname } from "@/lib/localizedPath";
import { NotFoundView } from "@/components/layout/NotFoundView";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = getSiteContent(locale);

  return <NotFoundView locale={locale} notFound={content.notFound} />;
}
