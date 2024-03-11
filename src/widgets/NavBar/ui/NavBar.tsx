import { v4 as uuidv4 } from 'uuid';
import type { FC } from 'react';
import { useEffect } from 'react';

import type { RootState } from 'src/app/store/store';
import { useAppSelector } from 'src/app/store/hooks';

import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png';
import { NavbarLink } from '..';
import type { INavbarProps } from '../types/types';

import style from './NavBar.module.scss';

const Navbar: FC<INavbarProps> = ({ links }) => {
  const count = useAppSelector((state: RootState) => state.notifications);

  const dict: { [key: string]: number } = {
    '/ambassadors': count.ambassadorsNewCount,
    '/content': count.contentNewCount,
    '/merch': count.merchNewCount,
  };

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
      <button
        type="button"
        className={style.button}
        aria-label="Открыть меню пользователя"
      >
        <Avatar link={avatar} size="m" />
      </button>
    </aside>
  );
};

export default Navbar;
