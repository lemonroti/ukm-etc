# UKM Mangrove Website — Interactive Frontend Prototype

English-only presentation prototype for **Mangrove Conservation for Planetary Health (2026–2029)**.

## Purpose

This project demonstrates the proposed public-facing website structure, visual direction, page layouts and frontend interactions for internal discussion with management, senior staff and programmers.

It is not a production website and is not intended for backend handover or integration.

## Included

- Home
- About, Team and Collaborators
- Research and Work Package detail pages
- Media filters and project-update detail pages
- Gallery masonry layout and keyboard-accessible lightbox
- Publications filters and detail pages
- FAQ accordion
- Fillable contact form with frontend validation
- Responsive desktop, tablet and mobile layouts
- Mock data and realistic placeholder content

## Excluded

- Backend, database or API
- CMS or admin panel
- Authentication
- Real email submission
- Real PDF upload or download processing

## Stack

- Vue 3 CDN
- Vue Router CDN with hash routing
- Tailwind CSS Play CDN v4
- Lucide Icons CDN
- JavaScript ES modules
- GitHub Pages

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Tests

```bash
node --test tests/helpers.test.mjs
```

## GitHub Pages

https://lemonroti.github.io/ukm-etc/
