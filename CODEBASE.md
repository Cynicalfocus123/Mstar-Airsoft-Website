# MSTAR Airsoft Website — Codebase Guide

This document describes the working source code for the MSTAR Airsoft Festival website. It is based on the source folders (`src/`, `public/`, `scripts/`) and package configuration as of 2026-09-03.

## At a glance

| Area | Current implementation |
| --- | --- |
| Product | Marketing, event-information, ticket, travel-guide, vendor, and sponsor website for MSTAR Airsoft |
| Frontend | React 19 + TypeScript + Vite 8 |
| Styling | One hand-authored global stylesheet: `src/styles.css` |
| Routing | Lightweight custom client-side router in `src/App.tsx`; React Router is not used |
| Backend/API | **None in this repository.** The site is a static single-page application (SPA). |
| Database | **None.** |
| Authentication | Frontend demonstration state only; not a secure account system |
| Payments | Stripe Buy Buttons loaded from Stripe's hosted script |
| Forms | External Google Forms for ticket registration/vendor requests; local display forms do not submit data to a server |
| Video processing | **No FFmpeg usage or FFmpeg dependency.** No `ffmpeg`/`ffprobe` executable was available in the current shell. |
| Hosting | Static files on Hostinger/cPanel with Apache rules; GitHub Pages is used as a separate test deployment |

The public production URL configured in the project is [mstarairsoft.com](https://mstarairsoft.com/). The repository test build is configured for [GitHub Pages](https://cynicalfocus123.github.io/Mstar-Airsoft-Website/).

## Technology stack

### Runtime and build tools

| Tool | Role | Version declared |
| --- | --- | --- |
| Node.js | Runs Vite and deployment/validation scripts | No project pin; the inspected shell has Node `v24.19.0` |
| TypeScript | Type checking and TSX compilation | `^5.9.0` |
| Vite | Local development server and production bundler | `^8.0.16` |
| `@vitejs/plugin-react` | React integration for Vite | `^5.0.0` |
| npm | Package manager expected by the scripts | `package-lock.json` lockfile v3 |

`npm` was not available on the inspected shell's `PATH`, despite the repository containing a lockfile and `node_modules`. On a developer machine, install Node.js with npm (or repair the PATH) before using the npm commands below.

### Application dependencies

| Package | Why it is used |
| --- | --- |
| `react` / `react-dom` | Client-side UI rendering |
| `country-region-data` | Country and region selection data for account/address forms |

There is no server framework, ORM, authentication SDK, API client, state-management library, CSS framework, or test framework declared in `package.json`.

## Architecture

```text
Browser
  └─ Vite-built React SPA
       ├─ src/App.tsx: route matching, page composition, front-end auth state
       ├─ src/components/: page and reusable UI components
       ├─ src/data/: event, page, SEO, policy, and travel content
       ├─ src/utils/: input and URL safety helpers
       └─ public/: copied unchanged into the built static site
             ├─ images / banners / gallery / videos / PDFs
             ├─ .htaccess: Apache routing and security headers
             ├─ sitemap.xml and robots.txt
             └─ static media files

External services
  ├─ Stripe-hosted Buy Buttons and Checkout
  ├─ Google Forms (application/registration links)
  ├─ YouTube embeds
  └─ Cloudflare R2 public-media domains allowed by the CSP/video URL allowlist
```

`src/main.tsx` mounts the React app into the `#root` element in `index.html`. `src/App.tsx` reads `window.location`, renders the matching page, and uses `history.pushState` / `popstate` rather than a routing library. Vite uses `/` in normal builds and `/Mstar-Airsoft-Website/` in `github-pages` mode.

## Backend and data reality

This repository has **no backend code**: no Express/Fastify/Nest server, API route, serverless function, database migration, database client, user-service, or secret-only environment configuration.

Important implications:

- Sign-in status is only the `mstarAccountStatus` value in browser `localStorage`.
- Account profile data is held in the JavaScript module memory by `src/utils/accountProfile.ts`; it is not a persisted customer account.
- The general registration form sanitizes form values but intentionally does not send them anywhere.
- The event checkout screen is a frontend checkout summary. Actual ticket purchase is delegated to Stripe Buy Buttons in ticket/package areas.
- Google Form links collect the registrations/applications that are configured to use them.

Do not treat the local account flow as real authorization, access control, order history, or a safe place for personal data. A future real backend should provide server-side authentication, a database, Stripe webhook processing, form/order persistence, validation, rate limiting, and email workflows.

## External integrations

| Service | Implementation | Where to update it |
| --- | --- | --- |
| Stripe | `index.html` loads `https://js.stripe.com/v3/buy-button.js`; `StripeBuyButton.tsx` renders Stripe's custom element | Buy Button IDs and publishable key fields in `src/data/siteContent.ts` |
| Google Forms | Securely allowlisted `docs.google.com/forms/d/e/.../viewform` links open in a new tab | Vendor/ticket registration content in `src/data/siteContent.ts` |
| YouTube | Allowlisted `youtube.com` / `youtube-nocookie.com` embed URLs | Hero video content in `src/data/siteContent.ts` |
| Cloudflare R2 | Public video hosts are allowlisted by `getSafeVideoUrl`; the page also preconnects to the configured R2 domains | `src/utils/safeUrl.ts` and `index.html` |
| Hostinger/cPanel | Receives static build output at the web root | `public/.htaccess`, deployment scripts, and `DEPLOYMENT-INSTRUCTIONS.md` |
| GitHub Pages | Test/review deployment with a repository base path | `vite.config.ts` and `npm run build:github-pages` |

Stripe publishable keys are intended for browser use, but Stripe secret keys, webhook secrets, email credentials, and database credentials must never be added to `src/`, `public/`, or a committed `.env` file.

## Media and FFmpeg

The website serves already-encoded media files directly. It does not transcode, resize, or inspect media at build time.

| Media type | Formats found in `public/` | Typical use |
| --- | --- | --- |
| Video | MP4 and WebM | Home hero, event header, terrain clips |
| Images | PNG, JPG, WebP, AVIF, JFIF, SVG | Events, sponsors, terrain, travel, gallery, icons |
| Documents | PDF | Policies and event documents |

The current `public/` folder contains 100 files (about 502 MiB). The largest videos are the duplicated main-hero/marketing videos at about 171 MiB each and the mobile hero at about 126 MiB. This makes media optimization the largest performance lever in the project.

### What to use for media work

- Use **FFmpeg** when you need to encode a new MP4/WebM, create a smaller mobile variant, generate a poster frame, change resolution/bitrate, or strip audio. It is not part of this codebase today, so install it locally before using it.
- Use an image editor/optimizer to produce appropriately sized WebP or AVIF images before adding them to `public/images/`.
- Adobe Premiere Pro project/autosave files exist in the repository workspace, but they are source-editing artifacts only; the site build does not invoke Premiere.
- After replacing media, keep the filename/path stable when possible, update the relevant content entry if it changes, run a production build, and validate that the deployed package includes the referenced asset.

Example FFmpeg commands for future local use (run only after FFmpeg is installed):

```powershell
# Desktop MP4 with broadly compatible H.264 video and AAC audio
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -c:a aac -b:a 128k public/videos/new-video.mp4

# Smaller WebM variant for a muted looping clip
ffmpeg -i input.mov -an -c:v libvpx-vp9 -crf 34 -b:v 0 public/videos/new-video.webm

# Poster image at the one-second mark
ffmpeg -ss 00:00:01 -i input.mov -frames:v 1 -q:v 2 public/images/new-video-poster.jpg
```

Always review the output visually and test it on a real mobile connection before publishing. Do not replace an existing video blindly: the application may use a desktop/mobile pair or a poster image fallback.

## Source layout

```text
.
├─ index.html                    # HTML shell, base metadata, Stripe script, R2 preconnects
├─ package.json                  # npm commands and dependency declarations
├─ vite.config.ts                # Vite config; GitHub Pages base path
├─ src/
│  ├─ main.tsx                   # React entry point
│  ├─ App.tsx                    # Manual routing and top-level page selection
│  ├─ styles.css                 # Entire site stylesheet
│  ├─ assets/                    # Source-imported logo asset
│  ├─ components/                # 26 React UI/page components
│  ├─ data/                      # 8 typed content modules
│  ├─ types/                     # Shared TypeScript data/SEO shapes
│  └─ utils/                     # URL, asset-path, form, and mock-account utilities
├─ public/                       # Files copied verbatim to dist/ by Vite
│  ├─ .htaccess                  # Apache HTTPS, SPA fallback, and security headers
│  ├─ images/, videos/, media/   # Static imagery and video
│  ├─ banners/, gallery/         # Event art and gallery images
│  ├─ robots.txt, sitemap.xml    # SEO crawler configuration
│  └─ PDFs and related public assets
├─ scripts/                      # Build packaging and browser-based validation helpers
├─ dist/                         # Generated Vite output — do not hand-edit
└─ hostinger-*/ deploy-*/ zip-check/
                                # Historical/generated staging and deployment artifacts
```

The directories with deployment/archive-like names are not the canonical source. Change `src/`, `public/`, `index.html`, or configuration files, then regenerate deployment output. Avoid editing files inside `dist/`, `deploy-export/`, `zip-check/`, or `hostinger-*` by hand.

## Content and component map

### Content modules

| File | Owns |
| --- | --- |
| `src/data/siteContent.ts` | Main site identity, navigation, home sections, events, ticket packages, event detail, forms, vendor/sponsor content, footer, and many asset paths |
| `src/data/seoContent.ts` | Per-route titles, descriptions, canonical/structured SEO data |
| `src/data/countries.ts` | Country/region data mapping |
| `src/data/travelThaiContent.ts` | Thai travel-page content |
| `src/data/equipmentContent.ts` | Equipment-shipping information |
| `src/data/termsContent.ts` | Terms content |
| `src/data/privacyThaiContent.ts` | Thai privacy content |
| `src/data/cancellationRefundContent.ts` | Cancellation/refund content |

Rules-page bilingual content stays in `src/data/siteContent.ts`. `InfoPage` uses the same local React language-state pattern as Event Info: English is default and no page reload occurs. Rules render the introduction first, then the shared Event Info-style language selector, then FPS, Safety & Protective Gear Requirements, and remaining rules. `InfoSection.table` and `InfoSection.note` provide the responsive FPS data table and emphasized Joule guidance; `src/styles.css` stacks table rows at the narrow mobile breakpoint.

The data-driven approach means routine copy, link, price, and asset changes normally belong in `src/data/`, rather than inside JSX components.

### Components

| Area | Components |
| --- | --- |
| Shared layout | `Header`, `Footer`, `SeoHead`, `BannerSlider` |
| Home | `Hero`, `About`, `Events`, `GameTerrain`, `Contact`, `Registration` |
| Events | `EventsPage`, `EventDetailPage`, `EventInfoPage`, `MissionScenarioPage`, `PackageCard` |
| Tickets/payments | `TicketPage`, `TicketRegistrationGuide`, `StripeBuyButton`, `EventCheckoutPage` |
| Account screens | `SignInPage`, `CreateAccountPage`, `AccountSettingsPage` |
| Information pages | `InfoPage`, `Rules` |
| Partnership pages | `VendorPage`, `SponsorPage` |

### Routes handled by `App.tsx`

| Route pattern | Page |
| --- | --- |
| `/` and `/#section` | Home sections |
| `/events` | Event listing |
| `/events/:eventId` | Event detail |
| `/events/force-of-conquest/event-info` | Force of Conquest event information |
| `/events/force-of-conquest/mission-scenario` | Force of Conquest mission scenario |
| `/ticket` | Ticket offers, addons, and registration guide |
| `/checkout/:eventId` | Frontend checkout view |
| `/signin`, `/signup`, `/account` | Frontend-only account screens |
| `/become-a-vendor`, `/become-a-sponsor` | Partnership pages |
| Info-page slugs, including aliases | Data-driven info pages, e.g. rules, privacy, travel, equipment, cancellation |

## Security and browser protections

`public/.htaccess` is part of the production deployment and should stay at the deployed web root. It provides:

- HTTPS redirect and SPA fallback to `index.html` for unknown non-file routes.
- A restrictive Content Security Policy that allows the site itself plus Stripe, approved media hosts, and YouTube frames.
- `X-Content-Type-Options`, `X-Frame-Options`, referrer policy, and a restrictive permissions policy.
- A rule denying direct access to source, environment, map, log, and Markdown files if they are accidentally uploaded.

The client code also validates internal links, mailto links, Google Form URLs, local asset paths, YouTube embeds, and approved remote video hosts. `formSecurity.ts` removes control characters and trims/limits displayed client-side values. These protections improve the static frontend but do not replace server-side input validation or authentication.

## Development, build, and preview

From the repository root:

```powershell
npm install
npm run dev
npm run build
npm run preview
```

| Command | Result |
| --- | --- |
| `npm run dev` | Starts Vite on all network interfaces for local development |
| `npm run build` | Type-checks with `tsc -b`, then generates `dist/` |
| `npm run preview` | Serves the already-built `dist/` locally |
| `npm run build:github-pages` | Builds with the GitHub Pages base path and creates SPA fallback files |
| `npm run build:cpanel` | Builds with the normal root base path for cPanel/Hostinger |
| `npm run zip` | Creates a changed-files deployment ZIP from `dist/` |
| `npm run zip:deploy` | Creates a full deployment ZIP from `dist/` |
| `npm run zip:hostinger-current` | Creates a Hostinger-ready ZIP containing runtime-referenced files |

There is no `test`, `lint`, or `format` npm script currently. The build is the baseline type/build verification.

## Deployment workflow

### Hostinger/cPanel production

1. Update source/content in `src/` or static assets in `public/`.
2. Run `npm run build:cpanel` (or `npm run build` for the root-base production build).
3. Run `npm run zip:hostinger-current` for the self-contained Hostinger package, or use the appropriate standard ZIP command.
4. Upload the ZIP to the `public_html` root in cPanel/Hostinger and extract it at that root—not into a nested directory.
5. Confirm that `index.html`, `.htaccess`, `assets/`, and all referenced media have been replaced.
6. Clear browser/CDN cache if a stale bundle is still served.

See `DEPLOYMENT-INSTRUCTIONS.md` for the existing cPanel update checklist. The custom scripts reject unsafe ZIP paths, source maps, nested staging folders, and known stale bundles.

### GitHub Pages test deployment

Use `npm run build:github-pages`. That mode sets Vite's base to `/Mstar-Airsoft-Website/` and uses `scripts/create-spa-fallback.mjs` to create the static route fallbacks GitHub Pages requires. It is separate from the production Hostinger deployment.

## Validation helpers

`scripts/check-rendered-text-and-media.mjs` uses Playwright and a temporary static server to inspect important routes, look for malformed text encodings, and detect missing local media. `scripts/compare-github-pages-assets.mjs` checks selected deployed GitHub Pages routes and assets.

These helpers expect Playwright to be available to Node (or supplied through `PLAYWRIGHT_REQUIRE_ROOT`); Playwright is not declared in `package.json`. Run them explicitly only after building, for example:

```powershell
node scripts/check-rendered-text-and-media.mjs
```

## Editing guide

| Change wanted | Primary place to edit |
| --- | --- |
| Home/event/ticket copy, cards, prices, Stripe IDs, external form links | `src/data/siteContent.ts` |
| SEO titles/descriptions/schema | `src/data/seoContent.ts` and, if needed, `index.html` |
| Layout or reusable UI behavior | The relevant `src/components/*.tsx` file |
| Site-wide look, responsive styles | `src/styles.css` |
| Page route behavior | `src/App.tsx` and corresponding SEO/content entry |
| Static images/video/PDF | `public/`, then update the content path if its filename changes |
| Security headers/Hostinger SPA behavior | `public/.htaccess` |
| Search crawler settings | `public/robots.txt` and `public/sitemap.xml` |
| Deployment packaging | `scripts/*.mjs` |

## Recommended next backend architecture

If real accounts, registrations, order history, or staff administration are required, retain the React/Vite frontend and add a separate backend rather than trying to extend `localStorage`.

```text
React frontend
  ├─ HTTPS API
  │    ├─ Authentication/session service
  │    ├─ PostgreSQL (users, registrations, tickets, orders)
  │    ├─ Stripe Checkout creation endpoint
  │    └─ Stripe webhook endpoint to confirm payments
  ├─ Transactional email provider
  └─ Admin dashboard with role checks
```

Good implementation choices are a small TypeScript API (for example, a serverless platform or Node framework), PostgreSQL, a managed auth provider or secure password/session implementation, and server-verified Stripe webhooks. Keep all secrets in the backend environment, not in the client bundle.

## Files that should not be treated as source of truth

- `dist/` is generated build output.
- `deploy-export/`, `zip-check/`, and `hostinger-*` are deployment/staging snapshots or packages.
- `output/`, `tmp/`, and Adobe Premiere autosave/project artifacts are working artifacts.
- Deployment ZIP files are generated deliverables, not a place to make edits.

For a clean change: edit source → build → validate → package → deploy.
