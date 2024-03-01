import type { FC } from 'react';

import locationIcon from 'src/shared/icons/location-marker.svg';
import professionIcon from 'src/shared/icons/academic-cap.svg';
import phoneIcon from 'src/shared/icons/phone.svg';
import tgIcon from 'src/shared/icons/telegramIcon.svg';
import mailIcon from 'src/shared/icons/mail.svg';

import { InfoLogoText } from 'src/shared/InfoLogoText';
import { InfoLogoLink } from 'src/shared/InfoLogoLink';
import { StatusIcon } from 'src/shared/StatusIcon';
import { Avatar } from 'src/entities/Avatar';

import type { TAmbassadorHeaderCardProps } from '../types/types';

import style from './AmbassadorHeaderCard.module.scss';

const AmbassadorHeaderCard: FC<TAmbassadorHeaderCardProps> = ({ data }) => (
  <div className={style.ambassadorHeaderCard}>
    <div className={style.infoContainer}>
      <div className={style.column}>
        <Avatar link={data.avatar} size="l" />
        <div className={style.nameStatus}>
          <p className={style.nameText}>{data.surname || ''}</p>
          <p className={style.nameText}>{data.name || ''}</p>
          <p className={style.nameText}>{data.secondname || ''}</p>
          <StatusIcon data={data} />
        </div>
      </div>
      <div className={style.column}>
        <div className={style.contactInfo}>
          <InfoLogoLink icon={tgIcon} text={data.telegram} linkType="website" />
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

export default AmbassadorHeaderCard;
