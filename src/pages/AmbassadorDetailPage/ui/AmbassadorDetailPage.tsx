import { useParams } from 'react-router-dom';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { tabsData } from '../model/data';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import style from './AmbassadorDetailPage.module.scss';
import { AmbassadorQuestionnaire } from 'src/widgets/AmbassadorQuestionnaire';

const AmbassadorDetailPage = () => {
  const { id } = useParams();
  const selectedUser = userCardsData.find(user => user.id === id);

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <div>
          Карточка амбассадора {selectedUser.surname} {selectedUser.name} в
          разработке
        </div>
        <AmbassadorQuestionnaire id={id}/>
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default AmbassadorDetailPage;
