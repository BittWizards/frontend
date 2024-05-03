import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';

import style from './AmbassadorsInfoCard.module.scss';

import type { TAmbassadorsInfoCardProps } from '../types/types';

import type { FC } from 'react';

const AmbassadorsInfoCard: FC<TAmbassadorsInfoCardProps> = ({ data }) => (
  <div className={style.card}>
    <div className={style.avatarContainer}>
      <Avatar link={data.image} size="m" status={data.achievement} />
    </div>
    <div className={style.container}>
      <p className={style.name}>
        {data.first_name} {data.last_name}
      </p>
      <p className={style.job}>{data.ya_programm}</p>
    </div>
    <StatusIcon status={data.status} />
  </div>
);

export default AmbassadorsInfoCard;
