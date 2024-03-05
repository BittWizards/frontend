import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import photo1 from 'src/shared/icons/photoamb1.svg';
import photo2 from 'src/shared/icons/photoamb2.svg';
import photo3 from 'src/shared/icons/photoamb3.svg';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';
import { SubtitleWithEditBtn } from 'src/shared/SubtitleWithEditBtn';

import { mockCardsData } from 'src/utils/constants/mockCardsData';

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';

import { formatDateString } from 'src/utils/constants/formatDate';
import vcIcon from 'src/shared/icons/vc.svg';
import youtubeIcon from 'src/shared/icons/youTubeIcon.svg';
import telegramIcon from 'src/shared/icons/telegramIcon.svg';
import linkedinIcon from 'src/shared/icons/linkedinIcon.svg';
import instagramIcon from 'src/shared/icons/instIcon.svg';
import otherSocialIcon from 'src/shared/icons/question-mark-circle.svg';
import habrIcon from 'src/shared/icons/habr.svg';
import { tabsData } from '../types/type';

import style from './ReportContent.module.scss';

const ReportContent = () => {
  const { id } = useParams();
  const selectedUser = mockCardsData.find(user => user.id === id);
  const selectedContent = selectedUser?.content.find(user => user.id === id);

  const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#ebeef4',
    border: '1px solid #939393',
    '& .MuiSvgIcon-root path': {
      fill: '#ebeef4',
    },
    '&:hover': {
      border: '1px solid #512da8',
      backgroundColor: '#ebeef4',
    },
    '&.Mui-checked': {
      color: '#ebeef4',
      backgroundColor: '#14ae5c',
      '& .MuiSvgIcon-root path': {
        fill: '#ebeef4',
      },
    },
  }));

  const getPlatformIcon = (platform: string): JSX.Element => {
    switch (platform) {
      case 'habr':
        return <img className={style.socialmedia__img} src={habrIcon} alt="Habr" />;
      case 'vc':
        return <img className={style.socialmedia__img} src={vcIcon} alt="VC" />;
      case 'youtube':
        return <img className={style.socialmedia__img} src={youtubeIcon} alt="YouTube" />;
      case 'telegram':
        return <img className={style.socialmedia__img} src={telegramIcon} alt="Telegram" />;
      case 'linkedin':
        return <img className={style.socialmedia__img} src={linkedinIcon} alt="LinkedIn" />;
      case 'instagram':
        return <img className={style.socialmedia__img} src={instagramIcon} alt="Instagram" />;
      default:
        return <img className={style.socialmedia__img} src={otherSocialIcon} alt="Other" />;
    }
  };



  return selectedContent ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        {selectedUser ? <AmbassadorHeaderCard data={selectedUser} /> : <div>Пользоваетель с id ${id} не найден</div>}
        <div className={style.raitingWrapper}>
          <span className={style.raitingText}>Рейтинг Амбассадора</span>
          <span className={style.raitingText}>46</span>
        </div>
        <SubtitleWithEditBtn title="Контент Амбассадора" />
        <div className={style.downWrapper}>
          <div className={style.social}>
            <div className={style.socialmedia}>
              {getPlatformIcon(selectedContent?.platform)}
              <div className={style.social__container}>
                <h3 className={style.social__title}>Ссылка</h3>
                <p className={style.social__subtitle}>{selectedContent?.link}</p>
                <span className={style.social__data}>{formatDateString(selectedContent?.date)}</span>
              </div>
            </div>
            <ul className={style.social__checkboxGroup}>
              <li className={style.social__checkboxElement}>
                <StyledCheckbox />
                <p className={style.social__checkboxText}>
                  В рамках гайда
                </p>
              </li>
              <li className={style.social__checkboxElement}>
                <StyledCheckbox />
                <p className={style.social__checkboxText}>
                  Не в рамках гайда
                </p>
              </li>
            </ul>
          </div>

          <div className={style.dopDocuments}>
            <p className={style.dopDocuments__text}>Дополнительные материалы</p>
            <div className={style.dopDocuments__imgContainer}>
              <img src={photo1} className={style.dopDocuments__img} alt="Фото амбассадора" />
              <img src={photo2} className={style.dopDocuments__img} alt="Фото амбассадора" />
              <img src={photo3} className={style.dopDocuments__img} alt="Фото амбассадора" />
            </div>
          </div>

          <input
            className={style.textfield}
            type="text"
            placeholder="Text area"
          />

        </div>
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найден</div>
  )
};

export default ReportContent;
