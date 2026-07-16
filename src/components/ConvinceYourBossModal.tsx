import { useState } from "react";
import { Check, Copy, Mail, MessageSquare } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const EMAIL_SUBJECT = "Request to attend THREAD 2026 — Paris, Oct 15";

const EMAIL_BODY = `Hi [Manager's name],

I'd like to attend THREAD 2026, a one-day community conference in Paris on October 15, 2026. Here's why it makes sense:

• Free to attend — there is no registration fee.
• Zero vendor agenda — it's explicitly not a sales event or product launch. It's practitioner-led, built for people who do the work.
• Directly relevant to what I do — the agenda includes hands-on labs, real threat simulations, and peer sessions focused on threat intelligence and cyber defense.
• Certification opportunity — the Intelligence Lab track includes Filigran Academy workshops and certification sessions.
• High-quality peer network — a curated, selective event (not an open trade show) that brings together CTI analysts, SOC teams, and security leaders from leading organizations.

The only costs involved would be travel and accommodation, which I'm happy to discuss. Given that the event itself is free and the learning and networking value is high, I believe this is a worthwhile investment.

I'll follow up to talk through the details.

Thanks,
[Your name]`;

const SLACK_MESSAGE = `Hey — quick one: I'd like to attend THREAD 2026 (Paris, Oct 15). It's a free, one-day community conference for threat intel and cyber defense practitioners — no vendor pitches, hands-on labs, and a real chance to connect with people doing the same work we are. Only cost is travel/hotel. Happy to share more details if useful!`;

type Tab = "email" | "slack";

interface ConvinceYourBossModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConvinceYourBossModal = ({
  open,
  onClose,
}: ConvinceYourBossModalProps) => {
  const [tab, setTab] = useState<Tab>("email");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSlack, setCopiedSlack] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(
      `Subject: ${EMAIL_SUBJECT}\n\n${EMAIL_BODY}`,
    );
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySlack = async () => {
    await navigator.clipboard.writeText(SLACK_MESSAGE);
    setCopiedSlack(true);
    setTimeout(() => setCopiedSlack(false), 2000);
  };

  return (
    <Modal open={open} onClose={onClose} className="sm:max-w-2xl">
      {/* Header */}
      <div className="mb-6 pr-8">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          Convince Your Manager
        </p>
        <h2 className="font-display text-xl font-semibold leading-snug text-foreground">
          Ready-to-send templates
        </h2>
        <p className="mt-1.5 text-sm text-white/60">
          Copy and adapt the template that fits your situation.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-5 flex gap-2">
        <button
          onClick={() => setTab("email")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            tab === "email"
              ? "bg-cyan text-ink"
              : "border border-white/20 text-white/60 hover:border-cyan/50 hover:text-white"
          }`}
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          Email
        </button>
        <button
          onClick={() => setTab("slack")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            tab === "slack"
              ? "bg-cyan text-ink"
              : "border border-white/20 text-white/60 hover:border-cyan/50 hover:text-white"
          }`}
        >
          <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
          Slack
        </button>
      </div>

      {/* Email template */}
      {tab === "email" && (
        <div>
          <div className="mb-3 rounded-xl border border-white/10 bg-background/50 p-4">
            <p className="mb-3 text-xs text-white/40">
              <span className="font-semibold text-white/60">Subject:</span>{" "}
              {EMAIL_SUBJECT}
            </p>
            <pre className="whitespace-pre-wrap font-sans text-[0.85rem] leading-relaxed text-white/80">
              {EMAIL_BODY}
            </pre>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyEmail}
            className="gap-2"
          >
            {copiedEmail ? (
              <>
                <Check className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                Copy email
              </>
            )}
          </Button>
        </div>
      )}

      {/* Slack template */}
      {tab === "slack" && (
        <div>
          <div className="mb-3 rounded-xl border border-white/10 bg-background/50 p-4">
            <pre className="whitespace-pre-wrap font-sans text-[0.85rem] leading-relaxed text-white/80">
              {SLACK_MESSAGE}
            </pre>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopySlack}
            className="gap-2"
          >
            {copiedSlack ? (
              <>
                <Check className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                Copy Slack message
              </>
            )}
          </Button>
        </div>
      )}
    </Modal>
  );
};
