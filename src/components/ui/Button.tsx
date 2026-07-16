import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** All available button variants per v2 design system. */
export type ButtonVariant =
  | "gradient"  // primary — blue→cyan→lime gradient, ink text (default CTA)
  | "blue"      // solid blue, ink text
  | "cyan"      // solid cyan, ink text
  | "lime"      // solid lime, ink text
  | "outline"   // transparent, white text, strong border
  | "ghost"     // transparent, muted text, no border
  | "primary"   // alias for gradient (backward compat)
  | "cta";      // alias for outline (backward compat)

export type ButtonSize = "default" | "lg" | "sm";

const variantClasses: Record<ButtonVariant, string> = {
  gradient:
    "bg-[linear-gradient(90deg,hsl(var(--blue)),hsl(var(--cyan)),hsl(var(--lime)))] text-ink font-bold " +
    "hover:opacity-90 hover:-translate-y-px hover:shadow-[0_0_45px_hsl(var(--cyan)/0.35)]",
  blue:
    "bg-blue text-ink font-bold " +
    "hover:shadow-glow-blue hover:-translate-y-px",
  cyan:
    "bg-cyan text-ink font-bold " +
    "hover:shadow-glow hover:-translate-y-px",
  lime:
    "bg-lime text-ink font-bold " +
    "hover:shadow-glow-lime hover:-translate-y-px",
  outline:
    "border border-white/24 text-foreground bg-transparent " +
    "hover:border-cyan hover:text-cyan",
  ghost:
    "bg-transparent text-foreground/65 " +
    "hover:text-foreground",
  // Backward-compat aliases
  primary:
    "bg-[linear-gradient(90deg,hsl(var(--blue)),hsl(var(--cyan)),hsl(var(--lime)))] text-ink font-bold " +
    "hover:opacity-90 hover:-translate-y-px hover:shadow-[0_0_45px_hsl(var(--cyan)/0.35)]",
  cta:
    "border border-white/24 text-foreground bg-transparent " +
    "hover:border-cyan hover:text-cyan",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
  sm: "h-10 px-5 text-sm",
};

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full " +
  "tracking-tight transition-all duration-200 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Anchor-based button — for navigation links. */
interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const ButtonLink = ({
  variant = "gradient",
  size = "default",
  className,
  children,
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    {...props}
  >
    {children}
  </a>
);

/** Button element — for interactive actions. */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  variant = "gradient",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    {...props}
  >
    {children}
  </button>
);

