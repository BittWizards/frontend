import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { ICheckbox } from '../types/types';
import style from './Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({ label, disabled, isEdit, name }) => {
  const { register } = useFormContext();

  return (
    <label className={style.label} htmlFor="inputId">
      <input
        id="inputId"
        type="checkbox"
        className={`${isEdit ? style.checkbox : style.read}`}
        disabled={!isEdit || disabled}
        {...register(name)}
      />
      <span />
      {label}
    </label>
  );
};

export default Checkbox;
