import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './CarouselSlider.module.scss';
import arrow from '../../icons/Arrow.svg';
import cn from 'classnames';

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  // const currentSlide = carouselState?.currentSlide ?? 0;
  // const startSlider = currentSlide === 0;
  // now i hardoced it we need to use dataArray.length -1
  //NEED TO FIX IT **
  // const finishSlider = currentSlide === 6;

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
    <div className={style['carousel-button-group']}>
      <button
        className={cn(
          `${style.carousel__button} ${style['carousel__button--left']}`,
        )}
        onClick={handleClickPrev}
      >
        <img className={style.img} src={arrow} />
      </button>
      <button
        className={cn(`${style.carousel__button}`)}
        onClick={handleClickNext}
      >
        <img src={arrow} />
      </button>
    </div>
  );
};

interface Props {
  title: string,
}

export const CarouselSlider: React.FC<Props> = ({ title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 640 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1.5,
    },
  };

  return (
    //we will take recomended from props
    //and render items from data array
    <div className={style.carousel}>
      <div className={style.carousel__navigation}>
        <div className={style.carousel__title}>{title}</div>
      </div>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
        infinite={true}
        arrows={false}
      >
        <div className={style.card}>Item 1</div>
        <div className={style.card}>Item 2</div>
        <div className={style.card}>Item 3</div>
        <div className={style.card}>Item 4</div>
        <div className={style.card}>Item 5</div>
        <div className={style.card}>Item 6</div>
        <div className={style.card}>Item 7</div>
        <div className={style.card}>Item 8</div>
        <div className={style.card}>Item 9</div>
        <div className={style.card}>Item 10</div>
      </Carousel>
    </div>
  );
};
