import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps extends PropsWithChildren {
  className?: string;
  /** Extra delay in milliseconds for staggered entrances. */
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "p";
}

/** Wrapper that fades content in when it scrolls into view. */
export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      className={cn(
        "transition-all duration-700",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
