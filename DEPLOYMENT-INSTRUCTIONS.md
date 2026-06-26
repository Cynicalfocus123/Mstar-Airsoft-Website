# cPanel Deployment Instructions

1. Upload `mstar-airsoft-live-deployment.zip` to `public_html`.
2. Extract the ZIP directly inside `public_html`.
3. Confirm `index.html` is inside the `public_html` root.
4. Confirm `assets`, `images`, `banners`, and `videos` are real folders.
5. Delete old broken files that contain backslashes in their filename, such as:
   - `assets\index-xxxx.js`
   - `assets\index-xxxx.css`
   - `banners\event-final.svg`
6. Do not upload the ZIP into a nested folder.
7. Do not upload `src` or `node_modules`.
8. Clear browser cache or Cloudflare cache after upload if needed.
