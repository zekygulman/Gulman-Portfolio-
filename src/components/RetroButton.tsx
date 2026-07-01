import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

export function RetroButton({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 font-pixel text-[11px] uppercase tracking-wider border-[3px] border-ink transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-cream hover:text-ink"
      : "bg-cream text-ink hover:bg-ink hover:text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
