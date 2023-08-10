import React, { FC, ReactNode } from 'react';
import { Product } from '../../../types/productType';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { FavoritesContext, FavoritesContextType } from './FavouritesContext';

interface Props {
  children: ReactNode;
}

export const FavoritesContextProvider: FC<Props> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useLocalStorage<Product[]>(
    'favoriteProducts',
    [],
  );

  const isInFavorite = (productId: string) =>(
    favoriteItems.some((item) => item.itemId === productId)
  );

  const onClickFavorites = (product: Product) => {
    const inFavourites = favoriteItems.find(
      (item) => item.id === product.id || null,
    );

    if (!inFavourites) {
      setFavoriteItems([...favoriteItems, product]);
    } else {
      setFavoriteItems(favoriteItems.filter((item) => item.id !== product.id));
    }
  };

  const totalFavCount = favoriteItems.length;

  const value: FavoritesContextType = {
    favoriteItems: favoriteItems,
    onClickFavorites: onClickFavorites,
    totalFavCount,
    isInFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
