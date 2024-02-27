import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';
import ButtonComponent from 'src/entities/Button';

import style from './PromocodePage.module.scss';

const PromocodePage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>
      <div className={style.headerWrapper}>
        <div className={style.headerTopWrapper}>
          <div className={style.leftWrapper}>
            <h2>Промокоды</h2>
            <ButtonComponent
              label="Добавить промокод"
              width={244}
              height={48}
              onClick={e => {
                console.log(e);
              }}
            />
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
