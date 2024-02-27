import { FC, Fragment, Children, isValidElement, cloneElement } from 'react';
import type { TAmbassadorList } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

import style from './AmbassadorList.module.scss';

const AmbassadorList: FC<TAmbassadorList> = ({ ambassadorData, children }) => {
  return (
    <div className={style.cardList}>
      {ambassadorData.map((ambassador, index) => (
        <Fragment key={uuidv4()}>
          {Children.map(children, child =>
            isValidElement(child)
              ? cloneElement(child, { ...ambassador })
              : null
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default AmbassadorList;
