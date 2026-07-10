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
          if (!cancelled) setLoaded(true);
        },
      });
    };

    if (document.getElementById(HS_SCRIPT_ID)) {
      initForm();
    } else {
      const script = document.createElement("script");
      script.id = HS_SCRIPT_ID;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.onload = initForm;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div id="register-form" className="scroll-mt-28 mx-auto mt-4 max-w-xl">
      <div className="card-glass rounded-2xl p-8 text-left">
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
    </div>
  );
};
