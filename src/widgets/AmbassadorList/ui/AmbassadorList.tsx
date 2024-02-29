import type { FC} from 'react';
import { Fragment, Children, isValidElement, cloneElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { TAmbassadorList } from '../types/types';

import style from './AmbassadorList.module.scss';

const AmbassadorList: FC<TAmbassadorList> = ({ ambassadorData, children }) => (
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

export default AmbassadorList;
