import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './StatsPage.module.scss';

const StatsPage = () => {
  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>StatsPage</div>
    </div>
  );
};

export default StatsPage;
