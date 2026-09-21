# letspets.co.kr migration

Local implementation is ready for review. The live domain and its existing deployment have not been changed.

## Preserved routes

- `/`: brand experience, six-project catalogue with filters, notes and dated updates.
- `/projects/yuri-camera`, `/projects/moa`, `/projects/cloud-minesweeper`, `/projects/swing-golf`, `/projects/garden-eel-cove`, `/projects/lonely-candle`.
- `/studio`, including `#how-we-work` and `#tools`.
- `/privacy`, `/app-ads.txt` and home anchors `#work`, `#notes`, `#releases`.

All nine pages are prerendered with page titles, descriptive text and canonical URLs. `robots.txt` and `sitemap.xml` use the existing canonical www domain. Vercel configuration includes the apex-to-www redirect. Build output: `dist/client`.

## Validation

Run `npm run build`, `npm run test:sites`, and `npm run test:migration`. Browser QA covers filters, detail navigation, note disclosures, studio/privacy routes, mobile and desktop layouts, and production build console errors.

## Asset and deployment limits

Project visuals use existing repository gallery captures restyled in the approved brand direction. Native computer-use screenshot access is currently unavailable, so new screenshots could not be captured. See ASSETS.md for provenance. No AI-generated app screens were substituted.

The existing site is sourced from `4sizn/lotus-brandsite`; this replacement is in `4sizn/letspets-brandsite`. A production cutover must target the actual existing hosting project/domain and preserve its rollback deployment. No DNS, domain assignment, or hosting project has been modified in this task.
