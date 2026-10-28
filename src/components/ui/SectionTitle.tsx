import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  /** Extra bottom margin under the header block. */
  spacing?: "default" | "none";
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  className,
  align = "left",
  as: Heading = "h2",
  spacing = "default",
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        spacing === "default" && "mb-6 sm:mb-8",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-overline text-muted">{eyebrow}</p>
      ) : null}
      <Heading
        className={cn(
          "text-balance font-semibold tracking-tight text-foreground",
          Heading === "h1"
            ? "font-display text-[length:var(--heading-1)]"
            : "text-[length:var(--heading-2)] leading-[1.1] tracking-[-0.03em]",
          eyebrow && "mt-2",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-[65ch] text-[length:var(--body-lg)] leading-[1.45] text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
