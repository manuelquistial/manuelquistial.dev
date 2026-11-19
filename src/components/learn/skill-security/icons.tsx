import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function IconInstructions({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4.5h7l3 3V19.5H7z" />
      <path d="M14 4.5V8h3.5" />
      <path d="M9.5 12h5M9.5 15.5h3.5" />
    </svg>
  );
}

export function IconAccess({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8.5h14v10H5z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

export function IconPrograms({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="5" width="15" height="14" rx="2" />
      <path d="M8 9.5h8M8 13h5" />
    </svg>
  );
}

export function IconConnections({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="12" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M9.3 11.2 14.7 8.3M9.3 12.8l5.4 2.9" />
    </svg>
  );
}

export function IconOrigin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19c1.5-3.2 3.8-4.8 6.5-4.8S17 15.8 18.5 19" />
    </svg>
  );
}

export function IconContents({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 5.5h8l4 4V18.5H6z" />
      <path d="M14 5.5V10h4.5" />
    </svg>
  );
}

export function IconAnalysis({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5", className)} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4.2 4.2" />
    </svg>
  );
}
