import { FC } from 'react';
import style from './Loader.module.scss';

export const Loader: FC = () => (
  <section data-cy={'loader'} className={style.Loader}>
    <div className={style.Loader__dot}></div>
    <div className={style.Loader__dot}></div>
    <div className={style.Loader__dot}></div>
    <div className={style.Loader__dot}></div>
  </section>
);
