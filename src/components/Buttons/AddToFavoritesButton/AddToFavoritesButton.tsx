import React from 'react';
import cn from 'classnames';
import favouriteheart from '../../../icons/Favourites Filled (Heart Like).svg';
import heart from '../../../icons/Add to fovourites.svg';
import style from './AddToFavoritesButton.module.scss';

type Props = {
  productFavourite: boolean;
  onClick: () => void;
};

export const AddToFavoritesButton: React.FC<Props> = ({ productFavourite, onClick }) => (
  <button
    className={cn(style['favourites-add-button'], {
      [style['favourites-add-button--active']]: productFavourite,
    })}
    type="button"
    onClick={onClick}
  >
    {productFavourite ? (
      <img src={favouriteheart} alt="Favourite" />
    ) : (
      <img src={heart} alt="Add to Favourites" />
    )}
  </button>
);
