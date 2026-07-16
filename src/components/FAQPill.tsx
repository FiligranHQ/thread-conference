import { CircleHelp } from "lucide-react";

export const FAQPill = () => (
  <a
    href="/faq"
    aria-label="Go to FAQ page"
    className="fixed bottom-6 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-card/60 px-3 py-2.5 font-sans text-sm font-semibold text-cyan shadow-glow backdrop-blur-sm transition-all duration-200 hover:bg-cyan/10 sm:left-6 sm:px-4"
  >
    <CircleHelp className="h-4 w-4 shrink-0" aria-hidden="true" />
    <span className="sr-only sm:not-sr-only">FAQ</span>
  </a>
);
