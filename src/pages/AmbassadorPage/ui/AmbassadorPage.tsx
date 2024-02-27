import { useState } from 'react';
import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';

import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import style from './AmbassadorPage.module.scss';
import { AmbassadorTable } from '../../../widgets/AmbassadorTable';

const AmbassadorPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые запросы');

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <nav className={style.navBar}>
          <ul className={style.navList}>
            <li
              className={`${style.navItem} ${selectedOption === 'Новые запросы' ? style.active : ''}`}
              onClick={() => setSelectedOption('Новые запросы')}
            >
              Новые запросы
            </li>
            <li
              className={`${style.navItem} ${selectedOption === 'Все амбассадоры' ? style.active : ''}`}
              onClick={() => setSelectedOption('Все амбассадоры')}
            >
              Все амбассадоры
            </li>
          </ul>
        </nav>
        {selectedOption === 'Все амбассадоры' ? (
          <>
            <div className={style.navList}>ПАНЕЛЬ ПОИСКА И ФИЛЬТРАЦИИ</div>
            <AmbassadorTable data={userCardsData} />
          </>
        ) : (
          <>
            <div className={style.cardsContainer}>
              {userCardsData.map(cardData => (
                <AmbassadorCard key={cardData.id} data={cardData} />
              ))}
            </div>
            <div className={style.btnWrapper}>
              <button
                className={style.btn}
                onClick={() => console.log('Добавить амбассадора')}
              >
                Добавить амбассадора
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

//TODO кнопка MUI Добавить амбассадора
export default AmbassadorPage;
