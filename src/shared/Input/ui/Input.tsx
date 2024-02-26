import { FC } from 'react';

import style from './Input.module.scss';
import { IInput } from './types/types';

const Input: FC<IInput> = ({ value, placeholder, type, disabled }) => {
  return (
    <input
      type={type}
      className={style.input}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
