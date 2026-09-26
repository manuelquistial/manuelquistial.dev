import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  className,
  align = "left",
  as: Heading = "h2",
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        "mb-6 sm:mb-8",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-muted">{eyebrow}</p>
      ) : null}
      <Heading
        className={cn(
          "font-semibold tracking-tight text-foreground",
          Heading === "h1"
            ? "text-[clamp(2.375rem,4vw,3.75rem)] leading-[1.1]"
            : "text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.2]",
          eyebrow && "mt-2",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-[65ch] text-[clamp(1.125rem,1.5vw,1.25rem)] leading-[1.5] text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
