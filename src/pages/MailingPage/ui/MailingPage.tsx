import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';

import style from './MailingPage.module.scss';

const MailingPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.content}>Рассылки</div>
  </div>
);

export default MailingPage;
