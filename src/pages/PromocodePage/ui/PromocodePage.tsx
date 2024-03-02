import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Portal } from '@mui/material';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ButtonComponent } from 'src/entities/Button';
import { InputAutoCompleteModal } from 'src/entities/Modals';

import { FilterComponent } from 'src/entities/FilterComponent';
import type { User } from 'src/utils/constants/types/types';

import style from './PromocodePage.module.scss';

const PromocodePage: FC = () => {
  const [openModal, setModalOpen] = useState(false);
  const sortingOptions = [
    'По фамилии',
    'По статусу',
    'По специальности',
    'По дате',
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOnConfirm = (idAmbasador?: string, promocode?: string) => {
    setModalOpen(false);
    console.log('Promocode:', `${idAmbasador} ${promocode}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setSearchResults(mockCardsData);
  }, [searchTerm]);

  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line max-len
    const results = mockCardsData.filter(
      ambassador =>
        ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ambassador.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
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
              </div>
              <FilterComponent
                onSearch={onSearch}
                sortingOptions={sortingOptions}
                searchTerm={searchTerm}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className={style.cardsContainer}>
            {searchResults.map(cardData => (
              <PromocodeUserInfoCard key={cardData.id} data={cardData} />
            ))}
          </div>
        </div>
      </div>
      {openModal ? (
        <Portal>
          <InputAutoCompleteModal
            open={openModal}
            onClose={handleClose}
            title="Добавить промокод"
            tableSpan="Введите промокод"
            onCancelLabel="Отменить"
            onConfirmLabel="Сохранить"
            onCancel={handleClose}
            onConfirm={handleOnConfirm}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default PromocodePage;
