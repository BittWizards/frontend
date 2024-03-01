import { FC, useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ButtonComponent } from 'src/entities/Button';

import style from './PromocodePage.module.scss';
import { ChoiceModal, SuccessModal } from 'src/entities/Modals';

const PromocodePage: FC = () => {
  const [openModal, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <div className={style.headerWrapper}>
          <div className={style.headerTopWrapper}>
            <div className={style.leftWrapper}>
              <h2 className={style.pageTitle}>Промокоды</h2>
              <ButtonComponent
                label="Добавить промокод"
                width={244}
                height={48}
                onClick={handleOpen}
              />
              <ChoiceModal
                open={openModal}
                onClose={handleClose}
                title="Отменить редактирование "
                content="Внесённые изменения не будут сохранены.
                Выйти без сохранения данных?"
                onCancelLabel="Отменить"
                onConfirmLabel="Сохранить"
                onCancel={handleClose}
                onConfirm={handleClose}
              />
            </div>
          </div>
        </div>
        <div className={style.cardsContainer}>
          {mockCardsData.map(cardData => (
            <PromocodeUserInfoCard key={cardData.id} data={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromocodePage;

//TODO Здесь пример модалки об успехе

{
  /* <SuccessModal
open={openModal}
onClose={handleClose}
title="Успех"
content="Все данные были успешно сохранены!"
/> */
}

//TODO Здесь пример модалки выбора

{
  /* <ChoiceModal
open={openModal}
onClose={handleClose}
title="Отменить редактирование "
content="Внесённые изменения не будут сохранены.
Выйти без сохранения данных?"
onCancelLabel="Отменить"
onConfirmLabel="Сохранить"
onCancel={handleClose}
onConfirm={handleClose}
/> */
}
