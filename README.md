# YOLO Solutions — Website

Marketing site for YOLO Solutions, a web and software development agency (websites, e-commerce,
web & mobile apps, UI/UX, automation).
Built with React + Vite + TypeScript + Tailwind CSS + React Router + Framer Motion + Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build & deploy

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

Output goes to `dist/`. `netlify.toml` configures the Netlify deploy (build command, publish
directory, SPA fallback redirect, security headers and long-term caching for hashed assets).

## Where to edit content

All copy lives in `src/data/`, so you rarely need to touch components:

| File | Controls |
| --- | --- |
| `site.ts` | Email, phone, WhatsApp, Instagram, founding year, project count, nav links |
| `services.ts` | The 8 services (home grid + Services page) |
| `portfolio.ts` | Projects shown on Home and Our Work (add a screenshot to `public/projects/`) |
| `process.ts` | The 6-step process |
| `faq.ts` | FAQ entries |
| `techstack.ts` | Technology groups and the scrolling strip under the hero |

## Contact form

The form posts to **Netlify Forms** (form name `contact`, with a honeypot field). The static copy of
the form in `index.html` must list the same field names as `ContactForm.tsx`
(`name`, `business`, `email`, `phone`, `service`, `message`, `bot-field`).

## Brand tokens

Defined in `tailwind.config.ts`, sampled from the logo: `brand` (logo blue `#004AAD`),
`gold` (logo gold `#FFBD59`) and `ink` (blue-tinted neutrals). Logo files in `public/`:
`logo.png` (original), `logo-mark.png` (tight crop for light backgrounds), `logo-light.png`
(for dark backgrounds).

## Project structure

```
src/
  components/
    icons/       Logo
    layout/      Navbar, Footer, WhatsApp button, scroll handling
    sections/    Hero, services, work, process, tech stack, FAQ, CTA, contact form ...
    ui/          Button, Reveal (scroll animation), SectionHeading, Accordion, Container
  data/          Content (see table above)
  hooks/         usePageMeta (per-page title + description)
  pages/         Home, Services, Portfolio, About, Contact, NotFound
```
