# AGENT.md

## Project Goal

Build Mstar Airsoft Website from scratch as a React + Vite + TypeScript frontend for tactical airsoft tournaments and competitive events.

## Tech Stack

- React
- Vite
- TypeScript
- Clean CSS
- Lightweight static frontend, GitHub Pages deploy-ready later

## Current Repo

- Local workspace: `D:\mstar airsoft site`
- Remote: `https://github.com/Cynicalfocus123/Mstar-Airsoft-Website.git`
- Branch target: `main`

## Required Commands

```bash
npm install
npm run dev
npm run build
```

## Deployment

- GitHub Pages workflow: `.github/workflows/deploy.yml`
- Vite base path: `/Mstar-Airsoft-Website/`
- Live URL format: `https://cynicalfocus123.github.io/Mstar-Airsoft-Website/`
- Workflow runs on pushes to `main` and manual dispatch.
- Workflow builds `dist`, uploads Pages artifact, then deploys GitHub Pages.
- Workflow opts JavaScript actions into Node 24 with `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`.
- Workflow uses Node 24 for project build.
- `actions/configure-pages@v5` uses `enablement: true` to handle repositories where Pages is not yet enabled.

On this Windows shell, use `cmd /c npm ...` if PowerShell script policy blocks `npm.ps1`.

## Git Rules

- Highest priority workflow rule: after any completed non-destructive project change, immediately update `AGENT.md` and `DESIGNER.md`, then run `git add`, `git commit`, and `git push` in the same task.
- Keep remote connected to `https://github.com/Cynicalfocus123/Mstar-Airsoft-Website.git`.
- Commit and push finished work automatically.
- Update `AGENT.md` and `DESIGNER.md` before every commit.
- Do not ask for approval before normal commit/push.
- Do not revert user changes unless explicitly requested.
- Use per-command `-c safe.directory='D:/mstar airsoft site'` if git warns about workspace ownership.

## Auto Commit + Push Rule

- Treat commit and push as a priority completion requirement, not an optional follow-up.
- For every completed change, fix, design update, deployment update, or content update, automatically run `git add`, `git commit`, and `git push`.
- Do not ask the user to approve normal GitHub commit or push.
- Do not repeatedly ask permission for repo pushes after each task.
- Commit and push are allowed by default for this project.
- Only stop and ask before serious destructive actions: deleting the repo, deleting major project files, force-pushing, rewriting Git history, removing deployment, exposing secrets, or changing production credentials.

## Allow Normal Changes Rule

- Normal frontend changes, layout fixes, text updates, style updates, image optimization, GitHub Pages fixes, README updates, `AGENT.md` updates, `DESIGNER.md` updates, and deployment workflow fixes are approved by default.
- Complete the work, test it, commit it, and push it.

## Project Memory Rule

- Always update `AGENT.md` and `DESIGNER.md` for every change or fix.
- Treat `AGENT.md` and `DESIGNER.md` as required living project memory: whenever code, content, layout, routes, media, UX behavior, deployment behavior, or design decisions change, update both files in the same task.
- Add a short changelog entry before committing.
- Commit `AGENT.md` and `DESIGNER.md` together with code changes.

## Token-Saving Command Rule

- Keep logs short.
- Use fewer tokens.
- Do not dump large logs.
- For unknown or large output, cap output with `2>&1 | head -c 4000` or PowerShell equivalent.
- Summarize command results instead of dumping full logs.

## Frontend-To-Backend Readiness Rules

- Do not hard-code major section content directly in JSX.
- Store section content in typed data/config objects.
- Current content source: `src/data/siteContent.ts`.
- Current types source: `src/types/siteContent.ts`.
- Navigation, hero, about, events, registration fields, gallery, rules, contact, footer links, CTA buttons, and logo path must remain backend-replaceable.
- Registration form stays frontend-only until backend/admin is requested.

## Image/Performance Rules

- Keep site image-light and fast.
- Use WebP/AVIF paths where possible.
- Main priority: every site image must be optimized for both desktop and mobile, with mobile-specific source/crop handling whenever the image is used as a hero, banner, background, card, gallery, or content image.
- Use lazy loading for gallery images.
- Avoid heavy image libraries and large background images.
- Logo is replaceable at `src/assets/mstar-airsoft-logo.png`.

## Invariants Agent Must Not Break

- Always follow `$caveman full` communication until user changes mode.
- Always update `AGENT.md` and `DESIGNER.md` for every change/fix.
- Never leave a completed project change without matching `AGENT.md` and `DESIGNER.md` updates.
- Never leave a completed normal project change uncommitted or unpushed.
- Keep the homepage splash banner as the native background video version unless the user explicitly asks to change the splash banner itself.
- Do not add Shop page/link in header or footer.
- Keep logo top-left and responsive.
- Do not copy American Milsim text, images, brand, logo, or copyrighted assets.
- Use American Milsim only as visual inspiration.
- Keep dark, bold, tactical, military/event focus.
- Do not build backend yet.
- `npm install`, `npm run dev`, and `npm run build` must work.
- README must include setup commands.

## Known Failed Attempts / Do-Not-Repeat Notes

- Do not create a generic template.
- Do not ask repeated approval questions for the same workflow.
- Do not redo completed work.
- Do not rebuild the whole site unless the task requires it.
- Do not change the GitHub repo remote unless needed to fix push problems.
- Do not hard-code all content inside JSX.
- Do not create backend files.
- Do not use broken image imports.
- Do not leave build failing.
- Do not forget `AGENT.md` and `DESIGNER.md` updates.
- Do not add heavy unoptimized assets.

## Current Task Log

- Initialized empty local repo in workspace.
- Added GitHub remote.
- Created React + Vite + TypeScript project from scratch.
- Copied available `logo site.png` to required replaceable path.
- Built backend-ready data and type structure.
- Added tactical single-page layout: header, hero, about, events, registration, rules, gallery, contact, footer.
- Added README setup notes.
- First build caught missing React type packages and Vite asset declarations.
- Moved build tooling and type packages into `devDependencies`.
- Added `src/vite-env.d.ts` for Vite asset module types.
- `npm run build` passed after dependency/type fixes.
- Local dev server reached Vite ready state; browser plugin blocked localhost/127.0.0.1 with client-side blocking.
- Added `.gitignore` to exclude generated folders, logs, env files, and loose source logo copy.
- Added GitHub Pages deployment workflow.
- Set Vite base path for repository Pages deployment.
- Updated README with live GitHub Pages URL format.
- Found actual GitHub Actions failure at `Setup Pages`: Pages site was not enabled/configured for GitHub Actions.
- Updated deployment workflow for Node 24 and Pages enablement.
- Added permanent auto commit/push rules and approved-normal-work rules to project memory.
- Replaced logo asset with provided `logo transparent.png` at `src/assets/mstar-airsoft-logo.png`.
- Added header Login and Sign Up actions.
- Added homepage image slider, Events page, Sign In page, and Create Account page.
- Added dynamic country/region account form config.
- Added full event banner data and lightweight SVG banner assets.
- Updated footer visual treatment for transparent logo visibility.
- Converted provided `logo transparent.png` into the actual app logo asset with transparent alpha.
- Removed yellow logo plates from header/footer and changed header/footer treatment to grey so transparent logo is used directly without a background box.
- Completed remaining account and event flows: header now switches to My Account after sign-in/register, account dropdown links to Account Settings and Orders, Account Settings supports editable address/email/phone fields, event cards route to detail pages, event data includes time/teams/attendance/overview, create-account country dropdown now uses a full ISO country list with region fallbacks, and frontend form payloads are trimmed/sanitized before future API handoff.
- Fixed remaining event/account issues: Events page uses compact image-on-top cards with details underneath, My Account dropdown includes Logout, Home/logo clicks return to the top of the homepage, event detail titles now wrap and scale down to prevent overflow, and country/region data now comes from `country-region-data` for broad subdivision coverage such as Italy.
- Added the provided Southeast Asia airsoft video to the homepage banner as Git LFS-tracked public media, enabled LFS checkout in the Pages workflow, moved homepage slider copy to a right-aligned tactical hero treatment, removed Teams display from event cards/details, removed the homepage registration form section, renamed Tournament Schedule to Game Schedules, and pointed homepage Join Tournament to All Events.
- Replaced the three-slide homepage media carousel with a single video hero, resolved public video/poster paths through the Vite base URL for GitHub Pages, changed attendance values to show only player counts under the Attendance label, and changed login/register success to return users to their previous page instead of Account Settings.
- Removed all text from the homepage video hero overlay except the Sign Up Now button, and forced the hero video to reset to 0 seconds and play immediately on mount.
- Added route-level scroll reset so Events, Event Detail, auth, account, and other full-page routes always open at the top instead of inheriting the previous scroll position.
- Repositioned the homepage video hero Sign Up Now CTA to bottom-center inside the video with mobile-optimized width and tap target sizing.
- Added frontend event checkout routing: Join Now now sends unauthenticated users to Create Account with a saved checkout return path, sends authenticated users to event checkout, and checkout displays event summary, login/register prompts, editable shipping/billing details, and card payment fields.
- Corrected the homepage video hero CTA overlay so the Sign Up Now button is anchored to the bottom center of the slider with full-width overlay centering instead of offset positioning.
- Replaced the homepage hero MP4 with the supplied YouTube embed, using muted autoplay, hidden player controls, eager iframe loading, and preconnect hints so the video starts faster on homepage entry without exposing a play button.
- Reworked the event checkout page into a cleaner modern split layout with line-separated left-side sections, a sticky order summary on the right, and event details plus pricing grouped in the summary panel.
- Tightened the checkout order summary typography and alignment so long event titles and team-based prices wrap cleanly inside the sidebar without overflowing the box.
- Converted the homepage YouTube hero into a true background-video layer with a poster fallback, non-interactive iframe, oversized cover fit, and overlay/text stacking that hides player UI and keeps CTA content on top.
- Confirmed the homepage hero uses a custom `BannerSlider` instead of Swiper/Slick/Bootstrap and removed the leftover custom previous/next/dot control CSS so the hero stays clean with background video only.
- Updated main navigation and footer links to use named hash routes like `#/home`, `#/about`, `#/rules`, `#/gallery`, and `#/contact`, with homepage section scrolling wired through the app router instead of bare `#section` fragments.
- Replaced the homepage YouTube hero embed with a native full-length video background using `/videos/home-hero.mp4`, poster fallback `/images/home-hero-poster.jpg`, muted autoplay, loop, playsInline, preload, pointer-events disabled, and no controls.
- Added a mobile-only homepage hero video source at `/videos/home-hero-mobile.mp4`, selected by the hero component for screens up to 640px while desktop keeps the full desktop MP4.
- Added a dedicated background image for the homepage About section, rendering the supplied AVIF only behind “Competitive airsoft with clean structure and strong field discipline.” with its own dark overlay.
- Fixed the mobile header menu so it stays locked as a fixed drawer beneath the sticky header while scrolling, and brightened the homepage hero video treatment by reducing overlay darkness for both desktop and mobile sources.
- Replaced the homepage About background with the supplied WebP image and fixed the section background URL to respect the Vite/GitHub Pages base path so the image actually renders in production.
- Optimized the homepage About section image for mobile display with a mobile background source hook, adjusted mobile crop/positioning, and promoted desktop-plus-mobile image optimization to a main priority rule.
- Reworked the homepage hero video to use a poster image fallback that stays visible until playback starts, and let the browser choose mobile versus desktop MP4 sources through native media-based video sources.
- Switched the homepage hero video from local assets to Cloudflare R2 public desktop and mobile MP4 URLs, and added DNS prefetch plus preconnect hints for both R2 domains.
- Replaced the homepage hero poster with the new uploaded WebP asset, preloaded it for first paint, and kept it visible during video load, stalls, and load failures so the splash never appears blank.
- Expanded the site navigation with Products and Things to Know, rebuilt the footer into taller vertical link columns, and added placeholder info pages including FAQ and Thailand travel-prep routes.
- Added a homepage Package Offer section above Game Schedules using the same tactical card system and surfaced the ticket price, stay length, live music, and food court perks for desktop and mobile.
- Refined the homepage Package Offer card by removing the duplicate inner title, enlarging the price and stay length equally, and reducing the visual weight of the live music and food court lines.
- Softened the homepage Package Offer typography by removing the boxed value treatment and resizing the price and stay length to a cleaner medium-weight presentation.
- Updated the Things to Know page so the Immigration Visa, How to Get to the Event, and How to Ship Your Equipment to Us cards use the supplied PNG images, and added new placeholder cards for Rules & Regulation, Accommodation & Campground, and Activity.
- Fixed public image path handling for data-driven cards and gallery/info/event imagery so Things to Know and similar pages resolve correctly under the GitHub Pages repo base path.
- Centered the Things to Know hero tagline, added footer legal/support links, and extended the info-page system to support full responsive Terms & Conditions, Privacy, and Complaints pages from typed content data.
- Refined the Terms & Conditions, Privacy, and Complaints page headers with smaller aligned legal-page hero typography and responsive spacing for desktop, tablet, and mobile.
- Added three Things to Know detail routes for transport, immigration visa, and equipment shipping, and linked the first three Things to Know cards directly to those full guide pages.
- Reduced the main Things to Know heading scale and pinned every card CTA to a shared bottom alignment with consistent Open Guide labels across the full Things to Know grid.
- Added full responsive guide pages for Rules & Regulation, Accommodation & Campground Experience, and Activities & Entertainment Experience, and linked the remaining Things to Know cards to those routes.
- Added a responsive image gallery under the Activities guide's Outdoor Adventure Activities section using the supplied Jungle Trip, ATV Ride, Zip Line, and Waterfall assets.
- Redirected the shared header and footer Rules navigation links to the dedicated Rules & Regulation guide page instead of the old homepage rules anchor.
- Removed the Rules and Safety block from the homepage while keeping rules available through the standalone Rules & Regulation guide page and shared nav links.
- Updated footer travel-planning links so Immigration now opens Immigration Visa, How to Pack is renamed to Ship Your Equipment, and the Thailand laws footer entry is removed.
- Expanded the homepage Package Offer card perks so 2 Person Tent and Camping Equipment appear beneath Food Court in the offer list.
- Removed the homepage Contact section while keeping contact details available in the footer and other shared site surfaces.
- Removed the homepage Join Tournament CTA, centered the Package Offer heading/card presentation for desktop and mobile, and replaced the remaining Things to Know placeholder art with the supplied regulation, campground, and activities images.

## Completed Changes

- Scaffolded project files and TypeScript configs.
- Added reusable components under `src/components`.
- Added typed content model under `src/types/siteContent.ts`.
- Added data source under `src/data/siteContent.ts`.
- Added responsive tactical CSS under `src/styles.css`.
- Added logo path `src/assets/mstar-airsoft-logo.png`.
- Added gallery placeholder WebP paths under data config.

## Changelog

- 2026-05-17: Created first full frontend version with data-driven architecture, tactical visual direction, replaceable logo path, README, and project memory files.
- 2026-05-17: Fixed TypeScript build readiness by adding React DOM types and Vite env declarations after initial build check.
- 2026-05-17: Added repository ignore rules for node modules, build output, dev logs, env files, tsbuildinfo, and original loose logo file.
- 2026-05-17: Added GitHub Pages Actions deployment, configured Vite base path, and documented live URL format.
- 2026-05-17: Fixed Pages workflow warning/failure by opting actions into Node 24, building with Node 24, using `npm install`, and enabling Pages during configure step.
- 2026-05-17: Added permanent rules for automatic commit/push, approved normal changes, project memory updates, token-saving, and do-not-repeat workflow behavior.
- 2026-05-17: Added transparent logo header/footer treatment, homepage slider, Events page with hover banners/load more, Sign In page, Create Account page with country-driven regions, and black/white/gold branding updates.
- 2026-05-17: Updated header and footer to grey visual treatment, removed yellow logo background plates, and regenerated `src/assets/mstar-airsoft-logo.png` from the provided transparent logo with real alpha.
- 2026-05-17: Added My Account dropdown behavior, Account Settings page, clickable event cards, Event Detail page, event attendance/teams/time data, full world country dropdown support, safer frontend form cleaning, gold button consistency, and responsive account/event styling.
- 2026-05-17: Reworked Events page into smaller horizontal-style cards with banner image above details, added Logout, fixed Home/logo top navigation, tightened event detail title CSS, and replaced manual country region examples with the `country-region-data` dataset.
- 2026-05-17: Added LFS-tracked homepage hero video media, updated the slider to render video backgrounds with dark overlay/right-aligned copy, removed displayed Teams lines, removed homepage Join Tournament form, renamed schedule heading to Game Schedules, and updated Pages checkout for LFS assets.
- 2026-05-17: Simplified homepage banner to a single video hero, fixed Pages-safe video asset paths, removed carousel arrows/dots/image slides, changed displayed attendance values to player counts only, and preserved user location after login/register.
- 2026-05-17: Removed video hero text overlay, kept only the Sign Up Now CTA, and made hero video restart from 0 seconds on page entry.
- 2026-05-17: Added top-of-page scroll reset for full page route changes while preserving homepage section anchor behavior.
- 2026-05-17: Moved video hero Sign Up Now button to bottom-center inside the video and improved mobile button sizing.
- 2026-05-17: Added event registration cart/checkout behavior with auth-aware Join Now routing, saved account profile reuse, editable shipping/billing sections, payment fields, and responsive white checkout styling.
- 2026-05-17: Fixed the homepage video hero CTA alignment by centering the overlay layer and pinning the Sign Up Now button to the true bottom center on desktop and mobile.
- 2026-05-17: Swapped the homepage hero media to the provided YouTube embed and configured it for muted autoplay, hidden controls, eager loading, and non-interactive playback on page entry.
- 2026-05-17: Redesigned the event checkout UI to use divider-based sections instead of boxed text panels and added a right-side order summary with event details and pricing.
- 2026-05-17: Fixed checkout order summary overflow by resizing the sidebar heading, using a safer title/price layout, and reducing total-row scaling.
- 2026-05-17: Refined the homepage YouTube hero so it behaves like a silent background video with a poster fallback, absolute cover positioning, non-clickable iframe, and overlay-first layering.
- 2026-05-17: Removed unused custom slider control styles from the homepage hero after confirming no navigation or pause/play buttons are rendered at the component level.
- 2026-05-17: Replaced bare fragment menu URLs with named hash routes and routed homepage section links through the app so menu paths read cleanly while still scrolling to the correct section.
- 2026-05-17: Removed the YouTube iframe from the homepage hero and restored a native full-length video background with poster fallback, muted autoplay, loop, playsInline, and no interactive controls.
- 2026-05-17: Added the supplied mobile-specific hero video as a Git LFS public asset and wired the homepage hero to use it only on mobile viewports.
- 2026-05-17: Added the supplied AVIF image behind the homepage About section and kept the section text readable with an isolated overlay treatment.
- 2026-05-17: Updated the mobile header nav to a fixed under-header panel and reduced the homepage hero overlay so the background videos display at a more natural brightness.
- 2026-05-17: Swapped the About background asset to the supplied WebP and corrected the background-image URL handling so the section image shows reliably under the site base path.
- 2026-05-17: Added a mobile-optimized About background image path and mobile crop treatment, and made desktop/mobile image optimization a main priority rule.
- 2026-05-17: Updated the homepage hero video to use a real poster fallback plus native mobile/desktop source selection, improving first paint and reducing blank video flashes.
- 2026-05-17: Moved the homepage hero desktop and mobile videos to Cloudflare R2 public URLs and added connection hints for both video origins.
- 2026-05-17: Swapped the homepage hero poster to the uploaded WebP, added poster preload, and reinforced the poster fallback logic for loading, buffering, and video errors.
- 2026-05-20: Added Products and Things to Know to the header, converted the footer into vertical multi-column link groups, and created placeholder info pages including FAQ and Thailand travel-prep routes.
- 2026-05-20: Added a homepage Package Offer section above Game Schedules with a single offer card for price, duration, live music, and food court perks.
- 2026-05-20: Refined the homepage Package Offer card hierarchy so price and stay length lead the card and the perk lines read smaller.
- 2026-05-20: Removed the boxed Package Offer value treatment and resized the price and stay length to a more modern medium scale.
- 2026-05-22: Added the supplied PNG artwork to the three existing Things to Know cards and expanded the page with new placeholder cards for Rules & Regulation, Accommodation & Campground, and Activity.
- 2026-05-22: Added a shared public asset path resolver and applied it to info-page, event-page, checkout, detail, and gallery images so repo-scoped GitHub Pages URLs load correctly.
- 2026-05-22: Added responsive legal/support pages for Terms & Conditions, Privacy, and Complaints, centered the Things to Know FORCE OF CONQUEST hero copy, and expanded the footer Site Links section with legal/support destinations.
- 2026-05-22: Reduced and realigned the legal/support page hero headings so Terms & Conditions, Privacy, and Complaints display cleanly across desktop, tablet, and mobile.
- 2026-05-22: Added routed detail pages for How to Get to the Event, Immigration Visa, and Equipment, with the supplied travel and shipping copy rendered as responsive long-form guide content.
- 2026-05-22: Tightened the Things to Know index hero typography and standardized all six card CTA labels to Open Guide with aligned bottom placement.
- 2026-05-22: Converted the remaining three Things to Know placeholders into full guide pages for rules, campground, and activities with supplied event copy and live card links.
- 2026-05-22: Added the supplied activity images under Outdoor Adventure Activities on the Activity guide page with responsive grid rendering.
- 2026-05-22: Updated header and footer Rules links to open the standalone Rules & Regulation guide page.
- 2026-05-22: Removed the homepage Rules and Safety section now that rules content lives on the dedicated Rules & Regulation page.
- 2026-05-22: Simplified the footer travel links by pointing Immigration to Immigration Visa, renaming How to Pack to Ship Your Equipment, and removing the Thailand laws footer item.
- 2026-05-22: Added 2 Person Tent and Camping Equipment to the homepage Package Offer perk list below Food Court.
- 2026-05-22: Removed the homepage Contact section to keep the landing page tighter while preserving footer contact details.
- 2026-05-22: Removed the homepage Join Tournament button, centered the Package Offer section card on desktop/mobile, and swapped the last three Things to Know card images to the supplied regulation, campground, and activities artwork.
- 2026-05-22: Replaced the homepage hero banner with a responsive YouTube embed player, moved the CTA below the player for touch-safe controls, and added explicit memory-file update rules for every project change.
- 2026-05-22: Elevated automatic `git add` + `git commit` + `git push` to a highest-priority workflow rule after every completed normal change.
- 2026-05-22: Restored the homepage splash banner to the previous native background video treatment and replaced only the lower Home intro section with a responsive YouTube player.

## Next Steps

- Replace placeholder/current logo file with final approved logo at `src/assets/mstar-airsoft-logo.png`.
- Connect `src/data/siteContent.ts` to backend/admin API when backend work begins.
- Check GitHub Actions Pages run after push and enable Pages source as GitHub Actions if repository settings require it.
