import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { localizedPath } from "@/lib/utils";

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function Footer({ locale, dictionary }: FooterProps) {
  const year = new Date().getFullYear();
  const { footer, nav } = dictionary;

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            {profile.shortName}
          </p>
          <p className="mt-1 text-xs text-muted">
            © {year} {profile.shortName}. {footer.rights}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <p className="text-xs text-muted">{footer.builtWith}</p>
          <div className="flex gap-4 text-xs">
            <Link
              href={localizedPath(locale, "/contact")}
              className="text-muted transition-colors hover:text-accent"
            >
              {nav.contact}
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {dictionary.contactPage.github}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {dictionary.contactPage.linkedin}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
