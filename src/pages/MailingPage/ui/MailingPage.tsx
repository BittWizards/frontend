import { useState } from 'react';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import ButtonComponent from 'src/entities/Button';

import style from './MailingPage.module.scss';

const MailingPage = () => {
  const [selectedOption, setSelectedOption] = useState('Новая рассылка');
  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <nav className={style.navBar}>
          <ul className={style.navList}>
            <li
              className={`${style.navItem} ${selectedOption === 'Новая рассылка' ? style.active : ''}`}
              onClick={() => setSelectedOption('Новая рассылка')}
            >
              Новая рассылка
            </li>
            <li
              className={`${style.navItem} ${selectedOption === 'Все рассылки' ? style.active : ''}`}
              onClick={() => setSelectedOption('Все рассылки')}
            >
              Все рассылки
            </li>
          </ul>
        </nav>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MailingPage;
