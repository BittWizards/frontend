import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import arrowForward from 'src/shared/icons/arrow-forward.svg';
import type { IContentContainerProps } from '../types/types';

import style from './ContentContainer.module.scss';

const ContentContainer: FC<IContentContainerProps> = ({
  title,
  link,
  children,
}) => (
  <div className={style.container}>
    <div className={style.titleContainer}>
      <h2 className={style.title}>{title}</h2>
      <NavLink to={link} className={style.link}>
        Показать все
        <img src={arrowForward} alt="arrow" />
      </NavLink>
    </div>
    {children}
  </div>
);

export default ContentContainer;
