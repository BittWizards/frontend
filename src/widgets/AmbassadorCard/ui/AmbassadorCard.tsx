import calendarIcon from 'src/shared/icons/calendar.svg';
import type { TAmbassadorCardProps } from '../types/types';


import style from './AmbassadorCard.module.scss';

const AmbassadorCard: React.FC<TAmbassadorCardProps> = ({ data }) => {
  const formattedDate = new Date(data.date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <div className={style.cardContainer}>
      {data.avatar && (
        <img src={data.avatar} className={style.avatar} alt="Avatar" />
      )}
      <p className={style.name}>{data.surname}</p>
      <p className={style.name}>
        {data.name} {data.secondname}
      </p>
      <p className={style.position}>{data.position}</p>
      <div className={style.dateContainer}>
        <img src={calendarIcon} alt="Calendar" style={{ marginRight: '5px' }} />
        <span className={style.date}>{formattedDate}</span>
      </div>
      <div className={style.line}></div>
      <div className={style.btnWrapper}>
        <button
          className={style.btn}
          onClick={() => console.log(`Посмотреть карточку с id=${data.id}`)}
        >
          Посмотреть
        </button>
      </div>
    </div>
  );
};

export default AmbassadorCard;

//TODO кнопка MUI Посмотреть
