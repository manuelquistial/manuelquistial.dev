"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { SiteContent } from "@/content";
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href={localizedPath(locale)}
          translate="no"
          className="min-w-0 truncate text-[length:var(--body)] font-bold tracking-[-0.03em] text-brand transition-colors duration-200 hover:text-accent-violet"
        >
          manuelquistial.dev
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <NavLinks
            locale={locale}
            nav={content.nav}
            ariaLabel={content.a11y.mainNav}
            numbered={false}
            className="hidden items-center gap-5 xl:gap-6 xl:flex"
            linkClassName="text-[length:var(--small)] font-medium tracking-normal normal-case"
          />
          <LocaleSwitcher locale={locale} labels={content.languageSwitcher} />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-brand transition-colors duration-200 hover:border-brand hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? content.a11y.closeMenu : content.a11y.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          className="absolute inset-x-0 top-full overflow-y-auto overscroll-contain border-t border-border bg-background xl:hidden"
        >
          <Container className="py-4">
            <NavLinks
              locale={locale}
              nav={content.nav}
              ariaLabel={content.a11y.mobileNav}
              numbered={false}
              className="flex flex-col gap-1"
              linkClassName="px-1 py-3 text-[length:var(--body)] font-medium tracking-normal normal-case"
              onNavigate={() => setOpen(false)}
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
