import { FC } from 'react';
import { ICheckbox } from '../types/types';

import style from './Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({ checked, label, disabled }) => {
  return (
    <label className={style.label}>
      <input type="checkbox" className={style.checkbox} checked={checked} disabled={disabled} />
      <span></span>
      {label}
    </label>
  );
};

export default Checkbox;
