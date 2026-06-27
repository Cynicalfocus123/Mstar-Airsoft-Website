# cPanel Update Deployment Instructions

1. Upload `mstar-airsoft-update-deployment.zip` to `public_html`.
2. Extract the ZIP directly inside `public_html`.
3. Allow overwrite when cPanel prompts for existing files.
4. Confirm the updated root files and `assets/` entries replaced correctly.
5. Delete old broken files that contain backslashes in their filenames, such as `assets\index-xxxx.js`, `assets\index-xxxx.css`, or `banners\event-final.svg`.
6. Do not upload or extract into a nested folder.
7. Clear browser cache and Cloudflare cache after upload if needed.
