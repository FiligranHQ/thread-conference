import filigranLogo from "@/assets/filigran-logo.svg";
import { footerLinks, footerText } from "@/content/site";

const FooterColumn = ({
  heading,
  links,
}: {
  heading: string;
  links: readonly { label: string; url: string }[];
}) => (
  <div className="flex flex-col gap-3">
    <h4 className="mb-1 text-[0.95rem] font-semibold text-cyan">{heading}</h4>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.url}
        target={link.url.startsWith("#") ? undefined : "_blank"}
        rel={link.url.startsWith("#") ? undefined : "noopener noreferrer"}
        className="text-sm text-foreground/60 transition-colors hover:text-cyan"
      >
        {link.label}
      </a>
    ))}
  </div>
);

const threadLinks = [
  { label: "Why THREAD", url: "#why" },
  { label: "Experience", url: "#experience" },
  { label: "Agenda", url: "#agenda" },
  { label: "Venue", url: "#venue" },
  { label: "Register your interest", url: "#register" },
] as const;

export const Footer = () => (
  <footer className="border-t border-border/50 bg-primary/20 pb-8 pt-16">
    <div className="container">
      <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <a href="https://filigran.io" target="_blank" rel="noopener noreferrer" aria-label="Filigran">
            <img src={filigranLogo} alt="Filigran" className="mb-6 h-8 w-auto" />
          </a>
          <p className="mb-4 max-w-sm text-sm leading-relaxed text-foreground/60">
            {footerText.description}
          </p>

        </div>
        <FooterColumn heading="THREAD 2026" links={threadLinks} />
        <FooterColumn heading="Filigran" links={footerLinks.filigran} />
        <FooterColumn heading="Community" links={footerLinks.community} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-7">
        <p className="text-[0.82rem] text-foreground/55">{footerText.copyright}</p>
        <p className="text-[0.82rem] text-cyan-glow/75">{footerText.tagline}</p>
      </div>
    </div>
  </footer>
);
