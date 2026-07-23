import { sponsorship } from "@/content/sponsors";
import { event } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** V4 tier accent (cool set only, per v4 rules). */
const tierAccent: Record<
  string,
  { topLine: string; border: string }
> = {
  blue: {
    topLine: "hsl(var(--blue))",
    border: "rgba(52,146,255,0.35)",
  },
  cyan: {
    topLine: "hsl(var(--cyan))",
    border: "rgba(0,224,255,0.35)",
  },
  lime: {
    topLine: "hsl(var(--lime))",
    border: "rgba(223,255,166,0.35)",
  },
  gradient: {
    topLine:
      "linear-gradient(90deg,hsl(var(--lime)) 0%,hsl(var(--gradient-mid)) 56%,hsl(var(--blue)) 96%)",
    border: "rgba(0,224,255,0.35)",
  },
  // Legacy names kept for backward compat
  electric: {
    topLine:
      "linear-gradient(90deg,hsl(var(--lime)) 0%,hsl(var(--gradient-mid)) 56%,hsl(var(--blue)) 96%)",
    border: "rgba(0,224,255,0.35)",
  },
  indigo: {
    topLine: "hsl(var(--blue))",
    border: "rgba(52,146,255,0.35)",
  },
};

export const SponsorshipSection = () => (
  <section className="py-20 lg:py-32" id="sponsorship">
    <div className="container">
      <SectionHeading
        kicker={sponsorship.kicker}
        title={sponsorship.title}
        description={sponsorship.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsorship.tiers.map((tier, index) => {
          const accent = tierAccent[tier.color] ?? tierAccent.cyan;
          return (
            <Reveal key={tier.name} delay={index * 100}>
              <article
                className="hover-lift relative flex h-full flex-col overflow-hidden rounded-[22px] bg-card p-8"
                style={{
                  border: `1px solid ${accent.border}`,
                  boxShadow: tier.highlighted
                    ? "0 0 60px rgba(0,224,255,0.1)"
                    : undefined,
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[4px]"
                  style={{ background: accent.topLine }}
                  aria-hidden="true"
                />
                {tier.highlighted ? (
                  <span className="mb-5 self-start rounded-full border border-cyan/30 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    Featured
                  </span>
                ) : (
                  <div className="mb-5 h-[26px]" aria-hidden="true" />
                )}
                <h3 className="mb-1 font-display text-xl font-bold">{tier.name}</h3>
                <p className="mb-6 font-sans text-sm text-cyan">{tier.tagline}</p>
                <ul
                  className="mb-8 flex flex-1 flex-col gap-3"
                  aria-label={`${tier.name} perks`}
                >
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2.5 font-sans text-sm text-white/70"
                    >
                      <span className="mt-px text-cyan" aria-hidden="true">
                        ✦
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={`mailto:${event.contactEmail}?subject=THREAD%202026%20%E2%80%94%20Sponsorship%20inquiry%20%E2%80%94%20${encodeURIComponent(tier.name)}`}
                  variant="outline"
                  className="w-full justify-center"
                >
                  {sponsorship.cta}
                </ButtonLink>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={350}>
        <p className="mt-10 text-center font-sans text-sm text-white/50">
          {sponsorship.note}
        </p>
      </Reveal>
    </div>
  </section>
);
