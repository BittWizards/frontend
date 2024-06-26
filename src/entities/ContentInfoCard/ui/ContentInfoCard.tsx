import { v4 as uuidv4 } from 'uuid';

import { Grid } from '@mui/material';

import arrowUp from 'src/shared/icons/arrow-up.svg';
import youTube from 'src/shared/icons/youTubeIcon.svg';
import hIcon from 'src/shared/icons/habr.svg';
import telegram from 'src/shared/icons/telegramIcon.svg';
import instagram from 'src/shared/icons/instIcon.svg';
import vc from 'src/shared/icons/vc.svg';
import inIcon from 'src/shared/icons/inIcon.svg';
import questionIcon from 'src/shared/icons/questionIcon.svg';

import style from './ContentInfoCard.module.scss';

import type { TAllContentCardProps } from '../types/types';


import type { FC } from 'react';

const ContentInfoCard: FC<TAllContentCardProps> = ({ data, index }) => {
  const getPlatformIcon = (platform: string): JSX.Element => {
    switch (platform) {
      case 'habr_count':
        return <img src={hIcon} alt="Habr" />;
      case 'vc_count':
        return <img src={vc} alt="VC" />;
      case 'youtube_count':
        return <img src={youTube} alt="YouTube" />;
      case 'tg_count':
        return <img src={telegram} alt="Telegram" />;
      case 'linkedin_count':
        return <img src={inIcon} alt="LinkedIn" />;
      case 'instagram_count':
        return <img src={instagram} alt="Instagram" />;
      default:
        return <img src={questionIcon} alt="Other" />;
    }
  };

  const counts: { [key: string]: number | null } = {
    habr_count: data.habr_count,
    vc_count: data.vc_count,
    youtube_count: data.youtube_count,
    tg_count: data.tg_count,
    linkedin_count: data.linkedin_count,
    instagram_count: data.instagram_count,
  };

  return (
    <li className={style.contentList__element}>
      <div className={style.contentList__left}>
        <div className={style.contentList__person}>
          <h2 className={style.contentList__title}>{`${index + 1} место`}</h2>
          <h3 className={style.contentList__fio}>
            {data.last_name} {data.first_name}
          </h3>
        </div>
        <div className={style.contentList__rating}>
          <p className={style.contentList__paragraph}>Рейтинг</p>
          <div className={style.contentList__ratingContainer}>
            <img
              className={style.contentList__arrow}
              src={arrowUp}
              alt="Стрелка вверх"
            />
            <p className={style.contentList__raitingcount}>+2 позиции</p>
          </div>
        </div>
      </div>
      <div className={style.contentList__right}>
        <h2 className={style.contentList__titleContent}>
          Опубликовано контента
        </h2>
        <Grid className={style.contentGroup}>
          {Object.keys(data)
            .filter(row => row in counts)
            .map((row, index) =>
              counts[row] ? (
                <Grid
                  item
                  container
                  direction="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={uuidv4()}
                >
                  <Grid item>{getPlatformIcon(row)}</Grid>
                  <Grid item className={style.allContentCard__text}>
                    {counts[row]}
                  </Grid>
                </Grid>
              ) : (
                ''
              )
            )}
        </Grid>
      </div>
    </li>
  );
};

export default ContentInfoCard;
