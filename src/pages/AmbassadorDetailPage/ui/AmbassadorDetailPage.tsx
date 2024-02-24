import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import style from './AmbassadorDetailPage.module.scss';

const AmbassadorDetailPage = () => {
  const { id } = useParams();

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>AmbassadorDetailPage ID {id}</div>
    </div>
  );
};

export default AmbassadorDetailPage;
