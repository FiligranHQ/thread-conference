import { useState } from "react";
import { Check, Copy, Mail, MessageSquare } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const EMAIL_SUBJECT = "Requesting approval to attend THREAD, Paris, October 15";

const EMAIL_BODY = `Hi [Manager Name],

I'd like your approval to attend **THREAD**, Filigran's new conference for the threat intelligence and cyber defense community, on **Thursday, October 15** in **Paris**.

It's practitioner-first, not a sales event: hands-on workshops, a CTF/adversarial simulation track, and peer conversations with other CTI, SOC, and security teams. I'd expect to come back with practical workflows we can use and a stronger read on how other teams are operationalizing threat intel.

**Logistics:** one day, in person, October 15. Note that travel/accommodation aren't covered by the event, so [I'll need travel budget approval / this isn't an issue since I'm local].

Happy to share a recap with the team afterward. Let me know if you need more detail.

Thanks,
[Your Name]`;

const SLACK_MESSAGE = `Hey [Manager Name] 👋 can I get your okay to attend **THREAD** on **Oct 15 in Paris**? One day, practitioner-first conference on threat intel/cyber defense (not a sales event): hands-on labs, a CTF track, peer conversations with other CTI/SOC folks.

I'd come back with practical workflows and a broader network. Heads up, travel/hotel isn't covered by the event, will flag separately if relevant. Let me know if you need anything to approve 🙏`;

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
