import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { IInput } from '../types/types';

import style from './Input.module.scss';
import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import { getAmbassadorById } from 'src/shared/api/ambassadors';

const Innput: FC<IInput> = ({ placeholder, type, name }) => {
  const { register } = useFormContext();
  const { isEdit } = useAppSelector(selectQuestionnaire);

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

getAmbassadorById;
