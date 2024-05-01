import { v4 as uuidv4 } from 'uuid';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { RootState } from 'src/app/store/store';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { ClickAwayListener, Popper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Avatar } from 'src/entities/Avatar';
import { UserMenu } from 'src/entities/UserMenu';
import Button from 'src/entities/Button/ui/Button';
import { NavbarLink } from '..';
import type { INavbarProps } from '../types/types';

import style from './NavBar.module.scss';
import { getUser } from 'src/shared/api/user';

const Navbar: FC<INavbarProps> = ({ links }) => {
  const count = useAppSelector((state: RootState) => state.notifications);
  const { user, isLoading } = useAppSelector((state: RootState) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const dict: { [key: string]: number } = {
    '/ambassadors': count.ambassadorsNewCount,
    '/content': count.contentNewCount,
    '/merch': count.merchNewCount,
  };

  useEffect(() => {
    if (token && !user) {
      dispatch(getUser());
    }
  }, [token, user]);

  useEffect(() => {
    dict['/ambassadors'] = count.ambassadorsNewCount;
    dict['/content'] = count.contentNewCount;
    dict['/merch'] = count.merchNewCount;
  }, [count, dict]);

  return (
    <aside className={style.aside}>
      <nav className={style.nav}>
        <ul className={style.list}>
          {links.map((link, _) => (
            <NavbarLink
              key={uuidv4()}
              text={link.text}
              to={link.to}
              icon={link.icon}
              notification={dict[link.to]}
            />
          ))}
        </ul>
      </nav>
      <div className={style.fixedElement}>
        {user ? (
          <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <div>
              <button
                type="button"
                aria-label="Открыть меню пользователя"
                className={style.button}
                ref={anchorRef}
                onClick={() => setMenuOpen(prev => !prev)}
              >
                <Avatar
                  link={
                    user
                      ? `https://avatars.yandex.net/get-yapic/${user?.avatar_id}/islands-middle`
                      : undefined
                  }
                  size="m"
                />
              </button>
              <Popper
                open={menuOpen}
                anchorEl={anchorRef.current}
                placement="top-start"
                modifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [60, 10],
                    },
                  },
                ]}
              >
                {!isLoading && <UserMenu />}
              </Popper>
            </div>
          </ClickAwayListener>
        ) : (
          <Button
            label="Войти"
            width={80}
            height={30}
            onClick={() => {
              navigate('/login');
            }}
          />
        )}
      </div>
    </aside>
  );
};

export default Navbar;
