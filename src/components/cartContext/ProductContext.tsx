import { createContext } from 'react';
import { CartItemType } from '../../types/cartItemType';
import { Product } from '../../types/productType';

export interface ProductContextType {
  cartItems: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItem: CartItemType) => void;
  addOneItem: (cartItem: CartItemType) => void;
  removeOneItem: (cartItem: CartItemType) => void;
  cleareCart: () => void;
  totalCount: number;
  isInCart: (productId: number) => boolean;
}

const defaultProductContext: ProductContextType = {
  cartItems: [],
  addToCart: () => { /*empty*/ },
  removeFromCart: () => { /*empty*/ },
  addOneItem: () => { /*empty*/ },
  removeOneItem: () => { /*empty*/ },
  cleareCart: () => { /*empty*/ },
  totalCount: 0,
  isInCart: () => false,
};

export const ProductContext = createContext(defaultProductContext);