import { useState } from 'react';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';
import { MerchUserInfoCard } from 'src/widgets/MerchUserInfoCard';

import style from './MerchPage.module.scss';

const MerchPage = () => {
  const [selectedOption, setSelectedOption] = useState('Заявки на отправку');

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <nav className={style.navBar}>
          <ul className={style.navList}>
            <li
              className={`${style.navItem} ${selectedOption === 'Заявки на отправку' ? style.active : ''}`}
              onClick={() => setSelectedOption('Заявки на отправку')}
            >
              Заявки на отправку
            </li>
            <li
              className={`${style.navItem} ${selectedOption === 'Учет мерча' ? style.active : ''}`}
              onClick={() => setSelectedOption('Учет мерча')}
            >
              Учет мерча
            </li>
          </ul>
        </nav>
        <div>Заявки. ПАНЕЛЬ ПОИСКА</div>
        {selectedOption === 'Учет мерча' ? (
          <div className={style.navList}>
            Страница "Учет мерча" в разработке
          </div>
        ) : (
          <div className={style.cardsContainer}>
            {userCardsData.map(cardData => (
              <MerchUserInfoCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchPage;
