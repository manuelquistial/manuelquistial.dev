import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionVariant = "default" | "muted" | "hero";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  border?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-surface/50",
  hero: "border-b border-border bg-[radial-gradient(ellipse_at_top,_var(--accent-muted)_0%,_transparent_55%)]",
};

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  border = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        variantStyles[variant],
        border && "border-y border-border",
        className,
      )}
    >
      <Container className={cn("py-8 sm:py-10 lg:py-12", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
