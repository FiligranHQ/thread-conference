import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ kicker, title, description, align = "left" }: SectionHeadingProps) => (
  <div className={cn(align === "center" && "text-center")}>
    <Reveal>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan">{kicker}</p>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
    </Reveal>
    {description ? (
      <Reveal delay={160}>
        <p
          className={cn(
            "mb-10 max-w-2xl text-[1.05rem] leading-relaxed text-foreground/70",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      </Reveal>
    ) : null}
  </div>
);
