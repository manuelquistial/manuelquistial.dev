import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{subtitle}</p>
      ) : null}
      <div
        className={cn(
          "mt-4 h-px w-12 bg-accent",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
