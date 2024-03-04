import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorTable } from 'src/widgets/AmbassadorTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { mockCardsData } from 'src/utils/constants/mockCardsData';

import { FilterComponent } from 'src/entities/FilterComponent';
import type { User } from 'src/utils/constants/types/types';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';

import style from './AmbassadorPage.module.scss';

const AmbassadorPage = () => {
  const dispatch = useAppDispatch();
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllAmbassadors());
  }, [dispatch]);


  useEffect(() => {
    setSearchResults(mockCardsData);
  }, [searchTerm]);

  const ambassadors = useAppSelector(state => state.ambassadors);

  console.log('Ambassadors:', ambassadors);

  /* const onSort = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const sortResults = mockCardsData.sort((a, b) => {
      const ab = new Date(a.date);
      const bb = new Date(b.date);
      return (bb.getTime() - ab.getTime())
    });
    if (sortingOptions[1]) {
      setSearchResults(sortResults);
    }
  }; */





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
              <FilterComponent
                onSearch={onSearch}
                sortingOptions={sortingOptions}
                searchTerm={searchTerm}
                handleChange={handleChange} />
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
            </div>

            <div className={style.cardsContainer}>
              {mockCardsData.map(cardData => (
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
