import { siteSettings } from "./siteSettings";
import { agendaTrack, agendaSettings } from "./agendaTrack";
import { pageSections } from "./pageSections";
import { sponsor, sponsorshipSettings } from "./sponsors";
import { resource } from "./resource";

export const schemaTypes = [
  // Singletons
  siteSettings,
  agendaSettings,
  pageSections,
  sponsorshipSettings,
  // List documents
  agendaTrack,
  sponsor,
  resource,
];
