import React, { FC, useCallback } from 'react';
import style from './Search.module.scss';
import { Cross } from '../Cross/Cross';
import { debounce } from '../../functions/debounce';

interface Props {
  searchQuery: string,
  onChange: (value: string) => void,
  onApplyChange: (value: string) => void,
  currentDelay: number,
  clearSearch: () => void;
}

export const Search: FC<Props> = ({
  searchQuery,
  onChange,
  onApplyChange,
  currentDelay,
  clearSearch,
}) => {
  const applyQuery = useCallback(
    debounce(onApplyChange, currentDelay), [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    applyQuery(event.target.value);
  };

  const showClearIcon = searchQuery !== '';

  return (
    <div className={style.search}>
      <input
        className={style.search__input}
        placeholder={'Find your perfect gadget'}
        type="text"
        onChange={handleChange}
        value={searchQuery}
      />
      {showClearIcon && (
        <button
          className={style['search__clear-btn']}
          onClick={clearSearch}
        >
          <Cross />
        </button>
      )}
    </div>
  );
};
