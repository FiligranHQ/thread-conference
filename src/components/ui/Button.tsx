import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "cta";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/* Styles mirror filigran-website button-variants (rounded-full, cyan glow). */
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-cyan text-background shadow-glow hover:bg-cyan-glow hover:-translate-y-px hover:shadow-[0_0_45px_hsl(187_100%_42%/0.35)]",
  cta: "border border-cyan/60 text-cyan bg-transparent shadow-[0_0_35px_rgba(15,188,255,0.25)] hover:text-background hover:bg-gradient-to-r hover:from-cyan hover:to-blue-500 hover:shadow-[0_0_45px_rgba(15,188,255,0.4)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
  sm: "h-10 px-5 text-sm",
};

export const ButtonLink = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(
      "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-200",
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
    {...props}
  >
    {children}
  </a>
);
