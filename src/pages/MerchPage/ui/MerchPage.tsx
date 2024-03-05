import { useEffect, useState } from 'react';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { MerchUserInfoCard } from 'src/widgets/MerchUserInfoCard';
import { MerchStatisticTable } from 'src/entities/MerchStatisticTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';

import { ButtonComponent } from 'src/entities/Button';
import type { User } from 'src/utils/constants/types/types';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import style from './MerchPage.module.scss';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getMerch } from 'src/shared/api/merch';
import { selectMerch } from 'src/app/store/reducers/merch/model/merchSlice';

import { getMerchById } from 'src/shared/api/merch';

const MerchPage = () => {
  const [selectedOption, setSelectedOption] = useState('Заявки на отправку');
  const tabs: string[] = ['Заявки на отправку', 'Учет мерча'];
  const sortingOptions =
    selectedOption === 'Учет мерча'
      ? ['По фамилии', 'По дате']
      : ['По фамилии', 'По статусу', 'По специальности', 'По дате'];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMerchById(1))
  }, [])
  const {merch} = useAppSelector(selectMerch)
  console.log(merch)

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
                console.log(e);
              }}
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
              options={sortingOptions}
              onSortChange={selectedOption => {
                console.log('Selected sorting option:', selectedOption);
              }}
            />
          </div>
        </div>
        {selectedOption === 'Учет мерча' ? (
          <div className={style.tableWrapper}>
            <MerchStatisticTable merchArray={searchResults} />
          </div>
        ) : (
          <div className={style.cardsContainer}>
            {searchResults.map(cardData => (
              <MerchUserInfoCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchPage;
