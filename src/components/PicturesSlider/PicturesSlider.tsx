/* eslint-disable max-len */
import React from 'react';
import style from './PicturesSlider.module.scss';
import { MainCarousel } from '../MainCarousel';

export const PicturesSlider: React.FC = () => (
  <section className={style['pictures-slider'] + ' ' + style['pictures-slider_noPadding']}>
    <MainCarousel />
  </section>
);