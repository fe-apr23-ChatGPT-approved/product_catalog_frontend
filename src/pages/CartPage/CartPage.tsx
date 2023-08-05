import { FC, useState } from 'react';
import { TotalCost } from '../../components/TotalCost';

export interface item {
  id: number;
  name: string;
  priceRegular: number;
  priceDiscount?: number;
}

const items: item[] = [
  { id: 1, name: 'iphone', priceRegular: 1100, priceDiscount: 1050 },
  { id: 2, name: 'iphone', priceRegular: 1100, priceDiscount: 1050 },
  { id: 3, name: 'iphone', priceRegular: 300 },
  { id: 4, name: 'iphone', priceRegular: 250 },
  { id: 5, name: 'iphone', priceRegular: 1100, priceDiscount: 1050 },
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
    <>
      <TotalCost
        totalPrice={totalPrice}
        products={items}
        onClickModal={handleClickModal}
      />
    </>
  );
};
