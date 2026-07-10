import { useState } from "react";
import { register } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HubSpotForm } from "@/components/HubSpotForm";
import { Modal } from "@/components/ui/Modal";

export const RegisterSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
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
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setFormOpen(true)}
              className="relative inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cyan px-8 text-base font-semibold tracking-tight text-background shadow-glow transition-all duration-200 hover:bg-cyan-glow hover:-translate-y-px hover:shadow-[0_0_45px_hsl(187_100%_42%/0.35)]"
            >
              {register.primaryButton}
            </button>
          </div>
        </Reveal>
      </div>

      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
      >
        <div className="mb-6">
          <p className="mb-1 font-mono text-xs uppercase tracking-[0.3em] text-cyan">{register.kicker}</p>
          <h2 className="text-xl font-bold leading-snug md:text-2xl">{register.title}</h2>
        </div>
        <HubSpotForm />
      </Modal>
    </section>
  );
};

