# Mstar Airsoft Website

React + Vite + TypeScript frontend for Mstar Airsoft tournament and event pages.

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
