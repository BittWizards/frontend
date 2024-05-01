import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';

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


import style from './AllContentCard.module.scss';

import type { TAllContentCardProps } from '../types/types';

import type { FC } from 'react';

const AllContentCard: FC<TAllContentCardProps> = ({ data }) => {
  const formattedDate = new Date(data.last_date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

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
    other_count: data.other_count,
  };

  return (
    <NavLink to={`/ambassadors/${data.id}/content`} className={style.navLink}>
      <Card
        className={style.allContentCard}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0)', borderRadius: '20px' }}
      >
        <Grid
          container
          direction="row"
          columns={24}
          sx={{ paddingTop: '8px', paddingLeft: '20px' }}
        >
          <Grid
            container
            direction="column"
            md={8}
            borderRight={1}
            borderColor="#939393"
            rowSpacing={2}
          >
            <Grid container direction="row">
              <Grid md={4}>
                <Avatar link={data.image} size="m" status={data.achievement} />
              </Grid>
              <Grid className={style.allContentCard__text} marginTop={0.5}>
                <Typography className={style.allContentCard__fio}>
                  {data.last_name} {data.first_name}
                </Typography>
                <p className={style.allContentCard__telegramAcc}>
                  {`@${data.tg_acc.toLowerCase()}`}
                </p>
              </Grid>
            </Grid>
            <Grid container direction="row" columns={5}>
              <Grid md={3}>
                <StatusIcon status={data.status} />
              </Grid>
              <Grid container md={2} direction="row">
                <Grid>
                  <img
                    src={arrowUp}
                    alt="Стрелка"
                    className={style.allContentCard__arrow}
                  />
                </Grid>
                <Grid>
                  <Typography
                    className={style.allContentCard__text}
                    fontSize={15}
                  >
                    Рейтинг
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    className={style.allContentCard__text}
                    fontSize={15}
                    marginInlineStart={2}
                  >
                    {data.rating ? data.rating : 0}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            md={3}
            direction="column"
            borderRight={1}
            borderColor="#939393"
            rowSpacing={1}
          >
            {/* середина */}
            <Grid display="flex" justifyContent="center" alignItems="center">
              <Typography
                className={style.allContentCard__text}
                fontWeight={600}
              >
                Отзывы
              </Typography>
            </Grid>
            <Grid
              container
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              rowSpacing={0}
            >
              <Grid>
                <img src={chat} alt="Отзывы" />
              </Grid>
              <Grid className={style.allContentCard__text}>
                {data.review_count ? data.review_count : '-'}
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" md={13}>
            {/* правая */}
            <Grid
              container
              direction="column"
              mdOffset={1}
              md={12}
              rowSpacing={1}
            >
              <Grid>
                <Typography
                  className={style.allContentCard__text}
                  fontWeight={600}
                >
                  Опубликовано контента
                </Typography>
              </Grid>
              <Grid
                className={style.allContentCard__contentGroup}
                direction="row"
                container
              >
                {Object.keys(data)
                  .filter(row => row in counts)
                  .map((row, index) =>
                    counts[row] ? (
                      <Grid
                        key={uuidv4()}
                        container
                        direction="column"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: '20px' }}
                      >
                        <Grid>{getPlatformIcon(row)}</Grid>
                        <Grid
                          className={style.allContentCard__text}
                          key={uuidv4()}
                        >
                          {counts[row]}
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid sx={{ width: '20px' }} key={uuidv4()} />
                    )
                  )}
              </Grid>
            </Grid>

            <Grid container direction="column" rowSpacing={3} mdOffset={3}>
              <Grid>
                <Typography
                  className={style.allContentCard__text}
                  fontWeight={600}
                >
                  Дата обновления
                </Typography>
              </Grid>
              <Grid className={style.allContentCard__data}>
                <img
                  src={calendarIcon}
                  className={style.allContentCard__calendar}
                  alt="Календарь"
                />
                <span className={style.allContentCard__dataNumber}>
                  {formattedDate}
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </NavLink>
  );
};

export default AllContentCard;
