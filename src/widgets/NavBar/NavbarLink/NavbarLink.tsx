import { NavLink, useLocation } from 'react-router-dom';

import style from './NavbarLink.module.scss';

import type { FC } from 'react';
import type { INavbarLinkProps } from '../types/types';


const NavbarLink: FC<INavbarLinkProps> = ({ text, to, icon, notification }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`${style.listItem} ${isActive ? style.active : ''}`}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          [isActive ? style.active : '', style.link].join(' ')
        }
        replace
      >
        {icon && <img src={icon} className={style.logo} alt={`${text} icon`} />}
        <span>{text}</span>
        {notification > 0 && <span className={style.notification}>{notification}</span>}
      </NavLink>
    </li>
  );
};

export default NavbarLink;
