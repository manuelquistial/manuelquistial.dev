"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { profile } from "@/data/profile";
import { localizedPath } from "@/lib/localizedPath";
import { Container } from "@/components/layout/Container";
import { NavLinks } from "@/components/layout/NavLinks";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

interface HeaderProps {
  locale: Locale;
  content: Pick<SiteContent, "nav" | "a11y" | "languageSwitcher">;
}

export function Header({ locale, content }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href={localizedPath(locale)}
          className="text-base font-semibold tracking-tight text-foreground transition-colors duration-150 hover:text-accent"
        >
          {profile.shortName}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLinks
            locale={locale}
            nav={content.nav}
            ariaLabel={content.a11y.mainNav}
            className="hidden items-center gap-1 md:flex"
            linkClassName="rounded-[6px] px-3 py-2 text-base font-medium transition-colors duration-150"
          />
          <LocaleSwitcher locale={locale} labels={content.languageSwitcher} />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-border px-4 text-base font-semibold text-foreground transition-colors duration-150 hover:border-foreground/40 md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? content.a11y.closeMenu : content.a11y.menu}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          className="border-t border-border md:hidden"
        >
          <Container className="py-4">
            <NavLinks
              locale={locale}
              nav={content.nav}
              ariaLabel={content.a11y.mobileNav}
              className="flex flex-col gap-1"
              linkClassName="rounded-[6px] px-3 py-3 text-base font-medium transition-colors duration-150"
              onNavigate={() => setOpen(false)}
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
