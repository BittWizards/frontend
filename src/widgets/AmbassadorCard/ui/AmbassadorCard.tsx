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

  if (data.status === 'Clarify') {
    return (
      <div className={style.cardContainer}>
        {data.image && <Avatar link={data.image} />}
        <span className={style.name}>{data.last_name}</span>
        <span className={style.name}>
          {data.first_name} {data.last_name}
        </span>
        <span className={style.position}>{data.ya_programm.title}</span>
        <div className={style.cardBottomWrapper}>
          <div className={style.dateContainer}>
            <img
              src={calendarIcon}
              alt="Calendar"
              style={{ marginRight: '5px' }}
            />
            <span className={style.date}>{formatDateString(data.created)}</span>
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
  }

  return null;
};

export default AmbassadorCard;
