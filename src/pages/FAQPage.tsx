import { Navigation } from "@/components/Navigation";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FAQPill } from "@/components/FAQPill";

const FAQPage = () => (
  <>
    <Navigation />
    <main className="pt-[76px]">
      <FAQSection />
    </main>
    <Footer />
    <FAQPill />
  </>
);

export default FAQPage;
