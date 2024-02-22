import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './MainPage.module.scss';
import { PromoColumnList } from '../../../widgets/CardsColumnList';
import { promoData } from '../../../utils/constants/promoInfoCardData';
import { PromoInfoCard } from '../../../entities/PromoInfoCard';

const MainPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <PromoColumnList promoData={promoData}>
      {[<PromoInfoCard />]}
    </PromoColumnList>
  </div>
);

export default MainPage;
