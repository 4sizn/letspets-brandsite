# Design QA — letspets brand site

final result: passed

## Scope and visual truth

Reference: https://hidee.app/ (captured 2026-09-21). Brand facts: https://www.letspets.co.kr/.
The user's later instruction explicitly removes unfinished services and asks for an independent brand site. Brand artwork, editorial cards, Studio / Approach / Spirit / Contact, and the absence of product downloads are intentional adaptations. This is not a pixel-identical copy of Hidee's app marketing content.

The in-app browser rendered both sources, but its viewport override did not change the 552 × 748 page. Chrome through the same CUA browser tool was used for controlled desktop and mobile capture. No direct Playwright/CDP session was used.

## Evidence

- Source visual truth: `reference/hidee-desktop-hero.png` (1440 × 900), `reference/hidee-mobile-hero.png` (390 × 844), `reference/hidee-mobile-menu.png`, and the numbered desktop/mobile section captures.
- Rendered implementation: `qa/desktop-hero-final.png` (1440 × 900), `qa/mobile-hero-final.png` (390 × 844), `qa/desktop-studio-final.png`, `qa/mobile-studio.png`, `qa/desktop-approach.png`, `qa/mobile-approach.png`, `qa/desktop-spirit.png`, `qa/mobile-spirit.png`, `qa/desktop-contact.png`, `qa/mobile-contact.png`, `qa/mobile-menu.png`.
- Full-view combined comparisons: `qa/comparison-desktop-final.png`, `qa/comparison-mobile-final.png`.
- Focused combined typography comparison: `qa/comparison-type-final.png`.
- Additional widths: `qa/tablet-hero.png` (768 × 1024), `qa/small-mobile-hero.png` and `qa/small-mobile-contact.png` (320 × 740).
- Density: source and implementation screenshots use 1 image pixel per CSS pixel; matching comparison pairs were asserted equal in size before composition. No resampling was needed. Comparison canvases add a 35px label strip.
- State: settled page top; mobile menu expanded; section anchor targets; carousel first and subsequent cards. Motion was paused for stable captures, then restored for the handoff.

## Comparison history

First desktop/mobile comparison found three P2 issues:

1. The introduction sticker said Curiosity while masking the word Serious. Changed the headline to Curious about small delights, made the overlaid word Curious match, and corrected the positioning anchor. Verified in `qa/desktop-studio-final.png` and `qa/mobile-studio.png`.
2. Source chevrons lacked viewBoxes and became too small at compact UI sizes. Added viewBoxes around their unchanged paths. Verified in final hero, menu and carousel captures.
3. The desktop floating note hid the postcard overline. Moved the note left. The full overline remains legible in `qa/desktop-hero-final.png` and the desktop combined comparison.

The second combined desktop/mobile comparison and focused typography comparison found no remaining actionable P0/P1/P2 issues within this brand-adaptation scope.

## Required fidelity surfaces

- Typography: Instrument Serif substitutes the source's MADE Mellow; Hubot Sans preserves the source's sans-serif family. The lighter serif/sans contrast, compact pill navigation, overlapping typographic labels and large footer wordmark carry through. Korean uses the device's native Korean sans-serif. The larger brand headline and added Korean explanation are intentional content adaptations.
- Spacing/layout: fixed centered rounded navigation, edge-framed hero art, narrow editorial introduction, full-width rounded blue panel, offset center carousel and peach contact panel preserve the reference sequence and rhythm. Desktop two-column/2×2 cards become a single mobile column. No document-level horizontal overflow at 320, 390, 768 or 1440 CSS px.
- Colors/tokens: warm cream #fffcf3, periwinkle blue, pale blue #d8e9ff, mint, lime #e3ff5a, peach and lilac correspond to sampled reference colors. Native focus outlines and dark body text remain visible.
- Image quality: original 1536 × 1024 ImageGen artwork replaces Hidee's people/masks to satisfy brand-first direction. Optimized WebP is about 92KB, correct aspect ratio and no broken images after lazy-loading. No fake service imagery or CSS illustration substitutes. The artwork repeats as an intentional close-up in the process panel.
- Copy/content: explains the independent one-person studio and its approach, with the existing public email/GitHub. No unfinished product names, app screenshots, release claims, empty placeholders or download CTAs. Decorative duplicates are aria-hidden where relevant.

## Functional checks

- Primary CTA and navigation move to their expected section hashes with fixed-header clearance.
- Mobile menu expands/collapses; navigation closes it. Escape closes it and restores focus to the menu trigger.
- Carousel next/previous, ArrowRight keyboard input and pointer swipe change the visible card and counter; accessible live descriptions update.
- Email href is mailto:4sizn@naver.com; GitHub href matches the existing brand link. No message was sent.
- Clipboard write resolves and success feedback is shown. The browser automation's separate clipboard read returned empty, so OS-level paste was not independently verified.
- Motion pause sets data-motion=off, disables marquee animation and smooth scroll; resume restores the normal state. System prefers-reduced-motion is supported in both initial state and CSS. OS preference switching was not manually exercised.
- Visible heading/paragraph wraps, mobile touch targets, keyboard labels and focus behavior inspected.
- 320, 390, 768 and 1440 CSS px layouts checked. Browser zoom shortcut attempts did not change the controlled viewport, so 200% browser/text zoom is unverified; `qa/zoom-command-unchanged.png` is not zoom evidence.
- Browser console: no warning/error entries in final check.
- Production build passed; all 4 existing Sites packaging/worker checks passed.

## Follow-up polish / test gaps

- Optional P3: prepare a separately art-directed portrait brand image when the brand visual direction is finalized; the current mobile crop intentionally leaves more sky around the typography.
- A real phone/Safari pass and OS-level zoom/clipboard verification remain separate cross-platform checks. No visual or functional blocker was observed in the tested browser.

## Handoff boundary

Complete runnable local brand site; not published and no existing domain altered. Development preview remains running. Build output is ready for a later deployment request.

## September 21 — project migration QA

final result: passed

Scope: existing approved brand extended with six real projects, detail routes, studio, notes, updates and privacy. This is a content migration within the selected visual direction, not a new pixel-for-pixel clone.

Evidence: `qa/migration-hero-comparison.jpg` combines the approved prior 1440×900 hero and the current hero at the same viewport. Navigation and CTA content change intentionally to expose Work. The image, typography, palette and composition remain consistent. `qa/migration-desktop-work.png`, `qa/migration-mobile-work.png`, `qa/migration-mobile-detail.png` cover the added surfaces at 1440×900 and 390×844.

- Typography: existing Instrument Serif and Hubot retained; Korean descriptions wrap without clipping.
- Layout rhythm: initial Work section inherited zero horizontal padding (P2). Added 40px desktop / 24px mobile gutters and recaptured. Two columns desktop, one mobile. No horizontal overflow at 390px or 1440px.
- Colors: pastel lilac, peach, sky, mint, yellow and rose cards extend the approved palette; cream page and pill navigation preserved.
- Imagery: six existing repository app captures load successfully. Cards contain the source image without stretching. These captures include original presentation framing; no fresh native screenshots are claimed because native computer-use access was denied.
- Content: all six original slugs, factual detail content, privacy text and public app-ads record retained. No invented store buttons for unpublished products. Studio tools/how-we-work anchors retained.
- Interaction: All/Mobile/Desktop counts 6/5/1; card → detail → Work round trip passed. Making-note disclosure opens. Production `/studio#tools` and `/privacy` render. Production browser console has no errors.
- Build: nine prerendered pages. Existing four packaging tests and one migration integrity test pass.

Remaining: fresh native app capture requires computer-use access; physical iPhone Safari not exercised. Production domain cutover is not part of this local preview completion.
