import React, { useState } from 'react';

import style from './PhotosList.module.scss';
import classNames from 'classnames';

export const images = [
  'img/phones/apple-iphone-11/black/00.webp',
  'img/phones/apple-iphone-11/black/01.webp',
  'img/phones/apple-iphone-11/black/02.webp',
  'img/phones/apple-iphone-11/black/03.webp',
  'img/phones/apple-iphone-11/black/04.webp'
]; // later should be deleted

// export const PhotosList: React.FC = ({ photos, name }) => {
export const PhotosList: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handleSelectPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <section className={style['photos-list']}>

      <ul className={style['photos-list__list']}>
        {images.map((image, index) => (

          <li key={index} className={classNames(
            style['photos-list__list-item'],
            { [style['photos-list__list-item--selected']]: selectedPhotoIndex === index }
          )} >
            <img
              src={`https://gadget-store-api.onrender.com/${image}`}
              className={classNames(
                style['photos-list__photo'],
                {['photos-list__photo--selected']: selectedPhotoIndex === index
                })}
              // alt={name}
              onClick={() => handleSelectPhoto(index)}
            />
          </li>
        ))}
      </ul>

      <img
        src={`https://gadget-store-api.onrender.com/${images[selectedPhotoIndex]}`}
        className={style['photos-list__current-photo']}
        // alt={name}
      />
    </section>
  );
};
