import { Product } from './productType';

export interface CartItemType {
  id: number;
  quantity: number;
  product: Product;
}
