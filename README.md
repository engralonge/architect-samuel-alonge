# Architect Samuel Alonge / Crystal Stairs Ltd Frontend

A polished, responsive Next.js + React + Tailwind CSS architecture-consulting website for Architect Samuel Alonge and Crystal Stairs Ltd.

The layout keeps the refined architecture-firm feel of the previous ACCL-inspired build, but the identity, copy, services, project focus, and CTA structure now reflect Samuel Alonge's premium personal consulting brand.

## Sections

- Hero
- Profile
- Approach
- Flagship Proof Point: Dunamis Glory Dome
- Project Sectors
- Services
- Selected Visual Language
- Process
- Contact / Consultation

## File Structure

```text
app/
  layout.jsx
  page.jsx
  globals.css
  about-us/page.jsx
  projects/page.jsx
  projects/[slug]/page.jsx
  people/page.jsx
  contact/page.jsx
  robots.txt/route.js
  sitemap.xml/route.js
components/
  Header.jsx
  Footer.jsx
  Hero.jsx
  ProjectGrid.jsx
  ProjectCard.jsx
  AboutSection.jsx
  PeopleSection.jsx
  ContactForm.jsx
data/
  site.js
```

## Editing Notes

- Replace placeholder image URLs in `data/site.js` with licensed Samuel Alonge / Crystal Stairs Ltd project photography.
- Email, phone and WhatsApp in `data/site.js` are verified. Office address is still pending.
- Only add official social links; missing social channels have no rendered link.
- Connect `app/api/contact/route.js` to the approved inbox. It currently validates requests
  and returns 503 without storing or sending anything. Success UI must only follow delivery.
- Read `docs/phase-4-review.md` for remaining content TODOs and `docs/production-release.md` for release checks.
- `public/legacy/assets/` contains recovered images for approval, not a verified portfolio.
  The archived profile image is a cropped logo, not a portrait.
- Home, Work and Projects use the three owner-approved Glory Dome views; the supplied
  portrait is in `public/images/portrait_Sam.png`. Higher-resolution project originals are pending.
- `/about-us` (Profile) and `/people` (Studio) are retained standalone pages, not `/profile`
  or `/studio`. Primary navigation intentionally links Profile to `/#profile`.
- Production deploys from `main`; preview work uses `nextjs-rebuild`. The owner approved
  the Phase 4 release. Preview robots are noindex/nofollow; production is indexable.
- All canonicals and social metadata use the production domain, including the 1200x630
  PNG share image. Regenerate it with `node scripts/generate-share-image.mjs` using
  the existing fonts and supplied portrait/logo; this requires access to Google Fonts.

## Install

```bash
npm ci
```

## Run Locally

```bash
npm run dev
```

Then open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run lint
npm run start
```
