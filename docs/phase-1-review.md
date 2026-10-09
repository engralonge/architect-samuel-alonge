# Phase 1 review

## Source carried over before the static replacement

- Original deployed HTML and CSS: `docs/legacy-static/` (reference only).
- All 12 original assets: `public/legacy/assets/`, byte-for-byte from Git HEAD.
- Three user-supplied Glory Dome images: aerial, entrance, exterior.
- Eight Instagram post images: preserved with their original filenames.
- `samuel-alonge-profile.jpg`: inspected; this is a cropped Crystal Stairs logo,
  not a portrait. Do not label it as Samuel's portrait.
- Glory Dome name, Abuja location, 100,000+ seats, pillar-free description,
  architectural themes and YouTube URL: `flagship` in `data/site.js`.
- Practice positioning, services, process and Instagram URL remain in site data.

No archived image has confirmed ownership or publication permission yet.
Preservation is not a licence assertion. Archived assets are not rendered.

## Changes

- Next.js branch deployment configuration, without changing main.
- Scroll-aware opaque header and smaller vertical spacing after scrolling.
- Closed mobile menu links are removed from keyboard navigation.
- Hero uses a 2200px illustrative Unsplash source, `next/image`, responsive sizes,
  priority loading; below-the-fold photography is lazy. AVIF/WebP enabled.
- Stock imagery is labelled illustrative and never presented as Glory Dome.
- Removed invented projects, team entries, dummy email and hash-only social links.
- Corrected practice voice and brand-line capitalization.
- Visible-by-default sections, anchor offsets, reduced motion and skip link.
- Required form fields, pending/success/error states and validated route handler.
  Unconfigured inbox returns 503 and never reports successful delivery.
- Added ESLint development tooling and restored ProfessionalService JSON-LD.

## Every outstanding content TODO

1. Verified public email.
2. Verified international phone number.
3. Verified WhatsApp number.
4. Verified office address (before map integration).
5. Inbox provider/destination, delivery protection and a received test message.
6. Licensed, approved portrait of Samuel.
7. Rights, photographer attribution and accurate descriptions for all 12 archived assets.
8. Full, approved Crystal Stairs logo artwork; archived logo is cropped.
9. Approved project hero photograph at least 2000px wide; current hero is illustrative.
10. Approved Glory Dome photographs.
11. Approved selected visual captions, project identities and image rights.
12. Samuel's precise Glory Dome role and approved credits (engineers/contractor).
13. Approved Glory Dome year, client, status, floor area, narrative and specifications.
14. Additional real portfolio entries if available; no invented entries will be added.

## Review at 375, 768 and 1280px

Open Home, Profile, Projects, Studio and Contact. Check heading wrapping, CTA
placement, image loading and horizontal overflow. Scroll to shrink the header;
open direct `/#profile`, `/#work`, `/#services`, `/#contact` links. On mobile, use
Tab and Escape to check the menu. Tab through the enquiry form, submit it empty
to verify validation, then submit dummy details to see the not-connected error.
Enable reduced motion and check that content remains readable with JS disabled.

The live inbox, real portrait and real hero-image acceptance items remain pending
the owner's inputs. Lighthouse acceptance is reserved for Phase 4.
