/** Small "ball of yarn" mark used next to the THREAD wordmark. */
export const ThreadKnot = ({ className = "h-9 w-9" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.4" opacity=".35" />
    <path d="M6 24C12 12 28 10 34 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 29C16 20 30 22 33 26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
    <path d="M11 33c8-5 16-3 21-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".45" />
    <path d="M34 18c2 6-1 10-1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
