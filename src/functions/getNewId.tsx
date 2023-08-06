import { CartItemType } from '../types/cartItemType';

export function getNewId(items: CartItemType[]) {
  if (!items[0]) {

    return 1;
  }

  const ids = items.map(item => item.id);
  const newId = Math.max(...ids) + 1;

  return newId;
}