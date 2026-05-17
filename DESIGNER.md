# DESIGNER.md

## Design Direction

- Bold military/tactical tournament site.
- Dark base with red, white, black, and military green accents.
- Professional event-operations feel, not generic landing page.
- First screen must show actual Mstar Airsoft brand signal and tournament CTA.

## Reference Site Notes

- Use `https://americanmilsim.com` only for visual inspiration: dark tactical mood, strong header, boxy cards, bold buttons, dense event sections, footer structure.
- Do not copy content, brand wording, images, logo, layout exactly, or copyrighted assets.

## Header Rules

- Logo stays top-left.
- Header navigation: Home, About, Events, Rules, Gallery, Contact.
- No Shop link.
- Mobile menu must remain responsive and easy to tap.
- Navigation must come from config/data.

## Footer Rules

- Tactical dark footer with logo/name, quick links, contact info, social placeholder.
- Footer links must come from config/data.
- No Shop link.

## Logo Placement Rules

- Required path: `src/assets/mstar-airsoft-logo.png`.
- Header logo uses `object-fit: contain`.
- Keep logo clean, not stretched, not blurry, not oversized.
- Real logo replacement should not require code changes.

## Color Direction

- Dark background: near-black and charcoal.
- Accent red for primary actions and status.
- Military green for labels and tactical accents.
- White for strong headings.
- Muted grey/khaki for supporting text.

## Button/Card Style Rules

- Buttons: strong, square tactical feel, uppercase, high contrast.
- Primary CTA uses red.
- Secondary CTA uses dark panel and light border.
- Cards: bordered, dark, structured, boxy, event-focused.
- Avoid soft rounded generic SaaS style.

## Responsive Design Rules

- Header collapses to mobile menu.
- Hero, cards, forms, gallery, rules, contact, and footer stack cleanly on small screens.
- Text must not overlap or overflow containers.
- Logo remains aligned in top-left on mobile.

## Image/Lightweight Design Rules

- Avoid large decorative image backgrounds.
- Prefer CSS texture, gradients, and lightweight placeholder images.
- Gallery paths should prefer WebP/AVIF.
- Gallery images use lazy loading.
- Logo PNG is acceptable because it is user-replaceable brand asset.

## Backend-Ready Section Design Rules

- Every major visible section must render from typed content/config data.
- Components must accept props, not own hard-coded data.
- Admin/backend can later replace data for nav, hero, about, events, registration fields, gallery, rules, contact, footer, CTA buttons, and assets.

## Deployment Design Rules

- GitHub Pages path must use Vite base `/Mstar-Airsoft-Website/`.
- Asset references must remain compatible with repository-scoped GitHub Pages hosting.
- Deployment changes must not alter visual direction or add heavy assets.

## Do-Not-Break Visual Rules

- Do not add Shop.
- Do not make a light theme.
- Do not switch to generic template look.
- Do not add copied American Milsim assets or wording.
- Do not use huge unoptimized images.
- Do not hide or move logo away from top-left.
- Do not make registration look connected to backend before backend exists.

## Changelog

- 2026-05-17: Established tactical visual system, responsive rules, logo/header/footer constraints, lightweight image strategy, and backend-ready design rules for initial site build.
- 2026-05-17: Confirmed build-readiness work did not change visual rules; kept logo and gallery asset paths compatible with Vite.
- 2026-05-17: Kept generated artifacts out of source control so deployed design stays lightweight and maintainable.
- 2026-05-17: Added GitHub Pages deployment requirements and confirmed repo-scoped base path keeps assets deploy-safe.
