import { createContext } from 'react';
import { Product } from '../../types/productType';

export interface FavoritesContextType {
  favoriteItems: Product[],
  onClickFavorites: (product: Product) => void
  totalFavCount: number;
  isInFavorite: (productId: string) => boolean;
}

const defaultFavoritesContext: FavoritesContextType = {
  favoriteItems: [],
  onClickFavorites: () => { /*empty*/ },
  totalFavCount: 0,
  isInFavorite: () => false,
};

export const FavoritesContext = createContext(defaultFavoritesContext);
