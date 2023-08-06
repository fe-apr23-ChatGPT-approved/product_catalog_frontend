export function getNumbers(numberOfPages: number): number[] {
  const numbers = Array(numberOfPages)
    .fill(0)
    .map((_, index) => index + 1);

  return numbers;
}

export function getLastIndex(
  itemsPerPage: number,
  currentPage: number,
  total: number,
) {
  let lastIndex = itemsPerPage * currentPage;

  if (lastIndex > total) {
    lastIndex = total;
  }

  return lastIndex;
}
