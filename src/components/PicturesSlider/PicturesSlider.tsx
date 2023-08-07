/* eslint-disable max-len */
import React from 'react';
import style from './PicturesSlider.module.scss';
import photoBig from '../../images/PicturesSlider-photo-big.png';
import photoLittle from '../../images/PicturesSlider-photo-little.png';

export const PicturesSlider: React.FC = () => (
  <section className={style['pictures-slider'] + ' ' + style['pictures-slider_noPadding']}>
    <div className={style['pictures-slider__container']}>

      <button className={style['pictures-slider__button']}>{'<'}</button>

      <img
        className={`${style['pictures-slider__photo']} ${style['pictures-slider__photo_mobile']}`}
        src={photoLittle}
      />
      <img
        className={`${style['pictures-slider__photo']} ${style['pictures-slider__photo_tableAndDesktop']}`}
        src={photoBig}
      />

      <button className={style['pictures-slider__button']}>{'>'}</button>

    </div>

    <nav className={style['pictures-slider__dots']}>
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