import type { FC } from 'react';
import calendarIcon from 'src/shared/icons/calendar.svg';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { useNavigate, useParams } from 'react-router-dom';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import type { TCardProps } from '../types/types';

import style from './ContentUserCard.module.scss';

const ContentUserCard: FC<TCardProps> = ({ data }) => {
  const navigate = useNavigate();
  const formattedDate = new Date(data.date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  console.log('data', data);

  const handleRowClick = () => {
    navigate(`/ambassadors/${data.id}/detail/${data.id}/report`);
  }


  return (
    <div className={style.cardContainer}>
      {data.avatar && <Avatar link={data.avatar} size="m" />}
      <p className={style.name}>{data.surname}</p>
      <p className={style.name}>{data.name}</p>
      <div className={style.socialWrapper}>
        <img src={tgIcon} alt="telegram" className={style.socialIcon} />
        <span className={style.tg}>{`@${data.telegram.split('/')[1]}`}</span>
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
          onClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default ContentUserCard;
