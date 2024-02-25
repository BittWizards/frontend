import { Link, NavLink } from 'react-router-dom';

import { TCardProps } from '../types/types';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import style from './PromocodeUserInfoCard.module.scss';

const PromocodeUserInfoCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.activationDate)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  return (
    <NavLink to={`/ambassadors/${data.id}`} className={style.navLink}>
      <div
        className={`${style.cardContainer} ${data.statusActive ? '' : style.cardContainerInactive}`}
      >
        <div className={style.userInfoWrapper}>
          {data.avatar && (
            <img src={data.avatar} className={style.avatar} alt="Avatar" />
          )}
          <div className={style.userInfo}>
            <p
              className={`${style.name} ${data.statusActive ? '' : style.nameInactive}`}
            >
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
          <div
            className={`${style.status} ${data.statusActive ? style.statusActive : style.statusInactive}`}
          >
            {data.statusActive ? <span>Активен</span> : <span>Не активен</span>}
          </div>
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