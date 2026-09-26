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
        "inline-flex min-h-11 items-center text-base font-semibold text-accent transition-colors duration-150 hover:text-accent-hover",
        className,
      )}
    >
      {children}
    </Link>
  );
}
