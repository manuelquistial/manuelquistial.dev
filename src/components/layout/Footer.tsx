import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";

interface FooterProps {
  locale: Locale;
  content: Pick<SiteContent, "footer" | "nav" | "contactPage">;
}

export function Footer({ locale, content }: FooterProps) {
  const year = new Date().getFullYear();
  const { footer, nav, contactPage } = content;

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {year} {profile.shortName}. {footer.rights}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href={localizedPath(locale, "/contact")}
            className="text-muted transition-colors duration-150 hover:text-accent"
          >
            {nav.contact}
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-accent"
          >
            {contactPage.linkedin}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-accent"
          >
            {contactPage.github}
          </a>
        </div>
      </Container>
    </footer>
  );
}
