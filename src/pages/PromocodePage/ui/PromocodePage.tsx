import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './PromocodePage.module.scss';

const PromocodePage = () => {
  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>PromocodePage</div>
    </div>
  );
};

export default PromocodePage;
