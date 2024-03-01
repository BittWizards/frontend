import { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import style from './QuestionnaireProfileInfo.module.scss';

import { IQuestionnaireProfileInfo } from '../types/types';
import { Avatar } from 'src/entities/Avatar';
import { Input } from 'src/shared/Input';

const QuestionnaireProfileInfo: FC<IQuestionnaireProfileInfo> = ({
  user,
  isEdit,
}) => {
  const { register } = useFormContext();

  return (
    <div className={style.profile}>
      <div className={style.photoContainer}>
        {user?.avatar ? <Avatar link={user.avatar} size="l" /> : <Avatar size='l' />}
        <input
          type="button"
          value="+ Загрузить фото"
          className={style.downloadLink}
        />
      </div>
      <div className={style.infoContainer}>
        {isEdit ? (
          <div className={style.info}>
            <Input
              type="text"
              isEdit={isEdit}
              {...register('surname')}
              placeholder="Фамилия"
            />
            <Input
              type="text"
              isEdit={isEdit}
              {...register('name')}
              placeholder="Имя"
            />
            <Input
              type="text"
              isEdit={isEdit}
              {...register('secondname')}
              placeholder="Отчество"
            />
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
            <span></span>М
          </label>
          <label className={style.label}>
            <input
              type="radio"
              value="female"
              disabled={!isEdit}
              className={style.radio}
              {...register('gender')}
            />
            <span></span>Ж
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default QuestionnaireProfileInfo;
