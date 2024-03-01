import { useParams } from 'react-router-dom';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import { tabsData } from '../model/data';

import style from './AmbassadorDetailPage.module.scss';
import { AmbassadorQuestionnaire } from 'src/widgets/AmbassadorQuestionnaire';

const AmbassadorDetailPage = () => {
  const { id } = useParams();
  const selectedUser = mockCardsData.find(user => user.id === id);

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorQuestionnaire user={selectedUser} />
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default AmbassadorDetailPage;
