import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './MainPage.module.scss';

const MainPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>контент</div>
  </div>
);

export default MainPage;
