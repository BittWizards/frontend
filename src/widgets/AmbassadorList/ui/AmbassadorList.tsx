import { FC, Fragment, Children, isValidElement, cloneElement } from 'react';
import type { TAmbassadorList } from '../types/types';

import style from './AmbassadorList.module.scss';

const AmbassadorList: FC<TAmbassadorList> = ({ ambassadorData, children }) => (
  <div className={style.cardList}>
    {ambassadorData.map((ambassador, index) => (
      <Fragment key={index}>
        {Children.map(children, child =>
          isValidElement(child) ? cloneElement(child, { ...ambassador }) : null
        )}
      </Fragment>
    ))}
  </div>
);

export default AmbassadorList;
