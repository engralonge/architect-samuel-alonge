# Phase 4 review

Historical Phase 4 review on `nextjs-rebuild`. The owner subsequently approved production release; see production-release.md for release changes and verification instructions.

## Completed

- Footer email can wrap only before @, never inside the mailbox or domain. The overlay email stays on one line.
- Gallery width follows the available source resolution: the first photograph fills its row, with two views beneath it on desktop. No empty grid slot.
- Hash-focused non-interactive headings have no outline; buttons, links and form controls retain keyboard focus indicators.
- Shared next/image component caps rendered CSS dimensions at native source width/height, including the gallery lightbox. Approved project heroes, Work images and portfolio cards use the same caps. These are display-size limits, not a promise of retina sharpness: physical screen density can still expose softness in the supplied originals.
- Portrait source verified at 1712 x 1692; rendered at no more than 296px wide, with its original aspect ratio and quality 90. Higher-resolution source data cannot be recovered by image optimization.
- Insights removed from header and footer navigation. `insightsPublished` in data/site.js keeps the entry ready to re-enable. Existing advisory pillars are not presented as published articles; no empty MDX routes or new dependencies.
- Light-background gold labels changed to existing terracotta for contrast. Service headings use a smaller size in narrow tablet cards. Project heading hierarchy and visible-label/accessibility-name matching corrected.
- Priority fetch hints on first-view imagery; lazy next/image elsewhere, AVIF/WebP retained. Existing slideshow visibility, focus, hover and reduced-motion pause behavior retained.
- Per-page canonical, description, Open Graph and Twitter metadata, absolute structured-data image URL, sitemap and robots routes. Preview deployments intentionally disallow indexing; production/local production audits allow indexing. The release update uses the production host for all social images and canonical URLs.
- Explicit sitemap/robots handlers avoid a Next 15 metadata-loader parsing bug when the Windows checkout path contains an apostrophe.
- No new project dependencies, fabricated portfolio entries, visible TODOs, or inbox-delivery claims.

## Verification and reproduction

- `npm run build` and `npm run lint` pass. Build required normal process-spawning permissions outside the restricted shell sandbox.
- `node scripts/verify-phase3.mjs`: route/icon/redirect and encoded email/WhatsApp draft checks. No messages sent.
- `node scripts/verify-phase4.mjs`: approved source dimensions, unpublished Insights navigation, all public routes, robots and sitemap response types.
- Sitemap parsed as XML and its five canonical URLs verified.
- Browser checks at 375, 768 and 1280px: no horizontal overflow or heading/paragraph/list text beyond its container. Work eyebrow appears at approximately 108px below viewport top versus a 61px header, and heading outline is none.
- Gallery arrows/Escape, focus return, Tab/Shift+Tab containment and menu without Insights checked. Desktop entrance lightbox measures no more than 723 x 340 CSS pixels. A strict pixel-density-divided cap was tested and removed because it made high-density desktop galleries too small; native display-size caps keep the gallery usable while awaiting better originals.
- Reduced-motion handling was inspected in CSS and slideshow state logic. Real assistive-technology testing and real-device/network measurements remain recommended; Lighthouse cannot certify complete accessibility.

Run the production server with `npm run start -- --port 3012` after building. Both verification scripts support `TEST_SITE_URL`.

Lighthouse is an ephemeral CLI audit tool, not a project dependency. Reproduce each report with:

```powershell
npx --yes lighthouse http://localhost:3012/ --only-categories=performance,accessibility,seo --chrome-flags="--headless" --output=json --output=html --output-path="./home-mobile" --quiet
node scripts/summarize-lighthouse.mjs ./home-mobile.report.json
```

Use `/projects`, `/projects/dunamis-glory-dome`, `/about-us` and `/people` for the other pages. Scores are simulated mobile audits of the local optimized build, not measurements of the old production site or a Vercel login page. Preview noindex is intentional and would lower a public preview SEO audit.

### Lighthouse mobile results

Lighthouse 13.5.0, October 10, 2026. One final run per page, after corrective reruns. Default mobile simulated throttling: 150ms RTT, 1638.4 Kbps throughput, 4x CPU slowdown. Local image-optimizer cache was warmed by preceding audits; a cold deployment/network can differ. No run warnings. All scored categories meet 90+; CLS rounds to 0 on every page.

| Page | Performance | Accessibility | SEO | LCP |
| --- | ---: | ---: | ---: | ---: |
| Home | 96 | 100 | 100 | 2.7s |
| Projects | 97 | 100 | 100 | 2.5s |
| Glory Dome | 95 | 100 | 100 | 2.8s |
| Profile (/about-us) | 96 | 100 | 100 | 2.7s |
| Studio (/people) | 96 | 100 | 100 | 2.7s |

First hero image transferred approximately 20KB; all initially fetched homepage images total approximately 67KB, well below the 1MB image budget. Raw HTML/JSON reports are saved outside the repo under `C:/Users/frank.alonge/.codex/visualizations/2026/06/23/019ef548-f725-7750-a5da-aca69da98bc3/`, prefixed `phase-4-home`, `phase-4-projects`, `phase-4-glory-dome`, `phase-4-profile` and `phase-4-studio`. The report summarizer reads these files and fails if any requested score is below 90.

The score target is met under these conditions, but it is not a field Core Web Vitals claim: homepage LCP remains above the 2.5s "good" boundary in this run. Retest the final production host after an approved merge and after higher-resolution photography is added.

## Review at 375, 768 and 1280px

1. Open the homepage: check portrait size, hero controls/CTAs and service-card text fit. Open Menu; Insights should be absent. Escape and Tab navigation should work.
2. Use Work from the menu or hero. The FLAGSHIP PROOF POINT eyebrow and title must remain below the header without a heading focus box.
3. Open Projects, filter All/Worship, then Glory Dome. The gallery has a single full first row and two smaller desktop views, not an empty slot.
4. Open the entrance view, use arrow buttons/keys, Tab/Shift+Tab and Escape. Low-resolution images stay within their native display-size limits, rather than stretching across the entire desktop; retina softness still needs better originals.
5. Check footer/contact email at each width: either one line or a break before @, never a trailing isolated letter. Prepare an enquiry draft and review it in your own email/WhatsApp app before sending.
6. Enable reduced motion in your browser/OS and confirm manual slide controls still work without autoplay or transition animation.

## Remaining TODOs (code/docs only)

1. Owner verification of retained "Award-level" and "100,000+ seat" claims.
2. Samuel's exact Glory Dome role and engineer/contractor credits.
3. Verified completion year, client attribution, status, floor area, narrative, specifications and image captions.
4. High-resolution Glory Dome originals for full-bleed/retina photography; current sources are 721-723px wide.
5. Full-resolution Crystal Stairs logo artwork; icons currently derive from the approved preserved 150px crop.
6. Additional verified projects and licensed photography before more sector filters or related work can appear.
7. Rights, identities, captions and attribution for the eight archived Instagram photographs, which remain unpublished.
8. Approved selected visual-language images and captions.
9. Verified office address and map location.
10. Approved inbox provider, delivery protection and a received test message. The current form only prepares email/WhatsApp drafts, so inbox-delivery acceptance is not yet met.
11. Genuine approved articles before re-enabling Insights navigation; article routes are not published.

Owner approval for merging and production promotion was received after this review.
