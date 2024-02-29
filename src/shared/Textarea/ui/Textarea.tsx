import { FC } from 'react';
import { ITextarea } from '../types/types';
import { useFormContext } from 'react-hook-form';

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
      style={{ width: width, height: height }}
      className={`${style.textarea} ${!isEdit && style.read}`}
      readOnly={!isEdit}
      {...register(name)}
    />
  );
};

export default Textarea;
