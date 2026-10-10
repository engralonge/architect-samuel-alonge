# Phase 3 review

Branch: nextjs-rebuild. Main and production remain unchanged. Phase 4 is not started.

## Completed

- Static /projects/dunamis-glory-dome route from data/site.js with generateStaticParams, project metadata, canonical URL and Open Graph image.
- Full-width project header, native-sized approved image, location meta row, overlapping Key Facts, existing approved summary and project-specific enquiry CTA.
- Unknown year, client, status, floor area and role are omitted. Specifications and Credits components render only populated approved label/value entries. No invented attribution or visible TODOs.
- Native full-screen dialog lightbox: all three approved images, previous/next buttons, arrow keys, Escape, focus containment/return and background scroll locking. Images remain at or below native dimensions.
- Related-projects strip is data-driven and omitted while there is only one project; no fictitious related work.
- Hero, Work and portfolio cards now link to the detail route.
- Make an enquiry opens /?project=dunamis-glory-dome#contact, prefills the worship project type, and includes the project reference in prepared email/WhatsApp drafts.
- One contact form remains at /#contact; /contact deliberately redirects there per the approved Phase 1 correction. No duplicate contact page/form.
- Underline-style form, verified direct contact icon links, footer consultation CTA and social link. No map or office address until verified.
- No additional dependencies in Phase 3.

## Review at 375, 768 and 1280px

1. Open /projects. Only All and Worship filters should be shown. Open the Glory Dome card.
2. Check title, Abuja location, approved photography and Key Facts. The photo is intentionally not stretched full-screen. Missing fields have no blank labels or TODOs.
3. Open each gallery thumbnail. Use left/right keys and buttons. Escape or Close must return focus to the opening thumbnail. Tab must stay in the lightbox while it is open. At smaller heights the dialog can scroll without clipping controls.
4. Click Make an enquiry. The single homepage form should select Worship or assembly building and show Dunamis Glory Dome as the reference. Enter a brief and inspect the email/WhatsApp draft before sending.
5. Follow footer contact links and Start a consultation; verify /contact redirects to /#contact. Check Work from the menu: the FLAGSHIP PROOF POINT eyebrow should be visible beneath the header, without a pointer-focus box.
6. Inspect the favicon and apple icon. Both derive from the supplied legacy Crystal Stairs logo; replace with full-resolution artwork when available.

## Verification

- npm run build and npm run lint pass.
- Browser screenshots/geometry checks at 375, 768 and 1280px: no horizontal overflow or visible TODOs; detail images at or below native dimensions; one contact form.
- Lightbox keyboard arrows, Escape, close button and focus return tested. Project-to-form prefill tested in the browser.
- scripts/verify-phase3.mjs verifies project 200, unknown slug 404, icons 200, /contact 307 redirect and properly encoded project-reference email/WhatsApp drafts. Run with npm run start -- --port 3012 in one terminal, then node scripts/verify-phase3.mjs in another. TEST_SITE_URL can select a different running host.
- No enquiry was sent and no inbox receipt is claimed. Specifications, Credits and related-projects positive-content views remain untested with real content because none has been supplied.
- Lighthouse targets, complete reduced-motion audit and final accessibility/performance polish remain Phase 4 work.

## Remaining TODOs (code/docs only)

1. Owner verification of retained Award-level and 100,000+ seat claims.
2. Samuel's exact Glory Dome role and engineer/contractor credits.
3. Completion year, client attribution, project status, floor area, approved narrative, specifications and image captions.
4. High-resolution Glory Dome originals for full-bleed/retina photography. Current sources are 721-723px wide and intentionally capped; CSS/image optimization cannot restore missing detail.
5. Full-resolution Crystal Stairs logo artwork. Current icon source is the preserved 150px cropped logo, used as requested.
6. Additional verified projects and licensed photography before enabling more sector filters or related work.
7. Rights, identities, captions and attribution for the eight archived Instagram photographs; they remain unpublished.
8. Approved selected visual-language images and captions.
9. Verified office address and map location.
10. Owner-approved inbox provider, delivery protection and a received test message. Email/WhatsApp drafts remain the approved interim behavior.
11. Genuine articles for Phase 4, or remove Insights navigation until publication; it currently points to the existing advisory section.

No automatic merging or promotion to production is authorized.
