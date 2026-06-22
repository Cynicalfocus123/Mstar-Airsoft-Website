# Mstar Airsoft Website

React + Vite + TypeScript frontend for Mstar Airsoft tournament and event pages.

## Live Site

GitHub Pages preview:

```text
https://cynicalfocus123.github.io/Mstar-Airsoft-Website/
```

Live production domain:

```text
https://mstarairsoft.com/
```

## Deployment Links

- GitHub Pages preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/
- Production site: https://mstarairsoft.com/
- Ticket page preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/ticket
- Events page preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/events
- Rules page preview: https://cynicalfocus123.github.io/Mstar-Airsoft-Website/rules-and-regulation

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
