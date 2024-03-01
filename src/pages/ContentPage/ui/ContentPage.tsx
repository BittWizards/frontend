import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ContentUserCard } from 'src/widgets/ContentUserCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import sortImage from 'src/shared/icons/sortImage.svg';
import { AllContentCard } from 'src/widgets/AllContentCard';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { SortComponent } from 'src/entities/SortComponent';
import { FilterComponent } from 'src/entities/FilterComponent';
import type { User } from '../../../utils/constants/types/types';

import style from './ContentPage.module.scss';

const ContentPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые отчеты');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const sortingOptions = ['По фамилия', 'По статусу', 'По специальности', 'По дате', 'По рейтингу'];

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
            <FilterComponent
              onSearch={onSearch}
              sortingOptions={sortingOptions}
              searchTerm={searchTerm}
              handleChange={handleChange} />
            <div className={style.allcontent__reitingList}>
              {searchResults.map(cardData => (
                <AllContentCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </div>
        ) : (
          <div className={style.cardsContainer}>
            {mockCardsData.map(cardData => (
              <ContentUserCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
