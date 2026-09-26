"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales, localeLabels } from "@/i18n/config";
import type { SiteContent } from "@/content";
import { switchLocalePath } from "@/lib/localizedPath";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  locale: Locale;
  labels: SiteContent["languageSwitcher"];
  className?: string;
}

export function LocaleSwitcher({
  locale,
  labels,
  className,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={labels.label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-[6px] border border-border bg-surface p-0.5",
        className,
      )}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={switchLocalePath(pathname, item)}
            hrefLang={item}
            lang={item}
            aria-label={localeLabels[item]}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-[6px] px-2.5 py-1.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-150",
              isActive
                ? "bg-surface-soft text-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
