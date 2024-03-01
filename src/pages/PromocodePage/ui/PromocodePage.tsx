import { FC, useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ButtonComponent } from 'src/entities/Button';
import { ChoiceModal, InputModal, SuccessModal } from 'src/entities/Modals';

import style from './PromocodePage.module.scss';

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
              <InputModal
                open={openModal}
                onClose={handleClose}
                title="Изменить промокод "
                content="Введите новый промокод"
                tableSpan="Текущий промокод сохранится в истории промокодов"
                placeholderTextArea="Введите промокод"
                heightTextArea={43}
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
