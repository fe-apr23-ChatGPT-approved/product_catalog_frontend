// import { Breadcrumbs } from '../Breadcrumbs';
import { CatalogLayout } from '../CatalogLayout';
// import { Pagination } from '../Pagination';
import style from './ProductsPage.module.scss';

interface Props {
  title: string;
}

export const ProductPage: React.FC<Props> = ({ title }) => (
  <main className={style['products-page']}>
    <div className={style['products-page__container']}>
      
      <h1 className={style['products-page__title']}>
        {title}
      </h1>

      <CatalogLayout />

    </div>
  </main>
);
