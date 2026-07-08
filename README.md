# THREAD — Powered by Filigran

Official website of **THREAD**, Filigran's annual conference for the threat
intelligence and cyber defense community.

**Live at [thread.filigran.io](https://thread.filigran.io/)** — October 15, 2026,
Les Jardins de Saint-Dominique, Paris.

---

## Editing the content

The site supports two parallel ways to edit content. Both work at the same time and
are designed to coexist.

### Option A — Directly in the repository (no CMS required)

All the text of the website lives in five files under [`src/content/`](src/content/).
Edit the text between quotes (`"..."`), commit to `main`, and the site redeploys
automatically in about a minute.

| File | What it contains |
| --- | --- |
| [`src/content/site.ts`](src/content/site.ts) | Event name, date, venue, countdown, key figures, footer links, contact email |
| [`src/content/sections.ts`](src/content/sections.ts) | "Why THREAD" story, audiences, the five zones, speakers, Community Zone experiences |
| [`src/content/agenda.ts`](src/content/agenda.ts) | The full agenda, track by track (instructions at the top of the file) |
| [`src/content/sponsors.ts`](src/content/sponsors.ts) | Sponsorship tier packages and the sponsor logo showcase |
| [`src/content/resources.ts`](src/content/resources.ts) | Scrolling resources ribbon below the hero |

Each file starts with a comment block explaining exactly how to edit it.
You can do this entirely from the GitHub web interface: open the file, click the
pencil icon, edit, and commit.

> **When the CMS is active**: the three Sanity secrets below must be set in the
> repository. In that case, content published in Sanity Studio takes precedence over
> these files at build time. See Option B.

### Option B — Sanity CMS (visual editor, no code required)

When the three repository secrets (`SANITY_PROJECT_ID`, `SANITY_DATASET`,
`SANITY_TOKEN`) are configured, a pre-build step fetches all content from Sanity and
the site is built from that data instead of the hardcoded files.

Editors log into the Sanity Studio, update speakers, agenda, sponsor logos and any
page copy, and click **Publish**. A webhook then triggers an automatic redeploy.

See [Setting up Sanity CMS](#setting-up-sanity-cms) below for full instructions.

---

## Managing the sponsors section

The sponsors section lives entirely in [`src/content/sponsors.ts`](src/content/sponsors.ts)
(or in the **Sponsorship settings** document in Sanity Studio).
It has two parts:

### Sponsorship packages

The `sponsorship` object holds the three tier cards ("Supporter", "Partner", "Premier").
Rename the `name` field, update `tagline` and `perks`, and reorder entries freely —
the page reflects your changes after the next deploy.

### Sponsor logo showcase

The logo grid is **hidden by default** and only appears once you switch it on.

**When editing via the repository:**

**Step 1 — Add the logo file**

Drop the logo into the `public/sponsors/` folder (create it if it doesn't exist yet).
SVG is preferred because it scales perfectly. Name it clearly, e.g. `acme-corp.svg`.

**Step 2 — Register the sponsor**

Open `src/content/sponsors.ts` and add an entry to the `sponsors.items` array:

```ts
{ name: "Acme Corp", logoPath: "/sponsors/acme-corp.svg", url: "https://acme.com", tier: "Premier" }
```

`tier` is optional but controls the display order (Premier → Partner → Supporter).

**Step 3 — Switch the section on**

In the same file, set `sponsors.show` to `true`.
While it is `false` the entire logo section is invisible — no empty grid, no layout shift.

**Step 4 — Commit to `main`**

The site redeploys automatically. No other code changes are needed.

**When using Sanity Studio:** upload logos directly in the **Sponsors** section and
toggle **Show sponsor logos** in **Sponsorship settings**.

---

## Setting up Sanity CMS

### Prerequisites

- A [Sanity account](https://www.sanity.io/) (free tier is sufficient)
- A Sanity project (create one at [sanity.io/manage](https://www.sanity.io/manage))

### 1 — Configure the Studio

```bash
cd studio
npm install
```

Copy `.env.example` to `.env.local` and fill in your project credentials:

```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

Start the Studio locally:

```bash
npm run dev   # opens http://localhost:3333
```

Deploy the Studio to Sanity's hosting (free, one command):

```bash
npm run deploy
```

The Studio will be available at `https://your-project.sanity.studio`.

### 2 — Add repository secrets

Go to **Settings → Secrets and variables → Actions** in this repository and add:

| Secret name | Value |
| --- | --- |
| `SANITY_PROJECT_ID` | Your Sanity project ID (e.g. `abc12def`) |
| `SANITY_DATASET` | Usually `production` |
| `SANITY_TOKEN` | A read-only API token (create at sanity.io/manage → API → Tokens) |

Once these are set, every push to `main` will fetch content from Sanity before building.

### 3 — Set up content in Sanity

Open the Studio and populate the documents:

- **Site settings** — event info, venue, footer
- **Page sections** — why THREAD, audiences, zones, speakers
- **Agenda settings** + **Agenda tracks** — the full day schedule
- **Sponsorship settings** + **Sponsors** — tier packages and logos
- **Resources ribbon** — blog posts / customer stories below the hero

### 4 — Configure the publish webhook (auto-redeploy)

To trigger a site rebuild whenever you publish content in the Studio:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → Webhooks**
2. Create a new webhook:
   - **URL**: `https://api.github.com/repos/FiligranHQ/thread-conference/dispatches`
   - **HTTP method**: POST
   - **Headers**: `Authorization: ****** `Content-Type: application/json`
   - **Payload**: `{"event_type": "sanity-publish"}`
   - **Trigger on**: Publish
3. The GitHub PAT needs the `repo` scope (or just `workflow` if using fine-grained tokens)

After this, publishing any document in the Studio automatically rebuilds and redeploys the site.

### Draft / preview mode

To preview draft content before publishing, set `SANITY_USE_DRAFTS=true` in the build
environment. The fetch script will switch to `perspective: 'previewDrafts'` and include
unpublished edits. Keep this off (`false` or unset) in the main production build.

---

## Tech stack

Same stack and design system as [filigran.io](https://filigran.io):

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with the Filigran design tokens (Sora font, dark navy, cyan accent)
- [lucide-react](https://lucide.dev/) icons
- [Sanity](https://www.sanity.io/) (optional CMS — site fully works without it)

## Development

```bash
npm install
npm run dev        # local dev server on http://localhost:8080
npm run build      # fetch CMS content (if configured) + typecheck + production build to dist/
npm run preview    # preview the production build
npm run typecheck  # TypeScript check only (no build)
```

**Local dev with CMS content:**

```bash
SANITY_PROJECT_ID=xxx SANITY_DATASET=production SANITY_TOKEN=xxx npm run build
```

Or run the fetch step alone to write `src/content/_generated/` files, then use `npm run dev`:

```bash
SANITY_PROJECT_ID=xxx SANITY_DATASET=production SANITY_TOKEN=xxx npm run fetch-content
npm run dev
```

## Deployment

Every push to `main` (and every Sanity publish, if the webhook is configured) triggers the
[Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow: fetch CMS content, build
with Node 20, upload the `dist/` artifact, deploy to GitHub Pages.
The custom domain (`thread.filigran.io`) is configured in the repository Pages settings.
