import { MenuItem, MenuList, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';

import personalInfo from 'src/shared/icons/personal-info.svg';
import logout from 'src/shared/icons/logout.svg';
import { useNavigate } from 'react-router-dom';
import type { RootState } from 'src/app/store/store';
import { removeUser } from 'src/app/store/reducers/user/model/userSlice';
import style from './UserMenu.module.scss';

const UserMenu = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={style.background}>
      <MenuList>
        <div className={style.container}>
          <Typography className={style.menuTitle}>{user?.name}</Typography>

          <MenuItem
            className={style.inputIcons}
            disableGutters
            onClick={() => navigate('/me')}
          >
            <img src={personalInfo} className={style.icon} alt="phone" />
            <Typography className={style.menuItem}>
              Личная информация
            </Typography>
          </MenuItem>
          <MenuItem
            className={style.inputIcons}
            disableGutters
            onClick={() => dispatch(removeUser())}
          >
            <img src={logout} className={style.icon} alt="phone" />
            <Typography className={style.menuItem}>Выйти из профиля</Typography>
          </MenuItem>
        </div>
      </MenuList>
    </div>
  );
};

export default UserMenu;
