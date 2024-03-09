import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import type { ITextarea } from '../types/types';

import style from './Textarea.module.scss';
import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

const Textarea: FC<ITextarea> = ({
  width,
  height,
  placeholder,
  name
}) => {
  const { register } = useFormContext();
  const {isEdit} = useAppSelector(selectQuestionnaire)
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
