import { FC } from 'react';
import { IFieldsetContainer } from '../types/types';

import style from './FieldsetContainer.module.scss';

const FieldsetContainer: FC<IFieldsetContainer> = ({ children, title }) => {
  return (
    <label className={style.label}>
      {title}
      <fieldset className={style.fieldset}>{children}</fieldset>
    </label>
  );
};

export default FieldsetContainer;
