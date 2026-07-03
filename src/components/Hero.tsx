import { ChevronDown } from "lucide-react";
import { event } from "@/content/site";
import { useCountdown } from "@/hooks/useCountdown";
import { ButtonLink } from "@/components/ui/Button";
import { ThreadsCanvas } from "@/components/ThreadsCanvas";

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex min-w-[58px] flex-col items-center">
    <span className="font-mono text-2xl font-medium tabular-nums text-foreground md:text-4xl">{value}</span>
    <span className="text-[0.68rem] uppercase tracking-[0.25em] text-foreground/55">{label}</span>
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
        <p className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.18] bg-white/5 px-5 py-2.5 font-mono text-[0.8rem] uppercase tracking-[0.18em] text-foreground/85 backdrop-blur-md animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-[#16ebf9] animate-pulse-dot" aria-hidden="true" />
          {event.dateLabel} · {event.venueShort} · {event.admission}
        </p>

        <h1 className="relative mx-auto mb-2 w-fit" aria-label={event.name}>
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
          {/* Hand-drawn thread underline */}
          <svg
            className="absolute -bottom-[18px] left-[-2%] h-[34px] w-[104%]"
            viewBox="0 0 600 40"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="draw-thread"
              d="M2 24 C 90 6, 160 38, 240 22 S 400 4, 470 24 S 560 36, 598 16"
              stroke="url(#threadGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="threadGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#16ebf9" />
                <stop offset=".55" stopColor="#00bfd6" />
                <stop offset="1" stopColor="#3378ff" />
              </linearGradient>
            </defs>
          </svg>
        </h1>

        <p className="mb-5 mt-10 font-mono text-sm uppercase tracking-[0.3em] text-foreground/70 animate-fade-in-slow">
          Powered by <strong className="font-semibold text-foreground">Filigran</strong>
        </p>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl animate-fade-in-slow">
          The annual gathering of the global threat intelligence and cyber defense community — where{" "}
          <span className="text-gradient-cyan font-semibold">intelligence</span>,{" "}
          <span className="text-gradient-cyan font-semibold">exposure</span> and{" "}
          <span className="text-gradient-cyan font-semibold">action</span> come together.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-slow">
          <ButtonLink href="#register" variant="primary" size="lg">
            Request an invitation
          </ButtonLink>
          <ButtonLink href="#agenda" variant="cta" size="lg">
            Explore the day
          </ButtonLink>
        </div>

        <div
          className="inline-flex items-center gap-4 rounded-3xl border border-white/[0.12] bg-background/45 px-6 py-4 backdrop-blur-lg md:gap-7 md:px-10 animate-fade-in-slow"
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

        <p className="mt-9 text-[0.95rem] text-foreground/65">
          {event.credential} <em className="italic text-[#16ebf9]">{event.credentialEmphasis}</em>
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
