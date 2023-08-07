import { FC } from 'react';
import { Product } from '../../types/productType';
import style from './ProductList.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => (
  <section className={style['product-list']}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </section>
);