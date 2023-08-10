import React, { FC, useContext, useMemo, useState } from 'react';
import { TotalCost } from '../../components/TotalCost';
import style from './CartPage.module.scss';
import cn from 'classnames';
import { CartItem } from '../../components/CartItem';
import { BackButton } from '../../components/Buttons/BackButton';
import { ProductContext } from '../../components/Contexts/cartContext/ProductContext';
import { ModalCart } from '../../components/ModalCart';
import emptyCart from '../../images/empty-cart.png';

export const CartPage: FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { cartItems } = useContext(ProductContext);

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (accumulator, cartItem) =>
          accumulator + (cartItem.product.price
            || cartItem.product.fullPrice) * cartItem.quantity,
        0,
      ),
    [cartItems],
  );

  const handleClickOpenModal = () => {
    setIsVisibleModal(true);
  };

  const handleClickCloseModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <section
      className={cn(style['cart-page'], {
        [style['cart-page--empty']]: !cartItems.length,
      })}
    >
      <div className={style['cart-page__container']}>
        <BackButton />

        <h1 className={style['cart-page__title']}>Cart</h1>

        {cartItems.length ? (
          <div className={style['cart-page__content']}>
            <ul className={style['cart-page__cart-list']}>
              {cartItems.map((item) => (
                <li key={item.id} className={style['cart-page__cart-item']}>
                  {<CartItem item={item} />}
                </li>
              ))}
            </ul>
            <div className={style['cart-page__total-cost']}>
              <TotalCost
                totalPrice={totalPrice}
                onClickModal={handleClickOpenModal}
              />
            </div>
            {isVisibleModal && (
              <ModalCart onCloseClick={handleClickCloseModal} />
            )}
          </div>
        ) : (
          <div className={style['cart-page__empty-cart-wrapper']}>
            <h1 className={style['cart-page__empty-cart-message']}>
              Your Cart Is Empty
            </h1>

            <img
              src={emptyCart}
              alt="empty-cart"
              className={style['cart-page__empty-cart-message-image']}
            />
          </div>
        )}
      </div>
    </section>
  );
};
