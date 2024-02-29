import { useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorTable } from 'src/widgets/AmbassadorTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';

import { mockCardsData } from 'src/utils/constants/mockCardsData';

import style from './AmbassadorPage.module.scss';

const AmbassadorPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Новые запросы');

  const tabs: string[] = ['Новые запросы', 'Все амбассадоры'];

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
                  onClick={e => {
                    console.log(e);
                  }}
                />
              </div>
            </div>
            <AmbassadorTable data={mockCardsData} />
          </>
        ) : (
          <>
            <div className={style.cardsContainer}>
              {mockCardsData.map(cardData => (
                <AmbassadorCard key={cardData.id} data={cardData} />
              ))}
            </div>
            <div className={style.btnWrapper}>
              <ButtonComponent
                label="Добавить амбассадора"
                width={244}
                height={48}
                onClick={() => console.log('Добавить амбассадора')}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AmbassadorPage;
