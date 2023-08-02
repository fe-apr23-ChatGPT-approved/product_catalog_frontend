import React from 'react';
import { Category } from '../Category';

import style from './ShopByCategories.module.scss';

export const ShopByCategories: React.FC = () => (
  <section className={style.shop_by_categories}>
    <h2 className={style.shop_by_categories__title}>Shop by category</h2>

    <div className={style.shop_by_categories__content}>

      <Category />

      <Category />

      <Category />

    </div>

  </section>
);
