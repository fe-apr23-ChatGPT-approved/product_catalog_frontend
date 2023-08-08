import React from 'react';
import style from './ProductTechSpecs.module.scss';
import { ProductInterface } from '../../types/oneProductType';

interface Props {
  product: ProductInterface;
}

export const ProductTechSpecs: React.FC<Props> = ({ product }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom
  } = product;

  return (
    <section className="product-techSpecs">

      <h3 className={style['product-techSpecs__title']}>Tech specs</h3>

      <article className={style['product-techSpecs__article']}>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Screen</p>
          <p className={style['product-techSpecs__value']}>{screen}</p>
        </span>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Resolution</p>
          <p className={style['product-techSpecs__value']}>{resolution}</p>
        </span>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Processor</p>
          <p className={style['product-techSpecs__value']}>{processor}</p>
        </span>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Ram</p>
          <p className={style['product-techSpecs__value']}>{ram}</p>
        </span>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Camera</p>
          <p className={style['product-techSpecs__value']}>{camera}</p>
        </span>

        <span className={style['product-techSpecs__wrapper']}>
          <p className={style['product-techSpecs__specs-title']}>Zoom</p>
          <p className={style['product-techSpecs__value']}>{zoom}</p>
        </span>

      </article>

    </section>
  );
};