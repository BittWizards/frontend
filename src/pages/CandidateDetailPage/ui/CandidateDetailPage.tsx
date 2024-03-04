import { useParams } from 'react-router-dom';

import style from './CandidateDetailPage.module.scss';

import { Navbar } from 'src/widgets/NavBar';
import { CandidateQuestionnaire } from 'src/widgets/CandidateQuestionnaire';

import { navbarLinks } from 'src/utils/constants/navLinks';
import { mockCardsData } from 'src/utils/constants/mockCardsData';

const CandidateDetailPage = () => {
  const { id } = useParams();
  const selectedUser = mockCardsData.find(user => user.id === id);

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <CandidateQuestionnaire user={selectedUser} />
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найдет</div>
  );
};

export default CandidateDetailPage;
