import { NavLink } from 'react-router-dom';

import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';
import type { TCardProps } from '../types/types';

import style from './PromocodeUserInfoCard.module.scss';

const PromocodeUserInfoCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.activationDate)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <NavLink to={`/ambassadors/${data.id}/promocode`} className={style.navLink}>
      <div className={`${style.cardContainer} `}>
        <div className={style.userInfoWrapper}>
          {data.avatar && <Avatar link={data.avatar} size="m" />}
          <div className={style.userInfo}>
            <p className={`${style.name}`}>
              {data.surname} {data.name}
            </p>
            <p className={style.position}>{data.position}</p>
          </div>
        </div>
        <div className={style.statusWrapper}>
          <div className={style.socialWrapper}>
            <img src={tgIcon} alt="telegram" className={style.socialIcon} />
            <span className={style.tg}>{`@${data.telegram}`}</span>
          </div>
          <StatusIcon data={data} />
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
