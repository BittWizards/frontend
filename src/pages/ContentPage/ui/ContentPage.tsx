import { useState } from 'react';
import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';
import { ContentUserCard } from 'src/widgets/ContentUserCard';

import style from './ContentPage.module.scss';

const ContentPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новые отчеты');

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
          <div className={style.navList}>Страница в разработке</div>
        ) : (
          <>
            <div className={style.cardsContainer}>
              {userCardsData.map(cardData => (
                <ContentUserCard key={cardData.id} data={cardData} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
