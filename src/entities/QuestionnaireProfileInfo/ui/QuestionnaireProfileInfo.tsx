import style from './QuestionnaireProfileInfo.module.scss';

import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png'

const QuestionnaireProfileInfo = () => {
  return (
    <div className={style.profile}>
      <div className={style.photoContainer}>
      <Avatar link={avatar} width={120} height={120} />
      <input type="button" value='+ Загрузить фото' className={style.downloadLink} />
      </div>
      <div className={style.infoContainer}>
        <p className={style.name}>Пономарева </p>
        <p className={style.name}>Ангелина </p>
        <p className={style.name}>Сергеевна</p>
        <fieldset className={style.fieldset}>
          <label className={style.label}>
          <input type="radio" name='gender' className={style.radio} />
          <span></span>
          М
          </label>
          <label className={style.label}>
          <input type="radio" name='gender' className={style.radio} />
          <span></span>
          Ж
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default QuestionnaireProfileInfo;
