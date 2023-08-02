import { FC } from 'react';
import { getNumbers } from '../../components/Pagination/PaginationLayout';
import classNames from 'classnames';
import arrow from '../../icons/arrow_up.svg';
import { scrollToTop } from '../../helpers/ScrollToTop';

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
    <ul className={'pagination'}>
      <li
        className={classNames('page-item', {
          disabled: isFirstPage,
        })}
        onClick={onClickPrevButton}
      >
        <a
          data-cy={'prevLink'}
          className={'page-link'}
          href={'#prev'}
          aria-disabled={isFirstPage}
        >
          <img src={arrow} alt={'Previous page'} />
        </a>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={classNames('page-item', {
            active: currentPage === page,
          })}
        >
          <a
            data-cy={'pageLink'}
            className={'page-link'}
            href={`#${page}`}
            onClick={() => onPageClick(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li
        className={classNames('page-item', {
          disabled: isLastPage,
        })}
      >
        <a
          data-cy={'nextLink'}
          className={'page-link'}
          href={'#next'}
          aria-disabled={isLastPage}
          onClick={onClickNextButton}
        >
          <img src={arrow} alt={'Next page'} />
        </a>
      </li>
    </ul>
  );
};
