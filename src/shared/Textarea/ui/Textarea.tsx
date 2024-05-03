/* eslint-disable react/jsx-props-no-spreading */
/* Disabled due to usage of react-hook-form */

import { useFormContext } from 'react-hook-form';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import style from './Textarea.module.scss';

import type { ITextarea } from '../types/types';

import type { FC } from 'react';

const Textarea: FC<ITextarea> = ({ width, height, placeholder, name }) => {
  const { register } = useFormContext();
  const { isEdit } = useAppSelector(selectQuestionnaire);
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
