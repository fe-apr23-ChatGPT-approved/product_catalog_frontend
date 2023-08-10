import { Link, useLocation} from 'react-router-dom';
import style from './Breadcrumbs.module.scss';

interface Props {
  productName?: string | undefined
}

export const Breadcrumbs: React.FC<Props> = ({ productName }) => {
  const { pathname } = useLocation();
  const [category] = pathname.split('/').filter(Boolean);

  const parts = pathname.split('/');
  const itemId = parts[parts.length - 1];

  console.log(pathname);

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

      {itemId !== category && (
        <>
          <span
            className={style.breadcrumbs__arrow}
          >
          </span>

          <Link
            className={style['breadcrumbs__path--light']}
            to={`/${category}/${itemId}`}
          >
            {productName}
          </Link>
        </>
      )}
     
    </div>
  );
};
