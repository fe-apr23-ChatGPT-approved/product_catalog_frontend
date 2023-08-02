import React from 'react';
import style from './Baner.module.scss';
import { Slider } from '../Slider';

export const Baner: React.FC = () => (
  <section className={style.baner + ' ' + style.baner_noPadding}>
    
    <Slider />

    <nav className={style.baner__dots}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="24"
        viewBox="0 0 80 24"
        fill="none"
      >
        <rect x="5" y="10" width="14" height="4" fill="#0F0F11" />
        <rect x="33" y="10" width="14" height="4" fill="#E2E6E9" />
        <rect x="61" y="10" width="14" height="4" fill="#E2E6E9" />
      </svg>
    </nav>
  </section>
);
