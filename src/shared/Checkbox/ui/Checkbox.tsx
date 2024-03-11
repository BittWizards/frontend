import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import type { ICheckbox } from '../types/types';
import style from './Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({ label, disabled, name }) => {
  const { register } = useFormContext();
  const {isEdit} = useAppSelector(selectQuestionnaire)

  return (
    <label className={style.label} htmlFor={name}>
      <input
        id={name}
        type="checkbox"
        className={`${isEdit ? style.checkbox : style.read}`}
        disabled={!isEdit || disabled}
        {...register(name)}
      />
      <span />
      {label}
    </label>
  );
};

export default Checkbox;
