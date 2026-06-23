# Mstar Airsoft Website

React + Vite + TypeScript frontend for Mstar Airsoft tournament and event pages.

## GitHub Test Homepage

Use this GitHub Pages URL to preview the repository build only. This is separate from the live production domain and is meant for testing/review:

```text
https://cynicalfocus123.github.io/Mstar-Airsoft-Website/
```

## Live Production Site

The public production website remains separate:

```text
https://mstarairsoft.com/
```

## Deployment Links

- GitHub repo test homepage: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/
- Live production site: https://mstarairsoft.com/
- Ticket page test preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/ticket
- Events page test preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/events
- Things to Know test preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/things-to-know
- Rules page test preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/rules-and-regulation

The GitHub Pages links are for repository testing only. They do not upload to cPanel and do not change `https://mstarairsoft.com/`.

## Changes

Recent GitHub Pages routing fixes can be checked quickly from these links:

- Home: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/
- Ticket: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/ticket
- Events: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/events
- Things to Know: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/things-to-know
- Rules & Regulation: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/rules-and-regulation

## Setup

```bash
npm install
npm run dev
npm run build
```

## Logo

Replace `src/assets/mstar-airsoft-logo.png` with the final Mstar Airsoft logo. Keep the same file path unless updating `src/data/siteContent.ts`.

## Content Structure

Site content lives in `src/data/siteContent.ts` and is typed through `src/types/siteContent.ts`. Header navigation, hero copy, events, registration fields, gallery items, rules, contact details, footer links, CTA labels, and asset paths are data-driven so a backend/admin dashboard can replace static data later.
