import type { FC} from 'react';
import { Fragment, Children, isValidElement, cloneElement } from 'react';
import type { TPromoColumnListProps } from '../types/types';

import style from './CardsColumnList.module.scss';

const CardsColumnList: FC<TPromoColumnListProps> = ({
  promoData,
  children,
}) => (
  <div className={style.cardColumnList}>
    {promoData.map((promo, index) => (
      <Fragment key={index}>
        {Children.map(children, child =>
          isValidElement(child) ? cloneElement(child, { ...promo }) : null
        )}
      </Fragment>
    ))}
  </div>
);

export default CardsColumnList;
