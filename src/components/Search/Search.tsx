import React, { FC, useState } from 'react';
import style from './Search.module.scss';
import { Cross } from '../Cross/Cross';

export const Search: FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setQuery('');
  };

  const showClearIcon = query !== '';

  return (
    <div className={style.search}>
      <input
        className={style.search__input}
        placeholder={'Find your perfect gadget'}
        type="text"
        onChange={handleSearch}
        value={query}
      />
      {showClearIcon && (
        <button
          className={style['search__clear-btn']}
          onClick={handleClearSearch}
        >
          <Cross />
        </button>
      )}
    </div>
  );
};
