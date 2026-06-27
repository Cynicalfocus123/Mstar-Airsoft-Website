# SITE-WEIGHT.md

## 2026-06-28 Sponsor Icon Weight Note

- `/become-a-sponsor` uses supplied local PNG icon assets from `site content/sponsorship page`, copied into `public/images/sponsor/icons/` with clean forward-slash web paths.
- Generated sponsor icon assets must not use backslash filenames or archive paths.
- Checkerboard preview backgrounds were removed from the deployed icon files; transparent PNGs are used instead.
- Card icons were cropped and downsampled to a max visual source size of about 320px so small UI icons do not ship as oversized 1000px-plus files.
- Sponsor page background is clean white/off-white with no checker/grid texture.
- Desktop, tablet, and mobile sponsor CSS should keep cards readable, pills unclipped, media fitted, and connector lines away from card bodies.
