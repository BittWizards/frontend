import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './MerchPage.module.scss';

const MerchPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>MerchPage</div>
  </div>
);

export default MerchPage;
