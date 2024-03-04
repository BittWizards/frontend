import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import type { ITextarea } from '../types/types';

import style from './Textarea.module.scss';

const Textarea: FC<ITextarea> = ({
  width,
  height,
  placeholder,
  isEdit,
  name
}) => {
  const { register } = useFormContext();
  return (
    <textarea
      placeholder={placeholder}
      style={{ width, height }}
      className={`${style.textarea} ${!isEdit && style.read}`}
      readOnly={!isEdit}
      {...register(name)}
    />
  );
};

export default Textarea;
