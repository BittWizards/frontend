import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form'

import { ICheckbox } from '../types/types';
import style from './Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({ checked, label, disabled, isEdit, name }) => {

  const { register, setValue } = useFormContext();
  // const [checked, setChecked] = useState(false)

  useEffect(() => {
    setValue(name, checked)
  }, [])

  return (
    <label className={style.label}>
      <input
        type="checkbox"
        className={`${isEdit ? style.checkbox : style.read}`}
        disabled={!isEdit || disabled}
        {...register(name)}
      />
      <span></span>
      {label}
    </label>
  );
};

export default Checkbox;
