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

- Keep remote connected to `https://github.com/Cynicalfocus123/Mstar-Airsoft-Website.git`.
- Commit and push finished work automatically.
- Update `AGENT.md` and `DESIGNER.md` before every commit.
- Do not ask for approval before normal commit/push.
- Do not revert user changes unless explicitly requested.
- Use per-command `-c safe.directory='D:/mstar airsoft site'` if git warns about workspace ownership.

## Auto Commit + Push Rule

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

## Next Steps

- Replace placeholder/current logo file with final approved logo at `src/assets/mstar-airsoft-logo.png`.
- Connect `src/data/siteContent.ts` to backend/admin API when backend work begins.
- Check GitHub Actions Pages run after push and enable Pages source as GitHub Actions if repository settings require it.
