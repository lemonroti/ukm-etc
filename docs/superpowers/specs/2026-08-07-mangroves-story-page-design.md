# Mangroves Story Page Design

## Goal
Add a first-level **Mangroves** navigation page to the UKM Mangrove Conservation for Planetary Health frontend prototype. The page is an English-only educational storytelling page inspired by the interaction pattern of Mangrove Breakthrough's mangroves page while keeping the UKM prototype's own theme, copy and structure.

## User Experience
- Add `Mangroves` to the primary navigation between `About` and `Research`.
- Route: `#/mangroves`.
- Add a sticky in-page section navigator below the primary header.
- Begin with a large editorial heading: **The superpower of mangroves**.
- Directly below the heading, show a full-width, continuously moving image marquee made from multiple rounded image cards.
- The marquee loops seamlessly, pauses on hover/focus where practical, and stops animation for `prefers-reduced-motion` users.
- Section navigator buttons smoothly scroll to the corresponding section without changing the Vue hash route.

## Content Structure
1. Hero / image marquee
2. What are mangroves?
3. Why mangroves matter
4. Mangroves and planetary health
5. Mangroves in numbers — illustrative prototype statistics only
6. Malaysia context / study landscape placeholder
7. Threats and challenges
8. Conservation and restoration
9. Connection to the project's Research / Work Packages

## Visual Direction
- Preserve the project's Mangrove Green, Coastal Teal, Warm Sand, Cream and Ink palette.
- Large editorial typography, generous whitespace and rounded image cards.
- Use asymmetric long-form sections instead of dashboard-like card grids everywhere.
- Use remote nature photographs as prototype imagery; some imagery and statistics are placeholders.
- Do not copy Mangrove Breakthrough logos, text, branding or exact layout.

## Architecture
- Create `js/pages/MangrovesPage.js` as an isolated page component.
- Create `js/components/SiteHeaderFeature.js` rather than editing the large legacy `components.js` file.
- Add the page route in `js/router-feature.js`.
- Update `js/app-feature.js` to use the new header component.
- Create page-specific styles in `css/mangroves.css` and load it from `index.html`.
- Keep the current Vue 3 CDN + Vue Router hash-history architecture.

## Accessibility and Motion
- All meaningful images include alt text.
- Marquee content is duplicated visually but duplicate items are `aria-hidden` where appropriate.
- In-page navigator uses buttons with visible focus states.
- `prefers-reduced-motion: reduce` disables marquee motion and allows horizontal scrolling.

## Stability / Rollback
Implementation is committed directly to `main` at the user's request. The baseline before this feature is commit `3a6ac54872383f59d81dfd1e41f4a2b1dcae470e`. If the feature is rejected, the repository can be restored to that commit or the feature commits can be reverted.