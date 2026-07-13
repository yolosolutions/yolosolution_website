# YOLO Solutions — Website

Production-ready marketing site for YOLO Solutions, a web development agency.
Built with React + Vite + TypeScript + Tailwind CSS + React Router + Framer Motion + Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

Output goes to `dist/`. `netlify.toml` is already configured for a Netlify
deploy (build command `npm run build`, publish directory `dist`, with a
catch-all redirect so React Router routes work on refresh/direct link).

## Before you launch — things to check

1. **Contact form backend** — the form currently just shows a success state
   on submit (`src/components/sections/ContactForm.tsx`). Wire up
   `handleSubmit` to Netlify Forms, Formspree, or your own serverless
   function to actually receive submissions.
2. **Instagram handle** — `@yolosolutions` is still a placeholder in
   `src/components/layout/Footer.tsx` and
   `src/components/sections/ContactForm.tsx`. Update it once your account is live.
3. **Portfolio projects** — update `src/data/portfolio.ts` with your real
   project names, descriptions, live URLs, and screenshots (swap the
   gradient placeholder in `PortfolioGrid.tsx` for real screenshots once you
   have them).
4. **Testimonials** — `src/data/testimonials.ts` has placeholder quotes;
   swap in real client feedback as it comes in.

Logo (`public/logo.png`), email (`yolosolutions01@gmail.com`), WhatsApp/phone
(`+91 63792 93492`) are already wired in across the navbar, footer, contact
page, and favicon.

## Project structure

```
src/
  components/
    icons/        Logo mark
    layout/        Navbar, Footer, WhatsApp button, scroll restoration
    sections/      Page sections (Hero, Services, Portfolio, Contact, FAQ, ...)
    ui/            Reusable primitives (Button, Card, Accordion, Container...)
  data/            Content arrays (services, portfolio, process, FAQ, testimonials)
  pages/           Route-level pages (Home, Services, Portfolio, About, Contact)
  App.tsx          Routing + layout shell
  main.tsx         App entry point
```

## Design tokens

Brand colors, fonts, radii, and shadows are defined centrally in
`tailwind.config.ts` — update them there to restyle the whole site
consistently (colors: `royal` = brand blue, `gold` = brand gold, `charcoal`
= text/neutral scale).
