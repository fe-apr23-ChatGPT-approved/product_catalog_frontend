import React from 'react';
import style from './BrandNewModels.module.scss';
import { Product } from '../../types/productType';
import { ProductCard } from '../ProductCard';
import { CarouselSlider } from '../CarouselSlider';

interface Props {
  sliderProducts:Product[];
}
export const BrandNewModels: React.FC<Props> = ({ sliderProducts }) => (
  <section className={style['brand-new-models']}>
    <h2 className={style['brand-new-models__title']}>Brand new models</h2>
    {sliderProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
    <CarouselSlider title={'New'} />
  </section>
);
