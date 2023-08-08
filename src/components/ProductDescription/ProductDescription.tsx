/* eslint-disable max-len */
import React from 'react';
import style from './ProductDescription.module.scss';
import { Description } from '../../types/oneProductType';

interface Props {
  description: Description[];
}

export const ProductDescription: React.FC<Props> = ({description}) => (
  <section className="product-description">

    <h3 className={style['product-description__title']}>About</h3>
    <article className={style['product-description__article']}>
      {description.map((article, index) => (
        <React.Fragment key={index}>
          <h4 className={style['product-description__article-title']}>
            {article.title}
          </h4>
          <p className={style['product-description__article-text']}>
            {article.text.length > 1
              ? (
                <>
                  {article.text[0]}
                  <br /><br />
                  {article.text[1]}
                </>
              )
              : article.text
            }
          </p>
        </React.Fragment>
      ))}
    </article>

  </section>
);
