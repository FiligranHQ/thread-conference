import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { register } from "@/content/site";
import { Modal } from "@/components/ui/Modal";
import { HubSpotForm } from "@/components/HubSpotForm";

interface RegisterModalContextValue {
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
}

const RegisterModalContext = createContext<RegisterModalContextValue | null>(null);

/**
 * Provides a single, app-wide HubSpot registration modal so any "Request
 * your seat" CTA (Hero, Navigation, Register section, ...) can open the
 * form directly instead of scrolling to a section.
 */
export const RegisterModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      openRegisterModal: () => setOpen(true),
      closeRegisterModal: () => setOpen(false),
    }),
    [],
  );

  return (
    <RegisterModalContext.Provider value={value}>
      {children}

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="mb-6">
          <p className="mb-1 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            {register.kicker}
          </p>
          <h2 className="font-display text-xl font-bold leading-snug md:text-2xl">
            {register.title}
          </h2>
        </div>
        <HubSpotForm />
      </Modal>
    </RegisterModalContext.Provider>
  );
};

export const useRegisterModal = () => {
  const ctx = useContext(RegisterModalContext);
  if (!ctx) {
    throw new Error("useRegisterModal must be used within a RegisterModalProvider");
  }
  return ctx;
};
