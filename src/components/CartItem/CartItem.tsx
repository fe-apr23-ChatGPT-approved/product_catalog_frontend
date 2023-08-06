import { FC, useState } from 'react';
import cn from 'classnames';
import style from './CartItem.module.scss';
import plus from '../../icons/Plus.svg';
import image from '../../images/phone-image.svg'; // image for example, left place for it
import { Cross } from '../Cross/Cross';
import { Minus } from '../Minus/Minus';
import { item } from '../../pages/CartPage';

interface Props {
  item: item,
  onClose: (itemId: number) => void,
}

export const CartItem: FC<Props> = ({ item, onClose }) => {
  const [counter, setCounter] = useState(1);
  const isOneItem = counter === 1;
  
  const handleAddItem = () => {
    setCounter((prev) => prev + 1); // in future we should use func from localStorage there
  };

  const handleRemoveOneItem = () => {
    if (isOneItem) {
      return;
    }
    setCounter((prev) => prev - 1); // in future we should use func from localStorage there
  };

  const totalPrice = item.fullPrice * counter;

  return (
    <section className={style.cartItem}>
      <div className={style.cartItem__gadget_info}>
        <button
          className={style.cartItem__close_btn}
          onClick={() => onClose(item.id)}
        >
          <Cross />
        </button>

        <div className={style.cartItem__image_container}>
          <img
            className={style.cartItem__gadget_image}
            alt={'Gadget image'}
            src={image}
          />
        </div>
        <span className={style.cartItem__gadget_decscription}>
          {item.name}
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
            {counter}
          </span>
          <button
            className={style.cartItem__btn}
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
