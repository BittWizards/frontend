import style from './FieldsetContainer.module.scss';

import type { FC } from 'react';
import type { IFieldsetContainer } from '../types/types';


const FieldsetContainer: FC<IFieldsetContainer> = ({ children, title }) => (
  <div className={style.label}>
    {title}
    <fieldset className={style.fieldset}>{children}</fieldset>
  </div>
);

export default FieldsetContainer;
