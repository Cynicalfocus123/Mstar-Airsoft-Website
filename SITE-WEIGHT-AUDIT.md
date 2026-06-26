# Mstar Airsoft Site Weight Audit

Audit date: 2026-06-27
Repo location confirmed: `D:\mstar airsoft site`

## Summary

Current post-cleanup / post-Phase-3 / event content update numbers:

* Total repo size: 4.54 GB
* Total repo size excluding node_modules/.git/dist/ZIPs: 2.02 GB
* public/ size: 29.35 MB
* public/images size: 16.52 MB
* public/videos size: 12.82 MB
* public/media size: 0 B
* src/ size: 0.84 MB
* dist production build size: 30.33 MB
* Largest current deploy weight area: `public/images` at 16.52 MB, followed by `public/videos` at 12.82 MB.

Before Phase 1, `dist/` was 512.55 MB and `public/` was 511.61 MB. Those are no longer current deploy sizes.

## Phase 1 Deploy Bloat Cleanup

Completed on 2026-06-26.

Read-only local and live production checks found no current app usage for these deployed heavy videos:

| File moved out of `public/` | Size | New backup location | Live production usage check |
| --- | ---: | --- | --- |
| `public/videos/home-hero.mp4` | 171.16 MB | `site content/non-deployed-heavy-media-backup/home-hero.mp4` | Not requested in Network and not present in DOM on checked live pages. |
| `public/videos/home-hero-mobile.mp4` | 125.93 MB | `site content/non-deployed-heavy-media-backup/home-hero-mobile.mp4` | Not requested in Network and not present in DOM on checked live pages. |
| `public/media/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | `site content/non-deployed-heavy-media-backup/largest-airsoft-game-southeast-asia.mp4` | Not requested in Network and not present in DOM on checked live pages. |

Live production pages checked read-only:

* `https://mstarairsoft.com/`
* `https://mstarairsoft.com/events/force-of-conquest`
* `https://mstarairsoft.com/events/force-of-conquest/event-info`
* `https://mstarairsoft.com/ticket`

Desktop and mobile checks confirmed the homepage hero requests and renders `https://mstarairsoft.com/videos/force-of-conquest-header-compress-video.mp4`, not the moved files.

Post-Phase-1 measurements after `cmd /c npm run build`:

* `dist/` size: 44.31 MB
* `public/` size: 43.36 MB
* `public/videos` size: 20.11 MB
* `public/media` size: 0 B
* Deploy/build size reduction: about 468.24 MB
* Source maps in `dist`: no

The files were moved to a non-deployed backup folder only. They were not compressed, converted, renamed for active use, deleted permanently, or replaced. No cPanel ZIP was created and no real server deployment was performed.

## Phase 2 Homepage Hero Video Optimization

Completed on 2026-06-26.

Optimized only the active homepage hero video:

`public/videos/force-of-conquest-header-compress-video.mp4`

| Item | Size |
| --- | ---: |
| Original hero video size | 12.10 MB |
| Optimized hero video size | 4.81 MB |
| Size saved | 7.29 MB |
| New `dist/` size | 37.02 MB |
| New `public/videos` size | 12.82 MB |

Original backup:

`site content/non-deployed-heavy-media-backup/force-of-conquest-header-compress-video-original.mp4`

Optimization notes:

* Kept the same deployed filename and path, so source references did not change.
* Encoded as web-friendly H.264 MP4 with `+faststart`.
* Removed audio because the homepage hero is muted background video.
* Kept poster fallback unchanged: `public/images/home-hero-poster.webp`.
* Kept autoplay/muted/loop/playsInline/no-controls behavior unchanged.
* Local browser check confirmed the homepage requests `/videos/force-of-conquest-header-compress-video.mp4`, receives `206 video/mp4`, and the video reaches `readyState: 4` with no media error.
* No cPanel ZIP was created and no real server deployment was performed.

## Phase 3 Image Optimization

Completed on 2026-06-26.

Backed up the six original deployed images before optimizing:

`site content/non-deployed-heavy-media-backup/phase-3-image-originals/`

| Image | Usage | Original Size | New Size | Size Saved | Output |
| --- | --- | ---: | ---: | ---: | --- |
| `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | Event Info Event Map, English and Thai | 2.72 MB | 1.07 MB | 1.65 MB | Optimized PNG, same path |
| `public/images/what-to-do-thailand/kaeng-khoi.jpg` -> `kaeng-khoi.webp` | Things to Know / What to Do in Thailand inner guide | 2.15 MB | 0.47 MB | 1.68 MB | WebP, typed content reference updated |
| `public/images/events/force-of-conquest/team-2.png` -> `team-2.webp` | Force of Conquest event detail faction section | 2.01 MB | 0.32 MB | 1.69 MB | WebP, typed content reference updated |
| `public/images/events/force-of-conquest-card.png` | Homepage event card, Events page, Event Info sections, SEO/social default image | 1.93 MB | 0.72 MB | 1.21 MB | Optimized PNG, same path |
| `public/images/events/force-of-conquest/team-1.png` -> `team-1.webp` | Force of Conquest event detail faction section | 1.33 MB | 0.21 MB | 1.12 MB | WebP, typed content reference updated |
| `public/images/what-to-do-thailand/kayaking-rapids.jpg` -> `kayaking-rapids.webp` | Things to Know card and Activity / What to Do in Thailand inner guide | 1.11 MB | 0.36 MB | 0.75 MB | WebP, typed content references updated |

Phase 3 totals:

* Optimized image set: 11.24 MB -> 3.15 MB
* Total image size saved: 8.09 MB
* New `public/images` size: 15.16 MB
* New `public/` size: 27.99 MB
* New `dist/` size after `cmd /c npm run build`: 28.93 MB
* New `dist/images` size: 15.16 MB
* Source maps in `dist`: no

Usage investigation:

* Event map: Event Info page, English and Thai, lower-page Event Map section.
* Kaeng Khoi: Things to Know / What to Do in Thailand inner guide, below-the-fold guide content.
* Team 2 and Team 1 faction images: Force of Conquest event detail page faction section.
* Force of Conquest card image: homepage-visible event card, Events page, Event Info sections, and SEO/social default image.
* Kayaking rapids: Things to Know card and Activity / What to Do in Thailand inner guide content.

Verification:

* `cmd /c npm run build`: passed.
* `git diff --check`: passed with only normal CRLF working-copy warnings.
* Built-app desktop 1440px and mobile 390px checks passed for Home, Events, Force of Conquest, Event Info, Things to Know, What to Do in Thailand, and Activity.
* No broken image icons found in checked routes.
* No horizontal overflow found in checked desktop/mobile routes.
* Event Map labels remained readable after PNG optimization.
* Faction images remained clean after WebP conversion.
* Force of Conquest card image and SEO/social path remained `force-of-conquest-card.png`.
* No cPanel ZIP was created and no real server deployment was performed.

## Size Breakdown

| Area | Current Size | Notes |
| --- | ---: | --- |
| Full repo | 4.54 GB | Includes `.git`, dependencies, build output, ignored source media, and backup folders. |
| `.git` | About 2.41 GB | Large Git pack/LFS history remains the biggest local repo weight area. |
| `website video/` | 666.05 MB | Local editing/source media; not deployed by Vite. |
| `deploy-export/` | 330.16 MB | Old deployment/export output; not current `dist`. |
| `zip-check/` | 330.16 MB | Old deployment/check output; not current `dist`. |
| `site content/` | Includes backup/source media | Ignored non-deployed media source/backup folder. |
| `dist/` | 28.93 MB | Current production output after Phase 3 build. |
| `public/` | 27.99 MB | Current deploy-copied public folder. |
| `public/images` | 15.16 MB | Current largest deployed asset group after Phase 3. |
| `public/videos` | 12.82 MB | Current deployed video group after Phase 1 and Phase 2. |
| `public/media` | 0 B | Phase 1 removed deployed media bloat from this folder. |
| `src/` | 820.41 KB | Application source is light. |

## Top Heavy Files

| Rank | File | Size | Type | Likely Used On | Notes |
| ---: | --- | ---: | --- | --- | --- |
| 1 | `.git/objects/pack/pack-72d88590c95821359d50f315a03bb8bd78775946.pack` | 1.72 GB | Git pack | Repo only | Git history/local clone weight. |
| 2 | `.git/objects/pack/pack-28c63aa59e95f488477efa8e750a23496fef425d.pack` | 355.50 MB | Git pack | Repo only | Git history/local clone weight. |
| 3 | `.git/lfs/objects/...25af...` | 171.16 MB | Git LFS object | Repo history | Historical LFS object for moved media. |
| 4 | `deploy-export/videos/home-hero.mp4` | 171.16 MB | MP4 | Old export folder | Non-current duplicate output. |
| 5 | `zip-check/videos/home-hero.mp4` | 171.16 MB | MP4 | Old check folder | Non-current duplicate output. |
| 6 | `site content/non-deployed-heavy-media-backup/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | MP4 | Backup only | Moved out of `public/` in Phase 1. |
| 7 | `site content/non-deployed-heavy-media-backup/home-hero.mp4` | 171.16 MB | MP4 | Backup only | Moved out of `public/` in Phase 1. |
| 8 | `website video/webp video/IMG_0752.webm` | 157.04 MB | WEBM | Local source media | Not current deploy output. |
| 9 | `.git/lfs/objects/...7856...` | 125.93 MB | Git LFS object | Repo history | Historical LFS object for moved media. |
| 10 | `deploy-export/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Old export folder | Non-current duplicate output. |
| 11 | `site content/non-deployed-heavy-media-backup/home-hero-mobile.mp4` | 125.93 MB | MP4 | Backup only | Moved out of `public/` in Phase 1. |
| 12 | `zip-check/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Old check folder | Non-current duplicate output. |
| 13 | `website video/webp video/IMG_0749.webm` | 116.16 MB | WEBM | Local source media | Not current deploy output. |
| 14 | `website video/TH Airsoft Game - youtube.mp4` | 82.36 MB | MP4 | Local source media | Not current deploy output. |
| 15 | `site content/force of conquest 2027.mp4` | 79.84 MB | MP4 | Source/upload media | Not current deploy output. |
| 16 | `website video/Airsoft Game - youtube.mp4` | 79.84 MB | MP4 | Local source media | Not current deploy output. |
| 17 | `site content/youtube content/Largest Airsoft Game in Southeast Asia - youtube.mp4` | 76.69 MB | MP4 | Source/upload media | Not current deploy output. |
| 18 | `website video/IMG_0752.MOV` | 56.01 MB | MOV | Local source media | Raw editing media. |
| 19 | `website video/IMG_0749.MOV` | 47.66 MB | MOV | Local source media | Raw editing media. |
| 20 | `website video/webp video/IMG_0747.webm` | 45.32 MB | WEBM | Local source media | Not current deploy output. |

## Heavy Images

| File | Size | Format | Used Where | Optimization Priority | Notes |
| --- | ---: | --- | --- | --- | --- |
| `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 1.07 MB | PNG | Event Info `EVENT MAP` section, English and Thai | Done | Optimized PNG kept readable and kept same path. |
| `public/images/events/force-of-conquest-card.png` | 0.72 MB | PNG | Event card, Event Info sections, SEO default image | Done | Optimized PNG kept same SEO/social path. |
| `public/images/what-to-do-thailand/kaeng-khoi.webp` | 0.47 MB | WebP | Things to Know / Thailand guide content | Done | Converted from JPG and reference updated. |
| `public/images/what-to-do-thailand/kayaking-rapids.webp` | 0.36 MB | WebP | Things to Know / activity guide content | Done | Converted from JPG and references updated. |
| `public/images/events/force-of-conquest/team-2.webp` | 0.32 MB | WebP | Force of Conquest faction section | Done | Converted from PNG and reference updated. |
| `public/images/events/force-of-conquest/team-1.webp` | 0.21 MB | WebP | Force of Conquest faction section | Done | Converted from PNG and reference updated. |

Images over 1 MB in `public/`: 1.
Images over 3 MB in `public/`: none.
Images over 5 MB in `public/`: none.

## Heavy Videos

| File | Size | Format | Used Where | Optimization Priority | Notes |
| --- | ---: | --- | --- | --- | --- |
| `public/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB | MP4 | Homepage hero via `siteContent.ts` | Done | Optimized in Phase 2; same filename retained. |
| `public/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB | WEBM | Homepage Game Terrain section | Medium | Likely below the fold. |
| `public/videos/game-terrain/forest-movement.webm` | 2.62 MB | WEBM | Homepage Game Terrain section | Medium | Likely below the fold. |
| `public/videos/game-terrain/beautiful-scenery.webm` | 1.56 MB | WEBM | Homepage Game Terrain section | Low | Likely below the fold. |
| `public/videos/game-terrain/large-open-area.webm` | 889.31 KB | WEBM | Homepage Game Terrain section | Low | Likely below the fold. |

Videos over 10 MB in current `public/`: none.

Videos over 25 MB in current `public/`: none.

Videos over 50 MB in current `public/`: none.

## Build Output

* `cmd /c npm run build`: passed
* dist total size: 28.93 MB
* dist/assets size: 0.94 MB
* dist/images size: 15.16 MB
* dist/videos size: 12.82 MB
* dist/media size: 0 B
* largest JS chunks:
* `dist/assets/index-CXNzadvn.js` - 557.43 KB, main JS bundle; Vite warns it is over 500 KB.
* largest CSS files:
  * `dist/assets/index-D8UVGbHj.css` â€” 71.56 KB
* source maps found in `dist`: no
* unusual build warnings:
  * Vite/Rolldown still warns that one JS chunk is larger than 500 KB after minification.
  * A plugin timing warning can appear for build preparation/CSS processing.
* 2026-06-26 runtime package verification: temporary Playwright verifier built the app, served local `dist`, checked 15 requested routes at desktop and mobile widths, clicked visible Thai language toggles, scanned rendered DOM text for expanded mojibake patterns, and verified local `/images/`, `/videos/`, and `/assets/` media. Result: 30 route/view checks passed, 10 Thai-toggle route/view checks passed, 102 local media route/view references verified, zero rendered mojibake, and zero missing local media. Initial runtime-verified Hostinger staging folder: `hostinger-hpanel-live-package-runtime-verified/`, 28.93 MB. Initial runtime-verified ZIP: `mstarairsoft-hostinger-runtime-verified.zip`, 28.04 MB.
* 2026-06-26 Git/source asset pruning pass: Git inspection confirmed the workspace is on `main` at `4da1677ea4d8eb26155c3fc5fe6a9da616a79322` with the expected GitHub remote. Current source references 58 local deploy media assets: 46 images, 5 videos, and 7 banners. All referenced media exists in the built output and is Git-tracked. The final Hostinger staging folder was rebuilt from required root files, compiled `assets/`, and only those source-referenced public media files. Pruned staging folder: 65 files, 27.04 MB. Pruned ZIP: `mstarairsoft-hostinger-runtime-verified.zip`, 26.18 MB. Runtime verification against the pruned staging folder passed with 30 route/view checks, 10 Thai-toggle checks, 106 local media route/view references, zero rendered mojibake, and zero missing media. ZIP inspection found no parent folder, source files, Git files, package/config/docs/backups, source maps, forbidden GitHub/GitHub Pages links, requested mojibake sequences, or missing source-referenced assets.

Largest files inside current `dist`:

| File | Size | Notes |
| --- | ---: | --- |
| `dist/videos/force-of-conquest-header-compress-video.mp4` | 4.81 MB | Current optimized homepage hero video. |
| `dist/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB | Game Terrain section. |
| `dist/videos/game-terrain/forest-movement.webm` | 2.62 MB | Game Terrain section. |
| `dist/images/events/force-of-conquest/referee-final-edit.png` | 1.95 MB | Event Info important-information section. |
| `dist/videos/game-terrain/beautiful-scenery.webm` | 1.56 MB | Game Terrain section. |
| `dist/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 1.07 MB | Event Info map. |
| `dist/videos/game-terrain/large-open-area.webm` | 889.31 KB | Game Terrain section. |
| `dist/images/events/force-of-conquest-card.png` | 742.37 KB | Event card / SEO image. |

## 2026-06-27 Event Content Update

The Event Info important-information section now uses the supplied referee briefing image:

* Added active deploy asset: `public/images/events/force-of-conquest/referee-final-edit.png` - 1.95 MB.
* Removed obsolete deploy asset: `public/images/events/force-of-conquest/important-information-referee-briefing.jfif` - 601.96 KB.
* Net public image increase for this media swap: about 1.36 MB.
* Refreshed production build after removal; `dist/images/events/force-of-conquest/referee-final-edit.png` exists and the old JFIF no longer appears in `dist`.

## Homepage First-Load Risks

Likely homepage first-load assets:

* `public/videos/force-of-conquest-header-compress-video.mp4` â€” 4.81 MB, referenced by `siteContent.ts` as the hero video.
* `public/images/home-hero-poster.webp` â€” 341.54 KB, referenced by the homepage hero poster handling.
* `dist/assets/index-CXNzadvn.js` - 557.43 KB, main JS bundle; Vite warns it is over 500 KB.
* `public/images/events/force-of-conquest-card.png` â€” 0.72 MB, referenced by event-card data and SEO default image; may affect Home/Events depending on rendered event cards.

## Event Page Weight Risks

Force of Conquest / Event Info risks:

* `public/images/events/force-of-conquest/referee-final-edit.png` - 1.95 MB, Event Info important-information section.
* `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` â€” 1.07 MB, Event Info `EVENT MAP` section.
* `public/images/events/force-of-conquest/team-2.webp` â€” 0.32 MB, faction section.
* `public/images/events/force-of-conquest/team-1.webp` â€” 0.21 MB, faction section.
* `public/images/events/force-of-conquest-card.png` â€” 0.72 MB, event card and Event Info image references.
* `public/images/events/force-of-conquest/event-info-banner.jpg` â€” 329.64 KB, Event Info banner.

## Possible Unused or Duplicate Assets

List only. Do not delete without a separate confirmation task.

* `deploy-export/` â€” 330.16 MB, looks like old build/deploy output.
* `zip-check/` â€” 330.16 MB, looks like old build/deploy verification output.
* `website video/` â€” 666.05 MB, local editing/source media.
* `site content/non-deployed-heavy-media-backup/` â€” backup-only media moved out of deploy paths.
* Same or similar media appears in multiple places: `site content/`, `website video/`, old `deploy-export/`, old `zip-check/`, and Git/LFS history.
* `site content/map final edit.png` and `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` appear to be source/public copies of the same map artwork; the deployed public copy is now optimized.
* `site content/force of conquest header compress video.mp4`, `site content/non-deployed-heavy-media-backup/force-of-conquest-header-compress-video-original.mp4`, and `public/videos/force-of-conquest-header-compress-video.mp4` are source/original/optimized versions of the active homepage hero.

## Grouped Heavy Files by Type

| Type | Current Deploy Impact | Notes |
| --- | ---: | --- |
| Videos in `public/` | 12.82 MB | Phase 1 removed unused public videos; Phase 2 optimized active hero. |
| Images in `public/` | 15.16 MB | Largest current deploy asset group after Phase 3 optimization. |
| PDFs/docs | Small | Mostly under `pdf/`, not current public deploy weight. |
| ZIP/archive files | 0 B found | No `.zip/.7z/.rar` files found in the latest scan. |
| JS/CSS build assets | 962.56 KB | Main JS is still slightly above Vite's 500 KB warning threshold. |

## Asset Loading Risk

* Highest current first-load media risk: homepage hero video at 4.81 MB.
* Highest current deployed image risk: Event Map PNG at 1.07 MB.
* Game Terrain videos are likely homepage below-the-fold; keep them lazy/controlled so they do not all load immediately.
* Things to Know guide images over 1 MB are inner-page risks, not homepage first-load risks unless linked previews use them.

## Token-Saving and Bundle-Size Rules

* Keep verification scripts targeted and make their output minimal: counts, first failures, and pass/fail summaries are preferred over full file dumps.
* Avoid duplicate deployed media; keep source/original/backups outside `public/`, `dist/`, and Hostinger ZIP staging folders.
* Prefer optimized WebP/AVIF images where browser support and visual quality are acceptable; keep PNG/JPG only when transparency, SEO/social paths, or readability require them.
* Avoid unused assets in the production build. Only referenced media should live in deploy-copied public paths.
* Do not consolidate the required live structure into a single folder: keep `assets/`, `images/`, and `videos/` as separate build roots.
* Reuse existing verification scripts or targeted one-off checks rather than broad scans that read binary media unnecessarily.

## Optimization Plan â€” One By One

Do not perform these yet without a separate optimization task.

1. Consider future optimization of Game Terrain videos if a later video phase is requested.
2. Consider code-splitting the main JS bundle if the Vite chunk warning becomes a priority.
3. Review old non-deployed folders `deploy-export/` and `zip-check/` if the user wants local repo cleanup, not deploy output cleanup.

## Safe Next Steps

No visible design, routes, buttons, Stripe, header, footer, Ticket page, Event pages, cPanel settings, `.htaccess`, DNS, or SSL were changed during this audit/optimization phase.

No cPanel ZIP was created and no real server deployment was performed.
