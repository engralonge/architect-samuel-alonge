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
- Replace placeholder email and phone comments in `components/Footer.jsx` and `app/contact/page.jsx` with verified details.
- Replace placeholder social links in `data/site.js` when official links are confirmed.
- Connect `ContactForm.jsx` to email, WhatsApp, CRM, or a real form handler before production use.

## Install

```bash
npm install
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
npm run start
```
