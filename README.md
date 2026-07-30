# Stocksy — Privacy Policy (React + Tailwind CSS v4)

A standalone privacy-policy page for the Stocksy app, built with React (Vite) and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional, to test the production build locally
```

The static output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy, then add your custom domain in the project's **Settings → Domains** tab and point your DNS (CNAME/A record, as Vercel instructs) at it.

Once deployed, your privacy policy will be live at something like:

```
https://yourdomain.com/
```

or, if you deploy it as a sub-path/subdomain (e.g. `privacy.yourdomain.com` or `yourdomain.com/privacy`), use that exact URL in the **Play Console → App content → Privacy policy** field.

## Editing the content

All the policy text lives in `src/App.jsx` as plain JSX — edit the relevant section directly and update the "Last updated" date near the top of the same file (in the header section) whenever you make a change.

## Tech

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Fonts: Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (labels/data) — loaded from Google Fonts in `src/index.css`
