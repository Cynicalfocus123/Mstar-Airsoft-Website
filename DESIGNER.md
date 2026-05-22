# DESIGNER.md

## Design Direction

- Bold military/tactical tournament site.
- Dark base with red, white, black, and military green accents.
- Professional event-operations feel, not generic landing page.
- First screen must show actual Mstar Airsoft brand signal and tournament CTA.
- `DESIGNER.md` must be updated alongside `AGENT.md` whenever design, layout, media behavior, navigation behavior, responsive behavior, or visual decisions change.

## Reference Site Notes

- Use `https://americanmilsim.com` only for visual inspiration: dark tactical mood, strong header, boxy cards, bold buttons, dense event sections, footer structure.
- Do not copy content, brand wording, images, logo, layout exactly, or copyrighted assets.

## Header Rules

- Logo stays top-left.
- Use the transparent MSTAR Airsoft logo from `src/assets/mstar-airsoft-logo.png`.
- Do not place the logo on a yellow or solid background plate.
- Header background should be grey/dark grey so transparent artwork is visible directly.
- Header navigation: Home, About, Events, Products, Things to Know, Rules, Gallery, Contact.
- Header includes Login and Sign Up actions.
- No Shop link.
- Mobile menu must remain responsive and easy to tap.
- Navigation must come from config/data.

## Footer Rules

- Grey footer treatment with logo/name, quick links, contact info, social placeholder.
- Footer logo must stay clearly visible with transparent artwork.
- Do not place footer logo on a yellow or solid background plate.
- Footer links must come from config/data.
- Footer link groups should stack vertically inside roomy columns with enough spacing for longer labels and travel-guide sections.
- Footer must include a clearly linked FAQ destination and collapse into an easy-tap vertical stack on mobile.
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
- Homepage splash banner should remain the native background-video treatment with poster fallback and centered CTA unless the user explicitly asks to replace the splash banner itself.
- The separate Home intro section directly under the splash banner may be replaced with a standard responsive YouTube player, and that embed should be interactive, device-safe, and should not change the splash banner or header treatment.
- Homepage must place a clearly visible Package Offer section above Game Schedules, and the offer card should follow the same tactical event-card language while staying easy to scan on desktop and mobile.
- Package Offer cards should prioritize the price and stay length as equal-size headline values, with supporting perks visually reduced so the card reads cleanly at a glance.
- Package Offer value lines should stay modern and medium in scale, without extra inner boxes around the price or stay-length text.
- FAQ and travel-guide pages should use the same tactical banner-card language as the Events page, but without event-only metadata like date, location, entry fee, teams, or attendance.
- Header auth changes to a My Account dropdown after frontend sign-in/register state is active.
- Full-page navigation routes must start at the top of the page instead of preserving the previous scroll position.
- The Things to Know page should use the supplied travel/equipment imagery on its first three cards, then continue the same tactical card system for added placeholder guides like Rules & Regulation, Accommodation & Campground, and Activity.
- Data-driven images used by Things to Know, event detail, checkout, and gallery surfaces must resolve through the deployed Vite base path so GitHub Pages always shows the intended artwork.
- The Things to Know hero copy should center cleanly on desktop and mobile, and legal/support pages like Terms & Conditions, Privacy, and Complaints should use readable long-form dark panels with strong spacing and mobile-safe typography.
- Legal/support page hero headers must not use oversized event-style display text; they should use a tighter legal-page scale with properly aligned eyebrow, title, and summary across desktop, tablet, and mobile.
- The first three Things to Know cards should behave like real guide entry points, linking into full responsive detail pages that use the same long-form dark-panel reading treatment as other structured info pages.
- The main Things to Know landing page should use a smaller centered title than event/legal hero pages, and every card CTA should read Open Guide with the CTA row locked to a consistent bottom alignment across the grid.
- All six Things to Know cards should ultimately route to dedicated guide pages; rules, campground, and activities pages should use the same dark long-form reading layout as the other guide pages and remain comfortable on mobile.
- Guide pages may include responsive supporting image grids inside content sections when supplied, and the Activities page should show the provided outdoor activity imagery directly beneath the Outdoor Adventure Activities section.
- When a dedicated Rules & Regulation guide page exists, the shared header and footer Rules navigation should link to that page instead of an older homepage anchor section.
- The homepage no longer needs a separate Rules and Safety section once the standalone Rules & Regulation guide page is in place; that content should live off the homepage to keep the main landing flow cleaner.
- Footer travel-planning labels should match the live guide pages, including Immigration Visa and Ship Your Equipment, and should avoid obsolete footer links like Thailand laws once the main Things to Know guides are in place.
- The homepage Package Offer card may list included stay perks as compact rows beneath Food Court, including 2 Person Tent and Camping Equipment when requested.
- The homepage does not need a separate Contact section when footer contact details remain visible; removing it should keep the landing page cleaner without losing basic contact access.
- The homepage hero should no longer show the Join Tournament CTA if only View Events remains, and the Package Offer section should center its heading and offer card cleanly on desktop while staying comfortable on tablet and mobile. The last three Things to Know cards should use the supplied regulation, campground, and activity imagery instead of generic placeholder banners.

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

- Highest priority workflow rule: after every completed normal site change, update `AGENT.md` and `DESIGNER.md` and push the finished work immediately.
- For every completed design update, layout fix, content update, style update, deployment update, or normal repo change, commit and push automatically.
- Do not ask for approval before normal GitHub commit or push.
- Normal frontend changes, style changes, image optimization, README updates, memory file updates, and deployment workflow fixes are approved by default.
- Stop and ask only before serious destructive actions: deleting the repo, deleting major project files, force-pushing, rewriting Git history, removing deployment, exposing secrets, or changing production credentials.

## Project Memory Rules

- Always update `AGENT.md` and `DESIGNER.md` for every design change or fix.
- Treat memory-file updates plus commit/push as part of completion, not as optional cleanup.
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
- 2026-05-20: Expanded header navigation, rebuilt the footer into taller vertical link columns, and added placeholder FAQ and Thailand-planning pages using event-inspired banner cards without event metadata.
- 2026-05-20: Added a Package Offer section above the homepage Game Schedules block with a single tactical offer card for price, stay length, live music, and food court perks.
- 2026-05-20: Rebalanced the Package Offer card typography so the price and stay length dominate while the perk lines step back visually.
- 2026-05-20: Removed boxed value styling from the Package Offer card and shifted the price and stay length to a cleaner medium-size treatment.
- 2026-05-22: Replaced the first three Things to Know placeholder banners with the supplied visa, transport, and equipment images and extended the page with three more tactical placeholder guide cards.
- 2026-05-22: Fixed data-driven image rendering to respect the repo-scoped GitHub Pages base path across info, event, checkout, and gallery surfaces.
- 2026-05-22: Added footer legal/support links and introduced a responsive long-form legal page treatment for Terms & Conditions, Privacy, and Complaints while centering the Things to Know hero tagline.
- 2026-05-22: Refined the legal/support hero headers to a smaller aligned responsive layout so long titles like Terms & Conditions do not overwhelm the page.
- 2026-05-22: Connected the first three Things to Know cards to dedicated travel and equipment guide pages with mobile-friendly long-form layouts and clearer guide-style card labels.
- 2026-05-22: Reduced the Things to Know index hero scale and aligned all card CTA buttons to a consistent Open Guide baseline.
- 2026-05-22: Added dedicated long-form guide pages for rules, campground, and activities, and connected the remaining Things to Know cards to live guide routes.
- 2026-05-22: Added a responsive two-column activity image grid to the Activities guide section, stacking cleanly on mobile and keeping the same dark editorial reading style.
- 2026-05-22: Pointed the header and footer Rules navigation to the standalone Rules & Regulation guide page for consistency.
- 2026-05-22: Removed the homepage Rules and Safety section so the landing page stays tighter while rules remain available through the dedicated guide page.
- 2026-05-22: Updated the footer travel-planning links to match the live guide-page naming and removed the Thailand laws footer entry.
- 2026-05-22: Extended the homepage Package Offer perk list with 2 Person Tent and Camping Equipment under Food Court.
- 2026-05-22: Removed the homepage Contact section so the main landing flow stays tighter while contact details remain in the footer.
- 2026-05-22: Removed the hero Join Tournament button, centered the homepage Package Offer presentation, and replaced the remaining Things to Know card artwork with the supplied regulation, campground, and activity images.
- 2026-05-22: Swapped the homepage hero from native background video to a responsive YouTube embed player with a touch-safe CTA placement below the video frame.
- 2026-05-22: Elevated automatic memory updates plus immediate commit/push to the highest-priority normal workflow rule.
- 2026-05-22: Restored the homepage splash banner to native video and replaced only the lower Home intro section with a responsive YouTube player.
- 2026-05-22: Updated the homepage About section messaging to focus on the large-scale festival experience, rainforest battlefield setting, and entertainment-led activity highlights.
- 2026-05-22: Removed the top-header Contact navigation item while preserving footer contact access and the rest of the site structure.
- 2026-05-22: Turned the footer What to Do in Thailand link into a real guide page using the long-form travel layout and the available local waterfall artwork.
- 2026-05-22: Tightened the homepage About-section headline scale, width, and wrapping so the long festival message reads cleanly across all device sizes.
- 2026-05-22: Expanded the What to Do in Thailand page with four additional destination sections and added more scenic imagery using the existing local travel/activity assets.
- 2026-05-22: Reduced the homepage About-section title to a much smaller non-display heading scale so the long festival message reads more like a supporting H3/H4 across devices.
