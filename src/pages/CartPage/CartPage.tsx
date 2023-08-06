import { FC, useState } from 'react';
import { TotalCost } from '../../components/TotalCost';
import style from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem';
import { BackButton } from '../../components/BackButton';

export interface item {
  id: number;
  name: string;
  fullPrice: number;
  price?: number;
}

// const item = {
//   id: 1,
//   name: ' Apple iPhone 14 Pro 128GB Silver (MQ023)',
//   price: 859,
// }; // item for example

const items: item[] = [
  {
    id: 1,
    name: ' Apple iPhone 13 Pro 128GB Silver (MQ023)',
    fullPrice: 1100,
    price: 1050,
  },
  {
    id: 2,
    name: ' Apple iPhone 12 Pro 128GB Silver (MQ023)',
    fullPrice: 1100,
    price: 1050,
  },
  {
    id: 3,
    name: ' Apple iPhone 14 Pro 128GB Silver (MQ023)',
    fullPrice: 300,
  },
  {
    id: 4,
    name: ' Apple iPhone 14 Pro 128GB Silver (MQ023)',
    fullPrice: 250,
  },
  {
    id: 5,
    name: ' Apple iPhone 11 Pro 128GB Silver (MQ023)',
    fullPrice: 1100,
    price: 1050,
  },
]; //imitating arr from local storage

export const CartPage: FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cartItems, setCartItems] = useState(items);

  const removeFromCart = (itemId: number) => {
    const filteredCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(filteredCart);
  }; //we need to use this function in localStorage

  const totalPrice = cartItems.reduce((accumulator, cartItem) => (
    accumulator + (cartItem.price || cartItem.fullPrice)), 0);

  const handleClickModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <section className={style['cart-page']}>
      <div className={style['cart-page__container']}>
        <BackButton />

        <h1 className={style['cart-page__title']}>Cart</h1>

        {cartItems.length ? (
          <div className={style['cart-page__content']}>
            <ul className={style['cart-page__cart-list']}>
              {cartItems.map((item) => (
                <li key={item.id} className={style['cart-page__cart-item']}>
                  {<CartItem
                    item={item}
                    onClose={removeFromCart}
                  />}
                </li>
              ))}
            </ul>
            <div className={style['cart-page__total-cost']}>
              <TotalCost
                totalPrice={totalPrice}
                products={items}
                onClickModal={handleClickModal}
              />
            </div>
          </div>
        ) : (
          <h1 className={style['cart-page__empty-cart-msg']}>
            Your cart is empty
          </h1>
        )}
      </div>
    </section>
  );
};
