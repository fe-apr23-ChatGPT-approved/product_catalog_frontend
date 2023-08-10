import React from 'react';
import { Category } from '../Category';

import style from './ShopByCategories.module.scss';
import { categories } from '../../constants/categories';

interface Props {
  totalPhones: number;
  totalTablets: number;
  totalAccessories: number;
}

export const ShopByCategories: React.FC<Props> = ({
  totalPhones,
  totalTablets,
  totalAccessories,
}) => {
  categories[0].quantity = totalPhones;
  categories[1].quantity = totalTablets;
  categories[0].quantity = totalAccessories;

  return (
    <section className={style['shop-by-categories']}>
      <h2 className={style['shop-by-categories__title']}>Shop by category</h2>

      <ul className={style['shop-by-categories__list']}>
        {categories.map(category => (
          <li key={category.id} className={style['shop-by-categories__list-item']}>
            <Category
              title={category.title}
              quantity={category.quantity}
              url={category.url}
              image={category.image}
            />
          </li>
        ))}
      </ul>

    </section>
  );
};