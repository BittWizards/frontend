import type { FC } from 'react';
import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';
import type { TAmbassadorsInfoCardProps } from '../types/types';

import style from './AmbassadorsInfoCard.module.scss';

const AmbassadorsInfoCard: FC<TAmbassadorsInfoCardProps> = ({ data }) => (
  <div className={style.card}>
    <div className={style.avatarContainer}>
      <Avatar link={data.image} size="m" status={data.status} />
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
