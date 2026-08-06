# UKM Mangrove Website Frontend Prototype — Design Specification

## 1. Purpose

Build an English-only, browser-based interactive frontend prototype for the UKM research project **“Mangrove Conservation for Planetary Health (2026–2029)”**.

The prototype is for presentation and internal discussion. Its purpose is to show management, senior staff and programmers how the proposed public-facing website should look, how users move through it and how the key frontend interactions should behave.

This is not a production website and is not intended for backend handover or direct backend integration.

## 2. Confirmed Scope

The prototype must:

- Present the complete public-facing website structure discussed in the proposal.
- Use English only.
- Use mock data and placeholder content where real project content is unavailable.
- Be responsive across desktop, tablet and mobile layouts.
- Be deployable directly through GitHub Pages.
- Use real frontend interactions where needed to demonstrate the experience.

The prototype must not include:

- Laravel or any backend framework.
- Database integration.
- CMS or admin panel.
- Authentication.
- API integration.
- Real email delivery.
- Real PDF upload or download processing.
- Production hosting architecture.

## 3. Technical Approach

Use a lightweight no-build prototype stack:

- Vue 3 through CDN.
- Vue Router through CDN.
- Hash-based routing for GitHub Pages compatibility.
- Tailwind CSS Play CDN v4.
- Lucide Icons through CDN.
- Local JavaScript mock-data files.
- Local CSS only for custom effects not practical through Tailwind utilities.

No Tailwind component library such as daisyUI, Flowbite or Preline will be used. The public website should have a distinct environmental research identity rather than a generic UI-library appearance.

## 4. Visual Direction

The visual style should feel like a modern international environmental research website:

- Large nature photography.
- Editorial typography.
- Generous white space.
- Clean scientific information hierarchy.
- Soft cards and subtle shadows.
- Organic section shapes where suitable.
- Professional rather than playful.
- Environmental without making every surface green.

### Theme colours

- Mangrove Green: `#174C3C`
- Coastal Teal: `#287D75`
- Warm Sand: `#D7A84B`
- Mist Background: `#F4F7F2`
- Cream Background: `#FAF7EF`
- Dark Text: `#17221D`
- Muted Text: `#66736C`
- Border: `#DDE5DF`

## 5. Information Architecture

### Home

- Hero banner.
- Project introduction.
- Mangrove Conservation and Planetary Health section.
- Project objectives.
- Work Packages preview.
- Latest project updates.
- Featured publications.
- Collaborator logos.
- Contact call-to-action.

### About

- Project overview.
- Project background / Our Story.
- Project objectives.
- Vision and Mission placeholder.
- Project timeline placeholder.
- Team.
- Collaborators.

### Research

- Research overview.
- Work Packages listing.
- Work Package detail page.

### Media

- Project updates listing.
- Filters: All, News, Field Activities, Workshops, Events, Press, Blog and Gallery.
- Blog-style cards for non-gallery items.
- Media detail page for non-gallery items.
- Masonry image grid for Gallery.
- Lightbox interaction for Gallery images.

### Publications & Resources

- Listing page.
- Filters: All, Journal Publications, Reports, Policy Briefs and Other Resources.
- Publication detail page.
- Display title, author, publication date, abstract or description, DOI and external link.
- PDF button may be shown visually but does not need to perform a real download.

### FAQ

- Expand and collapse interaction.

### Contact Us

- Project contact information.
- Collaboration enquiry section.
- Fillable contact form.
- Frontend-only validation.
- No real submission.

## 6. Required Interactions

The prototype must demonstrate:

- Responsive desktop and mobile navigation.
- Page-to-page navigation.
- Mobile menu open and close.
- Work Package card to detail-page flow.
- Media category filtering.
- Media card to detail-page flow.
- Gallery masonry layout.
- Gallery lightbox open, close, previous and next.
- Publication category filtering.
- Publication card to detail-page flow.
- FAQ accordion.
- Contact form input and validation.
- Back-to-top control.
- Reasonable hover and focus states.

## 7. Mock Data and Placeholders

Mock data may be used for:

- Team member names, roles, institutions and photographs.
- Collaborator names and logos.
- Work Package names, descriptions and activities.
- News and project updates.
- Publication titles, authors and abstracts.
- Gallery images and captions.
- Contact details.
- Project timeline and statistics.

Placeholder content must still appear realistic enough to communicate layout, hierarchy and interaction.

## 8. Proposed File Structure

```text
ukm-etc/
├── index.html
├── css/
│   └── custom.css
├── js/
│   ├── app.js
│   ├── router.js
│   ├── components.js
│   └── mock-data.js
├── assets/
│   └── images/
├── .github/
│   └── workflows/
│       └── pages.yml
└── README.md
```

## 9. GitHub Pages Deployment

The site will be deployed from the repository using GitHub Pages.

Expected public URL:

`https://lemonroti.github.io/ukm-etc/`

Hash-based routes will be used so direct navigation works without server-side rewrite rules.

## 10. Success Criteria

The prototype is successful when:

- A viewer can understand the full proposed website without reading the technical proposal.
- All agreed frontend pages are represented.
- Key interactions work in the browser.
- Desktop and mobile layouts are coherent.
- Mock data clearly demonstrates the intended content structure.
- The site runs from GitHub Pages without a build step.
- The prototype remains clearly a presentation prototype rather than a production system.
