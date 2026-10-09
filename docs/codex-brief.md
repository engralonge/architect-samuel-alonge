# Codex brief: Upgrade Architect Samuel Alonge / Crystal Stairs Ltd site

Stack: Next.js 15 + React 19 + Tailwind 3. All content lives in `data/site.js`. Keep the current palette (cream, charcoal, terracotta, gold) and the serif + Inter typography.
Before starting: confirm which folder or repo is actually deployed to architect-samuel-alonge.vercel.app. The local folder and the live site don't match.

## 1. Must fix (current issues)
- Contact: add a real email (mailto), a phone number (tel) and a WhatsApp link. Make ContactForm submit to a real inbox (e.g. Formspree, Resend or a Next.js route handler) with success and error states.
- Remove internal research copy ("Instagram followers at research snapshot", "posts analyzed", and similar).
- Use only licensed or own photography. Add a real portrait of Samuel. Fix logo alt text.
- Header: solid or blurred background once the page scrolls (it currently sits over the text). Shrink it on scroll.
- Mobile: the hero name card must not cover the CTA below 720px. Hide or reflow it.
- Hero image: use a source of 2000px or more. Use next/image, WebP/AVIF and lazy loading. Get the image payload well under 1 MB.
- Scroll reveals: content must be visible even when users jump to a section (IntersectionObserver with a no-JS fallback; respect prefers-reduced-motion).
- Voice: use "I" throughout, or "we" for the practice throughout. Fix "Award-level Architectural Designs" capitalisation and placeholder contrast.

## 2. Features to borrow
- Hero (NBBJ / ACCL): full-screen slideshow of 3–5 real projects with segmented progress bars, a short serif headline, a "View project" button and a scroll cue. No heavy autoplay video.
- Navigation (ACCL / NBBJ): minimal header with a MENU button that opens a full-screen overlay (Profile, Projects, Services, Insights, Contact). Same pattern on mobile.
- Projects page (ACCL / ZHA / Gensler): `/projects` with filter pills (All, Worship, Residential, Commercial, Advisory), a project count, a mixed-size grid with title, location and tag, and "Show more".
- Project detail page `/projects/[slug]` (ZHA / NBBJ / ACCL):
  - full-bleed hero with a meta row (location, year, client, status)
  - "Key Facts" card overlapping the image (type, floor area, capacity, status)
  - collapsible Specifications and a Credits list (Samuel's role, engineers, contractor)
  - image gallery with a fullscreen lightbox
  - optional before/after slider for renovations
  - "Make an enquiry" button prefilled with the project type
  - related-projects strip
- Storytelling (NBBJ): large centred serif statement bands between sections, plus pillar tabs on the Profile page (Brief Intelligence, Asset Value, Human Experience).
- Insights (Gensler / NBBJ): either publish real articles (MDX at `/insights/[slug]`) or remove the nav item until there are posts.
- Contact (NBBJ / ACCL): short underline-style form (name, email or phone, "How can I help?" dropdown with the services, message) plus a direct email, phone and WhatsApp icon row and an embedded map of the office location.
- Footer (ACCL): address, phone, email, social icons, and a repeated "Start a consultation" CTA.

## 3. Skip
Gensler-scale stats, people carousels, long forms with reCAPTCHA, ZHA's dark low-contrast theme, and heavy video heroes.

## 4. Data model (data/site.js)
`projects: [{ slug, title, sector, location, year, client, status, role, keyFacts:{}, credits:[], images:[{src,alt}], summary, body }]`. Generate pages from it with generateStaticParams.

## 5. Acceptance
- Lighthouse mobile scores of 90+ for Performance, Accessibility and SEO.
- No layout overlap at 375, 768 and 1280px.
- The form delivers a test message.
- No placeholder text or "#" links remain.
- Per-page metadata and Open Graph tags, with JSON-LD kept.
