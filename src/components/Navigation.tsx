import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { event } from "@/content/site";
import threadLogo from "@/assets/Logo_THREAD_white_nowbl.svg";
import { ButtonLink } from "@/components/ui/Button";
import { useHeroScrollProgress } from "@/hooks/useHeroScrollProgress";

const navLinks = [
  { label: "Why THREAD", href: "/#why" },
  { label: "Experience", href: "/#experience" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Venue", href: "/#venue" },
  { label: "FAQ", href: "/faq", highlight: true },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const heroProgress = useHeroScrollProgress("why");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        heroProgress > 0.08 && "shadow-[0_6px_20px_hsl(240_25%_2%_/_0.42)]",
      )}
      style={{
        backgroundColor: `hsl(240 25% 2% / ${0.95 - heroProgress * 0.2})`,
        borderColor: `hsl(0 0% 100% / ${0.1 + heroProgress * 0.08})`,
        backdropFilter: `blur(${10 + heroProgress * 8}px)`,
      }}
    >
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <a
          href="/"
          className="flex items-center text-foreground"
          aria-label={event.name}
        >
          <img src={threadLogo} alt={event.name} className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative font-sans text-sm text-white/78 transition-colors hover:text-white",
                link.highlight &&
                  "rounded-full border border-cyan/30 px-2.5 py-0.5 text-cyan/80 hover:border-cyan/70 hover:text-cyan",
              )}
            >
              {link.label}
              {!link.highlight && (
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan to-lime transition-all duration-300 group-hover:w-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/#register" variant="outline" size="sm">
            Request your seat
          </ButtonLink>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-5 border-b border-white/10 bg-card/95 p-6 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-base text-white/80 transition-colors hover:text-white",
                link.highlight && "text-cyan/80",
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="/#register"
            variant="gradient"
            onClick={() => setOpen(false)}
          >
            Request your seat
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
};
