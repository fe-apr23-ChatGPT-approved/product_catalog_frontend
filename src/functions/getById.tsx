import { Product } from '../types/productType';

export const findByItemId = (products: Product[], productItemId: string) => (
  products.find(item => item.itemId === productItemId)
);