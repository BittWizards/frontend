import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './AmbassadorPage.module.scss';

const AmbassadorPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>Амбассадоры</div>
  </div>
);

export default AmbassadorPage;
