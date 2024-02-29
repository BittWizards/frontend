import { FC } from 'react';
import style from './QuestionnaireProfileInfo.module.scss';
import { IQuestionnaireProfileInfo } from '../types/types';

import { Avatar } from 'src/entities/Avatar';

const QuestionnaireProfileInfo: FC<IQuestionnaireProfileInfo> = ({ user }) => {
  return (
    <div className={style.profile}>
      <div className={style.photoContainer}>
        <Avatar link={user.avatar} width={120} height={120} />
        <input
          type="button"
          value="+ Загрузить фото"
          className={style.downloadLink}
        />
      </div>
      <div className={style.infoContainer}>
        <p className={style.name}>{user.surname} </p>
        <p className={style.name}>{user.name} </p>
        <p className={style.name}>{user.secondname}</p>
        <fieldset className={style.fieldset}>
          <label className={style.label}>
            <input type="radio" name="gender" className={style.radio} />
            <span></span>М
          </label>
          <label className={style.label}>
            <input type="radio" name="gender" className={style.radio} />
            <span></span>Ж
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default QuestionnaireProfileInfo;
