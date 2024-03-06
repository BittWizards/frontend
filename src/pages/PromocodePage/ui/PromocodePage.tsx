import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectPromocodes } from 'src/app/store/reducers/promocodes/model/promocodesSlice';
import type { IPromocode } from 'src/shared/api/promocodes/dtos';

import { Portal } from '@mui/material';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { ButtonComponent } from 'src/entities/Button';
import { InputAutoCompleteModal } from 'src/entities/Modals';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import { Loader } from 'src/shared/Loader';
import { getAllPromocodes } from 'src/shared/api/promocodes';
import {
  sortByDate,
  sortBySpecialty,
  sortByStatus,
  sortBySurname,
} from '../model/sortFunctions';
import { promocodeSortingOptions } from '../model/const';

import style from './PromocodePage.module.scss';

const PromocodePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPromocodes());
  }, [dispatch]);

  const promocodes = useAppSelector(selectPromocodes);

  const [openModal, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IPromocode[]>([]);

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
    const results = promocodes.promocodes.filter(
      ambassador =>
        ambassador.ambassador.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        ambassador.ambassador.last_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  /* eslint-disable */
  useEffect(() => {
    setSearchResults(sortByDate(promocodes.promocodes).reverse());
  }, []);
  /* eslint-enable */

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
          {promocodes.isLoading ? (
            <Loader />
          ) : (
            <div className={style.cardsContainer}>
              {searchResults.map(cardData => (
                <PromocodeUserInfoCard key={cardData.id} data={cardData} />
              ))}
            </div>
          )}
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
