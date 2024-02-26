import { Link, NavLink } from 'react-router-dom';
import { TCardProps } from '../types/types';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';

import style from './MerchUserInfoCard.module.scss';

const MerchUserInfoCard: React.FC<TCardProps> = ({ data }) => {
  const formattedDate = new Date(data.activationDate)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  const handleDeliveryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('Доставлено');
  };

  if (!data.statusActive) {
    return null; // Если не активен, не рендерим карточку
  }

  return (
    <NavLink to={`/ambassadors/${data.id}/merch`} className={style.navLink}>
      <div className={style.cardContainer}>
        <div className={style.userInfoWrapper}>
          {data.avatar && <Avatar link={data.avatar} width={48} height={48} />}
          <div className={style.userInfo}>
            <p className={style.name}>
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
          <div className={style.status}>
            {data.statusActive ? <span>Активен</span> : <span>Не активен</span>}
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.promocodeWrapper}>
          <div className={style.promocodeColumn}>
            <span className={style.title}>Трек-номер</span>
            <span className={style.text}>{data.trackingNumber}</span>
          </div>
          <div className={style.promocodeColumn}>
            <span className={style.title}>Дата заявки</span>
            <span className={style.text}>{formattedDate}</span>
          </div>
        </div>
        <div className={style.btnWrapper}>
          <button className={style.btn} onClick={handleDeliveryClick}>
            Доставлено
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default MerchUserInfoCard;
