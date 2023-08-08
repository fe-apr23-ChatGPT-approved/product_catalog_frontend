import React from 'react';
import style from './CaruselContainer.module.scss';
import { Product } from '../../types/productType';
import { CarouselSlider } from '../CarouselSlider';

interface Props {
  products:Product[];
  title: string;
}
export const CaruselContainer: React.FC<Props> = ({ products, title }) => (
  <section className={style['brand-new-models']}>
    <CarouselSlider title={title} products={products} />
  </section>
);
