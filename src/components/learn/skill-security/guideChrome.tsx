import type { ReactNode } from "react";

export function GuideSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      className="learn-section scroll-mt-28"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="font-display text-[length:var(--heading-2)] text-brand"
      >
        {title}
      </h2>
      <div className="learn-follow space-y-5">{children}</div>
    </section>
  );
}

export function GuideCopy({ children }: { children: ReactNode }) {
  return (
    <div className="learn-reading space-y-4 text-[length:var(--body-lg)] leading-relaxed text-muted">
      {children}
    </div>
  );
}

export function GuideCallout({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-[calc(var(--radius-module)-0.35rem)] bg-surface-soft px-4 py-3 text-[length:var(--body)] font-semibold leading-relaxed text-brand">
      {children}
    </p>
  );
}

export function GuideExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center text-sm font-semibold text-brand transition-colors duration-200 hover:text-accent-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
    >
      {children}
    </a>
  );
}

export async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    return true;
  } catch {
    return false;
  }
}
