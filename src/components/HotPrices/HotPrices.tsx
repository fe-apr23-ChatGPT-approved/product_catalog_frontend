import React from 'react';

import style from './HotPrices.module.scss';
import { CarouselSlider } from '../CarouselSlider';

export const HotPrices: React.FC = () => (
  <section className={style.hot_prices}>
    <CarouselSlider title={'Hot Prices'} />
  </section>
);