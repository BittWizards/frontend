import type { FC } from 'react';
import style from './MainTabsNav.module.scss';

type TMainTabsNavProps = {
  tabs: string[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const MainTabsNav: FC<TMainTabsNavProps> = ({
  tabs,
  selectedTab,
  onSelectTab,
}) => (
  <nav className={style.navBar}>
    <ul className={style.navList}>
      {tabs.map(tab => (
        <li
          key={tab}
          className={`${style.navItem} ${selectedTab === tab ? style.active : ''}`}
        >
          <a
            href="#"
            onClick={() => onSelectTab(tab)}
            className={`${style.navLink} ${selectedTab === tab ? style.active : ''}`}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainTabsNav;
