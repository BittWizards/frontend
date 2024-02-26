import { FC } from 'react';
import type { TAmbassadorsInfoCardProps } from '../types/types';
import { Avatar } from 'src/entities/Avatar';

import style from './AmbassadorsInfoCard.module.scss';

const AmbassadorsInfoCard: FC<TAmbassadorsInfoCardProps> = ({
  avatar,
  name,
  surname,
  position,
  statusActive,
  achievment,
}) => {
  const statusStyle =
    (statusActive === 'активен' && style.active) ||
    (statusActive === 'уточняется' && style.qualify) ||
    (statusActive === 'на паузе' && style.pause);

  return (
    <div className={style.card}>
      <div className={style.avatarContainer}>
      <Avatar link={avatar} width={48} height={48} />
      <img src={achievment} className={style.achievment} alt="Achievment" />
      </div>
      <div className={style.container}>
        <p className={style.name}>
          {name} {surname}
        </p>
        <p className={style.job}>{position}</p>
      </div>
      <p className={`${style.status} ${statusStyle}`}>{statusActive}</p>
    </div>
  );
};

export default AmbassadorsInfoCard;
