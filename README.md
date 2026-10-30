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

## Brand tokens & logo

Colours are defined in `tailwind.config.ts`, sampled from the logo: `brand` (logo blue `#004AAD`),
`gold` (logo gold `#FFBD59`) and `ink` (blue-tinted neutrals).

The logo is a true vector, rebuilt from the original 500px `logo.png` (`tools/build_logo.py`):

- `src/components/icons/Logo.tsx`: the logo as inline SVG (`tone="color"` for white surfaces,
  `tone="light"` for navy; `animated` plays the assemble animation used by the splash screen).
- `public/logo.svg`, `public/logo-light.svg`: standalone vectors for any use.
- `public/logo-4k.png`, `public/logo-light-4k.png`: 3840px transparent PNGs for print, decks and social.
- `public/favicon.svg` plus PNG icons, and `public/og-image.png` for link previews.

## Motion & interaction

Splash intro (once per session), rotating hero word, magnetic buttons, pointer parallax, scroll progress
bar, back-to-top ring, word-by-word headings, spotlight cards, 3D-tilt project previews and count-ups.
All of it respects `prefers-reduced-motion`, and pointer effects are skipped on touch devices.

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
