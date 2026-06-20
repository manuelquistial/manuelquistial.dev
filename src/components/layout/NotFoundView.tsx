import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";

interface NotFoundViewProps {
  locale: Locale;
  notFound: SiteContent["notFound"];
  centered?: boolean;
}

export function NotFoundView({
  locale,
  notFound,
  centered = true,
}: NotFoundViewProps) {
  return (
    <Container
      as="section"
      className={
        centered
          ? "flex min-h-[50vh] flex-col items-center justify-center py-20 text-center"
          : "py-20"
      }
    >
      <h1 className="text-3xl font-semibold text-foreground">{notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{notFound.description}</p>
      <Link
        href={localizedPath(locale)}
        className="mt-8 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {notFound.backHome}
      </Link>
    </Container>
  );
}
