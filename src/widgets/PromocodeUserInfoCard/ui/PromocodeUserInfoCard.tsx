import { NavLink } from 'react-router-dom';

import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';

import style from './PromocodeUserInfoCard.module.scss';

import type { TCardProps } from '../types/types';

import type { FC } from 'react';

const PromocodeUserInfoCard: FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.created_at)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <NavLink
      to={`/ambassadors/${data.ambassador.id}/promocode`}
      className={style.navLink}
    >
      <div className={`${style.cardContainer} `}>
        <div className={style.userInfoWrapper}>
          {data.ambassador.image && (
            <Avatar
              link={data.ambassador.image}
              size="m"
              status={data.ambassador.achievement}
            />
          )}
          <div className={style.userInfo}>
            <p className={`${style.name}`}>
              {data.ambassador.last_name} {data.ambassador.first_name}
            </p>
            <p className={style.position}>{data.ambassador.ya_programm}</p>
          </div>
        </div>
        <div className={style.statusWrapper}>
          <div className={style.socialWrapper}>
            <img src={tgIcon} alt="telegram" className={style.socialIcon} />
            <span
              className={style.tg}
            >{`@${data.ambassador.tg_acc.toLocaleLowerCase()}`}</span>
          </div>
          <StatusIcon status={data.ambassador.status} />
        </div>
        <div className={style.line} />
        <div className={style.promocodeWrapper}>
          <div className={style.promocodeColumn}>
            <span className={style.title}>Промокод</span>
            <span className={style.text}>{data.promocode}</span>
          </div>
          <div className={style.promocodeColumn}>
            <span className={style.title}>Активация</span>
            <span className={style.text}>{formattedDate}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default PromocodeUserInfoCard;
