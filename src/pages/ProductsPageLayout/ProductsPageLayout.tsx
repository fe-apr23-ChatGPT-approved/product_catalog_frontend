import style from './ProductsPageLayout.module.scss';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Pagination } from '../../components/Pagination';
import { PageSelector } from '../../components/Selectors/PageSelector';
// import style from '../Selectors/PageSelector/PageSelector.module.scss';
import { getFromServer } from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { ProductList } from '../../components/ProductList';
import { Data } from '../../types/dataFromServer';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Search } from '../../components/Search/Search';
import { ErrorMessage } from '../../components/ErrorMessage';
import { errorMessage } from '../../types/errorMesage';
import { Breadcrumbs } from '../../components/Breadcrumbs';

const sortOptions = [
  { value: 'year', label: 'Newest' },
  { value: 'name', label: 'Alphabetically' },
  { value: 'fullPrice', label: 'Cheapest' },
];

interface Props {
  title: string;
}

export const ProductPageLayout: React.FC<Props> = ({ title }) => {
  const initialPage = 1;
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(total);
  const [sortOption, setSortOption] = useState<string>('year');

  const [searchQuery, setSearchQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const location = useLocation();
  location.pathname;

  useEffect(() => {
    setIsLoading(true);

    getFromServer(`${location.pathname}?${searchParams.toString()}`)
      .then((data: Data) => {
        if ('rows' in data) {
          setProducts(data.rows);
          setTotal(Number(data.count));
        } else {
          setIsError(true);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const canShowCatalog = !isLoading && !isError;

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (limit !== total && limit) {
      searchParams.set('limit', limit.toString());
    }

    if (currentPage !== initialPage) {
      const offset = (currentPage - 1) * limit;
      searchParams.set('offset', offset.toString());
    }

    if (sortOption !== 'year') {
      searchParams.set('sortBy', sortOption);
    }

    setSearchParams(searchParams);
  }, [limit, currentPage, sortOption]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showPagination = limit !== total && limit !== 0;

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
    setCurrentPage(initialPage);
  };

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    setCurrentPage(initialPage);
  };

  const onReload = () => {
    setIsError(false);
  };

  return (
    <main className={style['products-page']}>
      <div className={style['products-page__container']}>
      
        <Breadcrumbs />
        <h1 className={style['products-page__title']}>{title}</h1>

        <div className={style['products-page__catalog']}>
          <p className={style['products-page__catalog-total']}>
            {`${total} models`}
          </p>
          <section className={style['products-page__catalog-selectors']}>
            <div className={style.selector}>
              <p className={style.selector__info}>Sort By:</p>

              <select
                className={cn(
                  style.selector__field,
                  style['selector__arrow-select'],
                )}
                id={'sort'}
                value={sortOption}
                onChange={handleSortChange}
              >
                {sortOptions.map((option) => (
                  <option
                    key={option.value}
                    className={style['products-page__catalog-selector-text']}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <PageSelector value={limit} onChange={onSelect} total={total} />

            <Search />
          </section>

          {isError && (
            <div className={style['products-page__error']}>
              <ErrorMessage errorMessage={errorMessage.LOAD} onReload={onReload} />
            </div>
          )}

          {isLoading && <Loader />}

          {/* {!LoadedData && products.length && (
            <span>There are no phones yet</span>
          )}  */}

          {canShowCatalog && <ProductList products={products} />}

          {showPagination && (
            <Pagination
              total={total}
              limit={limit}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </main>
  );
};
