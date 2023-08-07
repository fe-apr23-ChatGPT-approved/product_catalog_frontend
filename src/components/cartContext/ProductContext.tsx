import { createContext } from 'react';
import { Product } from '../../types/productType';
import { CartItemType } from '../../types/cartItemType';

export interface ProductContextType {
  cartItems: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItem: CartItemType) => void;
  addOneItem: (cartItem: CartItemType) => void;
  removeOneItem: (cartItem: CartItemType) => void;
  cleareCart: ()=> void;
}

const defaultProductContext: ProductContextType = {
  cartItems: [],
  addToCart: () => { /*empty*/ },
  removeFromCart: () => { /*empty*/ },
  addOneItem: () => { /*empty*/ },
  removeOneItem: () => { /*empty*/ },
  cleareCart: () => { /*empty*/ },
};

export const ProductContext = createContext(defaultProductContext);
