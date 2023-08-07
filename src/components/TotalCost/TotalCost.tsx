import React, { FC, useMemo, useContext } from 'react';
import style from './TotalCost.module.scss';
import { Button } from '../Button';
import { ProductContext } from '../cartContext/ProductContext';

interface Props {
  totalPrice: number;
  onClickModal: () => void;
}

export const TotalCost: FC<Props> = ({ totalPrice, onClickModal }) => {
  const {cartItems} = useContext(ProductContext);
  const productsAmount = useMemo(() => cartItems.reduce((accumulator, cartItem) => (
    accumulator + cartItem.quantity),
  0), [cartItems]);

  return (
    <>
      <div className={style['total-cost']}>
        <div className={style['total-cost__info']}>
          <h2 className={style['total-cost__price']}>{`$${totalPrice}`}</h2>
          <span className={style['total-cost__items-amount']}>
            {`Total for ${productsAmount} items`}
          </span>
        </div>
        <div className={style['total-cost__line']} />
        <Button
          buttonTarget={'Checkout'}
          onClick={onClickModal}
        />
      </div>
    </>
  );
};
