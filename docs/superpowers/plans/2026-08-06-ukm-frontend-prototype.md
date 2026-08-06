# UKM Frontend Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy an English-only interactive Vue frontend prototype for the UKM “Mangrove Conservation for Planetary Health (2026–2029)” website using mock data and GitHub Pages.

**Architecture:** A no-build static site will load Vue 3, Vue Router, Tailwind Play CDN v4 and Lucide Icons from CDNs. Hash-based routes will render focused page components from local JavaScript files, while shared mock data and pure helper functions will drive filtering, detail lookup, gallery navigation and form validation.

**Tech Stack:** Vue 3 CDN, Vue Router CDN, Tailwind CSS Play CDN v4, Lucide Icons CDN, vanilla JavaScript ES modules, Node built-in test runner for pure logic checks, GitHub Pages.

## Global Constraints

- English only.
- Presentation prototype only; not production software.
- No Laravel, backend, database, CMS, authentication or API integration.
- No real email delivery.
- No real PDF upload or download processing.
- Use mock data and realistic placeholder content where project content is unavailable.
- Implement desktop, tablet and mobile layouts.
- Use hash routing for GitHub Pages compatibility.
- Do not add daisyUI, Flowbite, Preline, Bootstrap or another component library.
- Theme colours: `#174C3C`, `#287D75`, `#D7A84B`, `#F4F7F2`, `#FAF7EF`, `#17221D`, `#66736C`, `#DDE5DF`.

---

## Planned File Structure

- `index.html` — application shell, CDN imports, Tailwind theme and Vue mount point.
- `css/custom.css` — only custom effects that are awkward in Tailwind, including masonry, lightbox transitions and decorative backgrounds.
- `js/mock-data.js` — all team, collaborator, work package, media, publication, FAQ and gallery records.
- `js/helpers.js` — pure lookup, filtering, lightbox-index and contact-validation functions.
- `js/components.js` — shared shell components and all route page components.
- `js/router.js` — hash router configuration, route metadata and scroll behaviour.
- `js/app.js` — root application state and mount logic.
- `tests/helpers.test.mjs` — Node built-in unit tests for filtering, lookup and form validation.
- `.github/workflows/pages.yml` — static GitHub Pages deployment.
- `README.md` — purpose, architecture, local preview and public URL.

---

### Task 1: Create the Static Application Foundation

**Files:**
- Create: `index.html`
- Create: `css/custom.css`
- Create: `js/app.js`
- Create: `js/router.js`
- Create: `js/components.js`

**Interfaces:**
- Produces: global Vue application mounted at `#app`.
- Produces: router instance exported as `router`.
- Produces: temporary `HomePage` component used to verify rendering.

- [ ] **Step 1: Create `index.html` with the exact CDN stack and theme**

Include:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/vue-router@4/dist/vue-router.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

Add this Tailwind theme:

```html
<style type="text/tailwindcss">
  @theme {
    --color-mangrove: #174c3c;
    --color-coastal: #287d75;
    --color-sand: #d7a84b;
    --color-mist: #f4f7f2;
    --color-cream: #faf7ef;
    --color-ink: #17221d;
    --color-muted: #66736c;
    --color-line: #dde5df;
  }
</style>
```

- [ ] **Step 2: Add a minimal `HomePage` component**

```js
export const HomePage = {
  template: `<main class="min-h-screen bg-cream text-ink"><h1>UKM Mangrove Website Prototype</h1></main>`,
};
```

- [ ] **Step 3: Configure the router**

```js
const routes = [{ path: '/', component: HomePage, meta: { title: 'Home' } }];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});
```

- [ ] **Step 4: Mount the Vue app**

```js
const app = Vue.createApp({ template: '<router-view />' });
app.use(router);
app.mount('#app');
```

- [ ] **Step 5: Preview locally**

Run:

```bash
python3 -m http.server 8000
```

Expected: `http://localhost:8000/` renders the title without console errors.

- [ ] **Step 6: Commit**

```bash
git add index.html css/custom.css js/app.js js/router.js js/components.js
git commit -m "feat: scaffold static Vue prototype"
```

---

### Task 2: Add Mock Data and Tested Pure Helpers

**Files:**
- Create: `js/mock-data.js`
- Create: `js/helpers.js`
- Create: `tests/helpers.test.mjs`

**Interfaces:**
- Produces: named arrays `teamMembers`, `collaborators`, `workPackages`, `mediaItems`, `galleryItems`, `publications`, `faqs`.
- Produces: `filterByCategory(items, category)`, `findBySlug(items, slug)`, `getAdjacentIndex(index, length, direction)`, `validateContactForm(form)`.

- [ ] **Step 1: Write failing tests for filtering and lookup**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { filterByCategory, findBySlug } from '../js/helpers.js';

const items = [
  { slug: 'field-visit', category: 'Field Activities' },
  { slug: 'policy-dialogue', category: 'Events' },
];

test('All returns the full collection', () => {
  assert.deepEqual(filterByCategory(items, 'All'), items);
});

test('category filtering returns matching records', () => {
  assert.deepEqual(filterByCategory(items, 'Events'), [items[1]]);
});

test('findBySlug returns the matching record or null', () => {
  assert.equal(findBySlug(items, 'field-visit'), items[0]);
  assert.equal(findBySlug(items, 'missing'), null);
});
```

- [ ] **Step 2: Run tests and confirm failure**

Run:

```bash
node --test tests/helpers.test.mjs
```

Expected: FAIL because `js/helpers.js` does not exist.

- [ ] **Step 3: Implement filtering and lookup**

```js
export function filterByCategory(items, category) {
  return category === 'All' ? items : items.filter((item) => item.category === category);
}

export function findBySlug(items, slug) {
  return items.find((item) => item.slug === slug) ?? null;
}
```

- [ ] **Step 4: Add failing tests for adjacent gallery navigation and contact validation**

```js
import { getAdjacentIndex, validateContactForm } from '../js/helpers.js';

test('gallery navigation wraps at both ends', () => {
  assert.equal(getAdjacentIndex(0, 4, -1), 3);
  assert.equal(getAdjacentIndex(3, 4, 1), 0);
});

test('contact validation requires name, valid email and message', () => {
  assert.deepEqual(validateContactForm({ name: '', email: 'bad', message: '' }), {
    name: 'Name is required.',
    email: 'Enter a valid email address.',
    message: 'Message is required.',
  });
  assert.deepEqual(validateContactForm({ name: 'Aisha', email: 'aisha@example.com', message: 'Hello' }), {});
});
```

- [ ] **Step 5: Implement gallery navigation and validation**

```js
export function getAdjacentIndex(index, length, direction) {
  return (index + direction + length) % length;
}

export function validateContactForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}
```

- [ ] **Step 6: Run tests**

Run:

```bash
node --test tests/helpers.test.mjs
```

Expected: all tests PASS.

- [ ] **Step 7: Populate realistic mock datasets**

Use stable slugs and categories matching the approved sitemap. Minimum records:

- 6 team members.
- 6 collaborators.
- 5 work packages.
- 10 non-gallery media items covering News, Field Activities, Workshops, Events, Press and Blog.
- 10 gallery images.
- 8 publications covering Journal Publications, Reports, Policy Briefs and Other Resources.
- 6 FAQs.

Every record must include all fields shown on its listing and detail page.

- [ ] **Step 8: Commit**

```bash
git add js/mock-data.js js/helpers.js tests/helpers.test.mjs
git commit -m "feat: add prototype mock data and helpers"
```

---

### Task 3: Build the Shared Website Shell

**Files:**
- Modify: `js/components.js`
- Modify: `js/app.js`
- Modify: `css/custom.css`

**Interfaces:**
- Produces components: `SiteHeader`, `SiteFooter`, `PageHero`, `SectionHeading`, `BackToTop`.
- Root app owns `mobileMenuOpen` and closes the menu after route changes.

- [ ] **Step 1: Implement the sticky header**

Navigation labels and routes:

```js
[
  ['Home', '/'],
  ['About', '/about'],
  ['Research', '/research'],
  ['Media', '/media'],
  ['Publications & Resources', '/publications'],
  ['FAQ', '/faq'],
  ['Contact Us', '/contact'],
]
```

The desktop menu appears from `lg` upward. The mobile button toggles an accessible menu with `aria-expanded`.

- [ ] **Step 2: Implement the footer**

Footer must include:

- Project name and 2026–2029 period.
- Short project description.
- Sitemap links.
- Project contact placeholder.
- Social icons shown as presentation links.
- “Prototype for presentation purposes” note.

- [ ] **Step 3: Implement shared hero and heading components**

`PageHero` accepts `eyebrow`, `title`, `description` and optional `image` props.

`SectionHeading` accepts `eyebrow`, `title`, `description` and `align` props.

- [ ] **Step 4: Implement back-to-top behaviour**

Show after `window.scrollY > 500`; clicking calls:

```js
window.scrollTo({ top: 0, behavior: 'smooth' });
```

- [ ] **Step 5: Add global custom CSS**

Include focus rings, text selection colour, smooth image hover, hero overlay and reduced-motion handling.

- [ ] **Step 6: Verify shell responsiveness**

Expected:

- Desktop header displays full navigation.
- Mobile header displays one menu button.
- Route navigation closes the mobile menu.
- Footer stacks on small screens.
- Keyboard focus is visible.

- [ ] **Step 7: Commit**

```bash
git add js/components.js js/app.js css/custom.css
git commit -m "feat: add responsive site shell"
```

---

### Task 4: Implement the Home Page

**Files:**
- Modify: `js/components.js`
- Modify: `js/router.js`

**Interfaces:**
- Consumes mock arrays from `js/mock-data.js`.
- Produces `HomePage` with links into research, media, publications and contact routes.

- [ ] **Step 1: Build the full-screen hero**

Content:

- Eyebrow: `International Research Project • 2026–2029`.
- Title: `Mangrove Conservation for Planetary Health`.
- Description focused on ecosystems, climate resilience, community well-being and human health.
- Primary CTA to `/research`.
- Secondary CTA to `/about`.

- [ ] **Step 2: Build project introduction and Planetary Health sections**

Use a two-column editorial layout with one nature image, one highlighted quotation and four theme labels.

- [ ] **Step 3: Build project objectives**

Render four cards with icons and concise mock objectives.

- [ ] **Step 4: Build Work Packages preview**

Render the first three records and link each card to `/research/:slug`.

- [ ] **Step 5: Build Latest Project Updates and Featured Publications**

Render the first three media items and first three publications, with category, date, title and summary.

- [ ] **Step 6: Build collaborator strip and contact CTA**

Use mock logos in a responsive grayscale-to-colour logo row and link the CTA to `/contact`.

- [ ] **Step 7: Verify at 375px, 768px and 1440px widths**

Expected: no horizontal scrolling, readable hero, card grids collapse cleanly and CTAs remain visible.

- [ ] **Step 8: Commit**

```bash
git add js/components.js js/router.js
git commit -m "feat: build complete home page"
```

---

### Task 5: Implement About and Research Flows

**Files:**
- Modify: `js/components.js`
- Modify: `js/router.js`

**Interfaces:**
- Produces: `AboutPage`, `ResearchPage`, `WorkPackageDetailPage`.
- Detail route: `/research/:slug`.

- [ ] **Step 1: Build About page sections**

Include project overview, background, objectives, vision and mission, timeline, team cards and collaborator cards.

- [ ] **Step 2: Build Research overview page**

Include research introduction, five Work Package cards and a cross-cutting outcomes section.

- [ ] **Step 3: Build Work Package detail route**

Look up the record with:

```js
const item = Vue.computed(() => findBySlug(workPackages, route.params.slug));
```

Display number, title, overview, objectives, lead researcher, team, collaborators, activities, expected outputs and related updates.

- [ ] **Step 4: Add missing-record handling**

When lookup returns `null`, show a clear “Work Package not found” page with a link back to `/research`.

- [ ] **Step 5: Verify navigation**

Expected: every Work Package card opens the correct detail route; browser back returns to the listing.

- [ ] **Step 6: Commit**

```bash
git add js/components.js js/router.js
git commit -m "feat: add about and research journeys"
```

---

### Task 6: Implement Media Filtering, Detail Pages and Gallery Lightbox

**Files:**
- Modify: `js/components.js`
- Modify: `js/router.js`
- Modify: `css/custom.css`
- Modify: `tests/helpers.test.mjs`

**Interfaces:**
- Produces: `MediaPage`, `MediaDetailPage`, `GalleryLightbox`.
- Detail route: `/media/:slug`.
- Uses `filterByCategory`, `findBySlug`, `getAdjacentIndex`.

- [ ] **Step 1: Add a test that Gallery is excluded from article cards**

```js
test('article filters return only records in the selected category', () => {
  const media = [
    { category: 'Gallery' },
    { category: 'News' },
  ];
  assert.deepEqual(filterByCategory(media, 'News'), [{ category: 'News' }]);
});
```

Run `node --test tests/helpers.test.mjs` and confirm PASS using the existing helper.

- [ ] **Step 2: Build media category controls**

Categories:

`All`, `News`, `Field Activities`, `Workshops`, `Events`, `Press`, `Blog`, `Gallery`.

Use real Vue state and computed filtering.

- [ ] **Step 3: Build non-gallery media cards**

Cards show featured image, category, date, title, summary and “Read update”. Cards route to `/media/:slug`.

- [ ] **Step 4: Build Media detail page**

Display article hero, metadata, formatted mock body, related images and related updates.

- [ ] **Step 5: Build Gallery masonry layout**

Use CSS columns in `css/custom.css`:

```css
.gallery-columns { columns: 1; column-gap: 1rem; }
@media (min-width: 640px) { .gallery-columns { columns: 2; } }
@media (min-width: 1024px) { .gallery-columns { columns: 3; } }
.gallery-columns > button { break-inside: avoid; margin-bottom: 1rem; }
```

- [ ] **Step 6: Build the lightbox**

Required actions:

- Open selected image.
- Close with button, backdrop or Escape.
- Previous and next with buttons and arrow keys.
- Wrap at both ends using `getAdjacentIndex`.
- Display caption, activity title, date and photo credit.
- Lock body scrolling while open.

- [ ] **Step 7: Verify filters and keyboard operation**

Expected: category counts and cards update immediately; lightbox remains usable without a mouse.

- [ ] **Step 8: Commit**

```bash
git add js/components.js js/router.js css/custom.css tests/helpers.test.mjs
git commit -m "feat: add interactive media and gallery experience"
```

---

### Task 7: Implement Publications, FAQ and Contact Form

**Files:**
- Modify: `js/components.js`
- Modify: `js/router.js`

**Interfaces:**
- Produces: `PublicationsPage`, `PublicationDetailPage`, `FaqPage`, `ContactPage`.
- Detail route: `/publications/:slug`.
- Uses `filterByCategory`, `findBySlug`, `validateContactForm`.

- [ ] **Step 1: Build publication filters and cards**

Categories:

`All`, `Journal Publications`, `Reports`, `Policy Briefs`, `Other Resources`.

Cards show type, year, title, authors and summary.

- [ ] **Step 2: Build publication detail page**

Display title, type, authors, date, abstract, DOI and external link. Show a visually complete “View / Download PDF” button that triggers a prototype notice instead of a real download.

Prototype notice copy:

`PDF download is not connected in this presentation prototype.`

- [ ] **Step 3: Build FAQ accordion**

Only one answer is open at a time. Buttons expose `aria-expanded` and associate each answer with `aria-controls`.

- [ ] **Step 4: Build fillable contact form**

Fields:

- Full Name.
- Email Address.
- Organisation.
- Enquiry Type.
- Message.

Validate on submit with `validateContactForm`. On valid input, show:

`Thank you. This prototype has recorded the interaction, but no message has been sent.`

Do not clear the fields automatically so viewers can see the entered data.

- [ ] **Step 5: Verify error and success states**

Expected: empty submission shows inline errors; valid mock submission shows the prototype success message without network requests.

- [ ] **Step 6: Commit**

```bash
git add js/components.js js/router.js
git commit -m "feat: add publications faq and contact flows"
```

---

### Task 8: Complete Accessibility, Responsive Polish and Metadata

**Files:**
- Modify: `index.html`
- Modify: `js/components.js`
- Modify: `js/router.js`
- Modify: `css/custom.css`

**Interfaces:**
- Route metadata updates `document.title`.
- All interactive controls have visible focus and accessible labels.

- [ ] **Step 1: Add document metadata**

Set description, theme colour and social-preview placeholders in `index.html`.

- [ ] **Step 2: Update titles after navigation**

```js
router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'Website'} | UKM Mangrove Project`;
});
```

- [ ] **Step 3: Audit semantic structure**

Each route must have one `h1`; section headings follow a logical hierarchy; navigation, main and footer landmarks are present.

- [ ] **Step 4: Audit images and controls**

Every meaningful image has descriptive alt text. Decorative images use empty alt text. Icon-only buttons have `aria-label`.

- [ ] **Step 5: Audit responsive layouts**

Check at 375px, 768px, 1024px and 1440px. Fix overflow, cramped typography, inaccessible tap targets and uneven card heights.

- [ ] **Step 6: Run all helper tests**

```bash
node --test tests/helpers.test.mjs
```

Expected: all tests PASS.

- [ ] **Step 7: Commit**

```bash
git add index.html js/components.js js/router.js css/custom.css
git commit -m "fix: polish responsive and accessible prototype"
```

---

### Task 9: Configure GitHub Pages and Documentation

**Files:**
- Create: `.github/workflows/pages.yml`
- Modify: `README.md`

**Interfaces:**
- Deploys the repository root as a static GitHub Pages artifact.
- Public URL: `https://lemonroti.github.io/ukm-etc/`.

- [ ] **Step 1: Create the Pages workflow**

```yaml
name: Deploy static site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Configure Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Update README**

Document:

- Presentation purpose.
- Included routes and interactions.
- Explicit exclusions.
- Stack.
- Local preview command.
- Test command.
- GitHub Pages URL.

- [ ] **Step 3: Run final local verification**

```bash
node --test tests/helpers.test.mjs
python3 -m http.server 8000
```

Manually verify every route, all filters, lightbox controls, accordion, contact validation, mobile menu and back-to-top.

- [ ] **Step 4: Commit and push**

```bash
git add .github/workflows/pages.yml README.md
git commit -m "ci: deploy prototype to GitHub Pages"
git push origin main
```

- [ ] **Step 5: Verify deployment**

Expected:

- GitHub Actions Pages workflow completes successfully.
- `https://lemonroti.github.io/ukm-etc/` loads.
- Hash routes work after refresh.
- Browser console has no application errors.

---

## Plan Self-Review

- Spec coverage: all agreed pages, interactions, exclusions, responsive behaviour, mock data, theme and deployment are assigned to tasks.
- Placeholder scan: no unresolved implementation decisions, task stubs or missing route definitions remain.
- Interface consistency: filtering, lookup, gallery navigation and validation helper names are identical across tests and component tasks.
- Scope check: the plan remains one coherent static frontend prototype with no backend or production-system work.
