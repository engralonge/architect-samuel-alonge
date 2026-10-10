# Production release

Owner approved Phase 4 and authorized merging `nextjs-rebuild` into `main`.

## Release changes

- Preview builds use noindex/nofollow and a disallow-all robots.txt. Production builds permit indexing. Both policies are tested against real HTTP responses.
- Canonical, Open Graph and Twitter image URLs target https://architect-samuel-alonge.vercel.app. The shared image is a 1200 x 630 PNG made from the approved portrait and logo; regenerate with `node scripts/generate-share-image.mjs`.
- The homepage advisory pillars are labeled Approach, not Insights. Article navigation remains disabled until approved articles exist.
- The project-card frame uses the photograph's native aspect ratio and fills its available width without the former right-hand gap. Native-size limits remain in place.
- Profile and Studio in the Phase 4 audit describe `/about-us` and `/people`, respectively. There are no `/profile` or `/studio` routes. Main navigation links to the homepage Profile section.

## Reproduce checks

1. Build with `VERCEL_ENV=preview`, start the optimized server, and run `python scripts/verify-publication.py http://localhost:3013 --preview`.
2. Stop that server, build with `VERCEL_ENV=production`, and run the same script without `--preview` against the optimized production server.
3. Run `npm run lint`, `node scripts/verify-metadata.mjs`, and the Phase 3/4 verification scripts. Set `TEST_SITE_URL` for those scripts when checking the live domain.
4. Run `python scripts/verify-publication.py https://architect-samuel-alonge.vercel.app` after Vercel reports the main deployment Ready.
5. Review Projects, Work anchor navigation, gallery, menu and contact at 375, 768 and 1280px. Run mobile Lighthouse against all five published routes; keep reports outside the source tree.

Remaining content and integration TODOs are listed in phase-4-review.md. In particular, the form prepares email/WhatsApp drafts and does not claim inbox delivery. No new project dependencies or unverified portfolio content were introduced for this release.
