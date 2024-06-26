import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectMerch } from 'src/app/store/reducers/merch/model/merchSlice';
import { selectOrders } from 'src/app/store/reducers/orders/model/ordersSlice';
import { getOrders } from 'src/shared/api/orders';
import {
  getMerchAmbassadorsHistory,
  getMerchTypes,
} from 'src/shared/api/merch';


import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { MerchUserInfoCard } from 'src/widgets/MerchUserInfoCard';
import { MerchStatisticTable } from 'src/entities/MerchStatisticTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { ButtonComponent } from 'src/entities/Button';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import { Loader } from 'src/shared/Loader';
import downloadImg from 'src/shared/icons/document-download.svg';
import {
  sortOrderByDate,
  sortOrderBySpecialty,
  sortOrderByStatus,
  sortOrderBySurname,
  sortMerchByDate,
} from 'src/pages/MerchPage/model/sortFunctions';

import style from './MerchPage.module.scss';

import type { TOrder } from 'src/shared/api/orders/dtos';
import type { TAmbassadorMerchHistory } from 'src/shared/api/merch/dtos';

const MerchPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { merchHistory } = useAppSelector(selectMerch);
  const { orders, isLoading } = useAppSelector(selectOrders);

  useEffect(() => {
    dispatch(getMerchAmbassadorsHistory());
    dispatch(getOrders());
    dispatch(getMerchTypes());
  }, [dispatch]);

  const [selectedOption, setSelectedOption] = useState('Заявки на отправку');
  const tabs: string[] = ['Заявки на отправку', 'Учет мерча'];
  const sortingOptions =
    selectedOption === 'Учет мерча'
      ? ['Дата', 'ФИО']
      : ['Дата', 'ФИО', 'Статус', 'Специальность'];

  const [searchOrdersTerm, setSearchOrdersTerm] = useState('');
  const [searchOrdersResults, setSearchOrdersResults] = useState<TOrder[]>([]);

  const [searchMerchTerm, setSearchMerchTerm] = useState('');
  const [searchMerchResults, setSearchMerchResults] = useState<
    TAmbassadorMerchHistory[]
  >([]);

  const handleOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOrdersTerm(event.target.value);
  };

  // const handleMerchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchMerchTerm(event.target.value);
  // };

  useEffect(() => {
    setSearchOrdersResults(orders);
    setSearchMerchResults(merchHistory);
  }, [searchOrdersTerm, searchMerchTerm]);

  const onOrdersSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const results = orders.filter(
      orders =>
        orders.ambassador.first_name
          .toLowerCase()
          .includes(searchOrdersTerm.toLowerCase()) ||
        orders.ambassador.last_name
          .toLowerCase()
          .includes(searchOrdersTerm.toLowerCase())
    );
    setSearchOrdersResults(results);
  };

  // const onMerchSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   const results = merchHistory.filter(
  //     ambassador =>
  //       ambassador.first_name
  //         .toLowerCase()
  //         .includes(searchMerchTerm.toLowerCase()) ||
  //       ambassador.last_name
  //         .toLowerCase()
  //         .includes(searchMerchTerm.toLowerCase())
  //   );
  //   setSearchMerchResults(results);
  // };

  useEffect(() => {
    setSearchOrdersResults(sortOrderByDate(orders).reverse());
    setSearchMerchResults(sortMerchByDate(merchHistory).reverse());
  }, [orders, merchHistory]);

  const handleOrdersSortChange = (selectedOption: string | null) => {
    if (selectedOption !== null) {
      let sortedResults = [...searchOrdersResults];
      switch (selectedOption) {
        case 'Дата':
          sortedResults = sortOrderByDate(sortedResults).reverse();
          break;
        case 'ФИО':
          sortedResults = sortOrderBySurname(sortedResults);
          break;
        case 'Специальность':
          sortedResults = sortOrderBySpecialty(sortedResults);
          break;
        case 'Статус':
          sortedResults = sortOrderByStatus(sortedResults);
          break;

        default:
          break;
      }

      setSearchOrdersResults(sortedResults);
    }
  };

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        <div className={style.headerTopWrapper}>
          <div
            className={
              selectedOption === 'Учет мерча'
                ? `${style.leftWrapper_disabled}`
                : `${style.leftWrapper}`
            }
          >
            <h2 className={style.pageTitle}>Заявки</h2>
            <ButtonComponent
              label="Создать заявку"
              width={244}
              height={48}
              onClick={e => {
                navigate('/merch/new-order');
              }}
            />
          </div>
          <div className={style.rightWrapper}>
            <FilterComponent
              onSearch={onOrdersSearch}
              searchTerm={searchOrdersTerm}
              handleChange={handleOrdersChange}
            />
            <div className={style.sortWrapper}>
              <img
                src={downloadImg}
                className={style.downloadImg}
                alt="Иконка скачивания"
              />
              <SortComponent
                width={220}
                height={48}
                options={sortingOptions}
                onSortChange={handleOrdersSortChange}
              />
            </div>
          </div>
        </div>
        {selectedOption === 'Учет мерча' ? (
          isLoading ? (
            <Loader />
          ) : (
            <div className={style.tableWrapper}>
              <MerchStatisticTable merchArray={searchMerchResults} />
            </div>
          )
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className={style.cardsContainer}>
            {searchOrdersResults.map(cardData => (
              <MerchUserInfoCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchPage;
