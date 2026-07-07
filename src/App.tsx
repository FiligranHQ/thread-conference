import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
// import { Marquee } from "@/components/Marquee";
import { WhySection } from "@/components/WhySection";
import { FactsSection } from "@/components/FactsSection";
import { AudiencesSection } from "@/components/AudiencesSection";
import { ZonesSection } from "@/components/ZonesSection";
import { AgendaSection } from "@/components/AgendaSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { VenueSection } from "@/components/VenueSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";

const App = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      {/* <Marquee /> */}
      <WhySection />
      <FactsSection />
      <AudiencesSection />
      <ZonesSection />
      <AgendaSection />
      <SpeakersSection />
      <VenueSection />
      <RegisterSection />
    </main>
    <Footer />
  </>
);

export default App;
