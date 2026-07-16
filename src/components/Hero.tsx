import { ChevronDown } from "lucide-react";
import filigranLogo from "@/assets/filigran-logo.svg";
import { event } from "@/content/site";
import { useCountdown } from "@/hooks/useCountdown";
import { useHeroScrollProgress } from "@/hooks/useHeroScrollProgress";
import { ButtonLink } from "@/components/ui/Button";
import { MosaicCanvas } from "@/components/MosaicCanvas";

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex min-w-[44px] flex-col items-center sm:min-w-[58px]">
    <span className="font-mono text-xl font-medium tabular-nums text-foreground sm:text-2xl md:text-4xl">
      {value}
    </span>
    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-white/42 sm:text-[0.68rem] sm:tracking-[0.25em]">
      {label}
    </span>
  </div>
);

const CountdownSeparator = () => (
  <div className="h-9 w-px bg-gradient-to-b from-transparent via-cyan/60 to-transparent" />
);

export const Hero = () => {
  const countdown = useCountdown(event.countdownTo);
  const letters = event.name.split("");
  const heroProgress = useHeroScrollProgress("why");
  const mosaicDensity = 0.12 + heroProgress * 0.45;
  const mosaicOpacity = 0.35 + heroProgress * 0.35;
  const topDarkness = 0.9 - heroProgress * 0.2;

  return (
    <section
      className="relative flex min-h-svh items-center justify-center overflow-hidden pb-20 pt-32"
      id="top"
    >
      {/* V2 mosaic background — replaces animated threads + filigran gradient */}
      <MosaicCanvas
        density={mosaicDensity}
        cluster={0.1 + heroProgress * 0.1}
        opacity={mosaicOpacity}
        centerMask
      />

      {/* Edge vignette to blend mosaic into page background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `linear-gradient(180deg, hsl(240 25% 2% / ${topDarkness}) 0%, hsl(240 25% 2% / 0.42) 16%, transparent 36%, transparent 75%, hsl(240 25% 2%) 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-5xl text-center">
        {/* Event meta pill */}
        <p className="mb-10 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-white/18 bg-white/5 px-5 py-2.5 font-mono text-[0.8rem] tracking-[0.18em] text-white/85 backdrop-blur-md animate-fade-in">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-cyan animate-pulse-dot"
            aria-hidden="true"
          />
          <span className="whitespace-nowrap">{event.dateLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{event.venueShort}</span>
          <span aria-hidden="true">·</span>
          <span className="whitespace-nowrap">{event.admission}</span>
        </p>

        {/* THREAD wordmark */}
        <h1 className="mx-auto mb-2 w-fit font-display" aria-label={event.name}>
          <span
            className="flex gap-[clamp(0.3rem,1.5vw,1rem)] text-[clamp(3.4rem,13vw,9rem)] font-extrabold leading-none tracking-[0.06em]"
            aria-hidden="true"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                className="opacity-0 animate-letter-in"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Powered by Filigran */}
        <div className="mb-5 mt-10 flex items-center justify-center gap-3.5 animate-fade-in-slow">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-white/60">
            Powered by
          </span>
          <a
            href="https://filigran.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Filigran"
          >
            <img src={filigranLogo} alt="Filigran" className="h-7 w-auto md:h-8" />
          </a>
        </div>

        {/* Pitch */}
        <p className="mx-auto mb-10 max-w-3xl font-sans text-lg leading-relaxed text-white/82 md:text-xl animate-fade-in-slow">
          The annual gathering of the global threat intelligence and cyber defense
          community — where{" "}
          <span className="text-gradient-cool font-semibold">intelligence</span>,{" "}
          <span className="text-gradient-cool font-semibold">
            exposure management
          </span>{" "}
          and{" "}
          <span className="text-gradient-cool font-semibold">action</span> come
          together.
        </p>

        {/* CTA buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-slow">
          <ButtonLink href="#register" variant="gradient" size="lg">
            Request your seat →
          </ButtonLink>
          <ButtonLink href="#agenda" variant="outline" size="lg">
            Explore the day
          </ButtonLink>
        </div>

        {/* Countdown */}
        <div
          className="inline-flex items-center gap-2 rounded-3xl border border-white/12 bg-card/50 px-4 py-3 backdrop-blur-lg sm:gap-4 sm:px-6 sm:py-4 md:gap-7 md:px-10 animate-fade-in-slow"
          role="timer"
          aria-label={`Countdown to ${event.name} ${event.dateLabel}`}
        >
          <CountdownUnit value={countdown.days} label="days" />
          <CountdownSeparator />
          <CountdownUnit value={countdown.hours} label="hours" />
          <CountdownSeparator />
          <CountdownUnit value={countdown.minutes} label="minutes" />
          <CountdownSeparator />
          <CountdownUnit value={countdown.seconds} label="seconds" />
        </div>

        {event.credential && (
          <p className="mt-9 font-sans text-[0.95rem] text-white/65">
            {event.credential}{" "}
            <span className="text-cyan">{event.credentialEmphasis}</span>
          </p>
        )}

        <p className="mt-2 font-sans text-[0.95rem] text-white/60 animate-fade-in-slow">
          New to THREAD?{" "}
          <a
            href="/faq"
            className="text-cyan transition-colors hover:text-cyan-glow"
          >
            Check the FAQ →
          </a>
        </p>
      </div>

      {/* Scroll cue */}
      <a
        href="#why"
        aria-label="Scroll to content"
        className="absolute bottom-9 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_25px_hsl(var(--cyan)/0.2)] backdrop-blur-sm"
      >
        <ChevronDown className="h-4 w-4 animate-bounce text-cyan" />
      </a>
    </section>
  );
};
