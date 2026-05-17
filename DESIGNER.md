# DESIGNER.md

## Design Direction

- Bold military/tactical tournament site.
- Dark base with red, white, black, and military green accents.
- Professional event-operations feel, not generic landing page.
- First screen must show actual Mstar Airsoft brand signal and tournament CTA.

## Reference Site Notes

- Use `https://americanmilsim.com` only for visual inspiration: dark tactical mood, strong header, boxy cards, bold buttons, dense event sections, footer structure.
- Do not copy content, brand wording, images, logo, layout exactly, or copyrighted assets.

## Header Rules

- Logo stays top-left.
- Use the transparent MSTAR Airsoft logo from `src/assets/mstar-airsoft-logo.png`.
- Do not place the logo on a yellow or solid background plate.
- Header background should be grey/dark grey so transparent artwork is visible directly.
- Header navigation: Home, About, Events, Rules, Gallery, Contact.
- Header includes Login and Sign Up actions.
- No Shop link.
- Mobile menu must remain responsive and easy to tap.
- Navigation must come from config/data.

## Footer Rules

- Grey footer treatment with logo/name, quick links, contact info, social placeholder.
- Footer logo must stay clearly visible with transparent artwork.
- Do not place footer logo on a yellow or solid background plate.
- Footer links must come from config/data.
- No Shop link.

## Logo Placement Rules

- Required path: `src/assets/mstar-airsoft-logo.png`.
- Header logo uses `object-fit: contain`.
- Keep logo clean, not stretched, not blurry, not oversized.
- Real logo replacement should not require code changes.

## Color Direction

- Dark background: near-black and charcoal.
- Primary accent: yellow/gold.
- White for logo visibility, typography, and contrast.
- White for strong headings.
- Muted grey/khaki for supporting text.

## Button/Card Style Rules

- Buttons: strong, square tactical feel, uppercase, high contrast.
- Primary CTA uses yellow/gold.
- Secondary CTA uses dark panel and light border.
- Cards: bordered, dark, structured, boxy, event-focused.
- Avoid soft rounded generic SaaS style.
- Event page banners must have large image treatment with animated hover movement.
- All Events page cards should stay compact: image banner on top, event information underneath, and responsive grid/list behavior across desktop, tablet, and mobile.
- Homepage banner slider must include arrows, dots, overlaid event text, and gold Sign Up CTA.
- Homepage banner first slide uses the provided airsoft video as full-width background media with dark overlay and right-aligned copy on desktop.
- Homepage banner is no longer a three-image carousel; it is a single full-width video hero with text and CTA over the video.
- Homepage video hero overlay should show only the gold Sign Up Now button.
- Homepage video hero CTA sits bottom-center inside the video and remains easy to tap on mobile.
- Event detail pages use a large top banner, content panel, and right-side Join Now/details panel that collapses cleanly on mobile.
- Event detail titles must wrap inside their panel without clipping or oversized overflow.
- Event registration checkout uses a clean white cart layout with bold headers, clear event summary, yellow EDIT buttons, editable shipping/billing sections, and responsive payment fields.
- Unauthenticated checkout views show clear Login and Register actions at the top before the event summary.
- Homepage video hero CTA must sit on a full-width bottom overlay so the Sign Up Now button remains truly centered instead of drifting right on large screens.
- Homepage video hero may use the supplied YouTube embed, but it must autoplay muted, hide player chrome, avoid exposing a play button, and feel immediate when the user lands on Home.
- Event checkout should feel modern and editorial: left-side information sections separated by clean rules instead of card boxes, with a more structured order summary panel on the right for event details and pricing.
- Checkout order summary text must stay contained and balanced: long event names should wrap cleanly, prices should not collide with titles, and totals should scale without spilling outside the sidebar.
- Homepage YouTube hero must behave like ambient background media: iframe fully covering the slider, non-interactive, hidden behind a dark overlay, with a poster image underneath as fallback and CTA content always above it.
- Homepage hero is a custom slider surface, so it must not keep any legacy previous/next/dot/pause/play UI; only the background video and CTA should remain visible.
- Main navigation URLs should read like named destinations instead of bare fragments, while still behaving like smooth section navigation on the homepage.
- Homepage hero video must use the full native video file, not YouTube or a short trimmed loop, with a poster fallback, muted autoplay, loop, playsInline, no controls, pointer-events disabled, and dark overlay/content stacking above the video.
- Homepage hero may use a separate mobile-specific native MP4 on small screens, but desktop must keep the desktop full-length hero video and both versions must remain muted, looping, no-controls background media.
- The About section can carry its own background image when supplied, but the image must stay scoped to that section only and use a strong overlay so the copy remains clear and tactical.
- Mobile header navigation should stay visually locked beneath the sticky header while scrolling, without clipping through the bar, and homepage hero video overlays should preserve the footage closer to its natural brightness.
- Section background images must resolve through the deployed site base path, not raw root-relative URLs, so homepage imagery still appears correctly on GitHub Pages.
- About section imagery must be optimized for mobile as well as desktop, using the content-config mobile background path and mobile-specific crop/readability styling.
- Homepage hero video should keep the poster visible until video playback is actually ready, and should prefer native media-based source selection for mobile versus desktop when separate MP4 assets exist.
- Homepage hero video may use external Cloudflare R2 public MP4 URLs for desktop and mobile, but it must remain native HTML5 video with poster-first loading, hidden controls, pointer-events disabled, and the CTA plus dark overlay layered above it.
- Homepage hero poster should use the latest uploaded WebP fallback asset, preload at high priority, and remain visible until the R2 video can actually play, including during stalls or load errors.
- Header auth changes to a My Account dropdown after frontend sign-in/register state is active.
- Full-page navigation routes must start at the top of the page instead of preserving the previous scroll position.

## Responsive Design Rules

- Header collapses to mobile menu.
- Hero, cards, forms, gallery, rules, contact, and footer stack cleanly on small screens.
- Header actions, slider controls, event banners, Sign In page, and Create Account form must stay mobile responsive.
- Text must not overlap or overflow containers.
- Logo remains aligned in top-left on mobile.

## Image/Lightweight Design Rules

- Main priority: every site image must be planned and implemented for both desktop and mobile, including source choice, crop/position, aspect ratio, file weight, and readability overlays.
- Avoid large decorative image backgrounds.
- Prefer CSS texture, gradients, and lightweight placeholder images.
- Gallery paths should prefer WebP/AVIF.
- Gallery images use lazy loading.
- Logo PNG is acceptable because it is user-replaceable brand asset.
- Background and hero images must provide a mobile-specific path or explicit mobile crop/position rules before a change is considered complete.

## Backend-Ready Section Design Rules

- Every major visible section must render from typed content/config data.
- Components must accept props, not own hard-coded data.
- Admin/backend can later replace data for nav, hero, about, events, registration fields, gallery, rules, contact, footer, CTA buttons, and assets.

## Deployment Design Rules

- GitHub Pages path must use Vite base `/Mstar-Airsoft-Website/`.
- Asset references must remain compatible with repository-scoped GitHub Pages hosting.
- Deployment changes must not alter visual direction or add heavy assets.
- Workflow must use Node 24 and Pages artifact deployment from `./dist`.
- Keep deployment workflow working under `.github/workflows/deploy.yml`.
- After pushing, confirm live site URL: `https://cynicalfocus123.github.io/Mstar-Airsoft-Website/`.

## Automatic Workflow Rules

- For every completed design update, layout fix, content update, style update, deployment update, or normal repo change, commit and push automatically.
- Do not ask for approval before normal GitHub commit or push.
- Normal frontend changes, style changes, image optimization, README updates, memory file updates, and deployment workflow fixes are approved by default.
- Stop and ask only before serious destructive actions: deleting the repo, deleting major project files, force-pushing, rewriting Git history, removing deployment, exposing secrets, or changing production credentials.

## Project Memory Rules

- Always update `AGENT.md` and `DESIGNER.md` for every design change or fix.
- Add a short changelog entry before commit.
- Commit memory files with the related code/design change.

## Token And Do-Not-Repeat Rules

- Use fewer tokens and summarize results only.
- Do not dump large logs.
- Use capped output for large commands.
- Do not ask repeated approval questions for the same workflow.
- Do not redo completed work.
- Do not rebuild the whole site unless the task requires it.
- Do not change the GitHub repo remote unless needed to fix push problems.

## Do-Not-Break Visual Rules

- Do not add Shop.
- Do not make a light theme.
- Do not switch to generic template look.
- Do not add copied American Milsim assets or wording.
- Do not use huge unoptimized images.
- Do not hide or move logo away from top-left.
- Do not make registration look connected to backend before backend exists.

## Changelog

- 2026-05-17: Established tactical visual system, responsive rules, logo/header/footer constraints, lightweight image strategy, and backend-ready design rules for initial site build.
- 2026-05-17: Confirmed build-readiness work did not change visual rules; kept logo and gallery asset paths compatible with Vite.
- 2026-05-17: Kept generated artifacts out of source control so deployed design stays lightweight and maintainable.
- 2026-05-17: Added GitHub Pages deployment requirements and confirmed repo-scoped base path keeps assets deploy-safe.
- 2026-05-17: Updated deployment workflow rules for Node 24 and GitHub Pages enablement without changing site design.
- 2026-05-17: Added permanent automatic commit/push, approved normal change, project memory, token-saving, and do-not-repeat design workflow rules.
- 2026-05-17: Updated brand direction to black/white/gold, added transparent logo visibility rules, homepage slider, event banner hover design, auth page layouts, and lighter footer treatment.
- 2026-05-17: Revised header/footer to grey treatment and removed logo background plates so the transparent MSTAR logo displays directly.
- 2026-05-17: Finished account dropdown/settings UX, event detail layout, clickable event banners, country/region form behavior, gold CTA consistency, and responsive refinements for account, banner, and event surfaces.
- 2026-05-17: Corrected Events page card scale, moved event details below each image, added account Logout, fixed Home/logo top navigation behavior, tightened event detail title wrapping, and switched country/region dropdowns to maintained subdivision data.
- 2026-05-17: Added homepage video hero treatment, right-aligned slider copy, removed displayed Teams rows, removed homepage registration form, renamed Tournament Schedule to Game Schedules, and retargeted Join Tournament to the Events page.
- 2026-05-17: Removed remaining image-slider controls from the homepage hero, made the video path deployment-safe, simplified attendance display to numeric player counts, and kept users on their return page after auth.
- 2026-05-17: Removed homepage video hero text overlay and retained only the Sign Up Now CTA over autoplaying looped video.
- 2026-05-17: Fixed route navigation scroll behavior so new pages open from the top while homepage section links still work.
- 2026-05-17: Repositioned homepage video hero CTA to bottom-center and optimized its mobile tap target.
- 2026-05-17: Added a responsive white cart/checkout design for event registration with auth prompts, event summary, editable shipping/billing sections, yellow EDIT controls, and credit card payment fields.
- 2026-05-17: Corrected the homepage video hero CTA layer so the Sign Up Now button stays bottom-center across desktop and mobile layouts.
- 2026-05-17: Changed the homepage hero video to the provided YouTube embed with hidden controls, muted autoplay, eager loading, and a non-clickable player surface so no play button appears.
- 2026-05-17: Updated the event checkout visual treatment to remove boxed text sections, add divider-led content blocks, and present event details and pricing in a right-side summary layout.
- 2026-05-17: Refined the checkout summary sidebar typography so heading, event title, price, and total lines stay aligned within the panel without overflow.
- 2026-05-17: Upgraded the homepage YouTube hero layering so the embed works as a background video with poster fallback, cover-fit iframe positioning, hidden interactivity, and proper overlay/content stacking.
- 2026-05-17: Cleared remaining legacy custom-slider control styling from the homepage hero so no carousel or player buttons appear over the background video.
- 2026-05-17: Cleaned up main menu and footer link URLs by moving homepage section navigation to named hash routes like `#/about` and `#/contact`.
- 2026-05-17: Replaced the homepage YouTube hero with a native full-length MP4 background, poster image, no player controls, disabled video interaction, and preserved dark overlay plus CTA layering.
- 2026-05-17: Added a mobile-only homepage hero video source so small screens use the supplied mobile clip while desktop keeps the existing full hero video.
- 2026-05-17: Added a section-specific background image treatment to the homepage About block using the supplied AVIF with an overlay for readability.
- 2026-05-17: Refined the mobile header menu into a fixed under-header drawer and lightened the homepage hero video overlay so the desktop and mobile footage reads less dark.
- 2026-05-17: Replaced the About section background with the supplied WebP and fixed its base-path image URL handling for deployed rendering.
- 2026-05-17: Added mobile-specific About image handling and promoted desktop/mobile image optimization to a main design priority for every image going forward.
- 2026-05-17: Improved the homepage hero media loading with a persistent poster fallback and native browser source selection for mobile and desktop video assets.
- 2026-05-17: Connected the homepage hero desktop and mobile videos to Cloudflare R2 public MP4 URLs and added browser connection hints for both media domains.
- 2026-05-17: Replaced the homepage hero fallback poster with the uploaded WebP and strengthened the no-blank-frame fallback behavior around hero video loading.
