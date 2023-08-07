import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Pagination } from '../Pagination';
import { getLastIndex } from '../../constants/getNumbersPagination';
import { PageSelector } from '../Selectors/PageSelector';
import style from '../Selectors/PageSelector/PageSelector.module.scss';
import layoutStyle from './CatalogLayout.module.scss';
import paginationStyle from '../Pagination/Pagination.module.scss';

const sortOptions = [
  { value: 'age', label: 'Newest' },
  { value: 'title', label: 'Alphabetically' },
  { value: 'price', label: 'Cheapest' },
];

// hardcode array

const items = [
  { id: 1, title: 'Product A', age: 3, price: 25.99 },
  { id: 2, title: 'Product B', age: 5, price: 15.49 },
  { id: 3, title: 'Product C', age: 1, price: 10.0 },
  { id: 4, title: 'Product D', age: 2, price: 35.75 },
  { id: 5, title: 'Product E', age: 4, price: 50.0 },
];

// hardcode array

export const CatalogLayout = () => {
  const initialPage = 1;
  const total = items.length;
  const initialItemsPerPage = total;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortOption, setSortOption] = useState('age');

  useEffect(() => {
    const searchParams = new URLSearchParams();

    if (itemsPerPage !== initialItemsPerPage) {
      searchParams.set('itemsPerPage', itemsPerPage.toString());
    }

    if (currentPage !== initialPage) {
      searchParams.set('page', currentPage.toString());
    }

    if (sortOption !== 'age') {
      searchParams.set('sort', sortOption);
    }

    const newUrl = `${window.location.pathname}${
      searchParams.toString() ? '?' + searchParams.toString() : ''
    }`;
    window.history.pushState(null, '', newUrl);
  }, [itemsPerPage, currentPage, sortOption]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(initialPage);
  };

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    setCurrentPage(initialPage);
  };

  const sortedItems = [...items].sort((a, b) => {
    switch (sortOption) {
    case 'title':
      return a.title.localeCompare(b.title);
    case 'price':
      return a.price - b.price;
    default:
      return b.age - a.age;
    }
  });

  const lastIndexOnPage = getLastIndex(itemsPerPage, currentPage, total);
  const firstIndexOnPage = (currentPage - 1) * itemsPerPage;
  const visibleItems = sortedItems.slice(firstIndexOnPage, lastIndexOnPage);
  const showPagination = total > itemsPerPage;

  return (
    <>
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
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <PageSelector value={itemsPerPage} onChange={onSelect} total={total} />
      </div>

      {/* here will be catalogList */}

      <ul>
        {visibleItems.map((item) => (
          <li className={style.big} key={item.id} data-cy={'item'}>
            {item.id} - {item.title} - {item.age} - {item.price}
          </li>
        ))}
      </ul>

      {/* here will be catalogList */}

      <div
        className={cn(paginationStyle.pagination__container, {
          [paginationStyle['pagination__container--hidden']]: !showPagination,
        })}
      >
        <Pagination
          total={total}
          perPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
