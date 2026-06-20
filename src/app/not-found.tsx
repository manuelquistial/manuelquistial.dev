import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { NotFoundView } from "@/components/layout/NotFoundView";

export default function GlobalNotFound() {
  const { notFound } = getDictionary(defaultLocale);

  return (
    <html lang={defaultLocale}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <NotFoundView locale={defaultLocale} notFound={notFound} />
      </body>
    </html>
  );
}
