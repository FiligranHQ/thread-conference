import { ChevronDown } from "lucide-react";
import filigranLogo from "@/assets/filigran-logo.svg";
import { event } from "@/content/site";
import { useCountdown } from "@/hooks/useCountdown";
import { ButtonLink } from "@/components/ui/Button";
import { ThreadsCanvas } from "@/components/ThreadsCanvas";

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex min-w-[44px] flex-col items-center sm:min-w-[58px]">
    <span className="font-mono text-xl font-medium tabular-nums text-foreground sm:text-2xl md:text-4xl">{value}</span>
    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-foreground/55 sm:text-[0.68rem] sm:tracking-[0.25em]">{label}</span>
  </div>
);

const CountdownSeparator = () => (
  <div className="h-9 w-px bg-gradient-to-b from-transparent via-cyan/60 to-transparent" />
);

export const Hero = () => {
  const countdown = useCountdown(event.countdownTo);
  const letters = event.name.split("");

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden pb-20 pt-32" id="top">
      {/* Signature filigran.io gradient + woven threads + vignette */}
      <div className="hero-gradient absolute inset-0 opacity-75" aria-hidden="true" />
      <ThreadsCanvas />
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,transparent_0%,rgba(1,9,31,0.55)_100%),linear-gradient(180deg,rgba(1,9,31,0.35)_0%,transparent_30%,transparent_70%,hsl(220_30%_7%)_100%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-5xl text-center">
        <p className="mb-10 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-white/[0.18] bg-white/5 px-5 py-2.5 font-mono text-[0.8rem] tracking-[0.18em] text-foreground/85 backdrop-blur-md animate-fade-in">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#16ebf9] animate-pulse-dot" aria-hidden="true" />
          <span className="whitespace-nowrap">{event.dateLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{event.venueShort}</span>
          <span aria-hidden="true">·</span>
          <span className="whitespace-nowrap">{event.admission}</span>
        </p>

        <h1 className="mx-auto mb-2 w-fit" aria-label={event.name}>
          <span className="flex gap-[clamp(0.3rem,1.5vw,1rem)] text-[clamp(3.4rem,13vw,9rem)] font-extrabold leading-none tracking-[0.06em]" aria-hidden="true">
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

        <div className="mb-5 mt-10 flex items-center justify-center gap-3.5 animate-fade-in-slow">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/70">Powered by</span>
          <a href="https://filigran.io" target="_blank" rel="noopener noreferrer" aria-label="Filigran">
            <img src={filigranLogo} alt="Filigran" className="h-7 w-auto md:h-8" />
          </a>
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl animate-fade-in-slow">
          The annual gathering of the global threat intelligence and cyber defense community — where{" "}
          <span className="text-gradient-cyan font-semibold">intelligence</span>,{" "}
          <span className="text-gradient-cyan font-semibold">exposure management</span> and{" "}
          <span className="text-gradient-cyan font-semibold">action</span> come together.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-slow">
          <ButtonLink href="#register" variant="primary" size="lg">
            Request your seat
          </ButtonLink>
          <ButtonLink href="#agenda" variant="cta" size="lg">
            Explore the day
          </ButtonLink>
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-3xl border border-white/[0.12] bg-background/45 px-4 py-3 backdrop-blur-lg sm:gap-4 sm:px-6 sm:py-4 md:gap-7 md:px-10 animate-fade-in-slow"
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

        <p className="mt-5 text-sm text-foreground/55 animate-fade-in-slow">
          <a href="#faq" className="transition-colors underline-offset-4 hover:text-cyan hover:underline">
            Have questions? →
          </a>
        </p>

        <p className="mt-9 text-[0.95rem] text-foreground/65">
          {event.credential} <span className="text-[#16ebf9]">{event.credentialEmphasis}</span>
        </p>

        <p className="mt-2 text-[0.95rem] text-foreground/65 animate-fade-in-slow">
          New to THREAD?{" "}
          <a href="#faq" className="text-cyan transition-colors hover:text-cyan-glow">
            Check the FAQ →
          </a>
        </p>
      </div>

      <a
        href="#why"
        aria-label="Scroll to content"
        className="absolute bottom-9 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_25px_rgba(15,188,255,0.25)] backdrop-blur-sm"
      >
        <ChevronDown className="h-4 w-4 animate-bounce text-cyan" />
      </a>
    </section>
  );
};
