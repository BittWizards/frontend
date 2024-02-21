import type { FC } from 'react';
import { INavbarProps } from '../types/types';
import { NavbarLink } from '..';

import style from './NavBar.module.scss';

const Navbar: FC<INavbarProps> = ({ links }) => {
  return (
    <nav className={style.nav}>
      {links.map((link, index) => (
        <NavbarLink key={index} {...link} />
      ))}
    </nav>
  );
};

export default Navbar;
