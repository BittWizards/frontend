import { useState } from 'react';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { MerchUserInfoCard } from 'src/widgets/MerchUserInfoCard';
import { MerchStatisticTable } from 'src/entities/MerchStatisticTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';

import style from './MerchPage.module.scss';

const MerchPage = () => {
  const [selectedOption, setSelectedOption] = useState('Заявки на отправку');
  const tabs: string[] = ['Заявки на отправку', 'Учет мерча'];

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        <div>Компонент ПАНЕЛЬ ПОИСКА</div>
        {selectedOption === 'Учет мерча' ? (
          <div className={style.tableWrapper}>
            <MerchStatisticTable />
          </div>
        ) : (
          <div className={style.cardsContainer}>
            {mockCardsData.map(cardData => (
              <MerchUserInfoCard key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchPage;
