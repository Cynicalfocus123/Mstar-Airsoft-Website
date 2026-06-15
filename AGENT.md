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
- Vite production base path for the live cPanel root domain: `/`
- cPanel/TMDHosting production command: `npm run build:cpanel`
- cPanel output uses root-safe `/assets/`, `/images/`, and `/videos/` paths for `https://mstarairsoft.com`.
- `public/.htaccess` is copied into `dist` and provides SPA fallback, directory-index blocking, security headers, and a CSP limited to local assets plus the approved Stripe, YouTube, and Cloudflare R2 hosts.
- Production source maps are disabled. Deploy only the contents of `dist`; never include source, project memory, local media projects, credentials, `.env` files, Git metadata, or dependencies.
- Live URL format: `https://cynicalfocus123.github.io/Mstar-Airsoft-Website/`
- Workflow runs on pushes to `main` and manual dispatch.
- Workflow builds `dist`, uploads Pages artifact, then deploys GitHub Pages.
- Workflow opts JavaScript actions into Node 24 with `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`.
- Workflow uses Node 24 for project build.
- `actions/configure-pages@v5` uses `enablement: true` to handle repositories where Pages is not yet enabled.

On this Windows shell, use `cmd /c npm ...` if PowerShell script policy blocks `npm.ps1`.

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

- 2026-06-15: Fixed navigation dead links and page text cleanup for the live site. Files changed: `src/components/Footer.tsx`, `src/components/Events.tsx`, `src/components/EventsPage.tsx`, `src/components/InfoPage.tsx`, `src/data/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Footer Gallery link remains visually present but now prevents default click behavior, so it does not navigate to `/gallery`, reload, or open a 403. Header Gallery link behavior was confirmed still guarded the same way and safely does nothing on click.
- Activity heading alignment was refined across desktop, tablet, and mobile by centering the three-line `ACTIVITIES / & / ENTERTAINMENT EXPERIENCE` block with responsive width and safe overflow handling.
- Rules & Regulation intro description text `Official gameplay, safety, chronograph, and conduct requirements for MSTAR Airsoft - Force of Conquest.` was removed while keeping the page title and content below.
- Complaints page Contact Information now includes a clickable `support@mstarairsoft.com` mailto link. No backend form was added.
- Homepage TBA event boxes and Events page TBA event boxes now render as non-navigating static cards, while the Force of Conquest ticket card keeps its `/ticket` link. Event text, Ticket page/payment behavior, Stripe buttons, Game Terrain, language video cards, DNS/SSL/cPanel setup, and unrelated header/footer links were not changed.
- Vite/cPanel base path confirmed as `base: '/'`. Built `dist/index.html` was checked to confirm `/assets/` references are present and `/Mstar-Airsoft-Website/` is absent.
- Verification commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`. All passed.
- Deployment artifact: created `mstarairsoft-cpanel-live-fix.zip` for manual cPanel upload with root-level `index.html`, `assets/`, `.htaccess`, and required static folders. No automatic cPanel upload or deployment was performed.
- Next steps: Manually upload `mstarairsoft-cpanel-live-fix.zip` to `/mstarairsoft.com`, extract there, overwrite existing files, then delete the ZIP.

- 2026-06-15: Refined live site guide pages, header navigation, footer navigation, and cPanel deployment build for manual live deployment. Files changed: `src/App.tsx`, `src/components/Header.tsx`, `src/components/InfoPage.tsx`, `src/data/siteContent.ts`, `src/styles.css`, `src/types/siteContent.ts`, `public/images/activities/atv-ride-live.png`, `AGENT.md`, and `DESIGNER.md`.
- Activity page: removed the top intro/header block containing `Activities`, `&`, `Entertainment Experience`, and its description so the remaining content starts higher. The remaining `Activities & Entertainment Experience` section heading uses a responsive stacked treatment with the `&` centered across desktop, tablet, and mobile. Replaced the ATV Ride image reference with the exact uploaded `ATV ride.png`, copied to `public/images/activities/atv-ride-live.png` with a matching SHA-256 hash.
- Guide/info intro cleanup: removed the top intro/header blocks from How to Get to the Event, Immigration Visa, and Equipment while preserving the useful content sections below and bringing content upward.
- Accommodation page: removed boxed/card panel styling from the main content by applying the shared unboxed long-form layout, keeping text on the dark tactical page background with readable width and mobile-safe spacing. The `Accommodation & Campground Experience` heading is now smaller, better aligned with the paragraph content, and H2-like.
- Navigation updates: removed FAQ from footer display while keeping the FAQ route data intact. Removed Login and Sign Up from the header/site-wide navigation on desktop and mobile. Header Gallery remains visually present, but its click is prevented so it does not navigate to `/gallery` or any broken/403 page until the Gallery route is ready.
- Live deployment safeguards: confirmed Vite/cPanel base path remains `base: '/'`; built `dist/index.html` uses `/assets/` and does not contain `/Mstar-Airsoft-Website/`. DNS, SSL/HTTPS, AutoSSL, hosting setup, document root, cPanel domain settings, Stripe buttons, Ticket page, Events routing, Game Terrain, language video cards, and live cPanel files were not changed.
- Verification commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`. All passed. Responsive behavior was checked through shared desktop/tablet/mobile CSS paths for hidden intro spacing, unboxed policy layout, Activity heading alignment, header reflow, and mobile-safe page padding.
- Deployment artifact: created `mstarairsoft-cpanel-live-update.zip` for manual cPanel upload. The ZIP extracts directly into `/home/mstarhol/mstarairsoft.com` with root-level `index.html`, `assets/`, `.htaccess`, and required static folders. No automatic cPanel upload or deployment was performed.
- Next steps: Manually upload `mstarairsoft-cpanel-live-update.zip` to `/mstarairsoft.com` in cPanel, extract there, overwrite existing files, then delete the ZIP.

- 2026-06-15: Fixed the cPanel redeploy build base so the standard `npm run build` output now uses root-domain asset paths (`/assets/...`) instead of the old GitHub Pages path (`/Mstar-Airsoft-Website/assets/...`). DNS, SSL/HTTPS, AutoSSL, cPanel domain setup, hosting setup, document root, app content, Stripe buttons, routes/pages, header/footer design, and live cPanel files were not changed.
- Created `mstarairsoft-cpanel-redeploy.zip` from a clean deploy export that extracts directly into `/home/mstarhol/mstarairsoft.com` with root-level `index.html`, `assets/`, `.htaccess`, and required static public folders from the latest build/export. The ZIP contains no parent `dist/` folder, no source files, no `node_modules`, no `.git`, no package/config files, and no project memory files.
- Verification commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`. The built `dist/index.html` was checked to confirm `/assets/` references are present and `/Mstar-Airsoft-Website/` is absent.
- Next steps: Manually upload `mstarairsoft-cpanel-redeploy.zip` to `/mstarairsoft.com` in cPanel, extract there, overwrite existing files, then delete the ZIP. No cPanel upload or live deployment was performed by Codex.

- 2026-06-15: Cleaned the requested long-form information page layouts without creating a cPanel ZIP or performing any cPanel deployment. Live deployment status remains preserved: DNS, SSL/HTTPS, document root, hosting setup, and live `.htaccess` were not redone or changed.
- Pages updated to remove boxed text panels from the main long-form content: Terms & Conditions, Privacy, Complaints, Ship Your Equipment/Equipment, How to Get to the Event, Immigration Visa, Activity, and the new Contact page. The shared `InfoPage` renderer now applies an unboxed policy layout for these pages so text sits directly on the dark tactical page background with readable width, line-height, headings, bullets, and mobile-safe padding.
- Activity page update: removed the Zip Line image entry, Zip Line title/caption, and Zipline bullet content. Remaining activity content, including Waterfall, reflows through the existing responsive image grid. The desktop Activity heading now renders the ampersand as a centered middle line between `Activities` and `Entertainment Experience`.
- Contact page created as a data-driven info page at `/contact` with the requested intro copy and clickable `mailto:` links for General Inquiry, Support and Issues, and Media and Press. The existing footer Contact link already targets `/contact` and now opens the dedicated Contact page through the existing router/info-page logic.
- Files changed for this task: `src/types/siteContent.ts`, `src/utils/safeUrl.ts`, `src/components/InfoPage.tsx`, `src/data/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`. All passed.
- Next steps: No cPanel action. Only create a future deployment ZIP if the user explicitly asks `prepare cPanel ZIP` or `make deployment ZIP`.

- 2026-06-15: Prepared the completed site for TMDHosting/cPanel upload without pushing to Git per user instruction. Converted production routing from hash URLs to clean browser paths: `/`, `/ticket`, `/events`, `/rules-and-regulation`, `/contact`, and the existing info/event/account paths. The app now reads `window.location.pathname`, uses browser history for in-app home/sign-in return navigation, and all source navigation/data links use clean internal paths instead of `#/` hash routes.
- cPanel production build/package: Confirmed the correct command is `npm run build:cpanel` because the normal build is GitHub Pages-based. Built `dist`, added HTTPS redirect plus SPA fallback in `.htaccess`, verified root-safe `/assets/`, `/images/`, and `/videos/` output paths, removed unreferenced legacy MP4 copies from `dist`, and created `mstarairsoft-cpanel-production.zip` from `dist` contents only. The ZIP extracts directly with `index.html`, `.htaccess`, `assets/`, `images/`, and `videos/` at root, with no `dist/`, `build/`, or wrapper folder.
- Verification: `cmd /c npx tsc --noEmit` passed. `cmd /c npm run build:cpanel` completed successfully; Vite 8 emitted a post-build plugin timing notice on stderr after output. Local temporary fallback-server checks returned HTTP 200 for `/`, `/ticket`, `/events`, `/rules-and-regulation`, and `/contact`. Production checks found no `#/`, `/#/`, or `#home` route strings in `dist`, confirmed `.htaccess`, header video, event image, and four Game Terrain videos are present, and confirmed ZIP root structure. `git diff --check` passed.
- Files changed: `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/BannerSlider.tsx`, `src/components/SignInPage.tsx`, `src/components/EventDetailPage.tsx`, `src/components/EventCheckoutPage.tsx`, `src/components/Events.tsx`, `src/components/EventsPage.tsx`, `src/components/InfoPage.tsx`, `src/data/siteContent.ts`, `src/utils/safeUrl.ts`, `public/.htaccess`, `AGENT.md`, and `DESIGNER.md`. Production artifact created: `mstarairsoft-cpanel-production.zip`.
- Next steps: Upload `mstarairsoft-cpanel-production.zip` into the TMDHosting cPanel folder `mstarairsoft.com` and extract it there so `mstarairsoft.com/index.html` and `mstarairsoft.com/.htaccess` are at the folder root. No git commit or push was performed for this task by user request.

- 2026-06-15: Replaced only the homepage splash/header background-video source with the newly supplied optimized MP4 at `public/videos/force-of-conquest-header-compress-video.mp4`. Removed the prior separate remote desktop/mobile source values so the hero now uses one local deployment-safe MP4 through the existing asset helper.
- Preserved the existing `BannerSlider` component, hero CSS classes, object-fit, sizing, height, poster fallback, overlay, `Get Ticket Now` CTA, text, navigation, spacing, and responsive layout. The native video remains `autoPlay`, `muted`, `loop`, and `playsInline`; changed only preload behavior from `auto` to `metadata` for the requested mobile-friendly loading behavior.
- Files changed: `public/videos/force-of-conquest-header-compress-video.mp4`, `src/data/siteContent.ts`, `src/components/BannerSlider.tsx`, `AGENT.md`, and `DESIGNER.md`.
- Verification: Source/target SHA-256 matched; `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, production-output video presence/path checks, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Updated only the Ticket page Stripe product labels and Buy Button IDs. Renamed `Early Bird` to `Pre Sale` and replaced its button ID with `buy_btn_1TiUFN5Kev5Ia2RiD8wrJaVz`. Renamed `Extra Camping Gears` to `Camping Experience` and replaced its button ID with `buy_btn_1TiUMF5Kev5Ia2RiheGKvjgJ`.
- Preserved the €120 ticket price, original-price text, expiry, stay text, Live Music/Food Court features, €69 add-on price, description, card design, shared centered wrapper, responsive 360px Stripe host cap, and single page-level Stripe script. The supplied publishable key remains unchanged and no secret key was added.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, exact Buy Button ID/script-count checks, and `git diff --check` passed.
- Next steps: Stripe controls product availability; a `Sold out` state can only be changed in Stripe if the live product reports it.

- 2026-06-15: Updated the Force of Conquest event record with a data-driven `#/ticket` destination so the whole card routes directly to the Ticket page on both the Events page and homepage Game Schedules. Other event cards retain their existing event-detail routes, with no nested links or external redirects.
- Official event image: Copied the supplied unchanged `site content/Screenshot_1.png` artwork to `public/images/events/force-of-conquest-card.png` and updated the first event image path. The Events page uses the existing deployment-safe asset helper, the image's native `1793 / 798` ratio, `object-fit: contain`, a dark background, a reduced overlay, and no hover zoom so the MSTAR logo, Force of Conquest title, January 8-10, 2027 date, and Thailand text remain readable across desktop, tablet, and mobile.
- Rules & Regulation: Added a slug-specific `policy-layout-rules` treatment that removes panel borders, filled backgrounds, box shadows, and boxed padding from the main rules sections only. Rules text now sits directly on the tactical page background with a comfortable 900px reading width, normal section spacing, subtle gold dividers, readable typography/lists, and inherited mobile-safe page padding. Other guide/legal pages keep their existing panel layouts.
- Files changed: `src/types/siteContent.ts`, `src/data/siteContent.ts`, `src/components/EventsPage.tsx`, `src/components/Events.tsx`, `src/components/InfoPage.tsx`, `src/styles.css`, `public/images/events/force-of-conquest-card.png`, `AGENT.md`, and `DESIGNER.md`.
- Verification: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed the homepage Package Offer section completely, including its `App.tsx` render, standalone component, typed homepage data contract, content block, and section-only CSS. The homepage now flows directly from About into Events with no empty section gap.
- Homepage hero CTA: Changed `Sign Up Now` to `Get Ticket Now` and changed its existing hash route from `#/signup` to `#/ticket`; the centered responsive splash-button treatment is unchanged.
- Ticket page: Retained one centered Early Bird card with `€120.00 EURO`, `(Original Price €160.00 EURO)`, `Expire November 20, 2026`, and `3 Days / 2 Nights`. Reduced feature rows to `Live Music` and `Food Court` only; removed `2 Person Tent` and `Camping Equipment` from remaining ticket data.
- Responsive layout: Centered the Ticket page title explicitly across desktop, tablet, and mobile with responsive `clamp()` sizing, full-width text alignment, and overflow-safe wrapping. The single card remains centered at its existing 560px maximum and near full-width with safe mobile gutters.
- Files changed: `src/App.tsx`, removed `src/components/PackageOffer.tsx`, `src/components/PackageCard.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Replaced the two-card homepage Package Offer and Ticket page package grids with one centered Early Bird card. Removed the separate Regular Package / General Ticket €160 card and its Stripe Buy Button data everywhere from the package/ticket surfaces.
- Early Bird content: `€120.00 EURO`, `(Original Price €160.00 EURO)`, `Expire November 20, 2026`, `3 Days / 2 Nights`, `Live Music`, `Food Court`, `2 Person Tent`, and `Camping Equipment`. The Ticket page retains the existing Early Bird Stripe Buy Button.
- Responsive layout: Homepage uses one centered card capped at 520px. Ticket page uses one centered card capped at 560px; tablet stays centered with the existing page spacing, and mobile uses near-full width with a safe 12px side gutter and no overflow.
- Files changed: `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/components/PackageCard.tsx`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Completed a full static-frontend security hardening pass before cPanel/TMDHosting deployment. Confirmed React text rendering has no raw HTML injection APIs; added allowlists for internal hash routes, local assets, approved R2 videos, and YouTube embed URLs; retained required lazy iframe attributes; removed sensitive form console logging; changed mock account profiles from persistent `localStorage` PII to memory-only state while keeping only the non-sensitive mock auth flag in storage; removed raw card/CVV collection from the backendless checkout; and added safer form autocomplete, telephone input modes, and length limits.
- Deployment fixes: Added `npm run build:cpanel`, root `/` cPanel paths, explicit source-map disablement, `public/.htaccess` SPA fallback, `nosniff`, strict referrer policy, SAMEORIGIN framing, restrictive permissions policy, CSP, directory-index blocking, and denial rules for source/development file extensions. Added ignore rules that prevent local credential/media-project files from being staged accidentally. No cPanel ZIP was created; deploy only validated `dist` contents after the cPanel build.
- Dependency hygiene: `npm audit --audit-level=moderate` initially found two esbuild advisories, including high-severity GHSA-gv7w-rqvm-qjhr. Upgraded Vite from 7 to 8.0.16 after checking the official migration requirements; the project already uses supported Node 24. The final audit reports zero vulnerabilities.
- Files changed: `.gitignore`, `package.json`, `package-lock.json`, `vite.config.ts`, `public/.htaccess`, `src/utils/safeUrl.ts`, `src/utils/publicAssetPath.ts`, `src/utils/accountProfile.ts`, `src/App.tsx`, security-relevant components/forms, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Remaining risks: This remains a static frontend with mock authentication and no secure account, registration, order, or event-checkout backend. The Stripe Buy Buttons are the only live payment surface. Apache must have `mod_rewrite` and `mod_headers` enabled for the `.htaccess` rules; production CSP behavior should be checked in browser developer tools after hosting deployment. React's production bundle contains its own inert `javascript:` URL-blocking error string, but the site source and configured links contain no `javascript:` URLs.
- Verification: TypeScript, GitHub Pages build, root-path cPanel build, output allowlist scans, `.htaccess` copy check, source-map/prohibited-file checks, unsafe source scans, final npm audit, and `git diff --check` passed.
- Next steps: Upload only the contents of the cPanel-mode `dist` directory to the production document root and verify response headers/third-party embeds on the live domain.

- 2026-06-15: Changed all three Events page entry-fee values from `$160.00 USD` to `€160.00 EURO`. Event titles, dates, locations, attendance, Ticket page prices, and homepage packages remain unchanged.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, exact three-event euro-value check, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed `2 Person Tent` and `Camping Equipment` from both homepage Package Offer cards ($120/$160) and both Ticket page cards (€120/€160). `Live Music` and `Food Court` remain; the separate Extra Camping Gears add-on is unchanged.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, homepage/Ticket targeted content checks, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed the homepage eyebrow labels `Built For Teams`, `Stay and Play`, and the small green `Game Terrain` label. Added conditional eyebrow rendering and changed only the desktop About headline to a narrower 19-character text column with controlled sizing so it wraps like the mobile-desktop reference; tablet/mobile rules remain unchanged.
- Files changed: `src/data/siteContent.ts`, `src/components/About.tsx`, `src/components/PackageOffer.tsx`, `src/components/GameTerrain.tsx`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, desktop/mobile browser checks, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed `ZIP-LINE` from the homepage About highlight so it now reads `ATV RIDE, JUNGLE TOUR`, and changed both TBA event-card entry fees from `$120.00 USD` to `$160.00 USD`.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Scope: The first Force of Conquest event, guide-page Zipline copy, Ticket page pricing, and all layouts remain unchanged.
- Verification: TypeScript, Vite production build, targeted content checks, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Changed only the Ticket page Pre Sale and General Ticket display prices from `$120.00 USD` / `$160.00 USD` to `€120.00 EURO` / `€160.00 EURO`. Homepage pricing, Stripe IDs, card content, and layout remain unchanged.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed `2027` from Pre Sale and eliminated the General Ticket-only Stripe wrapper class so Pre Sale, General Ticket, and Extra Camping Gears now use the exact same shared wrapper markup and centering CSS with no special-case alignment path.
- Files changed: `src/data/siteContent.ts`, `src/components/StripeBuyButton.tsx`, `src/components/PackageCard.tsx`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, one-time Stripe script check, and browser measurements at mobile/mobile-desktop/desktop widths confirmed all three shared wrappers have zero center offset and remain contained without overflow.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Fixed the visible Pre Sale and Extra Camping Gears Stripe button offset caused by expanding the Stripe custom-element host to 560px. Restored a responsive 360px host cap at all breakpoints so Stripe's internally rendered simple green button cannot sit left-aligned inside an oversized invisible iframe.
- Files changed: `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, one-time Stripe script check, browser geometry, and visual screenshots at desktop/mobile widths confirmed Pre Sale, General Ticket, and Extra Camping Gears controls are centered within their cards without overflow.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed the `Jan 8-10, 2027` detail from the General Ticket card and changed the Extra Camping Gears description to `Add additional camping set.` No prices, perks, Stripe buttons, or layout changed.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Updated only Stripe Buy Button centering/scaling CSS across Ticket package and add-on cards. Added full-width flex centering, self-centering, symmetric responsive padding, border-box sizing, a 560px component cap, and mobile-specific card-safe spacing using the existing card classes.
- Files changed: `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, one-time Stripe script check, and browser measurements at 390px, 430px, 768px, 1024px, and 1280px confirmed equal left/right gaps, card containment, and no horizontal overflow for all three Stripe components.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed only `To Be Announced Soon` from the Pre Sale Ticket card while retaining `2027`, `3 Days / 2 Nights`, price, perks, Stripe button, and all other Ticket page content.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Removed only the Ticket page hero eyebrow `Stay and Play` and the package/camping description sentence, while preserving the Ticket heading, all cards, Stripe embeds, prices, features, and layout.
- Files changed: `src/data/siteContent.ts`, `src/components/TicketPage.tsx`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, and `git diff --check` passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Added a General Ticket-specific wrapper class around the existing Stripe Buy Button while retaining buy-button ID `buy_btn_1TiGSe5Kev5Ia2RiIXVYRKHY`, the supplied publishable key, the shared centered wrapper behavior, and the single page-level Stripe script.
- Files changed: `src/components/PackageCard.tsx`, `src/components/StripeBuyButton.tsx`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Scope: General Ticket wrapper targeting only; Pre Sale, Extra Camping Gears, ticket content, prices, features, colors, header, footer, and page layout remain unchanged.
- Verification: TypeScript, Vite production build, exact General Ticket ID check, and one-time Stripe script count passed.
- Next steps: None planned after successful commit and push.

- 2026-06-15: Corrected only the General Ticket Stripe Buy Button ID to `buy_btn_1TiGSe5Kev5Ia2RiIXVYRKHY`. Preserved the existing centered `stripe-buy-button-wrap`, responsive 360px cap, flex-column card layout, Pre Sale button, Extra Camping Gears button, ticket content, and single Stripe script load.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, exact button-ID/script-count checks, and local browser measurements at desktop, tablet, and mobile widths confirmed all three buttons render centered with equal side spacing and no overflow; the General Ticket custom element uses the corrected ID.
- Next steps: None planned after successful commit and push.

- 2026-06-14: Corrected Stripe Buy Button alignment only on the Ticket page by replacing the full-width block shell with a dedicated flex-centered wrapper capped at 360px and confirming ticket/add-on cards remain flex columns with bottom-anchored payment controls.
- Files changed: `src/components/StripeBuyButton.tsx`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Verification: TypeScript, Vite production build, script-count check, and local browser measurements at desktop, tablet, and mobile widths confirmed all three buttons are horizontally centered with equal card-side spacing and no overflow.
- Next steps: None planned after successful commit and push.

- 2026-06-14: Updated only the Ticket page payment cards: renamed Early Bird to Pre Sale and Normal Ticket to General Ticket, replaced the three camping add-ons with one Extra Camping Gears card at €69 EURO, and embedded three responsive Stripe Buy Buttons inside their respective cards.
- Files changed: `index.html`, `src/components/PackageCard.tsx`, `src/components/StripeBuyButton.tsx`, `src/components/TicketPage.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Implementation: Stripe's Buy Button script is loaded once in `index.html`; only the supplied publishable key is used; button IDs remain typed content data; card-local wrappers constrain the web components on desktop, tablet, and mobile.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, local browser verification, and `git diff --check`.
- Results: TypeScript and the Vite production build passed. Browser verification confirmed all three Stripe Buy Button components render inside the intended cards without horizontal overflow.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-14: Replaced the outdated urban-qualifier wording for Force of Conquest with polished large-scale jungle airsoft combat copy on both the event card and detail page.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-14: Updated the three published event locations: Force of Conquest now uses Mstar Jungle Land, while both future TBA events use TBA.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-14: Simplified the Events page to three cards only: Force of Conquest and two unnamed TBA events.
- Files changed: `src/data/siteContent.ts`, `src/components/EventsPage.tsx`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Replaced the second and third event operation names with TBA, removed their operation-description paragraphs, changed both attendance values to 2000+, deleted the final three event records, and removed Events page pagination/Load More logic.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings; no removed event IDs or Load More logic remain in `src`.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-14: Updated the first three homepage event cards and matching Ticket page packages with the new 2027 dates, USD entry fees, and announcement state.
- Files changed: `src/data/siteContent.ts`, `AGENT.md`, and `DESIGNER.md`.
- Summary: The first event is now titled Force of Conquest and shows Jan 8-10, 2027 with a $160.00 USD entry fee; the next two show 2027, $120.00 USD, and To Be Announced Soon. The Ticket page now mirrors $160.00 USD with Jan 8-10, 2027 for Normal Ticket and $120.00 USD with 2027 / To Be Announced Soon for Early Bird.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Updated only the Beautiful Scenery Game Terrain video so the card plays the complete land drone source instead of the previous 8-second cut.
- Files changed: `public/videos/game-terrain/beautiful-scenery.webm`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Re-encoded the full `land drone.webm` source as a silent 24.945-second 960x540 VP9 WebM loop at 18 fps; the deployed file remains lightweight at about 1.6 MB and keeps the existing poster, card layout, autoplay, muted, loop, and playsInline behavior.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Replaced the homepage Gallery section with a typed, responsive Game Terrain section using four native HTML5 video loops while preserving the existing `#gallery` navigation anchor and leaving other homepage/page sections unchanged.
- Files changed: `src/App.tsx`, `src/components/GameTerrain.tsx`, removed `src/components/Gallery.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, eight optimized terrain media assets under `public/videos/game-terrain` and `public/images/game-terrain`, `AGENT.md`, and `DESIGNER.md`.
- Video assets used: `IMG_0749.webm` for Forest Movement, `IMG_0747.webm` for Large Open Area, `land drone.webm` for Beautiful Scenery, and `IMG_0752.webm` for Fun Combat Terrains. Sources were converted to silent 8-second 960x540 VP9 WebM loops at 18 fps with static WebP poster frames; combined video size is about 7 MB instead of roughly 330 MB of source media.
- Summary: Added an editorial Game Terrain heading and description, four cinematic native video cards, direct GitHub Pages-safe asset paths through `getPublicAssetPath`, desktop/tablet two-column presentation, mobile video-left/text-right cards, and a below-360px stacked fallback. Videos use autoplay, muted, loop, playsInline, metadata preload, no controls, no audio, and no external player/library.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Compacted only the Ticket page package-card spacing while preserving all ticket content, add-ons, homepage cards, navigation, videos, and unrelated pages.
- Files changed: `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Added Ticket-grid-scoped overrides that remove the global event-card heading minimum height and 22px title margins, reduce header/body gaps and padding responsively, and stop feature rows from being pushed down by flex auto margins.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Added a config-driven Ticket destination to the main header and hash router, created a dedicated responsive Ticket page, reused shared package-card markup, and restored direct one-tap YouTube iframe interaction in the homepage language cards.
- Files changed: `src/App.tsx`, `src/components/Hero.tsx`, `src/components/PackageCard.tsx`, `src/components/PackageOffer.tsx`, `src/components/TicketPage.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Added Early Bird and Normal Ticket cards plus 2 Person Tent, Pillow / Blanket, and Matress add-ons; added responsive two/three-column desktop grids and stacked mobile layouts; changed TH LANGUAGE to THAI LANGUAGE; removed the custom play overlay, state, click handler, and iframe pointer-event gate; and now uses exact parameterized embed URLs directly.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Improved the separate homepage TH/English YouTube cards for mobile without changing the splash banner, Package Offer, About section, navigation, or routes.
- Files changed: `src/components/Hero.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Made mobile video tiles taller with square media at normal phone widths and 4:3 stacked media below 360px; reduced mobile label height; added `rel=0`, `modestbranding=1`, and `playsinline=1`; removed unused watch-page URLs; and added a deliberate first-tap play overlay that keeps the iframe non-interactive until inline playback starts.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Reworked the separate homepage YouTube section into two typed, responsive language video cards without changing the native splash banner, Package Offer section, navigation, or routes.
- Files changed: `src/components/Hero.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Summary: Kept `VYv1pw_dM1Y` as the TH Language video, added `c9EP32Ptv2Y` as the English Language video, and added a dark tactical two-column card grid with gold labels, 16:9 iframe wrappers, lazy loading, and a very-small-screen stack below 421px.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after successful verification, commit, and push.

- 2026-06-13: Changed the homepage Package Offer data and component from one card to responsive Early Bird and Regular Package cards, updated prices/details, replaced the separate homepage YouTube iframe with `VYv1pw_dM1Y`, and verified the repository has no product listing/detail routes or Back to products control to modify.
- Files changed: `src/components/PackageOffer.tsx`, `src/data/siteContent.ts`, `src/types/siteContent.ts`, `src/styles.css`, `AGENT.md`, and `DESIGNER.md`.
- Commands run: `cmd /c npx tsc --noEmit`, `cmd /c npm run build`, and `git diff --check`.
- Results: TypeScript passed; the Vite production build passed; `git diff --check` passed with only expected LF-to-CRLF conversion warnings.
- Next steps: None planned after commit and push.

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
- 2026-05-22: Rewrote the homepage About section headline, body copy, and highlights to emphasize the Southeast Asia festival atmosphere, entertainment, and adventure activities.
- 2026-05-22: Removed the Contact link from the top header navigation while leaving footer contact details and other contact content unchanged.
- 2026-05-22: Replaced the footer What to Do in Thailand placeholder with a live guide page and added the available local waterfall image plus the requested attraction list.
- 2026-05-22: Reduced and rebalanced the long homepage About-section headline so it fits more cleanly across mobile, tablet, laptop, and desktop.
- 2026-05-22: Expanded the What to Do in Thailand guide with Pak Chong, Kaeng Khoi, Wang Takrai National Park, and Khao Yai National Park using the best available local scenic images already in the repo.
- 2026-05-22: Reduced the homepage About-section title again to a much smaller heading scale closer to H3/H4 sizing for better readability across devices.
- 2026-05-22: Removed the footer Contact column and rebalanced the footer layout so only the brand block and link columns remain.
- 2026-05-22: Expanded the What to Do in Thailand guide again with Kayaking plus a Food & Entertainment section listing the requested venues.
- 2026-05-23: Replaced the What to Do in Thailand images for Narong Waterfall, Haew Narok Waterfall, and Khun Dan Prakarn Chon Dam with the exact supplied local files copied into deploy-safe public assets.
- 2026-05-23: Updated the What to Do in Thailand guide again to use the supplied images for Wat Maneewong, Pak Chong, Kaeng Khoi, and Wang Takrai National Park from copied public travel-image assets.
- 2026-05-23: Updated the What to Do in Thailand guide again so Khao Yai, Kayaking, Nay Hua cafe, Cafe Laura Bar and Restaurant, Kin Do Funk, Jasmine Restaurant, and Montreux Cafe and Farm use the newly supplied local images and naming.
- 2026-05-23: Removed Products from the header and footer nav, moved About into the Mstar Airsoft footer group, and renamed that footer group from Explore MSTAR to Mstar Airsoft.

## Next Steps

- Replace placeholder/current logo file with final approved logo at `src/assets/mstar-airsoft-logo.png`.
- Connect `src/data/siteContent.ts` to backend/admin API when backend work begins.
- Check GitHub Actions Pages run after push and enable Pages source as GitHub Actions if repository settings require it.

