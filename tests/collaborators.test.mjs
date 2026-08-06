import test from 'node:test';
import assert from 'node:assert/strict';
import { collaboratorLogos, splitCollaborators } from '../js/data/collaborators.js';

test('every collaborator has a local SVG logo and accessible name', () => {
  assert.equal(collaboratorLogos.length, 6);
  for (const collaborator of collaboratorLogos) {
    assert.match(collaborator.logo, /^\.\/assets\/logos\/[a-z0-9-]+\.svg$/);
    assert.ok(collaborator.name.trim().length > 0);
    assert.ok(collaborator.note.trim().length > 0);
  }
});

test('splitCollaborators creates two non-empty marquee rows', () => {
  const [rowOne, rowTwo] = splitCollaborators(collaboratorLogos);
  assert.equal(rowOne.length, 3);
  assert.equal(rowTwo.length, 3);
  assert.deepEqual([...rowOne, ...rowTwo], collaboratorLogos);
});
