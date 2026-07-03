import { ArrowUpRight } from "lucide-react";
import { resources } from "@/content/resources";

/**
 * Scrolling ribbon of real Filigran content (blog posts, customer stories,
 * reports). Every item is a clickable link; the ribbon pauses on hover.
 */
export const Marquee = () => {
  const items = [...resources, ...resources];

  return (
    <div className="group overflow-hidden border-y border-border/50 bg-primary/25 py-3">
      <div
        className="flex w-max items-center gap-10 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: "70s" }}
      >
        {items.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap"
            tabIndex={index < resources.length ? 0 : -1}
            aria-hidden={index >= resources.length}
          >
            <span className="rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cyan">
              {resource.type}
            </span>
            <span className="flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-cyan">
              {resource.title}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
