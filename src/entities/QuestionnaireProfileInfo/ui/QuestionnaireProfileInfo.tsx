import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import type { IQuestionnaireProfileInfo } from '../types/types';

import style from './QuestionnaireProfileInfo.module.scss';

import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import { Avatar } from 'src/entities/Avatar';
import { Input } from 'src/shared/Input';

const QuestionnaireProfileInfo: FC<IQuestionnaireProfileInfo> = ({
  user,
  showImage = true,
  showGender = true,
  // эти префиксы для подсасывания из моего селекта нужны
  prefix,
}) => {
  const { register } = useFormContext();

  const { isEdit } = useAppSelector(selectQuestionnaire);

  return (
    <div className={style.profile}>
      {showImage && (
        <div className={style.photoContainer}>
          {user?.image ? (
            <Avatar link={user.image} size="l" />
          ) : (
            <Avatar size="l" />
          )}
          <input
            type="button"
            value="+ Загрузить фото"
            className={style.downloadLink}
          />
        </div>
      )}
      <div className={style.infoContainer}>
        {isEdit ? (
          <div className={style.info}>
            <Input
              type="text"
              placeholder="Фамилия"
              {...register(prefix ? `${prefix}.last_name` : 'last_name')}
            />
            <Input
              type="text"
              placeholder="Имя"
              {...register(prefix ? `${prefix}.first_name` : 'first_name')}
            />
            <Input
              type="text"
              placeholder="Отчество"
              {...register(prefix ? `${prefix}.middle_name` : 'middle_name')}
            />
          </div>
        ) : (
          <div className={style.info}>
            <p className={style.name}>{user?.last_name} </p>
            <p className={style.name}>{user?.first_name} </p>
            <p className={style.name}>{user?.middle_name}</p>
          </div>
        )}
        {showGender && (
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
        )}
      </div>
    </div>
  );
};

export default QuestionnaireProfileInfo;
