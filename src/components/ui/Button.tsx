import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "editorial";
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
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent",
  secondary:
    "bg-surface text-foreground border border-border hover:border-foreground/30",
  ghost: "text-muted hover:text-foreground",
  outline:
    "border border-border text-foreground hover:border-border-strong hover:text-accent bg-transparent",
  editorial:
    "gap-3 border-0 bg-transparent p-0 text-foreground hover:text-accent font-semibold",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-[length:var(--body)]",
  lg: "min-h-12 px-6 py-3 text-[length:var(--body)]",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[var(--radius-button)] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

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
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
}: ButtonProps) {
  const styles = cn(
    baseStyles,
    variantStyles[variant],
    variant === "editorial" ? "min-h-0 px-0 py-0" : sizeStyles[size],
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
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      title={disabled ? disabledTitle : undefined}
    >
      {children}
    </button>
  );
}
