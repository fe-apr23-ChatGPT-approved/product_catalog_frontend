import { FC } from 'react';
import cn from 'classnames';
import style from '../Selector.module.scss';

interface Props {
  sortOption: string;
  sortOptions: { value: string; label: string }[];
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortSelector: FC<Props> = ({
  sortOption,
  sortOptions,
  handleSortChange,
}) => (
  <div className={style.selector}>
    <p className={style.selector__info}>Sort By:</p>

    <select
      className={cn(
        style.selector__field,
        style['selector__field--sort-by'],
        style['selector__arrow-select'],
      )}
      id={'sort'}
      value={sortOption}
      onChange={handleSortChange}
    >
      {sortOptions.map((option) => (
        <option
          key={option.value}
          className={style.selector__info}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
