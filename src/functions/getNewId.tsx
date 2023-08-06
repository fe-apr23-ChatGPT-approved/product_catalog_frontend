export function getNewId(items) {
  if (!items[0]) {
    return 1;
  }

  const ids = items.map(item => item.id);
  const newId = Math.max(...ids) + 1;

  return newId;
}