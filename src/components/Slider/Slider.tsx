import React from 'react';
import { NewModel } from '../NewModel';

import style from './Slider.module.scss';
import grid from '../../utils/grid.module.scss';

export const Slider: React.FC = () => (
  <div className={style.slider}>
    <div className={`${grid.grid} ${grid['grid--mobile']} ${grid['grid--mobile--margin']}`}>
      
      <button className={style.slider__button}></button>

      <NewModel />

      <button className={style.slider__button}></button>
      
    </div>
  </div>
);
