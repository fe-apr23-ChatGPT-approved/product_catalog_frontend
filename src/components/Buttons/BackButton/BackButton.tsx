import { FC } from 'react';
import style from './BackButton.module.scss';
import { useNavigate } from 'react-router';

export const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={style['back-btn']} onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};
