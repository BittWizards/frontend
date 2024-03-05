import type { FC } from 'react';

import logo from 'src/shared/icons/logo.svg';

import { BreadCrumbs } from 'src/widgets/BreadCrumbs';
import { mockCardsData } from 'src/utils/constants/mockCardsData';
import style from './Header.module.scss';

const Header: FC = () => (
  <header className={style.header}>
    <img src={logo} className={style.logo} alt="logo" />
    <BreadCrumbs />
  </header>
);

export default Header;
