import React, { FC, ReactNode } from 'react';
import { Product } from '../../types/productType';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FavouritesContext, FavouritesContextType } from './FavouritesContext';

interface Props {
  children: ReactNode;
}

export const FavouritesContextProvider: FC<Props> = ({ children }) => {
  const [favouriteItems, setFavouriteItems] = useLocalStorage<Product[]>(
    'favouriteProducts', []
  );

  const onClickFavourites = (product: Product) => {
    const inFavourites = favouriteItems.find((item) => (
      item.id === product.id) || null
    );

    if (!inFavourites) {
      setFavouriteItems([...favouriteItems, product]);
    } else {
      setFavouriteItems(favouriteItems.filter(item => (
        item.id !== product.id)));
    }
  };

  const totalFavCount = () => favouriteItems.length;

  const value: FavouritesContextType = {
    favouriteItems,
    onClickFavourites,
    totalFavCount
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
