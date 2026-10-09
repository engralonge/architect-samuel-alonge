# Phase 2 review

Branch: nextjs-rebuild. Main and the production site remain unchanged.

## Completed

- Full-screen navigation on mobile and desktop, using native modal dialog focus containment, Escape, close button, focus return, scroll locking and a no-JS navigation fallback.
- Work retains its direct heading anchor with an 88px header offset. Projects is now discoverable in navigation and footer.
- Three-view Glory Dome hero with image crossfades, segmented progress, manual selectors, previous/next, play/pause, project link and profile scroll cue.
- Automatic advancement stops for reduced motion, page visibility, off-screen content, pointer hover and keyboard focus. Manual selection stops autoplay.
- All, Worship, Residential, Commercial and Advisory filters, live count, mixed-size grid and conditional Show more after six results.
- Only one verified project is published. The three slides are three views of that project. Empty sectors do not fabricate work.
- Tree-shaken lucide-react icons only; no carousel, animation or modal dependency.
- Existing verified phone/email/WhatsApp, portrait, approved Work images and email/WhatsApp form drafts retained.

## Review at 375, 768 and 1280px

1. Open the home page. Confirm that title, consultation buttons and slideshow controls do not overlap. Use each view selector and previous/next. Confirm manual selection pauses playback.
2. Open Menu. Tab and Shift+Tab within it; Escape closes it and returns focus to Menu. Select Work; the Glory Dome heading must be below the fixed header. On smaller heights the overlay scrolls rather than clipping links.
3. Open /projects. All and Worship show one project; other sectors show zero and a neutral empty state. Return to All, then open the project card (the flagship section until Phase 3).
4. Open /contact; it redirects to /#contact. Prepare a brief using each draft option and check every field in the email/WhatsApp app before sending. Draft preparation is not delivery.
5. Enable reduced motion in the operating system and reload: no automatic slide changes or animated transitions. Manual selectors still work.

## Verification

- npm run build and npm run lint pass.
- Browser screenshots and DOM checks at 375, 768 and 1280px; no horizontal overflow or visible TODO text.
- All five sector filters tested; manual slideshow selection and native menu Escape/focus return tested.
- Work anchor measured at 88px, beneath the approximately 61px scrolled header.
- Show more is implemented but is not displayed or browser-tested with the one-project real dataset.
- Reduced-motion behavior is implemented; a separate OS-level emulation and Lighthouse audit remain Phase 4 checks. No performance score is claimed yet.

## Remaining TODOs (code/docs only)

1. Verify the retained Award-level and 100,000+ seat claims.
2. Confirm Samuel's exact Glory Dome role and approved engineers/contractor credits.
3. Supply completion year, client attribution, project status, floor area, narrative and specifications.
4. Supply high-resolution Glory Dome originals. Responsive next/image variants cannot add detail to the existing 721-723px originals; native retina hero fidelity is still blocked on these files.
5. Supply additional verified portfolio projects and licensed photographs. Currently only Glory Dome is published.
6. Approve identities, captions, rights and attribution for the eight archived Instagram photographs and cropped logo; these remain unpublished.
7. Supply full approved logo artwork and selected visual-language photographs/captions.
8. Supply verified office address before adding an office location or map.
9. Configure the owner-approved inbox provider, delivery protection and a received test message. The form currently opens email/WhatsApp drafts as approved.
10. Supply real articles for Phase 4 or remove the Insights navigation item; it currently points to the existing advisory section, not invented articles.

Phase 3 is not started. No production merge is authorized.
