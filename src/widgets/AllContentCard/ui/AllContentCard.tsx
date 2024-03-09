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

import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import type { TAllContentCardProps } from '../types/types';

import style from './AllContentCard.module.scss';

const AllContentCard: FC<TAllContentCardProps> = ({ data }) => {
  const formattedDate = new Date(data.last_date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  const getPlatformIcon = (platform: string): JSX.Element => {
    /* eslint-disable */
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
    youTube_count: data.youtube_count,
    tg_count: data.tg_count,
    linkedin_count: data.linkedin_count,
    instagram_count: data.instagram_count,
  };
  /* eslint-enable */
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
            borderColor={'#939393'}
            rowSpacing={2}
          >
            <Grid container direction="row">
              <Grid md={4}>
                <Avatar link={data.image} size="m" />
              </Grid>
              <Grid className={style.allContentCard__text} marginTop={0.5}>
                <Typography className={style.allContentCard__fio}>
                  {data.last_name} {data.first_name}
                </Typography>
                <p className={style.allContentCard__telegramAcc}>
                  {`@${data.tg_acc}`}
                </p>
              </Grid>
            </Grid>
            <Grid container direction="row" columns={5}>
              <Grid md={3}>
                <StatusIcon status={data.status}></StatusIcon>
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
                    {data.rating}
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
            borderColor={'#939393'}
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
                {data.review_count}
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
              >
                {Object.keys(data).map((row, index) =>
                  counts[row] ? (
                    <Grid
                      container
                      direction="column"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid>{getPlatformIcon(row)}</Grid>
                      <Grid
                        className={style.allContentCard__text}
                        key={uuidv4()}
                      >
                        {counts[row]}
                      </Grid>
                    </Grid>
                  ) : null
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
    // <NavLink to={`/ambassadors/${data.id}/content`} className={style.navLink}>
    //   <div className={style.allContentCard}>
    //     <div className={style.allContentCard__left}>
    //       {/* левая */}
    //       <div className={style.allContentCard__ambassador}>
    //         <Avatar link={data.image} size="s" />
    //         <div className={style.allContentCard__person}>
    //           <h3 className={style.allContentCard__fio}>
    //             {data.last_name} {data.first_name}
    //           </h3>
    //           <p className={style.allContentCard__telegramAcc}>
    //             {`@${data.tg_acc.split('/')[1]}`}
    //           </p>
    //         </div>
    //       </div>

    //       <div className={style.allContentCard__statusGroup}>
    //         {/* <StatusIcon status={data.} /> */}
    //         <div className={style.allContentCard__reitingGroup}>
    //           <img
    //             src={arrowUp}
    //             alt="Стрелка"
    //             className={style.allContentCard__arrow}
    //           />
    //           <p className={style.allContentCard__textReiting}>Рейтинг</p>
    //           <span className={style.allContentCard__countReiting}>
    //             {data.rating}
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     <span className={style.line} />

    //     <div className={style.allContentCard__middle}>
    //       {/* середина */}
    //       <h3 className={style.allContentCard__reviews}>Отзывы</h3>
    //       <img
    //         src={chat}
    //         className={style.allContentCard__reviewsImg}
    //         alt="Отзывы"
    //       />
    //       <span className={style.allContentCard__reviewsCount}>
    //         {data.review_count}
    //       </span>
    //     </div>

    //     <span className={style.line} />

    //     <div className={style.allContentCard__right}>
    //       {/* правая */}
    //       <div className={style.allContentCard__contentContainer}>
    //         <h3 className={style.allContentCard__contentTitle}>
    //           Опубликовано контента
    //         </h3>
    //         <div className={style.allContentCard__contentGroup}>
    //           {/* {data.content.map((row, index) => (
    //             <div key={uuidv4()} className={style.allContentCard__social}>
    //               <div className={style.allContentCard__icon}>
    //                 {getPlatformIcon(row.platform)}
    //               </div>
    //               <span className={style.allContentCard__iconCount}>
    //                 {row.fileCounter}
    //               </span>
    //             </div>
    //           ))} */}
    //         </div>
    //       </div>

    //       <div className={style.allContentCard__dataGroup}>
    //         <h3 className={style.allContentCard__dataTitle}>Дата обновления</h3>
    //         <div className={style.allContentCard__data}>
    //           <img
    //             src={calendarIcon}
    //             className={style.allContentCard__calendar}
    //             alt="Календарь"
    //           />
    //           <span className={style.allContentCard__dataNumber}>
    //             {formattedDate}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </NavLink>
  );
};

export default AllContentCard;
