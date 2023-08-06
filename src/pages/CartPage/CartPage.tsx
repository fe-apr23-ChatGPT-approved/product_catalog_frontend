import { FC, useState } from 'react';
import { TotalCost } from '../../components/TotalCost';
import style from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem';
import { BackButton } from '../../components/BackButton';

export interface item {
  id: number;
  name: string;
  priceRegular: number;
  priceDiscount?: number;
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
    priceRegular: 1100,
    priceDiscount: 1050,
  },
  {
    id: 2,
    name: ' Apple iPhone 12 Pro 128GB Silver (MQ023)',
    priceRegular: 1100,
    priceDiscount: 1050,
  },
  {
    id: 3,
    name: ' Apple iPhone 14 Pro 128GB Silver (MQ023)',
    priceRegular: 300,
  },
  {
    id: 4,
    name: ' Apple iPhone 14 Pro 128GB Silver (MQ023)',
    priceRegular: 250,
  },
  {
    id: 5,
    name: ' Apple iPhone 11 Pro 128GB Silver (MQ023)',
    priceRegular: 1100,
    priceDiscount: 1050,
  },
]; //imitating arr from local storage

export const CartPage: FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const totalPrice = items.reduce((accumulator, product) => {
    const priceToUse = product.priceDiscount || product.priceRegular;

    return accumulator + priceToUse;
  }, 0);

  const handleClickModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <section className={style['cart-page']}>
      <div className={style['cart-page__container']}>
        <BackButton />

        <h1 className={style['cart-page__title']}>Cart</h1>
        <div className={style['cart-page__content']}>
          <ul className={style['cart-page__cart-list']}>
            {items.map((item) => (
              <li key={item.id} className={style['cart-page__cart-item']}>
                {<CartItem item={item} />}
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
      </div>
    </section>
  );
};
