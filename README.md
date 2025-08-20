# www.elifeldemir.com — Minimal, Accessible, High-Performance One-Page Site

This repository contains a minimalist, mobile‑first website for “Elif Eldemir, SMMM”, built with plain HTML, CSS, and a tiny bit of vanilla JS for progressive enhancement.

## Features

- WCAG 2.2 AA: skip link, semantic landmarks, visible focus styles, keyboard‑friendly navigation, reduced‑motion support, ≥44px tap targets.
- Performance‑minded: no external fonts or heavyweight libraries; single CSS/JS; system font stack; suitable for Lighthouse 95+ across categories.
- Security: restrictive Content‑Security‑Policy via meta tag; no inline scripts or styles; images restricted to self and data: URIs.
- SEO: descriptive title/description, canonical URL, Open Graph/Twitter meta, JSON‑LD Person schema.
- Responsive layout with light/dark themes using `prefers-color-scheme` and `color-scheme`.

## Files

- `index.html` — main page (About, Services, Contact sections).
- `styles.css` — site styles (light/dark themes, focus states, layout).
- `script.js` — progressive enhancement (mobile menu, mailto form enhancement, year stamp).
- `logo.svg` and `favicon.svg` — simple “EE” monogram assets.
- `robots.txt`, `sitemap.xml` — basic search indexing hints.
- `CNAME` — custom domain configuration.
- `404.html` — not‑found page (GitHub Pages).
- `README.md` — this file.

## Local development

No build step required. Open `index.html` in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In Repository Settings → Pages:
   - Set “Source” to `main` (or your chosen branch).
   - Set “Build and deployment” → “Source” to “Deploy from a branch”.
   - Folder: `/ (root)`.
3. Add `CNAME` with the custom domain `www.elifeldemir.com` (already included).
4. Once deployed, Pages will serve the site at https://www.elifeldemir.com/ after DNS is configured.

## Custom domain and DNS

Point `www.elifeldemir.com` to GitHub Pages:

- Create CNAME record:
  - Host: `www`
  - Type: `CNAME`
  - Value: `<your-username>.github.io` (or the organization’s GitHub Pages domain)
- Optionally, set A records for apex (if hosting apex) per GitHub documentation:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

Then, in GitHub → Settings → Pages, add the custom domain and enforce HTTPS.

## Content updates

- Edit text directly in `index.html` (About/Services/Contact).
- Modify colors/spacing in `styles.css` (CSS variables at the top).
- Replace the monogram in `logo.svg` and `favicon.svg` if you want a different mark.

## Accessibility tips

- Keep headings hierarchical (one H1 on the page).
- Ensure link text is descriptive.
- Maintain color contrast ≥ 4.5:1 for normal text and ≥ 3:1 for UI elements/large text.
- Keep interactive elements at least 44×44 px (already in CSS).

## Contact form

The form uses a `mailto:` fallback (opens the user’s email client) and is enhanced by JS to format the message. No server is required.

To embed Microsoft Forms later, replace the form markup with the provided commented iframe placeholder in `index.html`, and ensure the CSP allows the Microsoft Forms domain (you’ll need to extend the `frame-src` and possibly `connect-src` directives accordingly).

## Content Security Policy

The CSP is intentionally strict for a static site. When delivered via a `<meta http-equiv>` tag (as in this repo), use this baseline:

```
default-src 'self';
img-src 'self' data:;
script-src 'self';
style-src 'self';
font-src 'self';
object-src 'none';
base-uri 'self';
frame-src 'none';
connect-src 'self';
form-action 'self' mailto:;
upgrade-insecure-requests;
```

Note: `frame-ancestors` is ignored when set via meta tags. If you control HTTP response headers (recommended in production), add `frame-ancestors 'none'` there instead to prevent the site from being embedded in other pages.

If you later embed external content (e.g., Microsoft Forms), update the CSP to include the relevant domains (e.g., allow `https://forms.office.com` in `frame-src`).

---
Last updated: 2025-08-20# huseyinovayolu.github.io
