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
    zoom,
  } = product;

  const techSpecs = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
    { label: 'Camera', value: camera },
    { label: 'Zoom', value: zoom },
  ];

  return (
    <section className="product-techSpecs">
      <h3 className={style['product-techSpecs__title']}>Tech specs</h3>

      <article className={style['product-techSpecs__article']}>
        {techSpecs.map((techSpec, index) => (
          <span key={index} className={style['product-techSpecs__wrapper']}>
            <p className={style['product-techSpecs__specs-title']}>{techSpec.label}</p>
            <p className={style['product-techSpecs__value']}>{techSpec.value}</p>
          </span>
        ))}
      </article>
    </section>
  );
};
