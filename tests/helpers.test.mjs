import test from 'node:test';
import assert from 'node:assert/strict';
import { filterByCategory, findBySlug, getAdjacentIndex, validateContactForm } from '../js/helpers.js';

const items = [
  { slug: 'field-visit', category: 'Field Activities' },
  { slug: 'policy-dialogue', category: 'Events' }
];

test('All returns the full collection', () => {
  assert.deepEqual(filterByCategory(items, 'All'), items);
});

test('category filtering returns matching records', () => {
  assert.deepEqual(filterByCategory(items, 'Events'), [items[1]]);
});

test('findBySlug returns the matching record or null', () => {
  assert.equal(findBySlug(items, 'field-visit'), items[0]);
  assert.equal(findBySlug(items, 'missing'), null);
});

test('gallery navigation wraps at both ends', () => {
  assert.equal(getAdjacentIndex(0, 4, -1), 3);
  assert.equal(getAdjacentIndex(3, 4, 1), 0);
});

test('contact validation requires name, valid email and message', () => {
  assert.deepEqual(validateContactForm({ name: '', email: 'bad', message: '' }), {
    name: 'Name is required.',
    email: 'Enter a valid email address.',
    message: 'Message is required.'
  });
  assert.deepEqual(validateContactForm({ name: 'Aisha', email: 'aisha@example.com', message: 'Hello' }), {});
});
