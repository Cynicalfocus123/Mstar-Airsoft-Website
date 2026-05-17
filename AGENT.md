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

On this Windows shell, use `cmd /c npm ...` if PowerShell script policy blocks `npm.ps1`.

## Git Rules

- Keep remote connected to `https://github.com/Cynicalfocus123/Mstar-Airsoft-Website.git`.
- Commit and push finished work automatically.
- Update `AGENT.md` and `DESIGNER.md` before every commit.
- Do not ask for approval before normal commit/push.
- Do not revert user changes unless explicitly requested.
- Use per-command `-c safe.directory='D:/mstar airsoft site'` if git warns about workspace ownership.

## Token-Saving Command Rule

- Keep logs short.
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
- Use lazy loading for gallery images.
- Avoid heavy image libraries and large background images.
- Logo is replaceable at `src/assets/mstar-airsoft-logo.png`.

## Invariants Agent Must Not Break

- Always follow `$caveman full` communication until user changes mode.
- Always update `AGENT.md` and `DESIGNER.md` for every change/fix.
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

## Next Steps

- Replace placeholder/current logo file with final approved logo at `src/assets/mstar-airsoft-logo.png`.
- Connect `src/data/siteContent.ts` to backend/admin API when backend work begins.
- Add GitHub Pages deploy config when hosting path is known.
