import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { hubspotForm } from "@/content/site";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const HS_SCRIPT_ID = "hs-forms-embed-script";
const HS_FORM_TARGET = "hs-form-target";

export const HubSpotForm = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const initForm = () => {
      if (cancelled || !window.hbspt) return;
      window.hbspt.forms.create({
        region: hubspotForm.region,
        portalId: hubspotForm.portalId,
        formId: hubspotForm.formId,
        target: `#${HS_FORM_TARGET}`,
        onFormReady: () => {
          const container = document.getElementById(HS_FORM_TARGET);
          const form = container?.querySelector("form");
          const submitButton = form?.querySelector<HTMLInputElement | HTMLButtonElement>(
            'input[type="submit"], button[type="submit"], input.hs-button, button.hs-button',
          );
          let submitTypeFixed = false;

          if (submitButton instanceof HTMLInputElement && submitButton.type !== "submit") {
            submitButton.type = "submit";
            submitTypeFixed = true;
          }
          if (submitButton instanceof HTMLButtonElement && submitButton.type !== "submit") {
            submitButton.type = "submit";
            submitTypeFixed = true;
          }

          if (submitTypeFixed && form && submitButton) {
            submitButton.addEventListener("click", () => form.requestSubmit(), { once: true });
          }

          if (!cancelled) setLoaded(true);
        },
      });
    };

    // Script tag may already exist (React StrictMode mounts effects twice).
    // If hbspt is ready, call initForm directly; if the script is still
    // loading, attach a load listener so we don't miss the event.
    let scriptEl = document.getElementById(HS_SCRIPT_ID) as HTMLScriptElement | null;
    if (scriptEl) {
      if (window.hbspt) {
        initForm();
      } else {
        scriptEl.addEventListener("load", initForm);
      }
    } else {
      scriptEl = document.createElement("script");
      scriptEl.id = HS_SCRIPT_ID;
      scriptEl.src = "//js.hsforms.net/forms/embed/v2.js";
      scriptEl.charset = "utf-8";
      scriptEl.addEventListener("load", initForm);
      document.head.appendChild(scriptEl);
    }

    const capturedScript = scriptEl;
    return () => {
      cancelled = true;
      capturedScript.removeEventListener("load", initForm);
    };
  }, []);

  return (
    <div className="text-left">
      {/* Skeleton shown while the form script is loading */}
      <div
        aria-hidden="true"
        className={cn(
          "space-y-5 transition-opacity duration-500",
          loaded ? "pointer-events-none absolute opacity-0" : "opacity-100",
        )}
      >
        {[160, 130, 160, 130].map((w, i) => (
          <div key={i} className="space-y-2">
            <div
              className="h-3 animate-pulse rounded bg-border/60"
              style={{ width: `${w}px` }}
            />
            <div className="h-10 w-full animate-pulse rounded-lg bg-border/40" />
          </div>
        ))}
        <div className="h-11 w-40 animate-pulse rounded-full bg-cyan/20" />
      </div>

      {/* HubSpot injects the form markup into this element */}
      <div
        id={HS_FORM_TARGET}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
};
