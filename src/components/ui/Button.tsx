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
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent",
  secondary:
    "bg-surface text-foreground border border-border hover:border-foreground/30",
  ghost: "text-muted hover:text-foreground hover:bg-surface-soft",
  outline:
    "border border-border text-foreground hover:border-foreground/40 hover:text-foreground bg-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2 text-base",
  md: "min-h-12 px-5 py-2.5 text-base",
  lg: "min-h-12 px-6 py-3 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[6px] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

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
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      title={disabled ? disabledTitle : undefined}
    >
      {children}
    </button>
  );
}
