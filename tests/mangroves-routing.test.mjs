import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const header = await readFile(new URL('../js/components/SiteHeaderFeature.js', import.meta.url), 'utf8');
const router = await readFile(new URL('../js/router-feature.js', import.meta.url), 'utf8');
const app = await readFile(new URL('../js/app-feature.js', import.meta.url), 'utf8');

test('primary navigation includes Mangroves between About and Research', () => {
  assert.match(header, /\['About','\/about'\][\s\S]*\['Mangroves','\/mangroves'\][\s\S]*\['Research','\/research'\]/);
});

test('feature router exposes the mangroves route', () => {
  assert.match(router, /MangrovesPage/);
  assert.match(router, /path:\s*'\/mangroves'/);
});

test('feature app uses the enhanced site header', () => {
  assert.match(app, /SiteHeaderFeature/);
});
