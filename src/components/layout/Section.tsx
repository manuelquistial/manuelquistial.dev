import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionVariant = "default" | "muted" | "bordered";
type SectionSpacing = "default" | "footer-adjacent";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  id?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-surface",
  bordered: "border-t border-border bg-background",
};

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  spacing = "default",
  id,
}: SectionProps) {
  const isHomeRhythm = variant === "bordered";

  return (
    <section id={id} className={cn(variantStyles[variant], className)}>
      <Container
        className={cn(
          isHomeRhythm
            ? cn(
                "pt-[var(--section-pad-top)]",
                spacing === "footer-adjacent"
                  ? "pb-[var(--section-pad-bottom-footer)]"
                  : "pb-[var(--section-pad-bottom)]",
              )
            : "py-14 md:py-16 lg:py-24",
          containerClassName,
        )}
      >
        {children}
      </Container>
    </section>
  );
}
