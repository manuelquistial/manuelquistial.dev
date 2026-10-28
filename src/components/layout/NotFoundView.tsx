import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";

interface NotFoundViewProps {
  locale: Locale;
  notFound: SiteContent["notFound"];
  layout?: "centered" | "page";
}

export function NotFoundView({
  locale,
  notFound,
  layout = "centered",
}: NotFoundViewProps) {
  return (
    <Container
      as="section"
      className={
        layout === "centered"
          ? "flex min-h-[50vh] flex-col items-center justify-center py-20 text-center"
          : "py-20"
      }
    >
      <h1 className="text-balance text-[length:var(--heading-2)] font-semibold tracking-[-0.03em] text-foreground">
        {notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">{notFound.description}</p>
      <Link
        href={localizedPath(locale)}
        className="mt-8 inline-flex min-h-11 items-center border border-border px-5 py-2.5 text-base font-semibold text-foreground transition-colors duration-200 hover:border-border-strong hover:text-accent"
      >
        {notFound.backHome}
      </Link>
    </Container>
  );
}
