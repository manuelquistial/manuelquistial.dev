import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionVariant = "default" | "muted" | "bordered";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  /** @deprecated No longer changes padding; kept for call-site compatibility. */
  spacing?: "default" | "footer-adjacent";
  id?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-surface",
  bordered: "bg-background",
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
      <Container className={cn("py-[var(--section-y)]", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
