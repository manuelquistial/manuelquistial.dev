import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { NavLinks } from "@/components/layout/NavLinks";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { localizedPath } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href={localizedPath(locale)}
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {profile.shortName}
          <span className="text-muted">.dev</span>
        </Link>

        <NavLinks
          locale={locale}
          nav={dictionary.nav}
          ariaLabel={dictionary.a11y.mainNav}
          className="hidden items-center gap-0.5 md:flex"
          linkClassName="rounded-md px-3 py-2 text-sm font-medium transition-colors"
        />

        <LocaleSwitcher locale={locale} />
      </Container>

      <Container className="border-t border-border/60 pb-3 pt-2.5 md:hidden">
        <NavLinks
          locale={locale}
          nav={dictionary.nav}
          ariaLabel={dictionary.a11y.mobileNav}
          className="flex flex-wrap gap-1"
          linkClassName="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors"
        />
      </Container>
    </header>
  );
}
