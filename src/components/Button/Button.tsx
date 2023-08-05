import { FC } from 'react';
import style from './Button.module.scss';
interface Props {
  buttonTarget: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ buttonTarget, onClick }) => (
  <button onClick={onClick} className={style.button}>
    {buttonTarget}
  </button>
);
