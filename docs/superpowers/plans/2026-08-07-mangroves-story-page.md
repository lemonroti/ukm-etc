# Mangroves Story Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new first-level Mangroves storytelling page with a sticky section navigator and continuously scrolling image marquee to the existing UKM frontend prototype.

**Architecture:** Keep the existing Vue 3 CDN + Vue Router hash-history setup. Add a standalone `MangrovesPage` component and a standalone enhanced site header to avoid enlarging the legacy `components.js`. Page-specific motion and editorial styles live in a separate CSS file.

**Tech Stack:** Vue 3 CDN, Vue Router 4 CDN, Tailwind Play CDN v4, vanilla CSS, Lucide icons, GitHub Pages.

## Global Constraints

- English only.
- Direct development on `main` as requested.
- No backend, CMS, API, real PDF download, or real form submission.
- Use mock/placeholder content and remote prototype imagery where needed.
- Preserve the existing Mangrove Green, Coastal Teal, Warm Sand, Cream and Ink theme.
- Do not copy Mangrove Breakthrough branding, logos, or exact page copy.
- Respect `prefers-reduced-motion`.

---

### Task 1: Add the new page and visual styles

**Files:**
- Create: `js/pages/MangrovesPage.js`
- Create: `css/mangroves.css`
- Test: `tests/mangroves-page.test.mjs`

**Interfaces:**
- Produces: named export `MangrovesPage` for Vue Router.
- Produces DOM section ids: `top`, `meaning`, `value`, `health`, `stats`, `malaysia`, `threats`, `conservation`, `research`.

- [ ] Write source-level tests that assert the page exposes the expected section ids, marquee track, navigation labels and project-aligned copy.
- [ ] Run `node --test tests/mangroves-page.test.mjs` and verify the new test initially fails before the files exist.
- [ ] Implement `MangrovesPage.js` with the editorial hero, horizontal marquee, smooth section scrolling and long-form content.
- [ ] Implement `mangroves.css` with marquee animation, responsive layout, sticky section nav and reduced-motion behavior.
- [ ] Run the test and verify it passes.

### Task 2: Wire navigation and routing

**Files:**
- Create: `js/components/SiteHeaderFeature.js`
- Modify: `js/app-feature.js`
- Modify: `js/router-feature.js`
- Test: `tests/mangroves-routing.test.mjs`

**Interfaces:**
- `SiteHeaderFeature` exposes the primary links including `['Mangroves','/mangroves']`.
- `router-feature.js` imports `MangrovesPage` and maps it to `/mangroves`.

- [ ] Write routing/header tests asserting the new nav item and route are present.
- [ ] Run the routing test and verify it fails.
- [ ] Add the isolated header component with desktop and mobile links.
- [ ] Switch `app-feature.js` to use `SiteHeaderFeature`.
- [ ] Add the `/mangroves` route in `router-feature.js`.
- [ ] Run the routing test and verify it passes.

### Task 3: Load styles and verify the prototype

**Files:**
- Modify: `index.html`

**Interfaces:**
- Loads `./css/mangroves.css` after the existing site styles.

- [ ] Add the new stylesheet to `index.html`.
- [ ] Run all Node tests with `node --test tests/*.test.mjs`.
- [ ] Run syntax checks on the new JS files with `node --check`.
- [ ] Verify the final diff only touches the planned files and documentation.
- [ ] Record the post-feature commit SHA so rollback remains straightforward.
