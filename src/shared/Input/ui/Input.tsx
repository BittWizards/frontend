import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import type { IInput } from '../types/types';

import style from './Input.module.scss';

const Innput: FC<IInput> = ({ placeholder, type, name }) => {
  const { register } = useFormContext();
  const { isEdit } = useAppSelector(selectQuestionnaire);

  return (
    <input
      type={type}
      className={`${style.input} ${!isEdit && style.read}`}
      placeholder={placeholder}
      readOnly={!isEdit}
      {...register(name, { required: true })}
    />
  );
};

export default Innput;
