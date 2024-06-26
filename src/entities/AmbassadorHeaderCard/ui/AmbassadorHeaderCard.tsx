
import locationIcon from 'src/shared/icons/location-marker.svg';
import professionIcon from 'src/shared/icons/academic-cap.svg';
import phoneIcon from 'src/shared/icons/phone_white.svg';
import tgIcon from 'src/shared/icons/telegramIcon.svg';
import mailIcon from 'src/shared/icons/mail-white.svg';

import { InfoLogoText } from 'src/shared/InfoLogoText';
import { InfoLogoLink } from 'src/shared/InfoLogoLink';
import { StatusIcon } from 'src/shared/StatusIcon';
import { Avatar } from 'src/entities/Avatar';

import style from './AmbassadorHeaderCard.module.scss';

import type { TAmbassadorHeaderCardProps } from '../types/types';

import type { FC } from 'react';

const AmbassadorHeaderCard: FC<TAmbassadorHeaderCardProps> = ({ data }) => (
  <div className={style.ambassadorHeaderCard}>
    <div className={style.infoContainer}>
      <div className={style.column}>
        <Avatar link={data.image} size="l" status={data.achievement} />
        <div className={style.nameStatus}>
          <p className={style.nameText}>{data.last_name || ''}</p>
          <p className={style.nameText}>{data.first_name || ''}</p>
          <p className={style.nameText}>{data.middle_name || ''}</p>
          <StatusIcon status={data.status} />
        </div>
      </div>
      <div className={style.column}>
        <div className={style.contactInfo}>
          <InfoLogoLink
            icon={tgIcon}
            text={`@${data.tg_acc?.toLowerCase()}`}
            linkType="website"
          />
          <InfoLogoLink icon={mailIcon} text={data.email} linkType="email" />
          <InfoLogoLink icon={phoneIcon} text={data.phone} linkType="tel" />
        </div>
      </div>
    </div>
    <div className={style.additionalInfo}>
      <InfoLogoText icon={professionIcon} text={data.ya_programm} />
      <InfoLogoText icon={locationIcon} text={data.city} />
    </div>
  </div>
);

export default AmbassadorHeaderCard;
