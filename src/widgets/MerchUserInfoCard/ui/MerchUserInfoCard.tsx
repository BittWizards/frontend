import { useState } from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Portal from '@mui/material/Portal';

import tgIcon from 'src/shared/icons/tgIcon.svg';
import { Avatar } from 'src/entities/Avatar';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { StatusIcon } from 'src/shared/StatusIcon';
import { DateInputModal } from 'src/entities/Modals';
import type { TCardProps } from '../types/types';

import style from './MerchUserInfoCard.module.scss';

const MerchUserInfoCard: FC<TCardProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOnConfirm = (date: string) => {
    setOpenModal(false);
  };

  const formattedDate = new Date(data.created_date)
    .toLocaleDateString('en-GB')
    .replace(/\//g, '.');

  const handleDeliveryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleOpenModal();
  };

  return (
    <>
      <NavLink to={`/ambassadors/${data.id}/merch`} className={style.navLink}>
        <div className={style.cardContainer}>
          <div className={style.userInfoWrapper}>
            {data.ambassador.image && (
              <Avatar link={data.ambassador.image} size="m" />
            )}
            <div className={style.userInfo}>
              <p className={style.name}>
                {data.ambassador.last_name} {data.ambassador.last_name}
              </p>
              <p className={style.position}>{data.ambassador.ya_programm}</p>
            </div>
          </div>
          <div className={style.statusWrapper}>
            <div className={style.socialWrapper}>
              <img src={tgIcon} alt="telegram" className={style.socialIcon} />
              <span
                className={style.tg}
              >{`@${data.ambassador.tg_acc.split('/')[1]}`}</span>
            </div>
            <StatusIcon status={data.ambassador.status} />
          </div>
          <div className={style.line} />
          <div className={style.promocodeWrapper}>
            <div className={style.promocodeColumn}>
              <span className={style.title}>Трек-номер</span>
              <span className={style.text}>
                {data.track_number || 'Отсутствует'}
              </span>
            </div>
            <div className={style.promocodeColumn}>
              <span className={style.title}>Дата заявки</span>
              <span className={style.text}>{formattedDate}</span>
            </div>
          </div>
          <div className={style.btnWrapper}>
            <ButtonSecondaryComponent
              label="Доставлено"
              width={480}
              height={48}
              onClick={handleDeliveryClick}
            />
          </div>
        </div>
      </NavLink>

      {openModal ? (
        <Portal>
          <DateInputModal
            open={openModal}
            onClose={handleCloseModal}
            title="Мерч доставлен"
            content="Перейдите в раздел «Учет мерча», чтобы указать стоимость"
            tableSpan="Укажите дату получения мерча"
            onCancelLabel="Отменить"
            onConfirmLabel="Сохранить"
            onCancel={handleCloseModal}
            onConfirm={handleOnConfirm}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default MerchUserInfoCard;
