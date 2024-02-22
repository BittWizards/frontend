import React from 'react';
import { TPromoColumnListProps } from '../types/types';

import style from './CardsColumnList.module.scss';

const CardsColumnList: React.FC<TPromoColumnListProps> = ({
  promoData,
  children,
}) => {
  return (
    <div className={style.cardColumnList}>
      {promoData.map((promo, index) => (
        <React.Fragment key={index}>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child, { ...promo })
              : null
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardsColumnList;
