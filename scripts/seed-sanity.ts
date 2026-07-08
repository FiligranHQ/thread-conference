/**
 * seed-sanity.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * One-shot migration: reads the existing hardcoded content from src/content/
 * and creates / replaces all Sanity documents so the Studio is immediately
 * populated with the current website data.
 *
 * Run this ONCE after you have created your Sanity project and before you
 * activate the Sanity integration in GitHub (i.e. before setting the
 * SANITY_PROJECT_ID secret in the repo).
 *
 * Required environment variables:
 *   SANITY_PROJECT_ID   your Sanity project ID
 *   SANITY_DATASET      dataset name (default: "production")
 *   SANITY_TOKEN        an Editor or Administrator API token (needs write access)
 *
 * Run:
 *   npm run seed-sanity
 *
 * The script is idempotent — running it again will overwrite documents with
 * the same content. It never deletes existing documents.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { createClient } from "@sanity/client";

// ─── Source content (the current hardcoded website data) ─────────────────────

import { event, glance, glanceNote, venue, register, footerLinks, footerText } from "../src/content/site.js";
import { why, audiences, zones, speakers, communityExperiences } from "../src/content/sections.js";
import { agendaIntro, agendaTracks } from "../src/content/agenda.js";
import { resources } from "../src/content/resources.js";
import { sponsorship, sponsors } from "../src/content/sponsors.js";

// ─── Sanity client ────────────────────────────────────────────────────────────

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET ?? "production";
const token = process.env.SANITY_TOKEN;

if (!projectId) {
  console.error("✗  SANITY_PROJECT_ID is required. Set it as an environment variable.");
  process.exit(1);
}
if (!token) {
  console.error("✗  SANITY_TOKEN is required (needs write access — use an Editor or Administrator token).");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Upsert a document by its _id (createOrReplace). */
async function upsert(doc: Record<string, unknown>): Promise<void> {
  const result = await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
  console.log(`  ✓  ${result._type} (${result._id})`);
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

console.log(`\nSeeding Sanity (project: ${projectId}, dataset: ${dataset})…\n`);

// ── 1. siteSettings (singleton) ───────────────────────────────────────────────
await upsert({
  _id: "siteSettings",
  _type: "siteSettings",
  event,
  glance: glance.map((item) => ({ ...item, _type: "object", _key: item.icon })),
  glanceNote,
  venue,
  register,
  footerLinks: {
    filigran: footerLinks.filigran.map((l, i) => ({ ...l, _key: `filigran-${i}` })),
    community: footerLinks.community.map((l, i) => ({ ...l, _key: `community-${i}` })),
  },
  footerText: {
    description: footerText.description,
    filigree: footerText.filigree,
    // copyright is generated at build time from the current year — not stored in Sanity
  },
  agendaIntro,
});

// ── 2. pageContent (singleton) ────────────────────────────────────────────────
await upsert({
  _id: "pageContent",
  _type: "pageContent",
  why: {
    ...why,
    paragraphs: why.paragraphs.map((p, i) => ({ _type: "text", _key: `p-${i}`, value: p })),
    tags: why.tags.map((t, i) => ({ _type: "string", _key: `t-${i}`, value: t })),
  },
  audiences: {
    ...audiences,
    cards: audiences.cards.map((card, i) => ({
      ...card,
      _key: `card-${i}`,
      paragraphs: card.paragraphs.map((p, j) => ({ _type: "text", _key: `p-${j}`, value: p })),
    })),
  },
  zones: {
    ...zones,
    cards: zones.cards.map((card, i) => ({ ...card, _key: `zone-${i}` })),
  },
  speakers: {
    ...speakers,
    cards: speakers.cards.map((card, i) => ({ ...card, _key: `speaker-${i}` })),
  },
  communityExperiences: communityExperiences.map((exp, i) => ({
    ...exp,
    _key: `exp-${i}`,
  })),
});

// ── 3. agendaTrack (one document per track) ───────────────────────────────────
for (const [order, track] of agendaTracks.entries()) {
  await upsert({
    _id: `agendaTrack-${track.id}`,
    _type: "agendaTrack",
    trackId: track.id,
    label: track.label,
    order,
    sessions: track.sessions.map((session, i) => ({
      ...session,
      _key: `session-${i}`,
      locations: session.locations.map((loc, j) => ({ _type: "string", _key: `loc-${j}`, value: loc })),
    })),
  });
}

// ── 4. resource (one document per item) ───────────────────────────────────────
for (const [order, resource] of resources.entries()) {
  const slug = resource.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 60);
  await upsert({
    _id: `resource-${slug}`,
    _type: "resource",
    ...resource,
    order,
  });
}

// ── 5. sponsorshipConfig (singleton) ──────────────────────────────────────────
await upsert({
  _id: "sponsorshipConfig",
  _type: "sponsorshipConfig",
  show: sponsors.show,
  kicker: sponsors.kicker,
  title: sponsors.title,
  sponsorship: {
    ...sponsorship,
    tiers: sponsorship.tiers.map((tier, i) => ({ ...tier, _key: `tier-${i}` })),
  },
});

// ── 6. sponsor (one document per logo) ────────────────────────────────────────
if (sponsors.items.length === 0) {
  console.log("  ℹ  No sponsors yet — skipping sponsor documents.");
} else {
  for (const [order, sponsor] of sponsors.items.entries()) {
    const slug = sponsor.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    await upsert({
      _id: `sponsor-${slug}`,
      _type: "sponsor",
      ...sponsor,
      order,
    });
  }
}

console.log("\nAll documents seeded successfully.\n");
console.log("Next steps:");
console.log("  1. Open your Sanity Studio and verify the content looks correct.");
console.log("  2. Add SANITY_PROJECT_ID, SANITY_DATASET and SANITY_TOKEN as GitHub repository secrets.");
console.log("  3. Trigger a deploy — the site will now be driven by Sanity.\n");
