import React from 'react';
import style from './ProductTechSpecs.module.scss';

// interface Props {
//   title: string;
// }

export const product = {
  'screen': '6.1 IPS',
  'resolution': '1792x828',
  'processor': 'Apple A13 Bionic',
  'ram': '4GB',
  'camera': '12 Mp + 12 Mp + 12MP',
  'zoom': 'Digital, 5x',
}; // should be deleted

// eslint-disable-next-line max-len
// export const ProductTechSpecs: React.FC<Props> = ({ screen, resolution, processor, ram, camera, zoom }) => (
export const ProductTechSpecs: React.FC = () => {

  const { screen, resolution, processor, ram, camera, zoom } = product; // should be deleted

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