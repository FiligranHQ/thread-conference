import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => (
  <div className={cn(align === "center" && "text-center")}>
    <Reveal>
      {/* Eyebrow: IBM Plex Mono, uppercase, faint, with cyan rule */}
      <p className="eyebrow mb-4">{kicker}</p>
    </Reveal>
    <Reveal delay={80}>
      <h2 className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
    </Reveal>
    {description ? (
      <Reveal delay={160}>
        <p
          className={cn(
            "mb-10 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-white/65",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      </Reveal>
    ) : null}
  </div>
);
