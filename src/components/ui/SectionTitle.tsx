import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  className,
  align = "left",
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-semibold tracking-tight text-foreground",
          eyebrow ? "mt-2 text-2xl sm:text-3xl" : "text-2xl sm:text-3xl",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-5 h-0.5 w-10 rounded-full bg-accent",
          align === "center" && "mx-auto",
        )}
      />
    </header>
  );
}
