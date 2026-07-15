import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { event } from "@/content/site";
import { ThreadKnot } from "@/components/ThreadKnot";
import { ButtonLink } from "@/components/ui/Button";

const navLinks = [
  { label: "Why THREAD", href: "#why" },
  { label: "Experience", href: "#experience" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled && "border-border/50 bg-background/80 backdrop-blur-xl",
      )}
    >
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 text-foreground" aria-label={`${event.name}, ${event.poweredBy}`}>
          <ThreadKnot className="h-[34px] w-[34px] text-cyan" />
          <span className="text-lg font-extrabold tracking-[0.24em]">
            {event.name}
            <sup className="ml-0.5 text-[0.65rem] font-semibold tracking-widest text-cyan">{event.edition}</sup>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan to-cyan-glow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#register" variant="cta" size="sm">
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
        <div className="flex flex-col gap-5 border-b border-border/50 bg-background/95 p-6 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-foreground/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="#register" variant="cta" onClick={() => setOpen(false)}>
            Request your seat
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
};
