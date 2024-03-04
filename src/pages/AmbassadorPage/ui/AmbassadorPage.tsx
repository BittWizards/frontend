import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from 'src/utils/constants/types/types';

import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';

import style from './AmbassadorPage.module.scss';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorTable } from 'src/widgets/AmbassadorTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';



const AmbassadorPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Новые запросы');
  const sortingOptions = [
    'По фамилии',
    'По статусу',
    'По специальности',
    'По дате',
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const tabs: string[] = ['Новые запросы', 'Все амбассадоры'];
  const navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const dispatch = useAppDispatch();
  const {ambassadors} = useAppSelector(selectAmbassadors);

  console.log(ambassadors)

  useEffect(() => {
    dispatch(getAllAmbassadors())
  }, [])


  useEffect(() => {
    setSearchResults(mockCardsData);
  }, [searchTerm]);

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
                  onSortChange={selectedOption => {
                    console.log('Selected sorting option:', selectedOption);
                  }}
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
