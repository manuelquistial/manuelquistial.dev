import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  disabledTitle?: string;
  download?: boolean | string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent shadow-sm",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-accent/40",
  ghost: "text-muted hover:text-foreground hover:bg-surface-elevated",
  outline:
    "border border-border text-foreground hover:border-accent/50 hover:text-accent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  disabled,
  disabledTitle,
  download,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      );
    }

    if (download) {
      return (
        <a
          href={href}
          download={typeof download === "string" ? download : true}
          className={styles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles}
      aria-disabled={disabled}
      title={disabled ? disabledTitle : undefined}
    >
      {children}
    </button>
  );
}
