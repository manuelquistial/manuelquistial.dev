"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteContent } from "@/content";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  nav: SiteContent["nav"];
  ariaLabel: string;
  className?: string;
  linkClassName?: string;
}

export function NavLinks({
  nav,
  ariaLabel,
  className,
  linkClassName,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={ariaLabel}>
      {navItems.map((item) => {
        const href = item.path === "" ? "/" : item.path;
        const isActive =
          pathname === href ||
          (item.path !== "" && pathname.startsWith(href));

        return (
          <Link
            key={item.key}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              linkClassName,
              isActive
                ? "text-accent"
                : "text-muted hover:text-foreground",
            )}
          >
            {nav[item.key]}
          </Link>
        );
      })}
    </nav>
  );
}
