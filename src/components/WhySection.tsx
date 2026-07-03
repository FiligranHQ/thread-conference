import { why } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";

/** Rotating "ball of yarn" illustration with an escaping thread. */
const YarnIllustration = () => (
  <div className="relative flex justify-center">
    <svg className="relative z-[1] w-[min(400px,80vw)]" viewBox="0 0 420 420" fill="none" aria-hidden="true">
      <g className="origin-[210px_210px] animate-yarn-spin motion-reduce:animate-none">
        <circle cx="210" cy="210" r="150" stroke="rgba(255,255,255,.10)" strokeWidth="1.2" />
        <ellipse cx="210" cy="210" rx="150" ry="66" stroke="rgba(0,191,214,.45)" strokeWidth="1.2" transform="rotate(24 210 210)" />
        <ellipse cx="210" cy="210" rx="150" ry="98" stroke="rgba(255,255,255,.16)" strokeWidth="1.2" transform="rotate(-18 210 210)" />
        <ellipse cx="210" cy="210" rx="150" ry="42" stroke="rgba(51,120,255,.50)" strokeWidth="1.2" transform="rotate(66 210 210)" />
        <ellipse cx="210" cy="210" rx="150" ry="120" stroke="rgba(255,255,255,.10)" strokeWidth="1.2" transform="rotate(48 210 210)" />
        <ellipse cx="210" cy="210" rx="150" ry="80" stroke="rgba(22,235,249,.35)" strokeWidth="1.2" transform="rotate(-52 210 210)" />
        <ellipse cx="210" cy="210" rx="150" ry="24" stroke="rgba(255,255,255,.14)" strokeWidth="1.2" transform="rotate(-80 210 210)" />
      </g>
      <path
        className="draw-thread"
        d="M348 300 C 400 330, 380 380, 300 386 S 180 420, 120 400"
        stroke="url(#looseThreadGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="looseThreadGradient" x1="348" y1="300" x2="120" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#16ebf9" />
          <stop offset="1" stopColor="#3378ff" stopOpacity=".2" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,hsl(187_100%_42%/0.14),transparent_65%)] blur-2xl" />
  </div>
);

export const WhySection = () => (
  <section className="py-20 lg:py-32" id="why">
    <div className="container">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan">{why.kicker}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.9rem]">
              {why.title}
            </h2>
          </Reveal>
          <div className="space-y-4">
            {why.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={120 + index * 60}>
                <p className="leading-relaxed text-foreground/[0.78]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {why.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan/35 bg-cyan/[0.08] px-4 py-2 text-xs text-cyan-glow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <YarnIllustration />
        </Reveal>
      </div>
    </div>
  </section>
);
