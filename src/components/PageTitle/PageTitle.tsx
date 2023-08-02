import React from 'react';

import style from './PageTitle.module.scss';

export const PageTitle: React.FC = () => (
  <section className={style.page_title}>
    <h1 className={style.page_title__title}>Welcome to Nice Gadgets store!</h1>
  </section>
);
