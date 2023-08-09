import { createContext } from 'react';
// import { Product } from '../../types/productType';
import { CartItemType } from '../../types/cartItemType';
import { Product } from '../../types/productType';

export interface ProductContextType {
  cartItems: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItem: CartItemType) => void;
  addOneItem: (cartItem: CartItemType) => void;
  removeOneItem: (cartItem: CartItemType) => void;
  cleareCart: () => void;
  totalCount: () => number;
}

const defaultProductContext: ProductContextType = {
  cartItems: [],
  addToCart: () => { /*empty*/ },
  removeFromCart: () => { /*empty*/ },
  addOneItem: () => { /*empty*/ },
  removeOneItem: () => { /*empty*/ },
  cleareCart: () => { /*empty*/ },
  totalCount: () => 0,
};

export const ProductContext = createContext(defaultProductContext);