import React, { FC, useState, useEffect, useContext } from 'react';
import style from './ModalCart.module.scss';
import { Button } from '../Button';
import classNames from 'classnames';
import card from '../../icons/empty-cart.png';
import { ProductContext } from '../cartContext/ProductContext';

interface Props {
  onCloseClick: () => void;
}

export const ModalCart:FC<Props> = ({ onCloseClick }) => {
  const [isModal, setIsModal] = useState(false);
  const [isClear, setIsClear] = useState(false);

  const { cleareCart } = useContext(ProductContext);

  useEffect(() => {
    if (isClear) {
      const timer = setTimeout(() => {
        setIsModal(true);
        onCloseClick();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isClear]);

  const handleClearCard = () => {
    setIsClear(true);
    cleareCart();
  };

  return (
    <article className={classNames(style['modal-cart'],
      { [style['modal-cart--not-active']]: isModal })}>

      <span className={style['modal-cart__content']}>
        {!isClear ? (
          <>
            <p className={style['modal-cart__text']}>
               Checkout is not implemented yet. Do you want to clear the Cart?
            </p >

            <div className={style['modal-cart__button-wrapper']}>
              
              <Button
                buttonTarget={'NO'}
                onClick={onCloseClick}
              />

              <Button
                buttonTarget={'YES, CLEAR THE CARD'}
                onClick={handleClearCard}
              />

            </div>
          </>
        ) : (
          <>
            <p className={style['modal-cart__text']}>
              {'Your Cart is empty'}
            </p>

            <img src={card} alt="empty card" className={style['modal-cart__photo']} />
          </>
        )}
      </span>

    </article>
  );
};
