import { FC } from 'react';
import style from './ProductCharacteristics.module.scss';

interface Props {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
}

export const ProductCharacteristics: FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
}) => {
  const characteristics = [
    { label: 'Screen', value: screen },
    { label: 'Resolution', value: resolution },
    { label: 'Processor', value: processor },
    { label: 'RAM', value: ram },
  ];

  return (
    <section className={style['product-characteristics']}>
      {characteristics.map((item, index) => (
        <div key={index} className={style['product-characteristics__container']}>
          <span className={style['product-characteristics__label']}>{item.label}:</span>
          <span className={style['product-characteristics__value']}>{item.value}</span>
        </div>
      ))}
    </section>
  );
};
