import React, { FC, useContext } from 'react';
import cn from 'classnames';
import style from './CartItem.module.scss';
import plus from '../../icons/Plus.svg';
import { Cross } from '../Cross/Cross';
import { Minus } from '../Minus/Minus';
import { ProductContext } from '../cartContext/ProductContext';
import { CartItemType } from '../../types/cartItemType';

interface Props {
  item: CartItemType,
}

export const CartItem: FC<Props> = ({ item }) => {
  const {quantity, product} = item;
  const isOneItem = quantity === 1;
  const {addOneItem, removeOneItem, removeFromCart} = useContext(ProductContext);
  
  const handleAddItem = () => {
    addOneItem(item);
  };

  const handleRemoveOneItem = () => {
    if (isOneItem) {
      removeFromCart(item);
    } else {
      removeOneItem(item);
    }
  };

  const handleCloseButton = () => {
    removeFromCart(item);
  };

  const totalPrice = quantity * product.price
    ? product.price
    : product.fullPrice;

  return (
    <section className={style.cartItem}>
      <div className={style.cartItem__gadget_info}>
        <button
          className={style.cartItem__close_btn}
          onClick={handleCloseButton}
        >
          <Cross />
        </button>

        <div className={style.cartItem__image_container}>
          <img
            className={style.cartItem__gadget_image}
            alt={'Gadget image'}
            src={item.product.image}
          />
        </div>
        <span className={style.cartItem__gadget_decscription}>
          {product.name}
        </span>
      </div>

      <div className={style.cartItem__details}>
        <div className={style.cartItem__quantity}>
          <button
            className={cn(style.cartItem__btn, {
              [style.cartItem__btn_disabled]: isOneItem,
            })}
            disabled={isOneItem}
            onClick={handleRemoveOneItem}
          >
            <Minus />
          </button>
          <span
            className={style.cartItem__count}
          >
            {quantity}
          </span>
          <button
            className={style.cartItem__btn}
            type="button"
            onClick={handleAddItem}
          >
            <img
              className={style.cartItem__btn_img}
              src={plus}
              alt={'Add item'}
            />
          </button>
        </div>
        <span className={style.cartItem__total_price}>
          {`$${totalPrice}`}
        </span>
      </div>
    </section>
  );
};
