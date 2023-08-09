import { CatalogLayout } from '../CatalogLayout';
import style from './ProductsPageLayout.module.scss';

interface Props {
  title: string;
}

export const ProductPageLayout: React.FC<Props> = ({ title }) => (
  <main className={style['products-page']}>
    <div className={style['products-page__container']}>
      <h1 className={style['products-page__title']}>{title}</h1>

      <CatalogLayout />
    </div>
  </main>
);