import React from 'react';
import style from './BrandNewModels.module.scss';
import { CarouselSlider } from '../CarouselSlider';

export const BrandNewModels: React.FC = () => (
  <section className={style['brand-new-models']}>
    <CarouselSlider title={'New'} />
  </section>
);
