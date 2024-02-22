import type { FC } from 'react';

import logo from 'src/shared/icons/logo.svg';

import style from './Header.module.scss';

const Header: FC = () => (
  <header className={style.header}>
    <img src={logo} className={style.logo} alt="logo" />
  </header>
);

export default Header;
