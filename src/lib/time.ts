/**
 * Formats a "H:MM AM/PM–H:MM AM/PM" time range for display:
 * - Drops the duplicate meridiem when start and end share one
 *   (e.g. "8:30 AM–9:30 AM" -> "8:30–9:30 AM").
 * - Inserts a non-breaking space before each remaining meridiem so it
 *   never separates from its number when the text wraps.
 *
 * If the input doesn't match the expected pattern, it is returned as-is.
 */
export const formatAgendaTime = (range: string): string => {
  const match = range.match(
    /^(\d{1,2}:\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}:\d{2})\s*(AM|PM)$/i,
  );

  if (!match) {
    return range;
  }

  const [, startTime, startMeridiem, endTime, endMeridiem] = match;
  const nbsp = "\u00A0";

  if (startMeridiem.toUpperCase() === endMeridiem.toUpperCase()) {
    return `${startTime}–${endTime}${nbsp}${endMeridiem.toUpperCase()}`;
  }

  return `${startTime}${nbsp}${startMeridiem.toUpperCase()}–${endTime}${nbsp}${endMeridiem.toUpperCase()}`;
};
