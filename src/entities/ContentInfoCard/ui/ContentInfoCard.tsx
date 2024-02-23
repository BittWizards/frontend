import type { TContentInfoCardProps } from '../types/types';

import style from './ContentInfoCard.module.scss';
import arrowUp from "../../../shared/icons/arrow-up.svg"
import youTube from "../../../shared/icons/youTubeIcon.svg"
import hIcon from "../../../shared/icons/hIcon.svg"
import telegram from "../../../shared/icons/telegramIcon.svg"
import instagram from "../../../shared/icons/instIcon.svg"

const ContentInfoCard: React.FC<TContentInfoCardProps> = ({
  ambassador,
  content,
}) => (
  <li className={style.contentList__element}>
    <div className={style.contentList__left}>
      <div className={style.contentList__person}>
        <h2 className={style.contentList__title}>1 место</h2>
        <h3 className={style.contentList__fio}>{ambassador}</h3>
      </div>
      <div className={style.contentList__rating}>
        <p className={style.contentList__paragraph}>Рейтинг</p>
        <div className={style.contentList__ratingContainer}>
          <img className={style.contentList__arrow} src={arrowUp} alt='Стрелка вверх' />
          <p className={style.contentList__raitingcount}>+2 позиции</p>
        </div>
      </div>
    </div>
    <div className={style.contentList__right}>
      <h2 className={style.contentList__titleContent}>Опубликовано контента</h2>
      <ul className={style.contentList__icons}>
        <li className={style.contentList__icon}>
          <img src={youTube} className={style.contentList__imageIcon} alt='YouTube' />
          <span className={style.contentList__count}>{content.youTube}</span>
        </li>
        <li className={style.contentList__icon}>
          <img src={hIcon} className={style.contentList__imageIcon} alt='HIcon' />
          <span className={style.contentList__count}>{content.hIcon}</span>
        </li>
        <li className={style.contentList__icon}>
          <img src={telegram} className={style.contentList__imageIcon} alt='Telegram' />
          <span className={style.contentList__count}>{content.telegram}</span>
        </li>
        <li className={style.contentList__icon}>
          <img src={instagram} className={style.contentList__imageIcon} alt='Instagram' />
          <span className={style.contentList__count}>{content.instagram}</span>
        </li>
      </ul>
    </div>
  </li>
);

export default ContentInfoCard;
