import Link from "next/link";
import { cn } from "@/lib/utils";

interface ViewAllLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ViewAllLink({ href, children, className }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover",
        className,
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
