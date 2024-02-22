import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './ContentPage.module.scss';

const ContentPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>Контент страница</div>
  </div>
);

export default ContentPage;
