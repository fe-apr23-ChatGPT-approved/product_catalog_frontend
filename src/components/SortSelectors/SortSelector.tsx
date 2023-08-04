import React from 'react';
// import style from '../Selectors/PageSelector';

interface SortingOption {
  value: string;
  label: string;
}

interface Props {
  options: SortingOption[];
  value: string;
  onChange: (selectedOption: string) => void;
}

const SortingSelector: React.FC<Props> = ({ options, value, onChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onChange(selectedOption);
  };

  return (
    <div>
      <label htmlFor={'sort'}>Sort By:</label>
      <select id={'sort'} value={value} onChange={handleSortChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortingSelector;
