/**
 * Formats a "H:MM AM/PM–H:MM AM/PM" time range for display as the start
 * time only (e.g. "8:30 AM–9:30 AM" -> "8:30 AM"), with a non-breaking
 * space before the meridiem so it never separates from its number.
 *
 * If the input doesn't match the expected pattern, it is returned as-is.
 */
export const formatAgendaStartTime = (range: string): string => {
  const match = range.match(/^(\d{1,2}:\d{2})\s*(AM|PM)/i);

  if (!match) {
    return range;
  }

  const [, startTime, startMeridiem] = match;
  const nbsp = "\u00A0";

  return `${startTime}${nbsp}${startMeridiem.toUpperCase()}`;
};
