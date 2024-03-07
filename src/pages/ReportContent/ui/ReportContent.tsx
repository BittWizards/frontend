import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectContent } from 'src/app/store/reducers/contents/model/contentsSlice';
import { getContentDetailById } from 'src/shared/api/content';

import photo1 from 'src/shared/icons/photoamb1.svg';
import photo2 from 'src/shared/icons/photoamb2.svg';
import photo3 from 'src/shared/icons/photoamb3.svg';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';
import { SubtitleWithEditBtn } from 'src/shared/SubtitleWithEditBtn';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { ChoiceModal, InputModal } from 'src/entities/Modals';
import { Loader } from 'src/shared/Loader';

import { mockCardsData } from 'src/utils/constants/mockCardsData';

import { Checkbox, styled } from '@mui/material';

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

const ReportContent: FC = () => {
  const { id, detailId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (detailId) {
      const numericId = parseInt(detailId, 10);
      dispatch(getContentDetailById(numericId));
    }
  }, [dispatch]);

  const content = useAppSelector(selectContent);
  console.log('content Detail', content.contentDetail);

  const [openChoiceModal, setChoiceModalOpen] = useState(false);
  const [openInputModal, setInputModalOpen] = useState(false);

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

  const handleChoiceModalOpen = () => {
    setChoiceModalOpen(true);
  };

  const handleInputModalOpen = () => {
    setInputModalOpen(true);
  };

  const handleModalClose = () => {
    setChoiceModalOpen(false);
    setInputModalOpen(false);
  };

  const getPlatformIcon = (platform: string): JSX.Element => {
    /* eslint-disable */
    switch (platform) {
      case 'habr':
        return (
          <img className={style.socialmedia__img} src={habrIcon} alt="Habr" />
        );
      case 'vc':
        return <img className={style.socialmedia__img} src={vcIcon} alt="VC" />;
      case 'youtube':
        return (
          <img
            className={style.socialmedia__img}
            src={youtubeIcon}
            alt="YouTube"
          />
        );
      case 'telegram':
        return (
          <img
            className={style.socialmedia__img}
            src={telegramIcon}
            alt="Telegram"
          />
        );
      case 'linkedin':
        return (
          <img
            className={style.socialmedia__img}
            src={linkedinIcon}
            alt="LinkedIn"
          />
        );
      case 'instagram':
        return (
          <img
            className={style.socialmedia__img}
            src={instagramIcon}
            alt="Instagram"
          />
        );
      default:
        return (
          <img
            className={style.socialmedia__img}
            src={otherSocialIcon}
            alt="Other"
          />
        );
    }
  };

  return content.isLoading ? (
    <Loader />
  ) : (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard data={content.contentDetail.ambassador} />
        <SubtitleWithEditBtn title="Контент Амбассадора" />
        <div className={style.downWrapper}>
          <div className={style.social}>
            <div className={style.socialmedia}>
              {getPlatformIcon(content.contentDetail.platform)}
              <div className={style.social__container}>
                <h3 className={style.social__title}>Ссылка</h3>
                <p className={style.social__subtitle}>
                  {content.contentDetail.link}
                </p>
                <span className={style.social__data}>
                  {formatDateString(content.contentDetail.created_at)}
                </span>
              </div>
            </div>
            <ul className={style.social__checkboxGroup}>
              <li className={style.social__checkboxElement}>
                <StyledCheckbox />
                <p className={style.social__checkboxText}>В рамках гайда</p>
              </li>
              <li className={style.social__checkboxElement}>
                <StyledCheckbox />
                <p className={style.social__checkboxText}>Не в рамках гайда</p>
              </li>
            </ul>
          </div>

          <div className={style.dopDocuments}>
            <p className={style.dopDocuments__text}>Дополнительные материалы</p>
            <div className={style.dopDocuments__imgContainer}>
              <img
                src={photo1}
                className={style.dopDocuments__img}
                alt="Фото амбассадора"
              />
              <img
                src={photo2}
                className={style.dopDocuments__img}
                alt="Фото амбассадора"
              />
              <img
                src={photo3}
                className={style.dopDocuments__img}
                alt="Фото амбассадора"
              />
            </div>
          </div>

          <input
            className={style.textfield}
            type="text"
            placeholder="Text area"
          />
        </div>
        <div className={style.btnsWrapper}>
          <ButtonComponent
            label="Принять"
            width={244}
            height={48}
            onClick={handleChoiceModalOpen}
          />
          <ButtonSecondaryComponent
            label="Отклонить"
            width={244}
            height={48}
            onClick={handleInputModalOpen}
          />
        </div>
      </div>
      {openChoiceModal ? (
        <ChoiceModal
          open={openChoiceModal}
          onClose={handleModalClose}
          title="Принять контент"
          content="Вы подтверждаете принятие контента?"
          onCancelLabel="Отменить"
          onConfirmLabel="Подтвердить"
          onCancel={handleModalClose}
          onConfirm={handleModalClose}
        />
      ) : (
        ''
      )}
      {openInputModal ? (
        <InputModal
          open={openInputModal}
          onClose={handleModalClose}
          title="Отклонить контент"
          content="Вы хотите отклонить контент, если вы уверены, укажите причину в сообщении"
          placeholderTextArea="Введите сообщение"
          heightTextArea={83}
          onCancelLabel="Отменить"
          onConfirmLabel="Подтвердить"
          onCancel={handleModalClose}
          onConfirm={handleModalClose}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ReportContent;

// TODO логика открывается с кнопками или без - новый контент или принятый.
// TODO Редактирование
// TODO просмотр фото
