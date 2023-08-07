import { FC } from 'react';
import style from './ProductDetails.module.scss';
import { BackButton } from '../../components/BackButton';

export const ProductDetails: FC = () => (
  <section className={style['product-details']}>
    <div className={style['product-details__layout']}>
      <div className={style['product-details__back-btn']}>
        <BackButton />
      </div>
      <h2 className={style['product-details__title']}>Here will be title</h2>
      <div className={style['product-details__main-info']}>
        <div className={style['product-details__photos']}>
            Photo container
        </div>
        <div className={style['product-details__variants']}>Variants</div>
      </div>
      <div className={style['product-details__aditional-info']}>
        <div className={style['product-details__block']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquam, reprehenderit.
        </div>
        <div className={style['product-details__block']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquam, reprehenderit.
        </div>
      </div>

      <div className={style['product-details__recommended']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          deserunt. A ad quibusdam harum voluptatum veritatis fuga, numquam
          autem maxime!
      </div>
    </div>
  </section>
);
