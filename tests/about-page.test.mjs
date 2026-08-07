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
