import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import type { User } from 'src/utils/constants/types/types';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ContentUserCard } from 'src/widgets/ContentUserCard';
import { AllContentCard } from 'src/widgets/AllContentCard';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import { getNewContent } from 'src/shared/api/content';
import { selectContent } from 'src/app/store/reducers/contents/model/contentsSlice';

import style from './ContentPage.module.scss';

const ContentPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые отчеты');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const dispatch = useAppDispatch();
  const {newContent} = useAppSelector(selectContent)
  console.log(newContent)

  useEffect(() => {
    dispatch(getNewContent());
  }, [dispatch]);

  const sortingOptions = [
    'По фамилии',
    'По статусу',
    'По специальности',
    'По дате',
    'По рейтингу',
  ];

  const tabs: string[] = ['Новые отчеты', 'Весь контент'];

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
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        {selectedOption === 'Весь контент' ? (
          <div className={style.allcontent}>
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
            <div className={style.allcontent__reitingList}>
              {searchResults.map(cardData => (
                <AllContentCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </div>
        ) : (
          <div className={style.newDocuments}>
            <FilterComponent
              onSearch={onSearch}
              searchTerm={searchTerm}
              handleChange={handleChange}
            />
            <div className={style.cardsContainer}>
              {mockCardsData.map(cardData => (
                <ContentUserCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
