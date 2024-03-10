import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import { Avatar } from 'src/entities/Avatar';
import { Input } from 'src/shared/Input';
import style from './QuestionnaireProfileInfo.module.scss';
import type { IQuestionnaireProfileInfo } from '../types/types';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';

const QuestionnaireProfileInfo: FC<IQuestionnaireProfileInfo> = () => {
  const { register } = useFormContext();

  const { isEdit } = useAppSelector(selectQuestionnaire);
  const { ambassador } = useAppSelector(selectAmbassadors);

  return (
    <div className={style.profile}>
      <div className={style.photoContainer}>
        {ambassador.image ? (
          <Avatar link={ambassador.image} size="l" />
        ) : (
          <Avatar size="l" />
        )}
        <input
          type="button"
          value="+ Загрузить фото"
          className={style.downloadLink}
        />
      </div>
      <div className={style.infoContainer}>
        {isEdit ? (
          <div className={style.info}>
            <Input type="text" name="middle_name" placeholder="Фамилия" />
            <Input type="text" name="first_name" placeholder="Имя" />
            <Input type="text" name="last_name" placeholder="Отчество" />
          </div>
        ) : (
          <div className={style.info}>
            <p className={style.name}>{ambassador.last_name} </p>
            <p className={style.name}>{ambassador.first_name} </p>
            <p className={style.name}>{ambassador.middle_name}</p>
          </div>
        )}
        <fieldset className={style.fieldset}>
          <label className={style.label}>
            <input
              type="radio"
              value="Male"
              disabled={!isEdit}
              className={style.radio}
              {...register('gender')}
            />
            <span />М
          </label>
          <label className={style.label}>
            <input
              type="radio"
              value="Female"
              disabled={!isEdit}
              className={style.radio}
              {...register('gender')}
            />
            <span />Ж
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default QuestionnaireProfileInfo;
