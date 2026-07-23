import { Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQPill } from "@/components/FAQPill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { event } from "@/content/site";
import { speakersPage } from "@/content/sections";

const ComingSoon = ({ label }: { label: string }) => (
  <Reveal delay={120}>
    <div className="flex items-center gap-3 rounded-[18px] border border-cyan/30 bg-cyan/5 px-5 py-4">
      <Sparkles className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
      <p className="font-sans text-[0.95rem] font-semibold text-cyan">{label}</p>
    </div>
  </Reveal>
);

const SpeakersPage = () => (
  <>
    <Navigation />
    <main className="pt-[76px]">
      <section className="py-20 lg:py-32">
        <div className="container">
          <SectionHeading
            kicker={speakersPage.kicker}
            title={speakersPage.title}
            description={speakersPage.description}
          />

          <div className="mb-16">
            <SectionHeading
              kicker={speakersPage.eventSpeakers.kicker}
              title={speakersPage.eventSpeakers.title}
              description={speakersPage.eventSpeakers.description}
            />
            <ComingSoon label={speakersPage.eventSpeakers.comingSoon} />
          </div>

          <div>
            <SectionHeading
              kicker={speakersPage.filigranTeam.kicker}
              title={speakersPage.filigranTeam.title}
              description={speakersPage.filigranTeam.description}
            />
            <ComingSoon label={speakersPage.filigranTeam.comingSoon} />
          </div>

          <Reveal delay={200}>
            <p className="mt-14 font-sans text-[0.95rem] text-white/60">
              {speakersPage.note}{" "}
              <a
                href={`mailto:${event.contactEmail}`}
                className="border-b border-cyan/40 text-cyan transition-colors hover:border-cyan"
              >
                {event.contactEmail}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
    <FAQPill />
  </>
);

export default SpeakersPage;
