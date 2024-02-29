import { FC } from 'react';
import { IInput } from '../types/types';

// import { Input } from '@mui/material';
import { TextField } from '@mui/material';

import style from './Input.module.scss';

const Innput: FC<IInput> = ({ value, placeholder, type, disabled }) => {
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

export default Innput;
