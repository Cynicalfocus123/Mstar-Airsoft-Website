# Mstar Airsoft Site Weight Audit

Audit date: 2026-06-28
Repo: `D:\mstar airsoft site`
Live site checked: `https://mstarairsoft.com`

## Summary

Fresh audit completed after the latest sponsor/media updates.

## 2026-06-28 Clean Hostinger Current Deploy Package

- Created `hostinger-current-deploy-package/` from the fresh root-domain `dist` build using only runtime-referenced deployment files.
- Created `mstar-airsoft-hostinger-current-deploy.zip` for direct `public_html` extraction.
- ZIP size: 29.47 MB.
- Staging size: 29.46 MB.
- ZIP entries: 85.
- Runtime references included: 81.
- Sponsor assets included: 20 files under `images/sponsor/`.
- Current bundles included: `assets/index-CwCwwbt0.js` and `assets/index-DsCkN_Vt.css`.
- Stale bundle names excluded: `index-DjVJ79JP`, `index-BIOSmsMW`, `index-BNZIBf1G`, and `index-CXNzadvn`.
- ZIP root contains `.htaccess`, `index.html`, `robots.txt`, `sitemap.xml`, `assets/`, `banners/`, `images/`, and `videos/`.
- ZIP inspection confirmed no backslash entries, no nested staging root, no source files, no source maps, no old deploy folders, and no unused `gallery/` or `media/` folders.
- Staging-folder rendered verification passed 34 desktop/mobile route views, 16 Thai-toggle checks, 152 media references, zero rendered mojibake, and zero missing media.
- No live upload, DNS, SSL, cPanel, Cloudflare, Stripe, price, form, or visual-design change was performed.

## 2026-06-28 Sponsor Layout Follow-Up

- Added one missing deploy icon for the Sponsor page Campaign Reach pill: `public/images/sponsor/icons/campaign-reach-megaphone.png` - 77.7 KB.
- Existing sponsor icon assets were reused and not recopied.
- Added a data-driven Sponsor CTA and sponsor-scoped responsive CSS only.
- No new heavy image/video assets were added.
- No cPanel ZIP or server deployment was created.

| Area | Size |
| --- | ---: |
| Full repo | 5,021.16 MB |
| Repo excluding `.git`, `node_modules`, `dist`, ZIPs, source media, backup media, old deploy/check folders | 58.20 MB |
| `public/` | 30.25 MB |
| `public/images` | 17.42 MB |
| `public/videos` | 12.82 MB |
| `public/banners` | 0.00 MB |
| `public/media` | 0.00 MB |
| `src/` | 0.90 MB |
| Fresh `dist/` | 31.27 MB |
| Final ZIP | 31.28 MB |

## Cleanup And Optimization

Optimized source-referenced deploy images:

| Previous deploy file | New deploy file | Before | After | Saved |
| --- | --- | ---: | ---: | ---: |
| `public/images/events/force-of-conquest/referee-final-edit.png` | `public/images/events/force-of-conquest/referee-final-edit.webp` | 1.95 MB | 0.09 MB | 1.86 MB |
| `public/images/sponsor/premium-placement-collage.png` | `public/images/sponsor/premium-placement-collage.webp` | 1.19 MB | 0.12 MB | 1.07 MB |

Total saved from optimized image replacements: about 2.94 MB.

Moved out of deploy paths:

- `public/images/events/force-of-conquest/referee-final-edit.png`
- `public/images/sponsor/premium-placement-collage.png`
- zero-byte unused placeholders from `public/gallery/`

Backup folder:

`site content/non-deployed-heavy-media-backup/latest-heavy-cleanup/`

The Event Map remains PNG because it is a readable map/label asset and is already near the 1 MB threshold.

## Verification

Live runtime verification:

- `https://mstarairsoft.com`
- 17 routes checked at desktop and mobile viewports.
- 34 route/view checks passed.
- 16 Thai-toggle checks passed.
- 110 rendered media references verified.
- Result: zero rendered mojibake and zero missing rendered media.
- Live sponsor route currently serves the simple live placeholder version, while the fresh local build contains the updated sponsor page media prepared in this ZIP.

Fresh `dist` runtime verification:

- 17 routes checked at desktop and mobile viewports.
- 34 route/view checks passed.
- 16 Thai-toggle checks passed.
- 150 rendered media references verified.
- Result: zero rendered mojibake and zero missing rendered media.

Build and type checks:

- `cmd /c npm run build`: passed.
- `cmd /c npx tsc --noEmit`: passed.
- Vite still warns that the main JS chunk is over 500 KB.
- Source maps in `dist`: none.
- Search found no `/Mstar-Airsoft-Website/`, `cynicalfocus123.github.io`, localhost, or local Windows paths in `dist`, `public`, or `src`.

## Thresholds

Images over 1 MB in current `public/`:

- `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` - 1.07 MB

Images over 3 MB in current `public/`: none.

Images over 5 MB in current `public/`: none.

Videos over 10 MB in current `public/`: none.

Videos over 25 MB in current `public/`: none.

Videos over 50 MB in current `public/`: none.

## Top Public Files

| File | Size |
| --- | ---: |
| `public/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `public/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |
| `public/videos/game-terrain/forest-movement.webm` | 2.62 MB |
| `public/videos/game-terrain/beautiful-scenery.webm` | 1.56 MB |
| `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 1.07 MB |
| `public/images/sponsor/airsoft-retail-gun-wall.png` | 0.90 MB |
| `public/videos/game-terrain/large-open-area.webm` | 0.87 MB |
| `public/images/sponsor/main-stage-led-screen.png` | 0.73 MB |
| `public/images/events/force-of-conquest-card.png` | 0.72 MB |
| `public/images/what-to-do-thailand/khao-yai-national-park.jpg` | 0.60 MB |
| `public/images/home/photo-1666873577061-26f78e7452ce.avif` | 0.52 MB |
| `public/images/what-to-do-thailand/kaeng-khoi.webp` | 0.47 MB |
| `public/images/activities/zip-line.png` | 0.46 MB |
| `public/images/what-to-do-thailand/jasmine-restaurant.jpg` | 0.46 MB |
| `public/images/airsoft-register-bg.avif` | 0.45 MB |
| `public/images/events/force-of-conquest/golden-triangle-tiger-stripe.webp` | 0.44 MB |
| `public/images/activities/jungle-trip.png` | 0.39 MB |
| `public/images/activities/waterfall.png` | 0.39 MB |
| `public/images/events/force-of-conquest/siam-frontier-woodland.webp` | 0.37 MB |
| `public/images/what-to-do-thailand/kayaking-rapids.webp` | 0.36 MB |
| `public/images/events/force-of-conquest/camping-tents.webp` | 0.34 MB |
| `public/images/home/photo-1661339051428-1af0c377a793.avif` | 0.34 MB |
| `public/images/home-hero-poster.webp` | 0.33 MB |
| `public/images/what-to-do-thailand/wat-maneewong.webp` | 0.32 MB |
| `public/images/events/force-of-conquest/event-info-banner.jpg` | 0.32 MB |
| `public/images/activities/atv-ride-live.png` | 0.32 MB |
| `public/images/activities/atv-ride.png` | 0.32 MB |
| `public/images/events/force-of-conquest/team-2.webp` | 0.32 MB |
| `public/images/events/force-of-conquest/sanitary-facilities.webp` | 0.31 MB |
| `public/images/what-to-do-thailand/narong-waterfall.webp` | 0.30 MB |

## Top Dist Files

| File | Size |
| --- | ---: |
| `dist/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `dist/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |
| `dist/videos/game-terrain/forest-movement.webm` | 2.62 MB |
| `dist/videos/game-terrain/beautiful-scenery.webm` | 1.56 MB |
| `dist/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 1.07 MB |
| `dist/images/sponsor/airsoft-retail-gun-wall.png` | 0.90 MB |
| `dist/videos/game-terrain/large-open-area.webm` | 0.87 MB |
| `dist/images/sponsor/main-stage-led-screen.png` | 0.73 MB |
| `dist/images/events/force-of-conquest-card.png` | 0.72 MB |
| `dist/images/what-to-do-thailand/khao-yai-national-park.jpg` | 0.60 MB |
| `dist/assets/index-Bj-7ClWM.js` | 0.56 MB |
| `dist/images/home/photo-1666873577061-26f78e7452ce.avif` | 0.52 MB |
| `dist/images/what-to-do-thailand/kaeng-khoi.webp` | 0.47 MB |
| `dist/images/activities/zip-line.png` | 0.46 MB |
| `dist/images/what-to-do-thailand/jasmine-restaurant.jpg` | 0.46 MB |
| `dist/images/airsoft-register-bg.avif` | 0.45 MB |
| `dist/images/events/force-of-conquest/golden-triangle-tiger-stripe.webp` | 0.44 MB |
| `dist/images/activities/jungle-trip.png` | 0.39 MB |
| `dist/images/activities/waterfall.png` | 0.39 MB |
| `dist/images/events/force-of-conquest/siam-frontier-woodland.webp` | 0.37 MB |
| `dist/assets/mstar-airsoft-logo-DpkGxyDP.png` | 0.36 MB |
| `dist/images/what-to-do-thailand/kayaking-rapids.webp` | 0.36 MB |
| `dist/images/events/force-of-conquest/camping-tents.webp` | 0.34 MB |
| `dist/images/home/photo-1661339051428-1af0c377a793.avif` | 0.34 MB |
| `dist/images/home-hero-poster.webp` | 0.33 MB |
| `dist/images/what-to-do-thailand/wat-maneewong.webp` | 0.32 MB |
| `dist/images/events/force-of-conquest/event-info-banner.jpg` | 0.32 MB |
| `dist/images/activities/atv-ride.png` | 0.32 MB |
| `dist/images/activities/atv-ride-live.png` | 0.32 MB |
| `dist/images/events/force-of-conquest/team-2.webp` | 0.32 MB |

## Top Repo Files

Top local repo weight is mostly Git history, old deploy folders, and non-deployed source/backup media:

| File | Size |
| --- | ---: |
| `.git/objects/pack/pack-2f7086cde054a4c1551325abaa9ceb85213f3c76.pack` | 1807.19 MB |
| `.git/objects/pack/pack-d0c7edf1db66aeacb8902fa54953e9b107940c3e.pack` | 429.36 MB |
| `zip-check/videos/home-hero.mp4` | 171.16 MB |
| `site content/non-deployed-heavy-media-backup/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB |
| `.git/lfs/objects/25/af/...` | 171.16 MB |
| `deploy-export/videos/home-hero.mp4` | 171.16 MB |
| `site content/non-deployed-heavy-media-backup/home-hero.mp4` | 171.16 MB |
| `website video/webp video/IMG_0752.webm` | 157.04 MB |
| `deploy-export/videos/home-hero-mobile.mp4` | 125.93 MB |
| `.git/lfs/objects/78/56/...` | 125.93 MB |
| `zip-check/videos/home-hero-mobile.mp4` | 125.93 MB |
| `site content/non-deployed-heavy-media-backup/home-hero-mobile.mp4` | 125.93 MB |
| `website video/webp video/IMG_0749.webm` | 116.16 MB |
| `website video/TH Airsoft Game - youtube.mp4` | 82.36 MB |
| `website video/Airsoft Game - youtube.mp4` | 79.84 MB |
| `site content/force of conquest 2027.mp4` | 79.84 MB |
| `site content/youtube content/Largest Airsoft Game in Southeast Asia - youtube.mp4` | 76.69 MB |
| `.git/objects/pack/pack-77a9377b5bf675c3ecab6552492bb5eef412f4af.pack` | 71.83 MB |
| `website video/IMG_0752.MOV` | 56.01 MB |
| `website video/IMG_0749.MOV` | 47.66 MB |
| `website video/webp video/IMG_0747.webm` | 45.32 MB |
| `website video/IMG_0747.MOV` | 37.09 MB |
| `website video/land drone.MOV` | 30.70 MB |
| `.git/objects/67/tmp_obj_SZq0eU` | 26.39 MB |
| `node_modules/@rolldown/binding-win32-x64-msvc/rolldown-binding.win32-x64-msvc.node` | 22.38 MB |
| `pdf/event pdf/Event Sponsor Deck FORCE OF CONQUEST.pdf` | 20.71 MB |
| `site content/force of conquest header compress video.mp4` | 12.10 MB |
| `.git/lfs/objects/ed/a8/...` | 12.10 MB |
| `zip-check/videos/force-of-conquest-header-compress-video.mp4` | 12.10 MB |
| `deploy-export/videos/force-of-conquest-header-compress-video.mp4` | 12.10 MB |
| `site content/non-deployed-heavy-media-backup/force-of-conquest-header-compress-video-original.mp4` | 12.10 MB |
| `website video/webp video/land drone.webm` | 11.18 MB |
| `node_modules/lightningcss-win32-x64-msvc/lightningcss.win32-x64-msvc.node` | 9.06 MB |
| `node_modules/typescript/lib/typescript.js` | 8.69 MB |
| `node_modules/typescript/lib/_tsc.js` | 5.93 MB |
| `site content/specna-arms-ck-UftftEGs-unsplash.jpg` | 5.25 MB |
| `dist/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `public/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `hostinger-full-deploy-aa75a9a/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `hostinger-hpanel-live-package/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB |
| `.git/lfs/objects/54/f1/...` | 4.81 MB |
| `site content/woodland camo for siam frontier.png` | 3.77 MB |
| `site content/tiger stripe golden triangle.png` | 3.06 MB |
| `public/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |
| `dist/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |
| `deploy-export/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |
| `hostinger-full-deploy-aa75a9a/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB |

## Duplicate-Looking And Old Output

- `deploy-export/` - 330.16 MB old output.
- `zip-check/` - 330.16 MB old output/check folder.
- `hostinger-full-deploy-aa75a9a/` - 30.33 MB old staging folder.
- `hostinger-hpanel-live-package/` - 28.93 MB old staging folder.
- `hostinger-hpanel-live-package-runtime-verified/` - 27.04 MB old staging folder.
- `hostinger-hpanel-live-package-text-media-fix/` - 28.93 MB old staging folder.
- `hostinger-latest-changes-aa75a9a/` - 2.57 MB old changes folder.
- `deploy-css-update/` - 0.76 MB old update folder.
- `website video/` and `site content/` contain non-deployed source media and originals.

No source media originals were left in active deploy paths during this pass. The deployment ZIP is built from `dist` contents only.

## Final ZIP

ZIP filename:

`mstar-airsoft-live-optimized-latest.zip`

ZIP size: 31.28 MB.

ZIP root contains:

- `.htaccess`
- `index.html`
- `robots.txt`
- `sitemap.xml`
- `assets/`
- `banners/`
- `images/`
- `videos/`

ZIP inspection confirmed:

- `index.html` is at ZIP root.
- `.htaccess` is at ZIP root.
- No parent `dist/` folder.
- No `src/`, `public/`, `.git/`, `.github/`, `node_modules/`, docs, package/config files, source maps, backup folders, old deploy folders, or source media.
- No backslash archive entries.
- No live deployment or upload was performed.
