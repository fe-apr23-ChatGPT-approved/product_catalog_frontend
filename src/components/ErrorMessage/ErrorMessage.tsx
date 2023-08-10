import React from 'react';
import style from './ErrorMessage.module.scss';
import {errorMessage} from '../../types/errorMesage';
import oops from '../../icons/smtWentWrong.png';
import { Link } from 'react-router-dom';

interface Props {
  errorMessage: errorMessage | null;
  onReload: () => void;
}

export const ErrorMessage: React.FC<Props> = ({ errorMessage, onReload }) => (
  <div className={style['error-message']}>
    <img src={oops} alt="" className={style['error-message__img']} />
    <span className={style['error-message__text']}>{errorMessage}</span>
    <button className={style['error-message__reload-button']} onClick={onReload}>
      RELOAD
    </button>
  </div>
);
