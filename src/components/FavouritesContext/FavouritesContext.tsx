import { createContext } from 'react';
import { Product } from '../../types/productType';

export interface FavoritesContextType {
  favoriteItems: Product[],
  onClickFavorites: (product: Product) => void
  totalFavCount: () => number;
}

const defaultFavoritesContext: FavoritesContextType = {
  favoriteItems: [],
  onClickFavorites: () => { /*empty*/ },
  totalFavCount: () => 0,
};

export const FavoritesContext = createContext(defaultFavoritesContext);
