import { Link } from 'react-router-dom';

import { TCardProps } from '../types/types';
import calendarIcon from 'src/shared/icons/calendar.svg';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import style from './ContentUserCard.module.scss';

const ContentUserCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.date).toLocaleDateString('en-GB');

  return (
    <div className={style.cardContainer}>
      {data.avatar && (
        <img src={data.avatar} className={style.avatar} alt="Avatar" />
      )}
      <p className={style.name}>{data.surname}</p>
      <p className={style.name}>
        {data.name} {data.secondname}
      </p>
      <div className={style.socialWrapper}>
        <img src={tgIcon} alt="telegram" className={style.socialIcon} />
        <Link
          className={style.tgLink}
          to={`https://t.me/${data.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.telegram}
        </Link>
      </div>
      <div className={style.dateContainer}>
        <img src={calendarIcon} alt="Calendar" className={style.calendarIcon} />
        <span className={style.date}>{formattedDate}</span>
      </div>
      <hr className={style.line} />
      <div className={style.btnWrapper}>
        <button
          className={style.btn}
          onClick={() => console.log(`Посмотреть отчет с id=${data.id}`)}
        >
          Посмотреть
        </button>
      </div>
    </div>
  );
};

export default ContentUserCard;

//TODO кнопка MUI Посмотреть
