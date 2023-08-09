import React, { FC } from 'react';
import cn from 'classnames';
import style from './AddToCartButton.module.scss';

interface Props {
  productAdded: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AddToCartButton: FC<Props> = ({ productAdded, onClick }) => {
  const buttonText = productAdded ? 'Added' : 'Add to cart';

  return (
    <button
      className={cn(style['add-to-cart-button'], {
        [style['add-to-cart-button--active']]: productAdded,
      })}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};