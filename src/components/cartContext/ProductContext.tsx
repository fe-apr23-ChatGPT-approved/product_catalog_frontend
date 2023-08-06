import { createContext } from 'react';
import { Product } from '../../types/productType';
import { CartItemType } from '../../types/cartItemType';

export interface ProductContextType {
  cartItems: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const defaultProductContext: ProductContextType = {
  cartItems: [],
  addToCart: () => { /*empty*/ },
  removeFromCart: () => { /*empty*/ },
};

export const ProductContext = createContext(defaultProductContext);
