import { Link, useLocation} from 'react-router-dom';
import style from './Breadcrumbs.module.scss';
import arrowRight from '../../icons/Chevron (Arrow Right)black.svg';

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.breadcrumbs}>
      <nav className={style.path}>
        <Link to={'/'}>
          <img src={arrowRight} alt="arrow to right" />
          <span className={style.breadcrumbs__path}>{pathname}</span>
        </Link>
      </nav>
    </div>
  );
};