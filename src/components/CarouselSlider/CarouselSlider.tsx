import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './CarouselSlider.module.scss';
import arrow from '../../icons/Arrow.svg';
import cn from 'classnames';
import { Product } from '../../types/productType';
import { ProductCard } from '../ProductCard';

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
  products: Product[];
}

export const CarouselSlider: React.FC<Props> = ({ title, products }) => {
  //state for data array from api
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 940 },
      items: 3.5,
    },

    tablet2: {
      breakpoint: { max: 940, min: 840 },
      items: 3,
    },

    tablet3: {
      breakpoint: { max: 840, min: 720 },
      items: 2.5,
    },

    mobile: {
      breakpoint: { max: 720, min: 500 },
      items: 2,
    },

    mobile2: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
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
        {products.map((product) => (
          <div key={product.id} className={style.card} >
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
