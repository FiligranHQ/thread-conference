import { useEffect, useState } from "react";

export interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isPast: boolean;
}

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

/** Live countdown to the event date (updates every second). */
export function useCountdown(target: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}): CountdownParts {
  const targetTime = new Date(
    target.year,
    target.month - 1,
    target.day,
    target.hour,
    target.minute,
  ).getTime();

  const compute = (): CountdownParts => {
    const diff = targetTime - Date.now();
    if (diff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", isPast: true };
    }
    return {
      days: pad(Math.floor(diff / 86_400_000)),
      hours: pad(Math.floor(diff / 3_600_000) % 24),
      minutes: pad(Math.floor(diff / 60_000) % 60),
      seconds: pad(Math.floor(diff / 1_000) % 60),
      isPast: false,
    };
  };

  const [parts, setParts] = useState<CountdownParts>(compute);

  useEffect(() => {
    const interval = window.setInterval(() => setParts(compute()), 1_000);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetTime]);

  return parts;
}
