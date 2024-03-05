import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Portal } from '@mui/material';

import type { User } from 'src/utils/constants/types/types';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ButtonComponent } from 'src/entities/Button';
import { InputAutoCompleteModal } from 'src/entities/Modals';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import {
  sortByDate,
  sortBySpecialty,
  sortByStatus,
  sortBySurname,
} from 'src/utils/constants/sortFunctions';
import { promocodeSortingOptions } from '../model/const';

import style from './PromocodePage.module.scss';

const PromocodePage: FC = () => {
  const [openModal, setModalOpen] = useState(false);
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
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const results = mockCardsData.filter(
      ambassador =>
        ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ambassador.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    setSearchResults(sortByDate(mockCardsData).reverse());
  }, []);

  const handleSortChange = (selectedOption: string | null) => {
    if (selectedOption !== null) {
      let sortedResults = [...searchResults];
      /* eslint-disable */
      switch (selectedOption) {
        case 'Дата':
          sortedResults = sortByDate(sortedResults).reverse();
          break;
        case 'ФИО':
          sortedResults = sortBySurname(sortedResults);
          break;
        case 'Специальность':
          sortedResults = sortBySpecialty(sortedResults);
          break;
        case 'Статус':
          sortedResults = sortByStatus(sortedResults);
          break;

        default:
          break;
      }

      setSearchResults(sortedResults);
    }
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
              <div className={style.rightWrapper}>
                <FilterComponent
                  onSearch={onSearch}
                  searchTerm={searchTerm}
                  handleChange={handleChange}
                />
                <SortComponent
                  width={220}
                  height={48}
                  options={promocodeSortingOptions}
                  onSortChange={handleSortChange}
                />
              </div>
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
