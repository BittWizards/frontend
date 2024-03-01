import { v4 as uuidv4 } from 'uuid';

import type { FC } from 'react';
import { Avatar } from 'src/entities/Avatar';
import avatar from 'src/shared/icons/userAvatar.png';
import type { INavbarProps } from '../types/types';
import { NavbarLink } from '..';

import style from './NavBar.module.scss';

const Navbar: FC<INavbarProps> = ({ links }) => (
  <aside className={style.aside}>
    <nav className={style.nav}>
      <ul className={style.list}>
        {links.map((link, index) => (
          <NavbarLink
            key={uuidv4()}
            text={link.text}
            to={link.to}
            icon={link.icon}
          />
        ))}
      </ul>
    </nav>
    <button className={style.button}>
      <Avatar link={avatar} size='m' />
    </button>
  </aside>
);

export default Navbar;
