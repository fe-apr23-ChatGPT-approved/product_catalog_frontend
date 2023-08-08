import React, { FC } from 'react';
import cn from 'classnames';
import style from './PageSelector.module.scss';

interface Props {
  value: number;
  total: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const PageSelector:FC<Props> = ({ value, total, onChange }) => (
  <div className={style.selector}>
    <p className={style.selector__info}>
      Items on page
    </p>
    <select
      className={cn(
        style.selector__field,
        style['selector__arrow-select'],
      )}
      value={value}
      onChange={onChange}
    >
      <option value={total}>All</option>
      <option value={4}>4</option>
      <option value={8}>8</option>
      <option value={16}>16</option>
    </select>
  </div>
);
