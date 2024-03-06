import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Avatar } from 'src/entities/Avatar';
import { StatusIcon } from 'src/shared/StatusIcon';

import calendarIcon from 'src/shared/icons/calendar.svg';
import arrowUp from 'src/shared/icons/arrow-up.svg';
import chat from 'src/shared/icons/chat.svg';
import hIcon from 'src/shared/icons/habr.svg';
import vc from 'src/shared/icons/vc.svg';
import youTube from 'src/shared/icons/youTubeIcon.svg';
import telegram from 'src/shared/icons/telegramIcon.svg';
import inIcon from 'src/shared/icons/inIcon.svg';
import instagram from 'src/shared/icons/instIcon.svg';
import questionIcon from 'src/shared/icons/questionIcon.svg';

import type { TAllContentCardProps } from '../types/types';

import style from './AllContentCard.module.scss';

const AllContentCard: FC<TAllContentCardProps> = ({ data }) => {
  const formattedDate = new Date(data.last_date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  const getPlatformIcon = (platform: string): JSX.Element => {
    /* eslint-disable */
    switch (platform) {
      case 'habr':
        return <img src={hIcon} alt="Habr" />;
      case 'vc':
        return <img src={vc} alt="VC" />;
      case 'youtube':
        return <img src={youTube} alt="YouTube" />;
      case 'telegram':
        return <img src={telegram} alt="Telegram" />;
      case 'linkedin':
        return <img src={inIcon} alt="LinkedIn" />;
      case 'instagram':
        return <img src={instagram} alt="Instagram" />;
      default:
        return <img src={questionIcon} alt="Other" />;
    }
  };
  /* eslint-enable */
  return (
    <NavLink to={`/ambassadors/${data.id}/content`} className={style.navLink}>
      <div className={style.allContentCard}>
        <div className={style.allContentCard__left}>
          {/* левая */}
          <div className={style.allContentCard__ambassador}>
            <Avatar link={data.image} size="s" />
            <div className={style.allContentCard__person}>
              <h3 className={style.allContentCard__fio}>
                {data.last_name} {data.first_name}
              </h3>
              <p className={style.allContentCard__telegramAcc}>
                @{data.tg_acc}
              </p>
            </div>
          </div>

          <div className={style.allContentCard__statusGroup}>
            {/* <StatusIcon status={data.} /> */}
            <div className={style.allContentCard__reitingGroup}>
              <img
                src={arrowUp}
                alt="Стрелка"
                className={style.allContentCard__arrow}
              />
              <p className={style.allContentCard__textReiting}>Рейтинг</p>
              <span className={style.allContentCard__countReiting}>
                {data.rating}
              </span>
            </div>
          </div>
        </div>

        <div className={style.allContentCard__middle}>
          {/* середина */}
          <h3 className={style.allContentCard__reviews}>Отзывы</h3>
          <img
            src={chat}
            className={style.allContentCard__reviewsImg}
            alt="Отзывы"
          />
          <span className={style.allContentCard__reviewsCount}>
            {data.review_count}
          </span>
        </div>

        <div className={style.allContentCard__right}>
          {/* правая */}
          <div className={style.allContentCard__contentContainer}>
            <h3 className={style.allContentCard__contentTitle}>
              Опубликовано контента
            </h3>
            <div className={style.allContentCard__contentGroup}>
              {/* {data.content.map((row, index) => (
                <div key={uuidv4()} className={style.allContentCard__social}>
                  <div className={style.allContentCard__icon}>
                    {getPlatformIcon(row.platform)}
                  </div>
                  <span className={style.allContentCard__iconCount}>
                    {row.fileCounter}
                  </span>
                </div>
              ))} */}
            </div>
          </div>

          <div className={style.allContentCard__dataGroup}>
            <h3 className={style.allContentCard__dataTitle}>Дата обновления</h3>
            <div className={style.allContentCard__data}>
              <img
                src={calendarIcon}
                className={style.allContentCard__calendar}
                alt="Календарь"
              />
              <span className={style.allContentCard__dataNumber}>
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default AllContentCard;
