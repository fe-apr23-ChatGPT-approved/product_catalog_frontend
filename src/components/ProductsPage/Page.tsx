// import { Breadcrumbs } from '../Breadcrumbs';
import style from './Page.module.scss';

export const ProductPage: React.FC = () => {
  const total = 42;

  return (
    <main className={style['products-page']}>
      <div className={style['products-page__container']}>
        {/* <Breadcrumbs /> */}
        
        <h1 className={style['products-page__title']}>
          Mobile phones
        </h1>

        <p className={style['products-page__total']}>{total}</p>

      </div>
    </main>
  );
};
