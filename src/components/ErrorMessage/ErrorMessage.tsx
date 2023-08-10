import React from 'react';
import style from './ErrorMessage.module.scss';
import oops from '../../icons/smtWentWrong.png';

export const ErrorMessage: React.FC = () => {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className={style['error-message']}>
      <img src={oops} alt="" className={style['error-message__img']} />
      <span className={style['error-message__text']}>
        Something went wrong. Try to reload
      </span>
      <button
        className={style['error-message__reload-button']} onClick={handleReloadClick}>
        RELOAD
      </button>
    </div>
  );
};
