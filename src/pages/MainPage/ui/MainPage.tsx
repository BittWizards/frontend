import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './MainPage.module.scss';
import { CardsColumnList } from 'src/widgets/CardsColumnList';
import { promoData } from 'src/utils/constants/promoInfoCardData';
import { PromoInfoCard } from 'src/entities/PromoInfoCard';
import ContentContainer from 'src/widgets/ContentContainer';

const MainPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <ContentContainer title="Промокоды" link="/promocode">
      <CardsColumnList promoData={promoData}>
        {[<PromoInfoCard />]}
      </CardsColumnList>
    </ContentContainer>
  </div>
);

export default MainPage;
