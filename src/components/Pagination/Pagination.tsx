import { FC } from 'react';
import classNames from 'classnames';
import { Arrow } from '../Arrow/Arrow';
import { scrollToTop } from '../../helpers/ScrollToTop';
import style from './Pagination.module.scss';
import { getNumbers } from '../../helpers/getNumbersPagination';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(total / perPage);
  const pages = getNumbers(1, numberOfPages);
  const isLastPage = currentPage === numberOfPages;
  const isFirstPage = currentPage === 1;

  const onClickPrevButton = () => {
    if (currentPage !== 1) {
      const newPage = currentPage - 1;

      onPageChange(newPage);
    }

    scrollToTop();
  };

  const onClickNextButton = () => {
    if (currentPage !== numberOfPages) {
      const newPage = currentPage + 1;

      onPageChange(newPage);
    }

    scrollToTop();
  };

  const onPageClick = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <ul className={style.pagination}>
      <li
        className={classNames(style.pagination__element,
          style['pagination__element-left-arrow'], {
            [style['pagination__element--disabled']]: isFirstPage,
          })}
        onClick={onClickPrevButton}
      >
        <Arrow />
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={classNames(style.pagination__element, {
            [style['pagination__element--active']]: currentPage === page,
          })}
          onClick={() => onPageClick(page)}
        >
          {page}
        </li>
      ))}

      <li
        className={classNames(style.pagination__element,
          style['pagination__element-right-arrow'], {
            [style['pagination__element--disabled']]: isLastPage,
          })}
        onClick={onClickNextButton}
      >
        <Arrow />
      </li>
    </ul>
  );
};
