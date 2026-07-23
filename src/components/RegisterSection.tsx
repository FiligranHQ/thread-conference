import { register } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MosaicCanvas } from "@/components/MosaicCanvas";
import { useRegisterModal } from "@/context/RegisterModalContext";

export const RegisterSection = () => {
  const { openRegisterModal } = useRegisterModal();

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 py-20 lg:py-32"
      id="register"
    >
      {/* Mosaic at low density — echoes hero, bands the CTA at bottom of page */}
      <MosaicCanvas density={0.35} cluster={0.1} opacity={0.55} centerMask />

      {/* Dark overlay to keep text readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(0 0% 4% / 0.7) 0%, hsl(0 0% 6% / 0.5) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 text-center">
        <SectionHeading
          kicker={register.kicker}
          title={register.title}
          description={register.description}
          align="center"
        />
        <Reveal delay={200}>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={openRegisterModal}
            >
              {register.primaryButton}
            </Button>
          </div>
          <p className="mt-3 font-sans text-sm text-white/45">{register.note}</p>
        </Reveal>
      </div>
    </section>
  );
};
