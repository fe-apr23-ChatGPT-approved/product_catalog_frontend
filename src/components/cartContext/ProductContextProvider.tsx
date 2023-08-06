import React, { FC, ReactNode, useCallback } from 'react';
import { Product } from '../../types/productType';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ProductContext, ProductContextType } from './ProductContext';
import { getNewId } from '../../functions/getNewId';
import { CartItemType } from '../../types/cartItemType';

interface Props {
  children: ReactNode;
}

export const ProductContextProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    'cartProducts',
    [],
  );

  const addToCart = (product: Product) => {
    const inCart = cartItems.find((cartItem) => (
      cartItem.product.id === product.id) || null
    );

    if (!inCart) {
      const newCartItem = {
        id: getNewId(cartItems),
        quantity: 1,
        product,
      };
      setCartItems([...cartItems, newCartItem]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity++ }
            : item,
        ),
      );
    }
  };

  const removeFromCart = useCallback(
    (productId: number) =>
      setCartItems(cartItems.filter((item) => item.product.id !== productId)),
    [],
  );

  const value: ProductContextType = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
