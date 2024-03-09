import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { IQuestionnaireProfileInfo } from '../types/types';

import style from './QuestionnaireProfileInfo.module.scss';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import { Avatar } from 'src/entities/Avatar';
import { Input } from 'src/shared/Input';



const QuestionnaireProfileInfo: FC<IQuestionnaireProfileInfo> = ({ user }) => {
  const { register } = useFormContext();

  const { isEdit } = useAppSelector(selectQuestionnaire);

  return (
    <div className={style.profile}>
      <div className={style.photoContainer}>
        {user?.avatar ? (
          <Avatar link={user.avatar} size="l" />
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
            <Input type="text" name="surname" placeholder="Фамилия" />
            <Input type="text" name="name" placeholder="Имя" />
            <Input type="text" name="secondname" placeholder="Отчество" />
          </div>
        ) : (
          <div className={style.info}>
            <p className={style.name}>{user?.surname} </p>
            <p className={style.name}>{user?.name} </p>
            <p className={style.name}>{user?.secondname}</p>
          </div>
        )}
        <fieldset className={style.fieldset}>
          <label className={style.label}>
            <input
              type="radio"
              value="male"
              disabled={!isEdit}
              className={style.radio}
              {...register('gender')}
            />
            <span />М
          </label>
          <label className={style.label}>
            <input
              type="radio"
              value="female"
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
