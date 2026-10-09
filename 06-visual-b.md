# 06 Visual B: "Framed industrial" (Square One Construction)
Built Oct 9 2026 CT. Scope: nav, hero, trust strip (desktop 1440, mobile 390). Next.js 15 App Router + Tailwind 4, static export.

Rationale: a contractor that looks like an architecture firm. Off-white paper, one confident uppercase grotesk set inside an inset, softly framed photo of a row of dock doors, and everything else on crisp hairline rows. Organized, exact and accountable, the way procurement wants a vendor to be.

## Screenshots
screenshots/06-visual-b-desktop.png (1440x900 fold), -desktop-full.png, -mobile.png (390x844 @2x), -mobile-full.png (sticky bar hidden in the full shot).
Side by side: screenshots/compare-squareone-vs-b.jpg. Earlier iteration: ../context/inspo/iter-b1-desktop.png.

## Wireframe fidelity
Same elements, order and copy as concept A (04-copy.md word for word, all placeholders dropped). Reading order in the hero: eyebrow, H1 (in the image), then left to right below the frame: paragraph, 3 benefits, the two buttons, then the emergency line. Uppercase is CSS display styling only (the copy stays sentence case; no text-transform: capitalize).

## Rules check (sher-visual-taste)
N1 none. N2 eyebrow is the wireframe's, directly above the H1. N3-N6 none. A1: still photo; the H1 sits in the shadowed asphalt band at the bottom of the frame, with a bottom grade. Corner radius 6px on buttons and 10px on the frame, no pills, no drop shadows.

## Iteration log
1. b1: H1 ran 3 lines over the bright white dock doors (weak contrast), and "$5M liability" wrapped. Fixed: H1 forced to 2 full-width lines (desktop), photo re-anchored to the bottom so the type sits on the dark asphalt, a stronger bottom grade, the photo desaturated 18% to calm the rust stains, strip numerals 56px no-wrap.
2. b2-b5: frame height trimmed so the buttons and emergency line sit above the 900px fold. Mobile: frame 340px and tighter list so the "Request a quote" button is in the first screen; the sticky call bar stays hidden until the hero phone line scrolls away.

## Images
- hero-loading-docks.jpg: Unsplash, https://unsplash.com/photos/a-row-of-loading-docks-on-a-commercial-building-SJGC3NNOqU4 (Unsplash License; not Unsplash+). Resized only, grade in CSS. Not a Calgary building and not a Blk Box job.
- blk-box-logo-black.png: from blk-box.ca, cropped (no Kydrid line) and inverted to black.

## Invented facts (replace before launch)
1. Warranty: "12 months, parts and labour".
2. "$5M liability" / "Commercial liability insurance with Intact Insurance."
3. "WCB Alberta" / "In good standing, clearance letter on request."

## Gaps (honest)
- The dock photo is graphic but weathered (rust, scuffed concrete), so it reads a bit "working yard" next to Square One's polished footage. Square One also uses video plus its own branded truck; we have neither.
- Stock, not Calgary, no people. A client shoot (techs and a branded van at a clean dock) is the biggest lever.
- Square One's cutout-headline animation and video aren't reproduced; motion is a slow settle zoom only.
- Logo raster/low-res, as in A.

## Round 2 rework (Oct 9, ~3:50 PM CT), after Visual Design r1 (fail). Round-1 shots kept as *-r1.png.
Rationale now: "Architectural daylight". Calm off-white paper, a light mixed-case grotesque headline in open space, and a pristine glass entrance photo framed below. A contractor that presents like an architecture practice.
1. Photo: replaced the grimy loading docks with a clean, modern glass entrance-door system (green wall and stone steps beyond). Unsplash https://unsplash.com/photos/modern-building-entrance-with-glass-doors-and-a-green-wall-W9JLJQ47hU8 (Unsplash License) -> public/images/hero-glass-entrance-daylight.jpg. Warm, crisp grade in CSS (brightness +6%, sepia 10%).
2. Type and UI: Geist Light in mixed case (88px desktop, 44px mobile), no caps H1, no dark gradient. The text sits in open paper above the photo (planned negative space, A1). One primary button (hard-edged ink rectangle, no radius), with the secondary as an underlined text link. Orange is now only 5px squares on the benefit rows and the mobile call bar. Nav in mixed case.
3. Trust strip: mixed case, light 52px figures, min-w-0 columns. "WCB Alberta" fits with no clipping (checked at 1440 and 390).
4. Hierarchy: H1 dominates the left 7 columns. The right 4 columns hold, in order, the paragraph, the ruled benefit rows (kept), the button with the text link, and the emergency line, all bottom-aligned to the H1. The photo follows as one wide frame.
Gaps now: on mobile, the photo starts below the first screen (that kept the H1, paragraph, benefits and button above the fold). On desktop, about 300px of the photo shows above the fold. The photo has small tenant signage on a mailbox panel at the left and dark columns at the edges, and the doors are lit from inside rather than in full sun.

## Round 3 (Oct 9, ~4:00 PM CT), after Visual Design r2 (conditional pass). Round-2 shots kept as *-r2.png.
1. Black-box mark: 9px solid black squares anchor each trust-strip divider. The primary button now has a square orange arrow cell (mirrors A in black and orange). I did NOT put a square before the eyebrow: a filled marker before the brand line is close to the N2 "filled-dot eyebrow" tell.
2. Desktop: top padding tightened (64 to 40px). The photo frame starts at about y 600, so about 300px of photo shows in the 1440x900 first screen (more than the 120–160px asked). Mobile: a 150px image band sits directly under the CTA and the vendor link (above the emergency line). The full frame is desktop only. Copy order unchanged.
3. Micro text (eyebrow, emergency line, trust captions) is now #6B6A66 and at least 14px (eyebrow 14/15px, emergency 14px, captions 15.5px).

## Round 4 polish
- Tenant signage panel (left of photo) blurred with a feathered mask in public/images/hero-glass-entrance-daylight.jpg; applies to desktop and mobile.

## Full homepage build (Oct 9, ~4:30 PM CT): sections 4–11 after Max picked B
Copy source: `04-copy.md`, **Revision 2026-10-09 CT** (file modified 15:56 CT). This includes the shortened Buildings H2 "Warehouses, plazas, apartments and towers" and credentials row 10 as GST/HST number only, with no W-9. No other copy files or revision files exist. I checked the Buildings section (node 4:492) in the Figma wireframe and it matches this revision. The figma-design-to-code SKILL.md path given in the brief doesn't exist on the box, so I read Figma directly with get_design_context.
Hero and trust strip: unchanged.

Sections (wireframe order): 4 Services (2 cards, staggered 7/4 frames) · 5 Built for property managers (ink band, 4 ruled points with orange squares, pull quote, CTA) · 6 Buildings (4 portrait tiles, staggered, numbered captions on hairlines) · 7 Credentials (sticky H2/CTA left, 10 ruled label:value rows right, stone band) · 8 How it works (4-step rule timeline with black/orange square nodes, light numerals, call button + quote link) · 9 FAQ (10 Qs, 2 columns of 5, square plus/minus, CTA) · 10 Final CTA (ink, 80px H2, 2 buttons, details row) · 11 Footer (ink, NAP, 6 links, LinkedIn, credits).

Images (Unsplash License; signage removed):
- svc-overhead-docks.jpg: https://unsplash.com/photos/a-row-of-loading-docks-on-a-commercial-building-SJGC3NNOqU4
- svc-glass-entrance.jpg: https://unsplash.com/photos/an-empty-room-with-a-lot-of-windows-mB6cIRzrOeE
- bld-warehouse.jpg: https://unsplash.com/photos/warehouse-building-with-two-loading-docks-io-oWYBLt9M
- bld-plaza.jpg: https://unsplash.com/photos/storefront-with-sign-under-sunlit-trees-jkRYCriuK60 (I removed the tenant sign and a hanging sign by blurring and inpainting them)
- bld-apartments.jpg: https://unsplash.com/photos/white-concrete-building-beside-street-at-daytime-Noq6-wTyiv8
- bld-tower.jpg: https://unsplash.com/photos/modern-glass-building-with-green-landscaping-atYoXjIr8qY

Invented facts, added in this build (replace before launch). Also see items 1–3 above.
4. COR: "In progress, audit booked for early 2027".
5. 24/7 response: "On site within 4 hours inside Calgary city limits". This also appears in process step 2.
6. Technicians: "10 full-time door technicians".
7. Manufacturer line: "Factory-trained on the major overhead door and operator lines".
8. Certificate of insurance: "Available on request, same business day".
9. GST/HST number: 78412 3956 RT0001.
10. Service area: Airdrie, Chestermere, Cochrane, Okotoks (in FAQ 9 and the details row).
11. FAQ 10: service-account setup in one call, and quotes back within 2 business days.
12. Address: Bay 4, 3615 61 Avenue SE, Calgary, AB T2C 1Z4.
13. Email: service@blk-box.ca. LinkedIn URL: linkedin.com/company/blk-box-maintenance. Privacy policy link: /privacy-policy/.
14. FAQ 8: filled with the $5M/Intact, WCB and COR facts above.
Not invented, still needs client confirmation: the legal name "BLK BOX Maintenance Inc." and Alberta corp. no. 2025602950 (from the public registry, per the copy deck); "parkades"; locks and closers; holidays; the pull quote (paraphrases the client).
Left out on purpose: optional items that are hidden or awaiting approval. These are the section 4 extra bullets, the section 6 client logo row, and the video-testimonial placeholder.

Iteration (self-critique vs Square One):
- Card 1 was a CGI-looking warehouse render. I swapped it for a real photo of dock doors.
- I tightened the dead space under the services cards.
- I widened the FAQ H2 to 8 columns so it runs 2 lines, not 3.
- The phone number no longer wraps.
- I lowered the warehouse tile crop.

Gaps:
- Square One has full-bleed photo and video moments. Here, sections 5, 7, 8 and 9 are type-led. That fits the wireframe, but the page relies heavily on stock.
- The tiles aren't Calgary-specific, and the plaza photo is saturated (I toned it down in CSS). The inpainted sign area is slightly soft at full size.
- The dock photo has tiny unreadable stickers on the doors.
- On desktop, the credentials left column sits on empty space once the rows scroll past (it's sticky).
- The mobile menu is still a static button.

## Full home, VD round 1 fixes (Oct 9, ~4:25 PM CT). Round-1 shots kept as 06-visual-b-home-*-r1.png
- s6: removed the 01–04 numbering, so captions sit plain on the ruled line. Replaced the plaza photo with a clean retail frontage (Unsplash https://unsplash.com/photos/modern-building-entrance-with-awnings-and-plants-QdqYxet4foA). The file is cropped below the storefront name, so no name appears in the file or on the page.
- s4: the overhead card now uses the Concept A facade photo (Unsplash, source in 06-visual-a.md), regraded for daylight in CSS. The file is cropped to remove the non-Calgary skyline at the right. Dropped the dock photo. The "Not sure what you need? Call 24/7" row now spans full width below both cards.
- s7: removed the label bullet squares (hairlines only). The left column is a full-height flex column. A self-made vendor-package cover (black, logo, orange square, "Vendor package", "Insurance · WCB / Warranty · 2026", no certificate styling) sits at the bottom, level with the last row. Sticky was dropped: the rows are only about 66px taller than the left column, so there was nothing to stick through. COR row unchanged.
- s8: all 4 timeline markers are black. The background is now a lighter tone (#fbfaf7), so the sequence runs s6 paper, s7 warm grey, s8 light, s9 paper, s10 ink. No two adjacent text sections share a tone. Dropped s9's top rule because it now starts on a tone change.
