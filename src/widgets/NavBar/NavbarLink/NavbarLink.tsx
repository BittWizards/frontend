import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { INavbarLinkProps } from '../types/types';

import style from './NavbarLink.module.scss';

const NavbarLink: FC<INavbarLinkProps> = ({ text, to, icon }) => (
  <li className={style.listItem}>
    <NavLink to={to} className={style.link} replace>
      {icon && <img src={icon} className={style.logo} alt={`${text} icon`} />}
      <span>{text}</span>
    </NavLink>
  </li>
);

export default NavbarLink;
