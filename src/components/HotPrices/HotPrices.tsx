import React from 'react';

import style from './HotPrices.module.scss';

export const HotPrices: React.FC = () => (
  <section className={style.hot_prices}>
    <h2 className={style.hot_prices__title}>Hot Prices</h2>

    {/* <ProductList products={}/> потрібно передати картки які будуть відображатись */}
  </section>
);