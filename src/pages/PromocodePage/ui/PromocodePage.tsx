import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { PromocodeUserInfoCard } from 'src/widgets/PromocodeUserInfoCard';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { ButtonComponent } from 'src/entities/Button';

import style from './PromocodePage.module.scss';

const PromocodePage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>
      <div className={style.headerWrapper}>
        <div className={style.headerTopWrapper}>
          <div className={style.leftWrapper}>
            <h2 className={style.pageTitle}>Промокоды</h2>
            <ButtonComponent
              label="Добавить промокод"
              width={244}
              height={48}
              onClick={e => {
                console.log(e);
              }}
            />
          </div>
        </div>
      </div>
      <div className={style.cardsContainer}>
        {mockCardsData.map(cardData => (
          <PromocodeUserInfoCard key={cardData.id} data={cardData} />
        ))}
      </div>
    </div>
  </div>
);

export default PromocodePage;
