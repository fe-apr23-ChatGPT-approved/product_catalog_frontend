// import { Breadcrumbs } from '../Breadcrumbs';
import { CatalogLayout } from '../CatalogLayout';
// import { Pagination } from '../Pagination';
import style from './ProductsPage.module.scss';

export const ProductPage: React.FC = () => (
  <main className={style['products-page']}>
    <div className={style['products-page__container']}>
      
      <h1 className={style['products-page__title']}>
        Mobile phones
      </h1>

      <CatalogLayout />

    </div>
  </main>
);
