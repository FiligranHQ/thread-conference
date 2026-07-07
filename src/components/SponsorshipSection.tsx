import { sponsorship } from "@/content/sponsors";
import { event } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tierAccents: Record<string, string> = {
  electric: "linear-gradient(90deg, #16ebf9, #00bfd6)",
  cyan: "linear-gradient(90deg, #00bfd6, #3378ff)",
  blue: "linear-gradient(90deg, #16ebf9, #3378ff)",
  indigo: "linear-gradient(90deg, #3378ff, #333bff)",
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
        {sponsorship.tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 100}>
            <article
              className={`card-glass hover-lift relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${
                tier.highlighted ? "shadow-[0_0_60px_rgba(0,191,214,0.12)]" : ""
              }`}
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] opacity-85"
                style={{ background: tierAccents[tier.color] }}
                aria-hidden="true"
              />
              {tier.highlighted ? (
                <span className="mb-5 self-start rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                  Featured
                </span>
              ) : (
                <div className="mb-5 h-[26px]" aria-hidden="true" />
              )}
              <h3 className="mb-1 text-xl font-bold">{tier.name}</h3>
              <p className="mb-6 text-sm text-cyan">{tier.tagline}</p>
              <ul className="mb-8 flex flex-1 flex-col gap-3" aria-label={`${tier.name} perks`}>
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <span className="mt-px text-cyan" aria-hidden="true">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={`mailto:${event.contactEmail}?subject=THREAD%202026%20%E2%80%94%20Sponsorship%20inquiry%20%E2%80%94%20${encodeURIComponent(tier.name)}`}
                variant="cta"
                className="w-full justify-center"
              >
                {sponsorship.cta}
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={350}>
        <p className="mt-10 text-center text-sm text-foreground/55">{sponsorship.note}</p>
      </Reveal>
    </div>
  </section>
);
