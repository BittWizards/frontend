import type { FC } from 'react';
import { INavbarProps } from '../types/types';
import { NavbarLink } from '..';

import style from './NavBar.module.scss';

const Navbar: FC<INavbarProps> = ({ links }) => {
  return (
    <aside className={style.aside}>
      <nav className={style.nav}>
        <ul className={style.list}>
          {links.map((link, index) => (
            <NavbarLink key={index} {...link} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
