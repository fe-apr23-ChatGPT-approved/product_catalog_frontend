import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Arrow } from '../Arrow/Arrow';
import { scrollToTop } from '../../functions/ScrollToTop';
import style from './Pagination.module.scss';
import { getNumbers } from '../../functions/getNumbersPagination';

interface Props {
  total: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({
  total,
  limit,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(total / limit) | 0;
  const maxDisplayedPages = 4;

  const [displayedPages, setDisplayedPages] = useState<number[]>([]);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  useEffect(() => {
    const pages = getNumbers(numberOfPages);
    const centerIndex = Math.floor(maxDisplayedPages / 2);
    let startPage = currentPage - centerIndex;

    if (startPage < 1) {
      startPage = 1;
    } else if (startPage + maxDisplayedPages - 1 > numberOfPages) {
      startPage = Math.max(numberOfPages - maxDisplayedPages + 1, 1);
    }

    const endPage = startPage + maxDisplayedPages;
    setDisplayedPages(pages.slice(startPage - 1, endPage - 1));
  }, [currentPage, numberOfPages, maxDisplayedPages]);

  const onClickPrevButton = () => {
    if (!isFirstPage) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      scrollToTop();
    }
  };

  const onClickNextButton = () => {
    if (!isLastPage) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
      scrollToTop();
    }
  };

  const onPageClick = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <ul className={style.pagination}>
      <li
        className={classNames(
          style.pagination__element,
          style['pagination__element-left-arrow'],
          {
            [style['pagination__element--disabled']]: isFirstPage,
          },
        )}
        onClick={onClickPrevButton}
      >
        <Arrow />
      </li>
      {displayedPages.map((page) => (
        <li
          key={page}
          className={classNames(style.pagination__element, {
            [style['pagination__element--active']]: currentPage === page,
          })}
          onClick={() => onPageClick(page)}
        >
          <span className={style['pagination__element-text']}>{page}</span>
        </li>
      ))}
      <li
        className={classNames(
          style.pagination__element,
          style['pagination__element-right-arrow'],
          { [style['pagination__element--disabled']]: isLastPage },
        )}
        onClick={onClickNextButton}
      >
        <Arrow />
      </li>
    </ul>
  );
};
