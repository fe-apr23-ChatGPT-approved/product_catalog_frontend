import React, { FC, useState, useEffect, useContext } from 'react';
import style from './ModalCart.module.scss';
import { Button } from '../Button';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import card from '../../icons/empty-cart.png';

// import { CartContext } from '../../context/CartContext'; імпорт контексту

export const ModalCart:FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [isClear, setIsClear] = useState(false);

  // const { clearCart } = useContext(CartContext); передаємо функцію clearCart з контексту

  useEffect(() => {
    if (isClear) {
      const timer = setTimeout(() => {
        setIsModal(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isClear]);

  const handleClearCard = () => {
    setIsClear(true);

    // clearCart(); Викликаємо функцію з контексту для очищення корзини
  };

  const closeModal = () => {
    setIsModal(true);
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
              
              <NavLink onClick={closeModal} to="/">
                <Button
                  buttonTarget={'NO'}
                  onClick={closeModal}
                />
              </NavLink>

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
