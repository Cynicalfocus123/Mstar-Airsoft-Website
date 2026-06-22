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
- Header navigation: Home, About, Events, Ticket, Things to Know, Rules, and Gallery.
- Header does not display Login or Sign Up actions.
- Header Gallery remains visually present but should not navigate to `/gallery` until the route is ready.
- No Shop link.
- Mobile menu must remain responsive and easy to tap.
- Navigation must come from config/data.

## Footer Rules

- Grey footer treatment with logo/name, quick links, contact info, social placeholder.
- Footer logo must stay clearly visible with transparent artwork.
- Do not place footer logo on a yellow or solid background plate.
- Footer links must come from config/data.
- Footer link groups should stack vertically inside roomy columns with enough spacing for longer labels and travel-guide sections.
- Footer should collapse into an easy-tap vertical stack on mobile.
- Footer does not display FAQ.
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
- Ticket page payment controls must remain inside their dark tactical cards, below all card copy and feature rows. Stripe Buy Button web components use full-width constrained wrappers so they cannot overflow on desktop, tablet, or mobile.
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
- Event registration checkout uses a clean white cart layout with bold headers, clear event summary, yellow EDIT buttons, and editable shipping/billing sections. The static preview must not collect card numbers or CVVs; live payments remain limited to the existing Stripe Buy Buttons until a secure backend/payment flow is connected.
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

- Standard production builds now use Vite base `/` for the live cPanel root domain.
- Do not allow cPanel redeploy builds to reference `/Mstar-Airsoft-Website/` asset paths.
- cPanel/TMDHosting builds use `npm run build:cpanel` with root-safe `/assets/`, `/images/`, and `/videos/` paths for `https://mstarairsoft.com`.
- cPanel deployment includes `.htaccess` SPA fallback and security headers/CSP without changing the visible design. Native HTML5 splash/Game Terrain videos remain local or restricted to the two approved R2 hosts, and iframe usage remains limited to the approved Thai/English YouTube cards plus Stripe's payment component.
- Deploy only `dist` contents; do not package source, project memory, credentials, local editing projects, dependencies, or source maps.
- Asset references must remain compatible with repository-scoped GitHub Pages hosting.
- Deployment changes must not alter visual direction or add heavy assets.
- Workflow must use Node 24 and Pages artifact deployment from `./dist`.
- Keep deployment workflow working under `.github/workflows/deploy.yml`.
- After pushing, confirm live site URL: `https://cynicalfocus123.github.io/Mstar-Airsoft-Website/`.
- README deployment and changes sections should keep direct GitHub Pages preview links for key pages so the GitHub repo exposes the page URLs without hunting through workflow output.

## Live cPanel Deployment Rule Update

- Live domain: `https://mstarairsoft.com`
- TMDHosting cPanel document root: `/home/mstarhol/mstarairsoft.com`
- cPanel displays the document root as `/mstarairsoft.com`
- DNS is already fixed.
- HTTPS/SSL is already working.
- cPanel document root is already correct.
- `.htaccess` routing and HTTPS redirect are already working.
- Do not redo DNS, SSL, AutoSSL, cPanel domain setup, or hosting setup.
- Do not deploy anything unless the user specifically asks: `prepare cPanel ZIP` or `make deployment ZIP`.
- Do not create a deployment ZIP unless the user specifically asks: `prepare cPanel ZIP` or `make deployment ZIP`.
- Do not add HSTS unless the user specifically asks. SSL was recently fixed, so keep HSTS disabled for now.
- Live-site changes must be committed and pushed to GitHub for review before any real server/cPanel deployment. Do not upload to cPanel or create a cPanel ZIP unless the user specifically asks `prepare cPanel ZIP` or `make deployment ZIP`.

### Future CSS/Design Update Workflow

When the user asks for future CSS/design changes:

1. Only edit the requested CSS/layout/design files.
2. Do not change working routes, page links, buttons, Stripe button, login/signup behavior, or content unless the user specifically requests it.
3. Keep desktop, tablet, and mobile responsive behavior safe.
4. After edits, run `npm run build`.
5. Only when the user asks for a deployment ZIP, create a cPanel-ready ZIP.
6. The ZIP must extract directly into `/mstarairsoft.com`.

### Future cPanel ZIP Structure

Correct ZIP root structure:

- `index.html`
- `assets/`
- `images/`
- `videos/`
- `.htaccess`

Wrong ZIP structure:

- `dist/index.html`
- `dist/assets/`
- full source project
- `node_modules/`
- `.git/`
- `src/`

Very important: deployment ZIPs must contain the contents of `dist`, not the `dist` folder itself.

Use this production `.htaccess` for future deployment ZIPs unless the user specifically asks to change it:

```apache
DirectoryIndex index.html
Options -Indexes -MultiViews

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Force www to non-www root domain
  RewriteCond %{HTTP_HOST} ^www\.mstarairsoft\.com$ [NC]
  RewriteRule ^ https://mstarairsoft.com%{REQUEST_URI} [L,R=301]

  # Force HTTP to HTTPS
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://mstarairsoft.com%{REQUEST_URI} [L,R=301]

  # Allow real files/folders to load normally
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Static app fallback for inner pages
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://checkout.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' blob: https:; font-src 'self' data:; connect-src 'self' https://api.stripe.com https://checkout.stripe.com https://js.stripe.com; frame-src 'self' https: data: blob:; child-src 'self' https: data: blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://checkout.stripe.com; frame-ancestors 'self'; upgrade-insecure-requests"
</IfModule>

<FilesMatch "(\.env|\.log|\.map|\.md|\.ts|\.tsx)$">
  Require all denied
</FilesMatch>
```

When the user asks for a future deployment ZIP, report:

1. Exact ZIP filename.
2. Confirmation that ZIP root contains `index.html`, `assets/`, and `.htaccess`.
3. Confirmation that ZIP does not contain parent `dist/` folder.
4. Files changed.
5. Quick test checklist:
   - `https://mstarairsoft.com/`
   - `https://mstarairsoft.com/ticket`
   - `https://mstarairsoft.com/events`
   - `https://mstarairsoft.com/rules-and-regulation`
   - `https://mstarairsoft.com/gallery`

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

- 2026-06-15: Footer Gallery remains visually present in the Site Links column but no longer navigates to `/gallery` or a broken/403 page. Header Gallery keeps the same safe non-navigating behavior. Both desktop and mobile navigation keep their existing visual styling.

- 2026-06-15: Activity heading alignment now follows the intended three-line structure: `ACTIVITIES` / `&` / `ENTERTAINMENT EXPERIENCE`, with the ampersand visually centered and responsive across desktop, tablet, and mobile without overflow.

- 2026-06-15: Rules & Regulation no longer shows the removed intro description, while its title and useful rules content remain. Complaints Contact Information now includes a clickable `support@mstarairsoft.com` email link. Event cards remain visually unchanged, but TBA event cards are non-navigating for now on both the homepage and Events page. Live cPanel builds continue to use root `/assets/` paths.

- 2026-06-15: Refined the live guide/navigation update for desktop, tablet, and mobile. Activity now starts directly with its content after the intro/header removal, keeps the remaining `Activities & Entertainment Experience` section heading responsive with the `&` visually centered, and uses the exact uploaded ATV Ride image asset. How to Get to the Event, Immigration Visa, and Equipment no longer show unnecessary intro/header description blocks.

- 2026-06-15: Accommodation & Campground content now sits directly on the main dark page background instead of boxed panels. Its `Accommodation & Campground Experience` heading has been reduced to a better aligned H2-like scale while preserving the premium tactical typography and readable long-form spacing.

- 2026-06-15: Header and footer navigation were simplified for the live site: Footer no longer displays FAQ, Header no longer displays Login or Sign Up, and Header Gallery remains visually present while safely doing nothing instead of navigating to a broken/403 route. Live cPanel builds continue to require root `/assets/` paths.

- 2026-06-15: Updated the production build base for cPanel redeploys so generated `index.html` points to root-domain `/assets/...` files instead of the old GitHub Pages `/Mstar-Airsoft-Website/assets/...` path. The redeploy export keeps the existing live `.htaccess` behavior, includes only deployment-ready built files and required public asset folders, and does not change DNS, SSL, hosting, document root, routes, content, Stripe, or header/footer design.

- 2026-06-15: Legal, support, and guide long-form pages now use the main dark tactical page background directly instead of boxed text panels. Terms & Conditions, Privacy, Complaints, Ship Your Equipment/Equipment, How to Get to the Event, Immigration Visa, Activity, and Contact keep a readable max-width, comfortable line-height, strong white headings, muted body text, clean aligned lists, and safe desktop/tablet/mobile padding without heavy borders or card containers.

- 2026-06-15: Updated the Activity page so Zip Line no longer appears as an image, caption/title, bullet, or content entry. The remaining activity media reflows cleanly with Waterfall and the other activity content intact. On desktop, the Activity heading now centers the `&` between `Activities` and `Entertainment Experience` while preserving bold tactical typography and responsive scaling.

- 2026-06-15: Added a dedicated Contact page that uses the same unboxed long-form page treatment instead of cards or panels. It includes the requested intro copy plus clickable mail links for General Inquiry, Support and Issues, and Media and Press. The footer Contact link now routes to the dedicated Contact page through the existing data-driven footer navigation. Future cPanel deployment ZIPs remain blocked unless explicitly requested.

- 2026-06-15: Prepared the cPanel production package without visual redesign. All internal navigation now uses clean live URLs like `/`, `/ticket`, `/events`, `/rules-and-regulation`, and `/contact` instead of hash routes, while preserving the existing header, footer, hero, cards, buttons, media, spacing, and responsive layout. The cPanel ZIP was built from production output contents only, with root-level `index.html`, `.htaccess`, assets, images, and videos. The `.htaccess` file provides HTTPS redirect and SPA fallback so direct clean-route visits keep the existing React page designs intact after upload.

- 2026-06-15: Replaced only the homepage splash/header video asset with `force-of-conquest-header-compress-video.mp4`. The hero keeps the exact existing class names, crop/object-fit behavior, height, poster fallback, overlay, CTA, typography, spacing, and responsive composition. Desktop, tablet, iPhone/mobile Safari, and Android continue using the same muted looping inline native-video treatment, now from one local MP4 with metadata preload.

- 2026-06-15: Renamed the Ticket package to Pre Sale and the €69 add-on to Camping Experience, and updated only their Stripe Buy Button targets. Both controls retain the existing shared centered wrapper, proven 360px host cap, bottom-of-card placement, and responsive desktop/tablet/mobile/mobile-desktop containment. Ticket/add-on pricing, supporting copy, features, spacing, colors, borders, and page layout remain unchanged.

- 2026-06-15: The Events page Force of Conquest card now uses the supplied official `1793x798` event artwork and routes the entire card directly to the internal Ticket page for registration. The image keeps its native ratio with `object-fit: contain`, a dark backing surface, minimal overlay, and disabled hover zoom so the logo, event title, date, and Thailand text remain visible across desktop, tablet, and mobile. The Rules & Regulation page now places its long-form text directly on the existing dark tactical page background instead of inside boxed panels; it retains a comfortable 900px reading width, strong white headings, muted body copy, aligned bullets, normal section spacing, subtle gold dividers, and mobile-safe page padding.

- 2026-06-15: Removed the homepage Package Offer section so the page now moves directly from About to Events without blank spacing. The centered splash CTA now reads `Get Ticket Now` and links through the existing internal route to the Ticket page. Ticket keeps one centered dark Early Bird card, and its feature rows now show only Live Music and Food Court; 2 Person Tent and Camping Equipment were removed. The large Ticket title is centered with responsive clamp sizing across desktop, tablet, and mobile, while the card retains its controlled desktop width, comfortable tablet spacing, safe mobile gutters, and existing centered Stripe button.

- 2026-06-15: Homepage Package Offer and the Ticket page now each show one centered Early Bird ticket card instead of separate €120 and €160 cards. The removed €160 General/Regular ticket no longer renders. The remaining card emphasizes `€120.00 EURO` in gold, shows `(Original Price €160.00 EURO)` as smaller secondary text, includes `Expire November 20, 2026`, `3 Days / 2 Nights`, Live Music, Food Court, 2 Person Tent, and Camping Equipment, and retains the Ticket page Early Bird Stripe button. Desktop uses controlled 520px/560px card caps, tablet remains centered with comfortable spacing, and mobile uses near-full width with safe padding and no overflow.

- 2026-06-15: Hardened the frontend and cPanel deployment without changing the tactical visual system, published Ticket/Package content, homepage splash treatment, Game Terrain card design, language-video content, navigation labels, About section, branding, colors, or layout. Approved media and navigation values now pass strict URL/path allowlists; native HTML5 videos remain deployment-safe; only approved language cards use YouTube iframes. Removed backendless card/CVV inputs from the white event-checkout preview and replaced them with a disabled, honest payment-status message. Added cPanel root paths, SPA fallback, security headers/CSP, source-map exclusion, and Vite 8 dependency hardening.

- 2026-06-15: Updated all three Events page cards to display `€160.00 EURO` instead of `$160.00 USD`, without changing event-card layout, hierarchy, or any unrelated pricing surfaces.

- 2026-06-15: Simplified the feature lists on the homepage $120/$160 Package Offer cards and Ticket page €120/€160 cards by removing `2 Person Tent` and `Camping Equipment`. Both card groups now show only `Live Music` and `Food Court`, without changing card styling or the separate camping add-on.

- 2026-06-15: Removed the homepage eyebrow labels above About, Package Offer, and Game Terrain. On desktop only, constrained the About headline to a narrower left-aligned text column with tighter controlled sizing so the long festival message wraps in a compact horizontal block like the supplied mobile-desktop reference; existing tablet/mobile typography remains unchanged.

- 2026-06-15: Removed the word `ZIP-LINE` from the homepage About activity highlight and updated both TBA Events cards to display a `$160.00 USD` entry fee. No event-card styling, layout, or unrelated guide content changed.

- 2026-06-15: Updated only the Ticket page price labels to euro formatting: Pre Sale now displays `€120.00 EURO` and General Ticket displays `€160.00 EURO`. No other card copy, payment control, or styling changed.

- 2026-06-15: Removed the Pre Sale `2027` line and standardized all three Ticket page payment controls on one identical Stripe wrapper class. General Ticket no longer has a separate alignment class, preventing wrapper behavior from diverging between Pre Sale, General Ticket, and Extra Camping Gears across mobile-desktop views.

- 2026-06-15: Corrected the visible Stripe simple-button offset by capping each Stripe custom-element host at its actual 360px button width instead of 560px. This keeps Pre Sale and Extra Camping Gears visually centered like General Ticket across desktop and mobile while preserving the full-width centered wrapper and safe card padding.

- 2026-06-15: Updated only Ticket page copy by removing the General Ticket date line and replacing the Extra Camping Gears description with `Add additional camping set.` All card styling, prices, perks, payment controls, and responsive behavior remain unchanged.

- 2026-06-15: Refined only Ticket page Stripe control alignment across desktop, tablet, standard mobile, and iPhone Safari mobile-desktop sizing. Wrappers now center against the full card width with symmetric responsive padding and a 560px cap; existing ticket/add-on cards use border-box flex columns and gain safe small-screen side padding without changing content or visual direction.

- 2026-06-15: Removed the `To Be Announced Soon` detail line from the Pre Sale Ticket card. Its remaining date/year, stay length, price, perks, payment control, and visual styling remain unchanged.

- 2026-06-15: Simplified only the Ticket page hero by removing the `Stay and Play` eyebrow and its package/camping description. The Ticket title and all ticket/add-on card content and payment controls remain unchanged.

- 2026-06-15: Added the dedicated `general-ticket-button-wrap` class to the existing General Ticket Stripe embed while preserving the shared centered responsive wrapper, correct Buy Button ID, and all other Ticket page content and styling.

- 2026-06-15: Preserved the established centered, responsive Stripe wrapper and changed only the General Ticket payment target to buy-button ID `buy_btn_1TiGSe5Kev5Ia2RiIXVYRKHY`. Pre Sale, Extra Camping Gears, card copy, pricing, colors, feature lists, and page structure remain unchanged.

- 2026-06-14: Refined only the Ticket page Stripe payment alignment. Every Stripe Buy Button now sits in a full-card-width flex wrapper, is centered horizontally, scales up to 360px, retains safe card padding on mobile, and remains bottom-aligned within the existing flex-column ticket and add-on cards. No text, pricing, colors, features, navigation, or page layout changed.

- 2026-06-14: Updated only the Ticket page card content and payment area. The two package cards are now Pre Sale and General Ticket, each retaining its existing price/details/features hierarchy with a responsive Stripe Buy Button anchored at the bottom inside the card. Replaced the three small camping add-on cards with one centered Extra Camping Gears card showing €69 EURO, short supporting copy, and its own contained Stripe Buy Button. The Stripe script loads once at page level; no header, footer, homepage, or unrelated section styling changed.

- 2026-06-14: Updated Force of Conquest card and detail copy to describe an intense, realistic large-scale airsoft combat experience in jungle terrain, replacing the unrelated urban qualifier language without changing layout or styling.

- 2026-06-14: Updated event location content so Force of Conquest displays Mstar Jungle Land and both future TBA cards display TBA, with all existing card styling and responsive behavior preserved.

- 2026-06-14: Reduced the Events collection to three cards and removed the Load More control. The second and third cards now use TBA instead of operation names, omit their descriptive operation copy, and show attendance as 2000+, while retaining the existing tactical card styling and responsive grid.

- 2026-06-14: Renamed the first homepage event card to Force of Conquest and updated it to Jan 8-10, 2027 and $160.00 USD. The next two cards now show 2027, $120.00 USD, and To Be Announced Soon. The Ticket page presents the same date/price hierarchy in its Normal Ticket and Early Bird cards without changing card styling or responsive behavior.

- 2026-06-13: Extended the Beautiful Scenery Game Terrain card from the optimized 8-second excerpt to the complete 24.945-second land drone video. The card retains the same cinematic framing, poster, responsive layout, silent native autoplay loop, and lightweight VP9 delivery.

- 2026-06-13: Replaced the homepage Gallery with Game Terrain, using four large native HTML5 video cards for Forest Movement, Large Open Area, Beautiful Scenery, and Fun Combat Terrains. The optimized videos behave as silent GIF-style loops with autoplay, muted, loop, playsInline, metadata preload, poster fallbacks, no controls, and no audio. Desktop and tablet use a premium editorial heading plus large two-column cinematic cards with restrained dark readability overlays; mobile uses tactical list cards with video left and copy right; screens below 360px stack video above copy. The section stays within the Mstar dark charcoal, gold, military green, white, and muted-grey language with thin borders and bold boxy typography. No YouTube, Vimeo, iframe player, real GIF, external branding, or heavy video library is used.

- 2026-06-13: Tightened vertical spacing inside the Ticket page Early Bird and Normal Ticket cards. Titles now keep their natural height with no inherited 64px minimum or oversized vertical margins; divider, price, date/stay details, and feature rows are grouped with compact responsive spacing. The change is scoped to the Ticket package grid and remains overflow-safe across desktop, tablet, and mobile without altering homepage Package Offer cards or add-ons.

- 2026-06-13: Added Ticket to the main navigation and introduced a dedicated tactical dark/gold/white Ticket page. Its two primary cards show Early Bird and Normal Ticket packages side by side on desktop and stack on mobile; three smaller add-on cards show 2 Person Tent, Pillow / Blanket, and Matress in a three-column desktop row, two columns on tablet, and one column on mobile. The page reuses the homepage package-card visual system with thin gold borders, gold titles/prices, white supporting details, responsive `minmax()` grids, and overflow-safe text. Updated TH LANGUAGE to THAI LANGUAGE and removed the blocking custom play overlay/double-click activation logic so both parameterized YouTube iframes are directly interactive and play inline on the first tap while retaining the existing desktop 16:9 and taller mobile card proportions.

- 2026-06-13: Improved the mobile TH LANGUAGE and ENGLISH LANGUAGE video cards so the media remains the visual focus and accidental taps do not immediately interact with YouTube navigation. Standard phone widths keep two tactical cards side by side with compact gold labels and taller square media areas of at least 170px; screens below 360px stack the cards with 4:3 media and at least 200px height; tablet and desktop retain the balanced 16:9 two-column layout. Each embed now starts behind a centered, restrained tactical play control, stays non-interactive until deliberately activated, then plays inline using embed-only URLs with `rel=0`, `modestbranding=1`, and `playsinline=1`.

- 2026-06-13: Changed the separate homepage YouTube section to two responsive language video cards while preserving the native splash banner and surrounding homepage structure. The TH LANGUAGE card uses `VYv1pw_dM1Y`; the ENGLISH LANGUAGE card uses `c9EP32Ptv2Y`. Both use dark tactical surfaces, thin gold-accent borders, compact uppercase gold labels, and responsive 16:9 iframe wrappers. Desktop and tablet use a balanced two-card row; standard mobile widths retain two compact cards when space allows; screens below 421px stack the cards to prevent overflow. The polish follows premium card-layout principles through clear hierarchy, restrained spacing, grouped media, and responsive scaling without copying an external design or adding new decorative effects.

- 2026-06-13: Updated the homepage Package Offer section to use two balanced tactical cards: Early Bird at $120 ending November 20, 2026, and Regular Package at $160 for 3 Days / 2 Nights. Both retain the same four feature rows, display side by side on desktop, stack on tablet/mobile, and use responsive title/card sizing to prevent cropping or overflow. Replaced the separate homepage YouTube player with embed `VYv1pw_dM1Y` while preserving its existing frame styling.

- 2026-06-15: Added static SEO, route-aware metadata, JSON-LD structured data, `sitemap.xml`, and `robots.txt` for the live cPanel domain. This was a non-visual SEO update only: no backend was added, no DNS/SSL/cPanel hosting setup was changed, no deployment ZIP was created, and no design, layout, navigation, Stripe, video, or image presentation was changed.

- 2026-06-22: Added a premium tactical Ticket page registration guide above the first payment card, with a five-step card layout over the supplied airsoft background image, Thai/English registration form CTA buttons, and an Authorization of a Supervising Adult section. The new sections stack safely on mobile/tablet, preserve the existing Ticket cards and Stripe wrappers, leave the incomplete English authorization link disabled as link-pending, and were committed/pushed to GitHub for review with no cPanel ZIP or real server upload.

- 2026-06-23: Fixed GitHub Pages preview routing without changing the visual design by using a GitHub Pages-specific build base `/Mstar-Airsoft-Website/`, adding a generated `404.html` SPA fallback for clean routes like `/ticket`, and making the app router understand the repo base path. The live cPanel/root-domain build remains base `/`, and no cPanel ZIP, server upload, DNS/SSL, hosting, layout, Stripe, media, or content behavior changed.

- 2026-06-23: Fixed GitHub Pages preview link behavior without changing layout or content. Internal anchors now use a base-aware href helper so Ticket and other navigation links remain inside `/Mstar-Airsoft-Website/...` on GitHub Pages instead of opening the user-root `https://cynicalfocus123.github.io/ticket` URL, while cPanel/root-domain links remain unchanged.

- 2026-06-23: Added README Deployment Links and Changes page shortcuts for GitHub Pages preview URLs, including Home, Ticket, Events, Things to Know, and Rules & Regulation. This is a repo documentation/discoverability update only; no visual design, route behavior, cPanel ZIP, or server deployment changed.

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
- 2026-05-22: Removed the footer Contact column and tightened the footer into a cleaner two-column desktop layout while preserving the existing link groups.
- 2026-05-22: Expanded the What to Do in Thailand page with Kayaking and a Food & Entertainment section so the guide blends outdoor activities with venue recommendations.
- 2026-05-23: Updated the What to Do in Thailand guide to use the supplied Narong Waterfall, Haew Narok Waterfall, and Khun Dan Prakarn Chon Dam images from dedicated public travel-image assets.
- 2026-05-23: Updated the What to Do in Thailand guide again so Wat Maneewong, Pak Chong, Kaeng Khoi, and Wang Takrai National Park each use their supplied travel images.
- 2026-05-23: Updated the What to Do in Thailand guide again so Khao Yai, Kayaking, and the Food & Entertainment venues display the latest supplied imagery and corrected naming.
- 2026-05-23: Removed Products from the header/footer nav and regrouped the footer so About now sits under the renamed Mstar Airsoft link column.

