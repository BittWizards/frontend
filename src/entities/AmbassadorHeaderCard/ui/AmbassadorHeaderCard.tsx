import { FC } from 'react';
import { TAmbassadorHeaderCardProps } from '../types/types';

import locationIcon from 'src/shared/icons/location-marker.svg';
import professionIcon from 'src/shared/icons/academic-cap.svg';
import phoneIcon from 'src/shared/icons/phone.svg';
import tgIcon from 'src/shared/icons/telegramIcon.svg';
import mailIcon from 'src/shared/icons/mail-white.svg';

import style from './AmbassadorHeaderCard.module.scss';
import { InfoLogoText } from '../../../shared/InfoLogoText';
import { InfoLogoLink } from '../../../shared/InfoLogoLink';

const AmbassadorHeaderCard: FC<TAmbassadorHeaderCardProps> = ({
  title,
  data,
}) => {
  return (
    <div className={style.ambassadorHeaderCard}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.infoContainer}>
        <div className={style.column}>
          <img src={data.avatar} className={style.avatar} />
          <div className={style.nameStatus}>
            <p className={style.nameText}>{data.surname || ''}</p>
            <p className={style.nameText}>{data.name || ''}</p>
            <p className={style.nameText}>{data.secondname || ''}</p>
            <p className={style.status}>{data.userStatus}</p>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.contactInfo}>
            <InfoLogoLink
              icon={tgIcon}
              text={data.telegram}
              linkType="website"
            />
            <InfoLogoLink icon={mailIcon} text={data.email} linkType="email" />
            <InfoLogoLink icon={phoneIcon} text={data.phone} linkType="tel" />
          </div>
        </div>
      </div>
      <div className={style.additionalInfo}>
        <InfoLogoText icon={professionIcon} text={data.position} />
        <InfoLogoText icon={locationIcon} text={data.city} />
      </div>
    </div>
  );
};

export default AmbassadorHeaderCard;