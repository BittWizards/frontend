import { useState } from 'react';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { ButtonComponent } from 'src/entities/Button';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { MailingDataGrid } from 'src/widgets/MailingDataGrid';

import style from './MailingPage.module.scss';

const MailingPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новая рассылка');
  const tabs: string[] = ['Новая рассылка', 'Все рассылки'];

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        {selectedOption === 'Новая рассылка' ? (
          <div className={style.allcontent}>Новая рассылка в разработке</div>
        ) : (
          <div className={style.cardsContainer}>
            <div className={style.pageContent}>
              <div className={style.header}>
                <div className={style.headerColumn}>
                  <h2 className={style.title}>Рассылки</h2>
                  <ButtonComponent
                    label="Создать рассылку"
                    width={244}
                    height={48}
                    onClick={e => {
                      console.log(e);
                    }}
                  />
                </div>
              </div>
              <MailingDataGrid />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MailingPage;
