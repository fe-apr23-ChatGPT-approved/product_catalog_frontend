import React, { FC, ReactNode } from 'react';
import { Product } from '../../../types/productType';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { ProductContext, ProductContextType } from './ProductContext';
import { getNewId } from '../../../functions/getNewId';
import { CartItemType } from '../../../types/cartItemType';

interface Props {
  children: ReactNode;
}

export const ProductContextProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    'cartProducts',
    [],
  );

  const addToCart = (product: Product) => {
    const inCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id || null,
    );

    if (!inCart) {
      const newCartItem = {
        id: getNewId(cartItems),
        quantity: 1,
        product,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const addOneItem = (cartItem: CartItemType) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === cartItem.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const removeOneItem = (cartProduct: CartItemType) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (productCart: CartItemType) =>
    setCartItems(
      cartItems.filter((item) => item.product.id !== productCart.product.id),
    );

  const cleareCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0,
  );

  const isInCart = (productId: string) =>
    cartItems.some((item) => item.product.itemId === productId);

  const value: ProductContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    addOneItem,
    removeOneItem,
    cleareCart,
    totalCount,
    isInCart,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
