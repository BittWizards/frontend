import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { INavbarLinkProps } from '../types/types';

import style from './NavbarLink.module.scss';

const NavbarLink: FC<INavbarLinkProps> = ({ text, to, icon }) => {
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
      </NavLink>
    </li>
  );
};

export default NavbarLink;
