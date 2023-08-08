import { createContext } from 'react';
import { Product } from '../../types/productType';

export interface FavouritesContextType {
  favouriteItems: Product[],
  onClickFavourites: (product: Product) => void
  totalFavCount: () => number;
}

const defaultFavouritesContext: FavouritesContextType = {
  favouriteItems: [],
  onClickFavourites: () => { /*empty*/ },
  totalFavCount: () => 0,
};

export const FavouritesContext = createContext(defaultFavouritesContext);
