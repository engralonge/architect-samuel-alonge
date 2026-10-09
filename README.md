# Architect Samuel Alonge / Crystal Stairs Ltd Frontend

A polished, responsive Next.js + React + Tailwind CSS architecture-consulting website for Architect Samuel Alonge and Crystal Stairs Ltd.

The layout keeps the refined architecture-firm feel of the previous ACCL-inspired build, but the identity, copy, services, project focus, and CTA structure now reflect Samuel Alonge's premium personal consulting brand.

## Sections

- Hero
- Profile
- Insights & Advisory
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
  people/page.jsx
  contact/page.jsx
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
- Fill `contactDetails` in `data/site.js` with verified email, phone, WhatsApp and address.
- Only add official social links; missing social channels have no rendered link.
- Connect `app/api/contact/route.js` to the approved inbox. It currently validates requests
  and returns 503 without storing or sending anything. Success UI must only follow delivery.
- Read `docs/phase-1-review.md` for the asset inventory, every content TODO and review steps.
- `public/legacy/assets/` contains recovered images for approval, not a verified portfolio.
  The archived profile image is a cropped logo, not a portrait.
- The current 2200px Unsplash hero is clearly labelled illustrative. Replace it with
  approved project photography; do not use unrelated stock as a Glory Dome image.
- Production remains on `main`; review work is on `nextjs-rebuild`. `vercel.json`
  supplies the Next.js build settings for branch previews. Do not merge until approved.

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
