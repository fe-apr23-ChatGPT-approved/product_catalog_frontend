import { useState } from 'react';
import { Pagination } from './Pagination';
import { getLastIndex, getNumbers } from '../../helpers/getNumbersPagination';
import style from './PaginationLayout.module.scss';

const items = getNumbers(1, 42).map((n) => `Item ${n}`);

export const PaginationLayout = () => {
  const initialPage = 1;
  const initialItemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const total = items.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(initialPage);
  };

  const lastIndexOnPage = getLastIndex(itemsPerPage, currentPage, total);
  const firstIndexOnPage = (currentPage - 1) * itemsPerPage;
  const visibleItems = items.slice(firstIndexOnPage, lastIndexOnPage);

  return (
    <>
      <div className={style.paginationSelector}>
        <p className={style.paginationSelector__info}>Items on page</p>
        <select
          className={style.paginationSelector__field}
          value={itemsPerPage}
          onChange={onSelect}
        >
          <option value={'4'}>4</option>
          <option value={'8'}>8</option>
          <option value={'16'}>16</option>
          <option value={items.length}>All</option>
        </select>
      </div>
      <Pagination
        total={total}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <ul>
        {visibleItems.map((item) => (
          <li key={item} data-cy={'item'}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
