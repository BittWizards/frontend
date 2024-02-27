import { Link, NavLink } from 'react-router-dom';

import { TCardProps } from '../types/types';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';

import style from './PromocodeUserInfoCard.module.scss';

const PromocodeUserInfoCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.activationDate)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <NavLink to={`/ambassadors/${data.id}/promocode`} className={style.navLink}>
      <div className={`${style.cardContainer} `}>
        <div className={style.userInfoWrapper}>
          {data.avatar && <Avatar link={data.avatar} width={48} height={48} />}
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
            <Link
              className={style.tgLink}
              to={`https://t.me/${data.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.telegram}
            </Link>
          </div>
          <StatusIcon data={data} />
        </div>
        <div className={style.line}></div>
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
