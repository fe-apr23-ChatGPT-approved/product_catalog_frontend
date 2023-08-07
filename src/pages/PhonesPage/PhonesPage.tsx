// import { Breadcrumbs } from '../Breadcrumbs';
import { CatalogLayout } from '../../components/CatalogLayout/CatalogLayout';
// import { Pagination } from '../Pagination';
import style from './PhonesPage.module.scss';

export const PhonesPage: React.FC = () => (
  <main className={style['products-page']}>
    <div className={style['products-page__container']}>
      
      <h1 className={style['products-page__title']}>
        MobilePhones
      </h1>

      <CatalogLayout />

    </div>
  </main>
);
