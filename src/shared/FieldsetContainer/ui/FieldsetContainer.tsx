import type { FC } from 'react';
import type { IFieldsetContainer } from '../types/types';

import style from './FieldsetContainer.module.scss';

const FieldsetContainer: FC<IFieldsetContainer> = ({ children, title }) => (
  <label className={style.label}>
    {title}
    <fieldset className={style.fieldset}>{children}</fieldset>
  </label>
);

export default FieldsetContainer;

// const FieldsetContainer: FC<IFieldsetContainer> = ({ children, title, controlId }) => (
//   <label className={style.label} htmlFor={controlId}>
//     {title}
//     <fieldset className={style.fieldset}>{children}</fieldset>
//   </label>
// );

// export default FieldsetContainer;

// TODO убрать ошибку линтера htmlFor={controlId}
