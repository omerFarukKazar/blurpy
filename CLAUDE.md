@AGENTS.md

# blurpy.app

Landing page for Blurpy. Deployed to GitHub Pages at https://blurpy.app.

## Stack (required)

- **Next.js 16** — App Router, `src/` dir, TypeScript
- **Tailwind CSS v4** — configured via `src/app/globals.css`, no `tailwind.config`
- **shadcn/ui** — `radix-nova` style, components in `src/components/ui/`, added with
  `npx shadcn@latest add <name>`
- **lucide-react** — the only icon set; don't pull in another

Don't swap these out or add a competing UI/icon library without asking.

## GitHub Pages constraint

Pages serves static files only — there is no Node runtime. `next.config.ts` sets
`output: "export"`, so:

- No API routes, no middleware, no SSR/ISR, no server actions
- No dynamic server functions (`cookies()`, `headers()`, `searchParams` at request time)
- Server Components still work — they run at build time
- `images: { unoptimized: true }`; `next/image` optimization needs a server
- `trailingSlash: true`, so routes emit `/about/index.html`
- Build output is `out/`, not `.next/`

## Deploy

`.github/workflows/deploy.yml` builds on push to `main` and publishes `out/`.
Pages source is **GitHub Actions**, not a branch — don't switch it back to
branch-based serving or the Next build won't run.

## Files that must not be deleted

- `public/CNAME` — holds `blurpy.app`; without it Pages drops the custom domain on
  every deploy
- `public/.nojekyll` — stops Jekyll from eating `_next/`

## DNS

Cloudflare, four A records to GitHub's `185.199.10{8,9,10,11}.153` plus a `www`
CNAME. All **DNS only** (proxy off) — proxying breaks GitHub's certificate
issuance and renewal. Don't turn the orange cloud on.
