import { useContext } from 'react';
import { FavoritesContext } from '../../components/FavouritesContext/FavouritesContext';
import style from './Favorites.module.scss';
import cn from 'classnames';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import emptyFav from '../../images/empty-Fav.png';

export const FavoritesPage: React.FC = () => {
  const { favoriteItems, totalFavCount } = useContext(FavoritesContext);

  return (
    <main className={cn(style['favorites-page'], {
      [style['favorites-page--empty']]: !favoriteItems.length})}
    >
      <div className={style['favorites-page__container']}>

        <Breadcrumbs />

        <h1 className={style['favorites-page__title']}>
          Favourites
        </h1>
        <span className={style['favorites-page__total']}>
          {`${totalFavCount} models`}
        </span>

        {favoriteItems.length !== 0
          ? (<ProductList products={favoriteItems} />)
          : (
            <div className={style['favorites-page__empty-favourites-wrapper']}>
  
              <h1 className={style['favorites-page__empty-favourites-message']}>
                Your Favorites List Is Currently Empty
              </h1>
  
              <img
                src={emptyFav}
                alt="empty-favourites-card"
                className={style['favorites-page__empty-favourites-image']} />
  
            </div>
          )}
        
      </div>
    </main>
  );
};