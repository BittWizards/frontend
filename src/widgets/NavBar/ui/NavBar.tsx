import { v4 as uuidv4 } from 'uuid';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { RootState } from 'src/app/store/store';
import { useAppSelector } from 'src/app/store/hooks';
import { useNavigate } from 'react-router-dom';

import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png';
import { NavbarLink } from '..';
import type { INavbarProps } from '../types/types';

import style from './NavBar.module.scss';
import 'src/app/styles/variables.scss';
import Button from 'src/entities/Button/ui/Button';

const Navbar: FC<INavbarProps> = ({ links }) => {
  const count = useAppSelector((state: RootState) => state.notifications);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const dict: { [key: string]: number } = {
    '/ambassadors': count.ambassadorsNewCount,
    '/content': count.contentNewCount,
    '/merch': count.merchNewCount,
  };

  useEffect(() => {
    token && setIsLogged(true);
  }, [token]);

  useEffect(() => {
    dict['/ambassadors'] = count.ambassadorsNewCount;
    dict['/content'] = count.contentNewCount;
    dict['/merch'] = count.merchNewCount;
  }, [count]);

  return (
    <aside className={style.aside}>
      <nav className={style.nav}>
        <ul className={style.list}>
          {links.map((link, index) => (
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
        {isLogged ? (
          <Avatar
            link={avatar}
            size="m"
            onClick={() => {
              localStorage.removeItem('token');
              setIsLogged(false);
            }}
          />
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
