import { useState } from 'react';
import { Pagination } from './Pagination';

export function getNumbers(from: number, to: number): number[] {
  const numbers = [];
  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export function getLastIndex(
  itemsPerPage: number,
  currentPage: number,
  total: number,
) {
  let lastIndex = itemsPerPage * currentPage;

  if (lastIndex > total) {
    lastIndex = total;
  }

  return lastIndex;
}

const items = getNumbers(1, 42).map((n) => `Item ${n}`);
export const PaginationLayout = () => {
  const initialPage = 1;
  const initialItemsPerPage = 5;
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
      <div className={'container'}>
        <p className={'lead'} data-cy={'info'}>
          Items on page
        </p>

        <div className={'form-group row'}>
          <div className={'col-3 col-sm-2 col-xl-1'}>
            <select
              data-cy={'perPageSelector'}
              id={'perPageSelector'}
              className={'form-control'}
              value={itemsPerPage}
              onChange={onSelect}
            >
              <option value={'4'}>4</option>
              <option value={'8'}>8</option>
              <option value={'16'}>16</option>
              <option value={'20'}>20</option>
            </select>
          </div>
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
      </div>
    </>
  );
};
