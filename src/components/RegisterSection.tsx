import { event, register } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const RegisterSection = () => (
  <section className="relative overflow-hidden border-t border-border/50 py-20 lg:py-32" id="register">
    <div className="register-gradient absolute inset-0 opacity-55" aria-hidden="true" />
    <div className="container relative z-10 text-center">
      <SectionHeading
        kicker={register.kicker}
        title={register.title}
        description={register.description}
        align="center"
      />
      <Reveal delay={200}>
        <div className="mb-7 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href={`mailto:${event.contactEmail}?subject=THREAD%202026%20-%20Invitation%20request`}
            variant="primary"
            size="lg"
          >
            {register.primaryButton}
          </ButtonLink>
          <ButtonLink
            href={`mailto:${event.contactEmail}?subject=THREAD%202026%20-%20Session%20proposal`}
            variant="cta"
            size="lg"
          >
            {register.secondaryButton}
          </ButtonLink>
        </div>
      </Reveal>
      <Reveal delay={280}>
        <p className="text-sm text-foreground/55">{register.note}</p>
      </Reveal>
    </div>
  </section>
);
