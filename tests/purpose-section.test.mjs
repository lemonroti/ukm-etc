import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const pageSource = await readFile(new URL('../js/pages/HomePageFeature.js', import.meta.url), 'utf8');
const customCss = await readFile(new URL('../css/custom.css', import.meta.url), 'utf8');

test('purpose section uses the compact editorial composition', () => {
  assert.match(pageSource, /class="purpose-section"/);
  assert.match(pageSource, /class="purpose-theme-card/);
  assert.match(pageSource, /class="purpose-visual/);
  assert.match(customCss, /\.purpose-image-frame[\s\S]*aspect-ratio:\s*4\s*\/\s*3/);
});

test('purpose themes remain accessible and proposal-aligned', () => {
  assert.match(pageSource, /role="list"/);
  assert.match(pageSource, /Biodiversity/);
  assert.match(pageSource, /Climate Resilience/);
  assert.match(pageSource, /Community Well-being/);
  assert.match(pageSource, /Human Health/);
});
