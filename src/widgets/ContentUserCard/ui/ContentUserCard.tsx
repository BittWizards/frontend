import calendarIcon from 'src/shared/icons/calendar.svg';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import type { TCardProps } from '../types/types';

import style from './ContentUserCard.module.scss';

const ContentUserCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.created_at)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <div className={style.cardContainer}>
      {/* {data.avatar && <Avatar link={data.avatar} size="m" />} */}
      <p className={style.name}>{data.ambassador.last_name}</p>
      <p className={style.name}>{data.ambassador.first_name}</p>
      <div className={style.socialWrapper}>
        <img src={tgIcon} alt="telegram" className={style.socialIcon} />
        <span
          className={style.tg}
        >{`@${data.ambassador.tg_acc.split('/')[1]}`}</span>
      </div>
      <div className={style.dateContainer}>
        <img src={calendarIcon} alt="Calendar" className={style.calendarIcon} />
        <span className={style.date}>{formattedDate}</span>
      </div>
      <div className={style.line} />
      <div className={style.btnWrapper}>
        <ButtonSecondaryComponent
          label="Посмотреть"
          width={296}
          height={48}
          onClick={() => console.log(`Посмотреть отчет с id=${data.id}`)}
        />
      </div>
    </div>
  );
};

export default ContentUserCard;
