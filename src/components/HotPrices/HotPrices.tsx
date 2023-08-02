import React from 'react';
import { ProductsList } from '../ProductsList';

import style from './HotPrices.module.scss';

export const HotPrices: React.FC = () => (
  <section className={style.hot_prices}>
    <h2 className={style.hot_prices__title}>Hot Prices</h2>

    <ProductsList />
  </section>
);
