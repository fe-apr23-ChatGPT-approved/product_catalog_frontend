import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Pagination } from '../Pagination';
import { PageSelector } from '../Selectors/PageSelector';
import style from '../Selectors/PageSelector/PageSelector.module.scss';
import layoutStyle from './CatalogLayout.module.scss';
import paginationStyle from '../Pagination/Pagination.module.scss';
import { getFromServer } from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { Button } from '../Button';
import { ProductList } from '../ProductList';
import { Data } from '../../types/dataFromServer';
// import { useLocation } from 'react-router';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';

const sortOptions = [
  { value: 'year', label: 'Newest' },
  { value: 'name', label: 'Alphabetically' },
  { value: 'fullPrice', label: 'Cheapest' },
];

export const CatalogLayout = () => {
  const initialPage = 1;
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isReloaded, setIsReloaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(total);
  const [sortOption, setSortOption] = useState<string>('year');
  const location = useLocation();
  location.pathname;

  useEffect(() => {
    setIsLoading(true);
    setProducts([]);
    setTotal(0);

    if (isReloaded) {
      setIsReloaded(false);
    }

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
  }, [isReloaded, searchParams]);

  const canShowCatalog = !isLoading && !isError;

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (limit !== total) {
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

  const showPagination = limit !== total;

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

  const handleReloadButton = () => {
    setIsReloaded(true);
  };

  return (
    <div className={style['catalog-layout']}>
      <span className={style['catalog-layout__total']}>
        {`${total} models`}
      </span>
      <div className={layoutStyle['catalog-layout__selectors']}>
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
                className={style['catalog-layout__selector-text']}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <PageSelector
          value={limit}
          onChange={onSelect}
          total={total}
        />
      </div>

      {isError && (
        <div className={style['catalog-layout__error']}>
          <span>Something went wrong</span>
          <Button buttonTarget={'Reload'} onClick={handleReloadButton} />
        </div>
      )}

      {isLoading && (
        <Loader />
      )}

      {/*
      {!LoadedData &  products. length && (
        <span>There are no phones yet</span>
      )} */}

      {canShowCatalog && (
        <>
          <ProductList products={products} />

          <div
            className={cn(paginationStyle.pagination__container, {
              [paginationStyle['pagination__container--hidden']]:
                !showPagination,
            })}
          >
            <Pagination
              total={total}
              limit={limit}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};
