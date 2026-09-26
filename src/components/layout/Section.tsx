import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionVariant = "default" | "muted";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  id?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-surface-soft/60",
};

export function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantStyles[variant], className)}>
      <Container
        className={cn(
          "py-14 md:py-16 lg:py-24",
          containerClassName,
        )}
      >
        {children}
      </Container>
    </section>
  );
}
