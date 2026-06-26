# Mstar Airsoft Site Weight Audit

Audit date: 2026-06-26  
Repo location confirmed: `D:\mstar airsoft site`

## Summary

* Total repo size: 5.00 GB
* Total repo size excluding node_modules/.git/dist/ZIPs: 2.01 GB
* public/ size: 511.61 MB
* public/images size: 23.25 MB
* public/videos size: 317.20 MB
* src/ size: 820.41 KB
* dist production build size: 512.55 MB
* cPanel build size: 512.55 MB
* Largest problem area: video files and duplicated deployment/export folders. The biggest live-deploy risk is `public/`, especially `public/videos` plus `public/media`, which together include about 488.35 MB of video files.

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

Post-cleanup measurements after `cmd /c npm run build`:

* New `dist/` size: 44.31 MB
* New `public/` size: 43.36 MB
* New `public/videos` size: 20.11 MB
* New `public/media` size: 0 B
* Deploy/build size reduction: about 468.24 MB
* Source maps in `dist`: no

The files were moved to a non-deployed backup folder only. They were not compressed, converted, renamed for active use, deleted permanently, or replaced. No cPanel ZIP was created and no real server deployment was performed.

## Size Breakdown

| Area | Size | Notes |
| --- | ---: | --- |
| Full repo | 5.00 GB | Includes `.git`, `node_modules`, `dist`, raw media, backups, and deploy folders. |
| `.git` | 2.41 GB | Large Git pack/LFS history. |
| `website video/` | 666.05 MB | Local editing/source media; not part of normal deploy unless copied. |
| `dist/` | 512.55 MB | Current production output after build. |
| `public/` | 511.61 MB | Gets copied into `dist`; major deploy weight. |
| `deploy-export/` | 330.16 MB | Looks like old deployment/export output. |
| `zip-check/` | 330.16 MB | Looks like old deployment/export verification output. |
| `site content/` | 216.51 MB | Source/upload media folder, not directly used by Vite unless referenced/copied. |
| `node_modules/` | 82.10 MB | Dependency install. |
| `pdf/` | 2.11 MB | Source/reference PDFs. |
| `src/` | 820.41 KB | Application source is light. |

## Top Heavy Files

| Rank | File | Size | Type | Likely Used On | Notes |
| ---: | --- | ---: | --- | --- | --- |
| 1 | `.git/objects/pack/pack-72d88590c95821359d50f315a03bb8bd78775946.pack` | 1.72 GB | Git pack | Repo only | Git history is the largest local size source. |
| 2 | `.git/objects/pack/pack-28c63aa59e95f488477efa8e750a23496fef425d.pack` | 355.50 MB | Git pack | Repo only | Git history/local clone weight. |
| 3 | `public/videos/home-hero.mp4` | 171.16 MB | MP4 | Possibly unused/orphaned | Not found referenced in `src`; still copied to deploy output. |
| 4 | `public/media/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | MP4 | Possibly unused/orphaned | Not found referenced in `src`; still copied to deploy output. |
| 5 | `dist/videos/home-hero.mp4` | 171.16 MB | MP4 | Build output | Copied from `public/videos`. |
| 6 | `dist/media/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | MP4 | Build output | Copied from `public/media`. |
| 7 | `zip-check/videos/home-hero.mp4` | 171.16 MB | MP4 | Backup/check folder | Duplicate-looking old output. |
| 8 | `deploy-export/videos/home-hero.mp4` | 171.16 MB | MP4 | Backup/export folder | Duplicate-looking old output. |
| 9 | `website video/webp video/IMG_0752.webm` | 157.04 MB | WEBM | Local source media | Large editing/source media. |
| 10 | `public/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Possibly unused/orphaned | Not found referenced in `src`; still copied to deploy output. |
| 11 | `dist/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Build output | Copied from `public/videos`. |
| 12 | `zip-check/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Backup/check folder | Duplicate-looking old output. |
| 13 | `deploy-export/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Backup/export folder | Duplicate-looking old output. |
| 14 | `website video/webp video/IMG_0749.webm` | 116.16 MB | WEBM | Local source media | Large editing/source media. |
| 15 | `website video/TH Airsoft Game - youtube.mp4` | 82.36 MB | MP4 | Local source media | Not deploy-critical unless copied. |
| 16 | `site content/force of conquest 2027.mp4` | 79.84 MB | MP4 | Source/upload media | Not directly referenced from `src`. |
| 17 | `website video/Airsoft Game - youtube.mp4` | 79.84 MB | MP4 | Local source media | Not deploy-critical unless copied. |
| 18 | `site content/youtube content/Largest Airsoft Game in Southeast Asia - youtube.mp4` | 76.69 MB | MP4 | Source/upload media | Not directly referenced from `src`. |
| 19 | `website video/IMG_0752.MOV` | 56.01 MB | MOV | Local source media | Large raw editing media. |
| 20 | `website video/IMG_0749.MOV` | 47.66 MB | MOV | Local source media | Large raw editing media. |

## Heavy Images

| File | Size | Format | Used Where | Optimization Priority | Notes |
| --- | ---: | --- | --- | --- | --- |
| `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 2.72 MB | PNG | Event Info `EVENT MAP` section, English and Thai | High | Largest deployed image; inner page only, but could be optimized later. |
| `public/images/what-to-do-thailand/kaeng-khoi.jpg` | 2.15 MB | JPG | Things to Know / Thailand guide content | High | Large inner-guide image. |
| `public/images/events/force-of-conquest/team-2.png` | 2.01 MB | PNG | Force of Conquest faction section | High | Large event-page faction logo/image. |
| `public/images/events/force-of-conquest-card.png` | 1.93 MB | PNG | Event card, Event Info sections, SEO default image | High | Likely appears on Events/Home event surfaces and metadata. |
| `public/images/events/force-of-conquest/team-1.png` | 1.33 MB | PNG | Force of Conquest faction section | Medium | Large event-page faction logo/image. |
| `public/images/what-to-do-thailand/kayaking-rapids.jpg` | 1.11 MB | JPG | Things to Know / activity guide content | Medium | Inner-guide image. |
| `public/images/what-to-do-thailand/khao-yai-national-park.jpg` | 612.30 KB | JPG | Thailand guide content | Low | Reasonable but still larger than most optimized assets. |
| `public/images/events/force-of-conquest/important-information-referee-briefing.jfif` | 601.96 KB | JFIF | Event Info important information section | Low | Already moderate. |
| `public/images/home/photo-1666873577061-26f78e7452ce.avif` | 532.37 KB | AVIF | Home imagery | Low | Homepage risk if above fold; AVIF format helps. |
| `public/images/home-hero-poster.webp` | 341.54 KB | WEBP | Homepage hero poster | Low | First-load image, but size is reasonable. |

Images over 1 MB:

* `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` — 2.72 MB
* `public/images/what-to-do-thailand/kaeng-khoi.jpg` — 2.15 MB
* `public/images/events/force-of-conquest/team-2.png` — 2.01 MB
* `public/images/events/force-of-conquest-card.png` — 1.93 MB
* `public/images/events/force-of-conquest/team-1.png` — 1.33 MB
* `public/images/what-to-do-thailand/kayaking-rapids.jpg` — 1.11 MB

Images over 3 MB in `public/`: none found.

Images over 5 MB in `public/`: none found.

## Heavy Videos

| File | Size | Format | Used Where | Optimization Priority | Notes |
| --- | ---: | --- | --- | --- | --- |
| `public/videos/home-hero.mp4` | 171.16 MB | MP4 | Possibly unused/orphaned | Critical | Not found referenced in `src`, but copied to `dist`. |
| `public/media/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | MP4 | Possibly unused/orphaned | Critical | Not found referenced in `src`, but copied to `dist`. Same size as `home-hero.mp4`. |
| `public/videos/home-hero-mobile.mp4` | 125.93 MB | MP4 | Possibly unused/orphaned | Critical | Not found referenced in `src`, but copied to `dist`. |
| `public/videos/force-of-conquest-header-compress-video.mp4` | 12.10 MB | MP4 | Homepage hero via `siteContent.ts` | High | Current homepage first-load video source. |
| `public/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB | WEBM | Homepage Game Terrain section | Medium | Likely below the fold. |
| `public/videos/game-terrain/forest-movement.webm` | 2.62 MB | WEBM | Homepage Game Terrain section | Medium | Likely below the fold. |
| `public/videos/game-terrain/beautiful-scenery.webm` | 1.56 MB | WEBM | Homepage Game Terrain section | Low | Likely below the fold. |
| `public/videos/game-terrain/large-open-area.webm` | 889.31 KB | WEBM | Homepage Game Terrain section | Low | Likely below the fold. |

Videos over 10 MB:

* `public/videos/home-hero.mp4` — 171.16 MB
* `public/media/largest-airsoft-game-southeast-asia.mp4` — 171.16 MB
* `public/videos/home-hero-mobile.mp4` — 125.93 MB
* `public/videos/force-of-conquest-header-compress-video.mp4` — 12.10 MB

Videos over 25 MB:

* `public/videos/home-hero.mp4` — 171.16 MB
* `public/media/largest-airsoft-game-southeast-asia.mp4` — 171.16 MB
* `public/videos/home-hero-mobile.mp4` — 125.93 MB

Videos over 50 MB:

* `public/videos/home-hero.mp4` — 171.16 MB
* `public/media/largest-airsoft-game-southeast-asia.mp4` — 171.16 MB
* `public/videos/home-hero-mobile.mp4` — 125.93 MB

## Build Output

* Normal `cmd /c npm run build`: passed
* `cmd /c npm run build:cpanel`: passed
* dist total size: 512.55 MB
* dist/assets size: 962.56 KB
* dist/images size: 23.25 MB
* dist/videos size: 317.20 MB
* dist/media size: 171.16 MB
* largest JS chunks:
  * `dist/assets/index-D4a9DaQm.js` — 519.95 KB
* largest CSS files:
  * `dist/assets/index-CSn-BSvi.css` — 71.58 KB
* source maps found in `dist`: no
* source maps found elsewhere: yes, inside `node_modules` dev/dependency files only
* unusual build warnings:
  * Vite/Rolldown warns that one chunk is larger than 500 KB after minification.
  * Build timing warning reports significant time in `vite:prepare-out-dir`.

Largest files inside `dist`:

| File | Size | Notes |
| --- | ---: | --- |
| `dist/videos/home-hero.mp4` | 171.16 MB | Copied from `public/videos`; not found referenced in current `src`. |
| `dist/media/largest-airsoft-game-southeast-asia.mp4` | 171.16 MB | Copied from `public/media`; not found referenced in current `src`. |
| `dist/videos/home-hero-mobile.mp4` | 125.93 MB | Copied from `public/videos`; not found referenced in current `src`. |
| `dist/videos/force-of-conquest-header-compress-video.mp4` | 12.10 MB | Current homepage hero video. |
| `dist/videos/game-terrain/fun-combat-terrains.webm` | 2.97 MB | Game Terrain section. |
| `dist/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` | 2.72 MB | Event Info map. |
| `dist/videos/game-terrain/forest-movement.webm` | 2.62 MB | Game Terrain section. |
| `dist/images/what-to-do-thailand/kaeng-khoi.jpg` | 2.15 MB | Things to Know guide. |
| `dist/images/events/force-of-conquest/team-2.png` | 2.01 MB | Event faction section. |
| `dist/images/events/force-of-conquest-card.png` | 1.93 MB | Event card / SEO image. |

## Homepage First-Load Risks

Likely homepage first-load assets:

* `public/videos/force-of-conquest-header-compress-video.mp4` — 12.10 MB, referenced by `siteContent.ts` as the hero video.
* `public/images/home-hero-poster.webp` — 341.54 KB, referenced by the homepage hero poster handling.
* `dist/assets/index-D4a9DaQm.js` — 519.95 KB, main JS bundle; Vite warns it is over 500 KB.
* `public/images/events/force-of-conquest-card.png` — 1.93 MB, referenced by event-card data and SEO default image; may affect Home/Events depending on rendered event cards.

Possibly deployed but not currently referenced:

* `public/videos/home-hero.mp4` — 171.16 MB
* `public/videos/home-hero-mobile.mp4` — 125.93 MB
* `public/media/largest-airsoft-game-southeast-asia.mp4` — 171.16 MB

These may not affect browser first-load if not referenced, but they still make deployment output and upload/download packages very heavy.

## Event Page Weight Risks

Force of Conquest / Event Info risks:

* `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` — 2.72 MB, Event Info `EVENT MAP` section.
* `public/images/events/force-of-conquest/team-2.png` — 2.01 MB, faction section.
* `public/images/events/force-of-conquest/team-1.png` — 1.33 MB, faction section.
* `public/images/events/force-of-conquest-card.png` — 1.93 MB, event card and Event Info image references.
* `public/images/events/force-of-conquest/important-information-referee-briefing.jfif` — 601.96 KB, Event Info important information section.
* `public/images/events/force-of-conquest/event-info-banner.jpg` — 329.64 KB, Event Info banner.
* `public/videos/force-of-conquest-header-compress-video.mp4` — 12.10 MB, homepage hero/event promo video reference.

## Possible Unused or Duplicate Assets

Do not delete without a separate confirmation task. These are candidates only:

* `public/videos/home-hero.mp4` — 171.16 MB, not found referenced in `src`.
* `public/videos/home-hero-mobile.mp4` — 125.93 MB, not found referenced in `src`.
* `public/media/largest-airsoft-game-southeast-asia.mp4` — 171.16 MB, not found referenced in `src`.
* `deploy-export/` — 330.16 MB, looks like old build/deploy output.
* `zip-check/` — 330.16 MB, looks like old build/deploy verification output.
* `website video/` — 666.05 MB, local editing/source media.
* `site content/` — 216.51 MB, uploaded/source media; some files have optimized/public copies.
* Same or similar media appears in multiple places: `public/`, `dist/`, `deploy-export/`, `zip-check/`, `site content/`, and `website video/`.
* `site content/map final edit.png` and `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png` appear to be source/public copies of the same map artwork.
* `site content/force of conquest header compress video.mp4` and `public/videos/force-of-conquest-header-compress-video.mp4` appear to be source/public copies of the same video.
* `site content/team 1.png` / `site content/team 2.png` and public faction assets appear to be source/public copies.

## Grouped Heavy Files by Type

| Type | Total Size | Count | Notes |
| --- | ---: | ---: | --- |
| Videos `.mp4/.mov/.webm` | 2.39 GB | 43 | Largest total weight across repo. |
| Images `.png/.jpg/.jpeg/.jfif/.webp/.avif` | 125.96 MB | 255 | Public images are 23.25 MB. |
| PDFs/docs | 2.13 MB | 14 | Small compared with media. |
| ZIP/archive files | 0 B | 0 | No `.zip/.7z/.rar` files found. |
| JS files | 31.54 MB | 1434 | Mostly dependencies/node_modules; built JS is about 519.95 KB. |
| CSS files | 267.36 KB | 5 | Built CSS is about 71.58 KB. |

## Asset Loading Risk

* Highest first-load risk: current homepage hero video `force-of-conquest-header-compress-video.mp4` at 12.10 MB.
* Highest deploy-size risk: unreferenced-looking videos inside `public/`, especially the 171.16 MB and 125.93 MB MP4 files.
* Event Info map is the largest deployed image at 2.72 MB, but it is on an inner page and lower than the homepage hero video risk.
* Game Terrain videos are likely homepage below-the-fold; they should remain lazy/controlled so they do not all load immediately.
* Things to Know guide images over 1 MB are inner-page risks, not homepage first-load risks unless linked previews use them.

## Optimization Plan — One By One

Do not perform these yet without a separate optimization task.

1. First file to optimize/check: `public/videos/home-hero.mp4` and `public/media/largest-airsoft-game-southeast-asia.mp4`. They are each 171.16 MB, appear unreferenced in `src`, and still get copied into `dist`, making deploy output very heavy.
2. Second file to optimize/check: `public/videos/home-hero-mobile.mp4`. It is 125.93 MB, appears unreferenced in `src`, and is copied into `dist`.
3. Third file to optimize: `public/videos/force-of-conquest-header-compress-video.mp4`. It is the current homepage hero video and likely affects first load directly.
4. Fourth file to optimize: `public/images/events/force-of-conquest/force-of-conquest-event-map-updated.png`. It is the largest deployed image at 2.72 MB.
5. Fifth file to optimize: `public/images/events/force-of-conquest-card.png`. It is 1.93 MB and used in event-card/SEO surfaces.

## Safe Next Steps

No files were removed, compressed, converted, renamed, moved, deleted, replaced, deployed, or uploaded in this audit.

Recommended next step is a separate, narrow optimization task starting with the unreferenced-looking deployed videos in `public/`. Confirm whether those files are still needed before removing or replacing anything. If they are not needed, removing them from `public/` would reduce `dist` by roughly 468 MB. If they are needed, optimize them one by one with replacement checks on desktop, tablet, and mobile.

No cPanel ZIP was created and no real server upload was performed.
