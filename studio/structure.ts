import { type StructureResolver } from "sanity/structure";

/** Singleton document types — only one instance should ever exist. */
const singletons = ["siteSettings", "agendaSettings", "pageSections", "sponsorshipSettings"];

/**
 * Custom structure that collapses singleton documents into top-level items
 * (no "Create new" button) and keeps list documents under their own section.
 */
export const singletonStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ── Singletons ──────────────────────────────────────────────
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      S.listItem()
        .title("Page sections")
        .id("pageSections")
        .child(S.document().schemaType("pageSections").documentId("pageSections")),

      S.listItem()
        .title("Agenda settings")
        .id("agendaSettings")
        .child(S.document().schemaType("agendaSettings").documentId("agendaSettings")),

      S.listItem()
        .title("Sponsorship settings")
        .id("sponsorshipSettings")
        .child(S.document().schemaType("sponsorshipSettings").documentId("sponsorshipSettings")),

      S.divider(),

      // ── List documents ──────────────────────────────────────────
      S.documentTypeListItem("agendaTrack").title("Agenda tracks"),
      S.documentTypeListItem("sponsor").title("Sponsors"),
      S.documentTypeListItem("resource").title("Resources ribbon"),
    ])
    // Hide singleton types from the "New document" menu so editors can't
    // accidentally create duplicates.
    .filter((item) => {
      if ("getSchemaType" in item && typeof (item as any).getSchemaType === "function") {
        const typeName = (item as any).getSchemaType()?.name;
        if (typeName && singletons.includes(typeName)) return false;
      }
      return true;
    });
