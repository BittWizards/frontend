import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { tabsData } from '../model/data';

import style from './AmbassadorContentPage.module.scss';

const AmbassadorContentPage = () => {
  const { id } = useParams();

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <div>Контент амбассадора в разработке</div>
      </div>
    </div>
  );
};

export default AmbassadorContentPage;
