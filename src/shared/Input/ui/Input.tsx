import type { FC} from 'react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import type { IInput } from '../types/types';

import style from './Input.module.scss';

const Innput: FC<IInput> = ({ placeholder, type, name, isEdit }) => {
  const { register } = useFormContext();

  return (
    <input
      type={type}
      className={`${style.input} ${!isEdit && style.read}`}
      placeholder={placeholder}
      readOnly={!isEdit}
      {...register(name)}
    />
  );
};

export default Innput;
