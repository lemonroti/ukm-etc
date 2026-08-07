# About Editorial Redesign

## Goal
Redesign the UKM Mangrove prototype About page into a modern long-form editorial experience inspired by the storytelling rhythm of Mangrove Breakthrough's About page, without copying its branding or wording.

## Approved Direction
- Keep the existing global header/footer and project colour palette.
- Replace the current light two-column Story/Vision/Mission block with a stronger editorial composition.
- Add a sticky in-page navigator for Top, Story, Vision, Mission, Approach, Impact, Team and Partners.
- Use a deep mangrove/ink background for the core narrative section.
- Use small pill labels on the left and large statement typography on the right for Vision, Mission and Approach.
- Add a large project image / visual break between narrative sections.
- Add an Impact section using large typographic statements and project focus areas.
- Keep Team and Collaborators/Partners, but restyle them to match the editorial page.
- English-only mock/placeholder content is acceptable for the prototype.
- Responsive design and reduced-motion accessibility are required.

## Architecture
- Create `js/pages/AboutPageFeature.js` as an isolated About page component using existing `teamMembers` and `collaborators` mock data.
- Create `css/about.css` for About-specific presentation.
- Update `js/router-feature.js` so `/about` uses `AboutPageFeature`.
- Update `index.html` to load `about.css`.
- Do not modify the large legacy `components.js` About implementation.

## Rollback
The baseline immediately before this redesign is the current `main` state containing the Mangroves page. If rejected, the About-specific commits can be reverted without removing the Mangroves work.