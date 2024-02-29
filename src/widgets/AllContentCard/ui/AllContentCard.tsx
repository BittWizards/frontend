import { v4 as uuidv4 } from 'uuid';

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

const AllContentCard: React.FC<TAllContentCardProps> = ({ data }) => {
  const formattedDate = new Date(data.date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  if (!data.statusActive) {
    return null; // Если не активен, не рендерим карточку
  }

  const getPlatformIcon = (platform: string): JSX.Element => {
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

  return (
    <div className={style.allContentCard}>
      <div className={style.allContentCard__left}>
        {/* левая */}
        <div className={style.allContentCard__ambassador}>
          <img
            src={data.avatar}
            className={style.allContentCard__avatar}
            alt="Аватар"
          />
          <div className={style.allContentCard__person}>
            <h3 className={style.allContentCard__fio}>
              {data.surname} {data.name}
            </h3>
            <p className={style.allContentCard__telegramAcc}>
              @{data.telegram}
            </p>
          </div>
        </div>

        <div className={style.allContentCard__statusGroup}>
          <div className={style.allContentCard__status}>
            {data.statusActive ? <span>Активен</span> : <span>Не активен</span>}
          </div>
          <div className={style.allContentCard__reitingGroup}>
            <img
              src={arrowUp}
              alt="Стрелка"
              className={style.allContentCard__arrow}
            />
            <p className={style.allContentCard__textReiting}>Рейтинг</p>
            <span className={style.allContentCard__countReiting}>36</span>
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
          {data.reviews}
        </span>
      </div>

      <div className={style.allContentCard__right}>
        {/* правая */}
        <div className={style.allContentCard__contentContainer}>
          <h3 className={style.allContentCard__contentTitle}>
            Опубликовано контента
          </h3>
          <div className={style.allContentCard__contentGroup}>
            {data.content.map((row, index) => (
              <div key={uuidv4()} className={style.allContentCard__social}>
                <div className={style.allContentCard__icon}>
                  {getPlatformIcon(row.platform)}
                </div>
                <span className={style.allContentCard__iconCount}>
                  {row.fileCounter}
                </span>
              </div>
            ))}
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
  );
};

export default AllContentCard;
