import { Navbar } from 'src/widgets/NavBar';
import style from './PersonalAccount.module.scss';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { Avatar } from 'src/entities/Avatar';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'src/app/store/reducers/user/model/userSlice';
import { getUser } from 'src/shared/api/user';
import { useEffect, useState } from 'react';

import email from 'src/shared/icons/mail.svg';
import phone from 'src/shared/icons/phone.svg';
import { Loader } from 'src/shared/Loader';
import { MainTabsNav } from 'src/entities/MainTabsNav';

const PersonalAccount = () => {
  const { user, isLoading } = useAppSelector(selectUser);
  const tabs: string[] = ['Личный кабинет', 'Настройки'];
  const [selectedOption, setSelectedOption] = useState('Личный кабинет');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    if (token && !user) {
      dispatch(getUser());
    }
  }, [dispatch, token, user]);

  if (!user) {
    return (
      <div className={style.main}>
        <Navbar links={navbarLinks} />
        <div className={style.content}>{isLoading && <Loader />}</div>
      </div>
    );
  }

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        <h2 className={style.title}>Личный кабинет</h2>
        <div className={style.profile}>
          <div className={style.photoContainer}>
            <Avatar
              link={`https://avatars.yandex.net/get-yapic/${user?.avatar_id}/islands-middle`}
              size="l"
            />
          </div>
          <div className={style.infoContainer}></div>
          <div className={style.info}>
            <p className={style.name}>{user?.name.split(' ')[1]}</p>
            <p className={style.name}>{user?.name.split(' ')[0]}</p>
          </div>
        </div>
        <div className={style.infoContainer}>
          <p className={style.subtitle}>Личные данные</p>
          <div className={style.inputIcons}>
            <img src={phone} className={style.icon} alt="phone" />
            <p className={style.name}>{user?.phone.number}</p>
          </div>
          <div className={style.inputIcons}>
            <img src={email} className={style.icon} alt="email" />
            <p className={style.name}>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
