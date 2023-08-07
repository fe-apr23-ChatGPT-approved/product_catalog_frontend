import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './MainCarousel.module.scss';
import cn from 'classnames';
import mainArrow from './MainArrow.svg';

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
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={5000}
    autoPlay={true}
    keyBoardControl={true}
    transitionDuration={1000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={['mobile']}
    customButtonGroup={<ButtonGroup />}
    // renderDotsOutside={true}
    arrows={false}
  >
    <div className={style['main-carousel-item']}></div>
    <div className={style['main-carousel-item']}></div>
    <div className={style['main-carousel-item']}></div>
  </Carousel>
);
