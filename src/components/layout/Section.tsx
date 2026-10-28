import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionVariant = "default" | "muted" | "bordered";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
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
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(variantStyles[variant], className)}>
      <Container
        className={cn(
          "py-16 md:py-24 lg:py-[clamp(7.5rem,12vw,10rem)]",
          containerClassName,
        )}
      >
        {children}
      </Container>
    </section>
  );
}
