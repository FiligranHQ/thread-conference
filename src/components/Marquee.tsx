import { Fragment } from "react";
import { marqueeWords } from "@/content/site";

export const Marquee = () => {
  const words = [...marqueeWords, ...marqueeWords];

  return (
    <div className="overflow-hidden border-y border-border/50 bg-primary/25 py-3.5" aria-hidden="true">
      <div className="flex w-max items-center gap-9 animate-marquee motion-reduce:animate-none">
        {words.map((word, index) => (
          <Fragment key={index}>
            <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-foreground/55">
              {word}
            </span>
            <i className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan opacity-70" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
