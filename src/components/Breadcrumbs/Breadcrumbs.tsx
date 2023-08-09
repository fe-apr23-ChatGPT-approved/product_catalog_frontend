import { Link, useLocation} from 'react-router-dom';
import style from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const [category] = pathname.split('/').filter(Boolean);

  return (
    <div className={style.breadcrumbs}>
      <Link className={style.breadcrumbs__home} to="/" />

      <span
        className={style.breadcrumbs__arrow}
      >
      </span>
    
      <Link
        className={style.breadcrumbs__path}
        to={`/${category}`}
      >
        {category}
      </Link>
    </div>
  );
};
