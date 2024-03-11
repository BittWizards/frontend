import type { FC } from 'react';
import calendarIcon from 'src/shared/icons/calendar.svg';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { useNavigate } from 'react-router-dom';

import type { TCardProps } from '../types/types';

import style from './ContentUserCard.module.scss';

const ContentUserCard: FC<TCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const formattedDate = new Date(data.created_at)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  const handleClick = () => {
    navigate(`/ambassadors/${data.ambassador.id}/detail/${data.id}/report`);
  };

  return (
    <div className={style.cardContainer}>
      {data.ambassador.image && (
        <Avatar link={data.ambassador.image} size="m" />
      )}
      <div className={style.nameGroup}>
        <p className={style.name}>{data.ambassador.last_name}</p>
        <p className={style.name}>{data.ambassador.first_name}</p>
      </div>
      <div className={style.socialWrapper}>
        <img src={tgIcon} alt="telegram" className={style.socialIcon} />
        <span
          className={style.tg}
        >{`@${data.ambassador.tg_acc.toLowerCase()}`}</span>
      </div>
      <div className={style.dateContainer}>
        <img src={calendarIcon} alt="Calendar" className={style.calendarIcon} />
        <span className={style.date}>{formattedDate}</span>
      </div>
      <div className={style.line} />
      <div className={style.btnWrapper}>
        <ButtonSecondaryComponent
          label="Просмотреть"
          width={296}
          height={48}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ContentUserCard;
