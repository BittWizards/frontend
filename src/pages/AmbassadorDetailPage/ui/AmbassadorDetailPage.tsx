import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { tabsData } from '../model/data';

import style from './AmbassadorDetailPage.module.scss';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';

const AmbassadorDetailPage = () => {
  const { id } = useParams();

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <QuestionnaireProfileInfo />
        {/* <div>Карточка амбассадора в разработке</div> */}
      </div>
    </div>
  );
};

export default AmbassadorDetailPage;
