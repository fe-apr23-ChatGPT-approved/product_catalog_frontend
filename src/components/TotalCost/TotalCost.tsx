import { FC } from 'react';
import { item } from '../../pages/CartPage';
import style from './TotalCost.module.scss';
import { Button } from '../Button';

interface Props {
  products: item[];
  totalPrice: number;
  onClickModal: () => void;
}

export const TotalCost: FC<Props> = ({
  products,
  totalPrice,
  onClickModal,
}) => {
  const productsAmount = products.length > 1 ? 'items' : 'item';

  return (
    <>
      <div className={style['total-cost']}>
        <div className={style['total-cost__info']}>
          <h2 className={style['total-cost__price']}>{`$${totalPrice}`}</h2>
          <span className={style['total-cost__items-amount']}>
            {`Total for ${products.length} ${productsAmount}`}
          </span>
        </div>
        <div className={style['total-cost__line']} />
        <Button buttonTarget={'Checkout'} onClick={onClickModal} />
      </div>
    </>
  );
};
