// import { Breadcrumbs } from '../Breadcrumbs';
import { CatalogLayout } from '../../components/CatalogLayout/CatalogLayout';
// import { Pagination } from '../Pagination';
import style from './AccessoriesPage.module.scss';

export const AccessoriesPage: React.FC = () => (
  <main className={style['products-page']}>
    <div className={style['products-page__container']}>
      
      <h1 className={style['products-page__title']}>
        Accessories
      </h1>

      <CatalogLayout />

    </div>
  </main>
);
