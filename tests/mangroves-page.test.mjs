import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../js/pages/MangrovesPage.js', import.meta.url), 'utf8');
const css = await readFile(new URL('../css/mangroves.css', import.meta.url), 'utf8');

test('mangroves page exposes the complete storytelling sections', () => {
  for (const id of ['top','meaning','value','health','stats','malaysia','threats','conservation','research']) {
    assert.match(page, new RegExp(`id=\\"${id}\\"`));
  }
  assert.match(page, /The superpower of mangroves/);
  assert.match(page, /planetary health/i);
  assert.match(page, /Malaysia/i);
});

test('hero includes a continuously scrolling image marquee', () => {
  assert.match(page, /mangrove-image-marquee/);
  assert.match(page, /marqueeImages/);
  assert.match(css, /@keyframes mangrove-marquee/);
  assert.match(css, /animation:\s*mangrove-marquee/);
});

test('page includes reduced-motion handling', () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
