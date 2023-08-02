import React from 'react';
import { ProductCard } from '../ProductCard';

import style from './ProductsList.module.scss';

export const ProductsList: React.FC = () => (
  <nav className={style.product_list}>
    <ul className={style.product_list__wraper}>
      
      <ProductCard />

    </ul>
  </nav>
);
