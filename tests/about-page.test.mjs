import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = async (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('about page exposes the approved editorial sections and reuses project data', async () => {
  const source = await read('../js/pages/AboutPageFeature.js');
  assert.match(source, /teamMembers/);
  assert.match(source, /CollaboratorMarquee/);
  assert.match(source, /about-section-nav/);
  for (const id of ['story','vision','mission','approach','impact','team','partners']) {
    assert.match(source, new RegExp(`id=\\"${id}\\"`));
  }
});

test('about page CSS contains the core editorial hooks and reduced-motion support', async () => {
  const source = await read('../css/about.css');
  for (const selector of ['.about-section-nav','.about-editorial-band','.about-statement-row','.about-team-card']) {
    assert.match(source, new RegExp(selector.replace('.', '\\.')));
  }
  assert.match(source, /@media \(prefers-reduced-motion: reduce\)/);
});

test('our story composition keeps the headline balanced against the body copy', async () => {
  const source = await read('../css/about-story-refinement.css');
  assert.match(source, /\.about-intro-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*1fr\)/);
  assert.match(source, /\.about-intro-grid h2\s*\{[\s\S]*?max-width:\s*31rem;[\s\S]*?font-size:\s*clamp\(2\.5rem,\s*3\.8vw,\s*3\.9rem\)/);
});

test('about stylesheets are loaded by the active entry document', async () => {
  const source = await read('../index.html');
  assert.match(source, /\.\/css\/about\.css/);
  assert.match(source, /\.\/css\/about-story-refinement\.css/);
});

test('feature router activates the redesigned About page without changing the route', async () => {
  const source = await read('../js/router-feature.js');
  assert.match(source, /import \{ AboutPageFeature \} from '\.\/pages\/AboutPageFeature\.js';/);
  assert.match(source, /\{ path: '\/about', component: AboutPageFeature, meta: \{ title: 'About' \} \}/);
});
