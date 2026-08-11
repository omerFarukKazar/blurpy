# blurpy.app

Landing page for Blurpy. Deployed to GitHub Pages at https://blurpy.app.

## Stack (required)

- **Next.js** — App Router
- **Tailwind CSS**
- **shadcn/ui** — components live in `components/ui/`, added via `npx shadcn@latest add <name>`
- **lucide-react** — the only icon set; don't pull in another

Don't swap these out or add a competing UI/icon library without asking.

## GitHub Pages constraint

Pages serves static files only — there is no Node runtime. So:

- `next.config.js` must set `output: 'export'`
- No server components doing runtime work, no API routes, no middleware, no ISR/SSR
- `images: { unoptimized: true }` (the default image optimizer needs a server)
- Deploy the `out/` directory, not `.next/`

## Files that must not be deleted

- `CNAME` — holds `blurpy.app`; without it Pages drops the custom domain on every deploy
- `.nojekyll` — stops Jekyll from eating `_next/`

## Current state

Placeholder `index.html` at the root — plain HTML, no build step yet. It gets replaced when the Next.js app lands.
