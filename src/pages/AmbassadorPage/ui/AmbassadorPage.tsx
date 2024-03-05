import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';

import type { ChangeEvent, MouseEvent } from 'react';
import type { User } from 'src/utils/constants/types/types';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorTable } from 'src/widgets/AmbassadorTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { FilterComponent } from 'src/entities/FilterComponent';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { SortComponent } from 'src/entities/SortComponent';

import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { sortingOptions } from '../model/const';
import {
  sortPromocodesByDate,
  sortPromocodesBySurname,
  sortPromocodesBySpecialty,
  sortPromocodesByStatus,
} from '../model/sortFunctions';

import style from './AmbassadorPage.module.scss';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';

const AmbassadorPage = () => {
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState<string>('Новые запросы');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const tabs: string[] = ['Новые запросы', 'Все амбассадоры'];

  const navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllAmbassadors());
  }, [dispatch]);

  const {ambassadors} = useAppSelector(selectAmbassadors);

  console.log('Ambassadors:', ambassadors);

  const onSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line max-len
    const results = mockCardsData.filter(
      ambassador =>
        ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ambassador.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    setSearchResults(mockCardsData);
  }, [searchTerm]);

  const handleSortChange = (selectedOption: string | null) => {
    console.log(selectedOption);
    if (selectedOption !== null) {
      let sortedResults = [...searchResults];
      /* eslint-disable */
      switch (selectedOption) {
        case 'По дате':
          sortedResults = sortPromocodesByDate(sortedResults).reverse();
          break;
        case 'По фамилии':
          sortedResults = sortPromocodesBySurname(sortedResults);
          break;
        case 'По специальности':
          sortedResults = sortPromocodesBySpecialty(sortedResults);
          break;
        case 'По статусу':
          sortedResults = sortPromocodesByStatus(sortedResults);
          break;

        default:
          break;
      }

      setSearchResults(sortedResults);
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
        {selectedOption === 'Все амбассадоры' ? (
          <>
            <div className={style.navList}>
              <div className={style.titleBtnWrapper}>
                <h2 className={style.pageTitle}>Амбассадоры</h2>
                <ButtonComponent
                  label="Добавить амбассадора"
                  width={244}
                  height={48}
                  onClick={() => navigate('new-ambassador', { replace: true })}
                />
              </div>
              <div className={style.filterWrapper}>
                <FilterComponent
                  onSearch={onSearch}
                  searchTerm={searchTerm}
                  handleChange={handleChange}
                />
                <SortComponent
                  width={220}
                  height={48}
                  options={sortingOptions}
                  onSortChange={handleSortChange}
                />
              </div>
            </div>
            <AmbassadorTable data={searchResults} />
          </>
        ) : (
          <>
            <div className={style.pageHeader}>
              <div className={style.titleBtnWrapper}>
                <h2 className={style.pageTitle}>Амбассадоры</h2>
                <ButtonComponent
                  label="Добавить амбассадора"
                  width={244}
                  height={48}
                  onClick={() => navigate('new-ambassador')}
                />
              </div>
              <FilterComponent
                onSearch={onSearch}
                searchTerm={searchTerm}
                handleChange={handleChange}
              />
            </div>
            s
            <div className={style.cardsContainer}>
              {searchResults.map(cardData => (
                <AmbassadorCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AmbassadorPage;
