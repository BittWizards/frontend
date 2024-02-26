import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';

import { tabsData } from '../model/data';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import style from './AmbassadorContentPage.module.scss';

const AmbassadorContentPage = () => {
  const { id } = useParams();
  const selectedUser = userCardsData.find(user => user.id === id);

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard title="Контент Амбассадора" data={selectedUser} />
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default AmbassadorContentPage;
