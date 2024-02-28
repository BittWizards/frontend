import { useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';
import { ContentUserCard } from 'src/widgets/ContentUserCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import sortImage from 'src/shared/icons/sortImage.svg';
import { AllContentCard } from 'src/widgets/AllContentCard';

import style from './ContentPage.module.scss';

const sortingOptions = ['По рейтингу', 'По дате'];
const ContentPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые отчеты');
  const [value, setValue] = useState<string | null>(sortingOptions[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <nav className={style.navBar}>
          <ul className={style.navList}>
            <li
              className={`${style.navItem} ${selectedOption === 'Новые отчеты' ? style.active : ''}`}
              onClick={() => setSelectedOption('Новые отчеты')}
            >
              Новые отчеты
            </li>
            <li
              className={`${style.navItem} ${selectedOption === 'Весь контент' ? style.active : ''}`}
              onClick={() => setSelectedOption('Весь контент')}
            >
              Весь контент
            </li>
          </ul>
        </nav>
        {selectedOption === 'Весь контент' ? (
          <div className={style.allcontent}>
            <div className={style.allcontent__searchGroup}>
              <input
                className={style.allcontent__search}
                type="search"
                placeholder="Поиск"
              />
              <Button
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
              <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={sortingOptions}
                sx={{
                  width: 244,
                  height: 48,
                  padding: 0,
                  border: '1px solid #FFFFFF',
                  borderRadius: '4px',
                  '& .MuiInputBase-root': {
                    padding: '5px 4px 7px 11px',
                  },
                  '& .MuiInputBase-input': {
                    color: '#FFFFFF',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#FFFFFF',
                  },
                }}
                renderInput={params => <TextField {...params} />}
              />
            </div>
            <div className={style.allcontent__reitingList}>
              {userCardsData.map(cardData => (
                <AllContentCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </div>
        ) : (
          <div className={style.cardsContainer}>
            {userCardsData.map(cardData => (
              <ContentUserCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
