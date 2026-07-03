# THREAD — Powered by Filigran

Official website of **THREAD**, Filigran's annual conference for the threat
intelligence and cyber defense community.

**Live at [thread.filigran.io](https://thread.filigran.io/)** — October 15, 2026,
Les Jardins de Saint-Dominique, Paris.

## Editing the content (no coding required)

All the text of the website lives in three files under [`src/content/`](src/content/).
Edit the text between quotes (`"..."`), commit to `main`, and the site redeploys
automatically in about a minute.

| File | What it contains |
| --- | --- |
| [`src/content/site.ts`](src/content/site.ts) | Event name, date, venue, countdown, key figures, footer links, contact email |
| [`src/content/sections.ts`](src/content/sections.ts) | "Why THREAD" story, audiences, the five zones, speakers, Community Zone experiences |
| [`src/content/agenda.ts`](src/content/agenda.ts) | The full agenda, track by track (instructions at the top of the file) |

Each file starts with a comment block explaining exactly how to edit it.
You can do this entirely from the GitHub web interface: open the file, click the
pencil icon, edit, and commit.

## Tech stack

Same stack and design system as [filigran.io](https://filigran.io):

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with the Filigran design tokens (Sora font, dark navy, cyan accent)
- [lucide-react](https://lucide.dev/) icons

## Development

```bash
npm install
npm run dev        # local dev server on http://localhost:8080
npm run build      # typecheck + production build to dist/
npm run preview    # preview the production build
```

## Deployment

Every push to `main` triggers the [Deploy to GitHub Pages](.github/workflows/deploy.yml)
workflow: build with Node 20, upload the `dist/` artifact, deploy to GitHub Pages.
The custom domain (`thread.filigran.io`) is configured in the repository Pages settings.
