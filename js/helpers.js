export function filterByCategory(items, category) {
  return category === 'All' ? items : items.filter((item) => item.category === category);
}

export function findBySlug(items, slug) {
  return items.find((item) => item.slug === slug) ?? null;
}

export function getAdjacentIndex(index, length, direction) {
  if (!length) return 0;
  return (index + direction + length) % length;
}

export function validateContactForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}
