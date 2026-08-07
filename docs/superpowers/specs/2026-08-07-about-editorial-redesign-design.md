# About Editorial Redesign Design

## Goal
Redesign the existing About page into a modern, highly visual long-form research-project story inspired by the editorial interaction language of Mangrove Breakthrough's About page, while preserving the UKM prototype's own branding, English copy, content scope, and Vue CDN architecture.

## Approved Direction
The redesign replaces the existing conventional light two-column Story + Vision/Mission card composition with a more editorial page built around strong contrast, oversized statements, generous whitespace, full-width imagery, and a sticky in-page navigation.

## Information Architecture
The About page will contain these in-page sections:
1. Top
2. Story
3. Vision
4. Mission
5. Approach
6. Impact
7. Team
8. Partners

The primary website navigation remains unchanged. The existing `About` route remains `#/about`.

## Visual System
- Preserve existing project palette: Mangrove Green, Coastal Teal, Warm Sand, Cream, Ink.
- Hero uses a full-width mangrove image, dark overlay, project eyebrow, oversized headline and concise project statement.
- A sticky secondary section navigation sits below the main site header.
- Story / Vision / Mission / Approach use a dark mangrove editorial band.
- Left column contains small outlined pill labels; right column contains oversized statement text.
- Fine dividers and generous vertical spacing establish an editorial rhythm.
- A full-width image break separates narrative content from outcome/impact content.
- Impact uses large numeric/statement blocks, clearly marked as prototype/illustrative where needed.
- Team uses large portrait-led cards with less dashboard-like styling.
- Partners reuse the existing `CollaboratorMarquee` component rather than duplicating partner logic.

## Content
The page remains aligned with the project brief: introduce the project, objectives, research team and collaborators, and explain how mangrove conservation connects environmental sustainability, climate resilience, human health and community well-being.

Prototype copy is concise and presentation-oriented. Team names, portraits, partner identities and quantitative impact examples remain mock/placeholder data until real client content is supplied.

## Architecture
- Create `js/pages/AboutPageFeature.js` as the new route component.
- Reuse `teamMembers` from `js/mock-data.js`.
- Reuse `CollaboratorMarquee` from `js/components/CollaboratorMarquee.js`.
- Modify `js/router-feature.js` so `/about` uses `AboutPageFeature` instead of the legacy `AboutPage` exported from `components.js`.
- Create `css/about.css` for About-only presentation rules.
- Load `css/about.css` from `index.html`.
- Do not modify or refactor the legacy large `components.js` file.

## Interaction
- Sticky in-page navigation scrolls to the selected About section.
- Navigation uses buttons and `scrollIntoView` rather than changing the Vue hash route.
- Team cards use subtle image zoom / lift on hover.
- Main visual sections remain fully usable with JavaScript motion reduced.

## Accessibility
- Meaningful images have descriptive alt text.
- Section navigation has an accessible label and visible focus state.
- Structural headings remain sequential and semantic.
- Reduced-motion users receive near-zero transitions.

## Stability
Implementation is committed directly to `main` at the user's request. The pre-redesign baseline is the current `main` state before this feature. The legacy About component remains in `components.js`, so rollback only requires reverting the new About route/style/component commits.