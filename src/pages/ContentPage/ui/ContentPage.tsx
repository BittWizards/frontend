import { useEffect, useState } from 'react';
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
import type { User } from '../types/types';

import style from './ContentPage.module.scss';

const sortingOptions = ['По рейтингу', 'По дате'];

const ContentPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые отчеты');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

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
            <div className={style.allcontent__searchGroup}>
              <input
                className={style.allcontent__search}
                type="search"
                placeholder="Поиск"
                value={searchTerm}
                onChange={handleChange}
              />
              <Button
                onClick={onSearch}
                sx={{
                  background: '#47464699',
                  border: 0,
                  color: '#939393',
                  textTransform: 'none',
                  padding: 0,
                  width: 152,
                  height: 48,
                }}
                variant="outlined"
              >
                Найти
              </Button>
            </div>
            <div className={style.allcontent__sortGroup}>
              <div className={style.allcontent__sort}>
                <img
                  className={style.allcontent__sortImage}
                  src={sortImage}
                  alt="Сортировка со стрелкой вниз"
                />
                <p className={style.allcontent__sortText}>Сортировка</p>
              </div>
              <SortComponent width={244} height={48} color="#FFFFFF" options={sortingOptions} />
            </div>
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
