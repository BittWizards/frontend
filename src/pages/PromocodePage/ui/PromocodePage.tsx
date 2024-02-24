import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import style from './PromocodePage.module.scss';

const PromocodePage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>
      <div className={style.headerWrapper}>
        <div className={style.headerTopWrapper}>
          <div className={style.leftWrapper}>
            <h2>Промокоды</h2>
            <div className={style.btnWrapper}>
              <button
                className={style.btn}
                onClick={() => console.log('Добавить промокод')}
              >
                Добавить промокод
              </button>
            </div>
          </div>
          <div>
            <div>
              <input type="text" />
            </div>
            <button
              className={style.searchBtn}
              onClick={() => console.log('Найти')}
            >
              Найти
            </button>
          </div>
        </div>
        <div>
          <span>Сортировка</span>
          <span>По дате</span>
        </div>
      </div>
      <div className={style.cardsContainer}>
        {userCardsData.map(cardData => (
          <PromocodeUserInfoCard key={cardData.id} data={cardData} />
        ))}
      </div>
    </div>
  </div>
);

export default PromocodePage;
