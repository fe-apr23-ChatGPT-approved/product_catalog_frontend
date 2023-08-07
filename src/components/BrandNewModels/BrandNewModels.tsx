import React from 'react';
import style from './BrandNewModels.module.scss';

export const BrandNewModels: React.FC = () => (
  <section className={style['brand-new-models']}>
    <h2 className={style['brand-new-models__title']}>Brand new models</h2>

    {/* <ProductList products={}/> потрібно передати картки які будуть відображатись */}
  </section>
);
