import { Routes, Route } from "react-router-dom";
import { RegisterModalProvider } from "@/context/RegisterModalContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
// import { Marquee } from "@/components/Marquee";
import { WhySection } from "@/components/WhySection";
import { FactsSection } from "@/components/FactsSection";
import { AudiencesSection } from "@/components/AudiencesSection";
import { AgendaSection } from "@/components/AgendaSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { VenueSection } from "@/components/VenueSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";
import { FAQPill } from "@/components/FAQPill";
import FAQPage from "@/pages/FAQPage";

const HomePage = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      {/* <Marquee /> */}
      <WhySection />
      <FactsSection />
      <AudiencesSection />
      <AgendaSection />
      <SpeakersSection />
      <VenueSection />
      <RegisterSection />
    </main>
    <Footer />
    <FAQPill />
  </>
);

const App = () => (
  <RegisterModalProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  </RegisterModalProvider>
);

export default App;
