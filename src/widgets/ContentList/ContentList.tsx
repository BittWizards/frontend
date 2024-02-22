import type * as React from 'react'
import style from "./ContentList.module.scss"
import arrowUp from "../../shared/icons/arrow-up.svg"
import arrowDown from "../../shared/icons/arrow-down.svg"
import youTube from "../../shared/icons/youTubeIcon.svg"
import hIcon from "../../shared/icons/hIcon.svg"
import telegram from "../../shared/icons/telegramIcon.svg"
import instagram from "../../shared/icons/instIcon.svg"

function ContentList() {
  return (
    <ul className={style.contentList}>
      <li className={style.contentList__element}>
        <div className={style.contentList__left}>
          <div className={style.contentList__person}>
            <h2 className={style.contentList__title}>1 место</h2>
            <h3 className={style.contentList__fio}>Ярослав Антипин</h3>
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
              <span className={style.contentList__count}>5</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={hIcon} className={style.contentList__imageIcon} alt='HIcon' />
              <span className={style.contentList__count}>6</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={telegram} className={style.contentList__imageIcon} alt='Telegram' />
              <span className={style.contentList__count}>7</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={instagram} className={style.contentList__imageIcon} alt='Instagram' />
              <span className={style.contentList__count}>11</span>
            </li>
          </ul>
        </div>
      </li>

      <li className={style.contentList__element}>
        <div className={style.contentList__left}>
          <div className={style.contentList__person}>
            <h2 className={style.contentList__title}>2 место</h2>
            <h3 className={style.contentList__fio}>Григорьева Анастасия</h3>
          </div>
          <div className={style.contentList__rating}>
            <p className={style.contentList__paragraph}>Рейтинг</p>
            <div className={style.contentList__ratingContainer}>
              <img className={style.contentList__arrow} src={arrowDown} alt='Стрелка вниз' />
              <p className={`${style.contentList__raitingcount}  ${style.contentList__raitingcountYellow}`}>-2 позиции</p>
            </div>
          </div>
        </div>
        <div className={style.contentList__right}>
          <h2 className={style.contentList__titleContent}>Опубликовано контента</h2>
          <ul className={style.contentList__icons}>
            <li className={style.contentList__icon}>
              <img src={youTube} className={style.contentList__imageIcon} alt='YouTube' />
              <span className={style.contentList__count}>5</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={hIcon} className={style.contentList__imageIcon} alt='HIcon' />
              <span className={style.contentList__count}>6</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={telegram} className={style.contentList__imageIcon} alt='Telegram' />
              <span className={style.contentList__count}>7</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={instagram} className={style.contentList__imageIcon} alt='Instagram' />
              <span className={style.contentList__count}>11</span>
            </li>
          </ul>
        </div>
      </li>

      <li className={style.contentList__element}>
        <div className={style.contentList__left}>
          <div className={style.contentList__person}>
            <h2 className={style.contentList__title}>3 место</h2>
            <h3 className={style.contentList__fio}>Анна Логинова</h3>
          </div>
          <div className={style.contentList__rating}>
            <p className={style.contentList__paragraph}>Рейтинг</p>
            <div className={style.contentList__ratingContainer}>
              <img className={style.contentList__arrow} src={arrowUp} alt='Стрелка вверх' />
              <p className={style.contentList__raitingcount}>+5 позициий</p>
            </div>
          </div>
        </div>
        <div className={style.contentList__right}>
          <h2 className={style.contentList__titleContent}>Опубликовано контента</h2>
          <ul className={style.contentList__icons}>
            <li className={style.contentList__icon}>
              <img src={youTube} className={style.contentList__imageIcon} alt='YouTube' />
              <span className={style.contentList__count}>5</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={hIcon} className={style.contentList__imageIcon} alt='HIcon' />
              <span className={style.contentList__count}>6</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={telegram} className={style.contentList__imageIcon} alt='Telegram' />
              <span className={style.contentList__count}>7</span>
            </li>
            <li className={style.contentList__icon}>
              <img src={instagram} className={style.contentList__imageIcon} alt='Instagram' />
              <span className={style.contentList__count}>11</span>
            </li>
          </ul>
        </div>
      </li>

    </ul>
  )
}

export default ContentList
