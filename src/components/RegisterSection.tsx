import { register } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HubSpotForm } from "@/components/HubSpotForm";

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
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="#register-form" variant="primary" size="lg">
            {register.primaryButton}
          </ButtonLink>
          <ButtonLink href="#register-form" variant="cta" size="lg">
            {register.secondaryButton}
          </ButtonLink>
        </div>
      </Reveal>
      <Reveal delay={280}>
        <HubSpotForm />
      </Reveal>
    </div>
  </section>
);
