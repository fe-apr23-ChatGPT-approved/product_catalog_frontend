import style from './ProductsPageLayout.module.scss';
import React, { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { PageSelector } from '../../components/Selectors/PageSelector';
import { getFromServer } from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { ProductList } from '../../components/ProductList';
import { Data } from '../../types/dataFromServer';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Search } from '../../components/Search/Search';
import { normalizeQuery } from '../../functions/normalizeQuery';
import { SortSelector } from '../Selectors/SortSelector';
import { ErrorMessage } from '../ErrorMessage';

const sortOptions = [
  { value: 'year', label: 'Newest' },
  { value: 'name', label: 'Alphabetically' },
  { value: 'fullPrice', label: 'Cheapest' },
];

interface Props {
  title: string;
}

export const ProductsPageLayout: React.FC<Props> = ({ title }) => {
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
  const delay = 2000;
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setIsLoading(true);
    getFromServer(`${pathname}?${searchParams.toString()}`)
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
  }, [searchParams, pathname]);

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

    if (appliedQuery) {
      const normalizedData = normalizeQuery(appliedQuery);
      searchParams.set('query', normalizedData);
    }

    setSearchParams(searchParams);
  }, [limit, currentPage, sortOption, appliedQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const onQueryChange = (value: string) => {
    setSearchQuery(value);
  };

  const onApplyChange = (value: string) => {
    const newQuery = value.trim();
    if (newQuery) {
      setAppliedQuery(value);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setAppliedQuery('');
  };

  const canShowLoader = !isError && isLoading;
  const canShowPage = !isError && !isLoading;
  const showPagination = limit !== total && limit !== 0 && !isError;

  return (
    <main className={style['products-page']}>
      <div className={style['products-page__container']}>
        <h1 className={style['products-page__title']}>{title}</h1>

        <div className={style['products-page__catalog']}>
          <p className={style['products-page__catalog-total']}>
            {`${total} models`}
          </p>
          <section className={style['products-page__catalog-selectors']}>
            <SortSelector
              sortOption={sortOption}
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
            />

            <PageSelector
              value={limit}
              onChange={onSelect}
              total={total}
            />

            <div className={style['products-page__search']}>
              <Search
                searchQuery={searchQuery}
                onChange={onQueryChange}
                onApplyChange={onApplyChange}
                currentDelay={delay}
                clearSearch={clearSearch}
              />
            </div>
          </section>

          {isError && (
            <div className={style['products-page__error']}>
              <ErrorMessage />
            </div>
          )}

          {canShowLoader && <Loader />}

          {canShowPage && <ProductList products={products} />}

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
