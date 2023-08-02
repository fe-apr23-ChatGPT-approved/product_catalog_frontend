import React from 'react';
import { ProductsList } from '../ProductsList';
import style from './BrandNewModels.module.scss';

export const BrandNewModels: React.FC = () => (
  <section className={style.brand_new_models}>
    <h2 className={style.brand_new_models__title}>Brand new models</h2>

    <ProductsList />
  </section>
);
