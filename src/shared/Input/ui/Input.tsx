/* eslint-disable react/jsx-props-no-spreading */
/* Disabled due to usage of react-hook-form */

import { useFormContext } from 'react-hook-form';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import style from './Input.module.scss';

import type { IInput } from '../types/types';

import type { FC } from 'react';

const Input: FC<IInput> = ({ placeholder, type, name }) => {
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

export default Input;
