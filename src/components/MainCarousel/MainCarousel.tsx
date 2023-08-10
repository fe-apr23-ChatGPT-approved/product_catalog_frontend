import Carousel, { ButtonGroupProps, DotProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './MainCarousel.module.scss';
import cn from 'classnames';
import mainArrow from '../../icons/Arrow.svg';
import image1 from '../../images/carousel_img_1.png';
import image2 from '../../images/carousel_img_2.png';
import image3 from '../../images/carousel_img_3.png';
import React from 'react';

const items = [
  {
    title: 'Item 1',
    image: image1,
  },
  {
    title: 'Item 2',
    image: image2,
  },
  {
    title: 'Item 3',
    image: image3,
  },
];

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  const handleClickPrev = () => {
    if (previous) {
      previous();
    }
  };

  const handleClickNext = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={style['main-carousel-button-group']}>
      <button
        className={cn(
          `${style['main-carousel__button']} ${style['main-carousel__button--left']}`,
        )}
        onClick={handleClickPrev}
      >
        <img className={style.img} src={mainArrow} />
      </button>
      <button
        className={cn(`${style['main-carousel__button']}`)}
        onClick={handleClickNext}
      >
        <img src={mainArrow} />
      </button>
    </div>
  );
};

const CustomDot = ({ active, onClick}: DotProps) => (
  <li >
    <button
      className={cn(style['custom-dot'], {
        [style['custom-dot--active']]: active
      })}
      onClick={onClick}
    />
  </li>
);

const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },

  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export const MainCarousel: React.FC = () => (
  <Carousel
    dotListClass={style['dots-group']}
    customDot={<CustomDot />}
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={5000}
    autoPlay={true}
    keyBoardControl={true}
    transitionDuration={1000}
    containerClass={style['main-carousel-container']}
    customButtonGroup={<ButtonGroup />}
    renderDotsOutside={true}
    arrows={false}
  >

    {items.map(item => (
      <div key={item.title} className={style['item-container']}>
        <img className={style['main-carousel-item']} src={item.image}></img>
      </div>
    ))}
  </Carousel>
);
