# About Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current conventional About page with a modern editorial storytelling page while keeping the existing `#/about` route and prototype data model.

**Architecture:** Add a focused `AboutPageFeature.js` component and `about.css`, reuse existing team data and the existing collaborator marquee, and route `/about` to the new component. Avoid editing the large legacy `components.js` file.

**Tech Stack:** Vue 3 CDN, Vue Router hash history, Tailwind Play CDN, Lucide Icons, custom CSS, Node built-in test runner for source-level structure tests.

## Global Constraints

- English only.
- Frontend presentation prototype only; no backend or API work.
- Preserve existing project theme colors and primary navigation.
- Direct commits to `main` as requested by the user.
- Reuse `teamMembers` and `CollaboratorMarquee` rather than duplicating data or partner logic.
- Do not modify or refactor `js/components.js`.
- Respect `prefers-reduced-motion`.

---

### Task 1: About page component and narrative structure

**Files:**
- Create: `tests/about-page.test.mjs`
- Create: `js/pages/AboutPageFeature.js`

**Interfaces:**
- Consumes: `teamMembers` from `../mock-data.js`; `CollaboratorMarquee` from `../components/CollaboratorMarquee.js`; global Vue and Lucide.
- Produces: named export `AboutPageFeature` for the feature router.

- [ ] **Step 1: Write the failing source-structure test**

Create `tests/about-page.test.mjs` that reads `js/pages/AboutPageFeature.js` and asserts that the source contains: `about-section-nav`, section IDs `story`, `vision`, `mission`, `approach`, `impact`, `team`, `partners`, `CollaboratorMarquee`, and a `teamMembers` import.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/about-page.test.mjs`
Expected: FAIL because `js/pages/AboutPageFeature.js` does not yet exist.

- [ ] **Step 3: Implement `AboutPageFeature`**

Create a component with:
- sticky in-page navigation: Top, Story, Vision, Mission, Approach, Impact, Team, Partners;
- immersive image hero;
- dark editorial Story/Vision/Mission/Approach section using label pills + oversized statements;
- full-width visual break;
- impact block with three presentation-oriented metrics/statements;
- portrait-led team grid from `teamMembers`;
- existing `CollaboratorMarquee` as the final Partners section;
- `scrollToSection(id)` implemented with `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })`;
- Lucide refresh on mount.

- [ ] **Step 4: Run the structural test**

Run: `node --test tests/about-page.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `feat: add editorial about page`

---

### Task 2: Editorial styling and responsive behavior

**Files:**
- Modify: `tests/about-page.test.mjs`
- Create: `css/about.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: class names emitted by `AboutPageFeature.js`.
- Produces: responsive editorial presentation and reduced-motion behavior.

- [ ] **Step 1: Extend the test for critical style hooks**

Assert `css/about.css` contains definitions for `.about-section-nav`, `.about-editorial-band`, `.about-statement-row`, `.about-team-card`, and a `@media (prefers-reduced-motion: reduce)` rule. Assert `index.html` loads `./css/about.css`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/about-page.test.mjs`
Expected: FAIL because `about.css` and the stylesheet link do not yet exist.

- [ ] **Step 3: Implement About-specific CSS**

Use the existing palette with:
- cream hero/narrative surfaces and deep mangrove editorial band;
- sticky sand-toned in-page nav with horizontal overflow on small screens;
- oversized responsive typography via `clamp()`;
- two-column label/statement rows on desktop and stacked rows on mobile;
- thin translucent dividers;
- full-width visual image break;
- large impact numbers/statements;
- portrait cards with subtle hover lift/zoom;
- focused mobile breakpoints;
- reduced-motion override.

- [ ] **Step 4: Link CSS from `index.html`**

Insert `<link rel="stylesheet" href="./css/about.css">` after the existing feature/mangroves styles.

- [ ] **Step 5: Run the structural test**

Run: `node --test tests/about-page.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

Commit message: `style: add modern about storytelling layout`

---

### Task 3: Route integration and regression verification

**Files:**
- Modify: `tests/about-page.test.mjs`
- Modify: `js/router-feature.js`

**Interfaces:**
- Consumes: `AboutPageFeature` named export.
- Produces: `/about` route rendering the redesigned About page.

- [ ] **Step 1: Extend the test for router integration**

Assert `js/router-feature.js` imports `AboutPageFeature` from `./pages/AboutPageFeature.js` and defines `{ path: '/about', component: AboutPageFeature`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/about-page.test.mjs`
Expected: FAIL while `/about` still references the legacy `AboutPage`.

- [ ] **Step 3: Update feature router**

Remove `AboutPage` from the legacy components import, add `AboutPageFeature` import, and bind `/about` to the new component without changing any other route.

- [ ] **Step 4: Run all available Node tests**

Run: `node --test tests/*.test.mjs`
Expected: all tests PASS with zero failures.

- [ ] **Step 5: Verify final source state**

Confirm the repository default branch is `main`, inspect final `AboutPageFeature.js`, `about.css`, `router-feature.js`, and `index.html`, and verify the latest commit/status.

- [ ] **Step 6: Commit**

Commit message: `feat: activate redesigned about page`
