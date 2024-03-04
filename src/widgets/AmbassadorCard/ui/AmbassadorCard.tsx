import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'src/entities/Avatar';
import { formatDateString } from 'src/utils/constants/formatDate';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary/ui/ButtonSecondary';

import calendarIcon from 'src/shared/icons/calendar.svg';
import type { TAmbassadorCardProps } from '../types/types';

import style from './AmbassadorCard.module.scss';

const AmbassadorCard: FC<TAmbassadorCardProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={style.cardContainer}>
      {data.avatar && <Avatar link={data.avatar} />}
      <span className={style.name}>{data.surname}</span>
      <span className={style.name}>
        {data.name} {data.secondname}
      </span>
      <span className={style.position}>{data.position}</span>
      <div className={style.cardBottomWrapper}>
        <div className={style.dateContainer}>
          <img
            src={calendarIcon}
            alt="Calendar"
            style={{ marginRight: '5px' }}
          />
          <span className={style.date}>{formatDateString(data.date)}</span>
        </div>
        <div className={style.line} />
        <ButtonSecondaryComponent
          label="Посмотреть"
          width={296}
          height={48}
          onClick={() =>
            navigate(`candidate/${data.id}/detail`, {
              replace: true,
            })
          }
        />
      </div>
    </div>
  );
};

export default AmbassadorCard;
