import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import type { TTabsNavBarProps } from '../types/type';
import style from './TabsNavBar.module.scss';

const TabsNavBar: FC<TTabsNavBarProps> = ({ tabs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOption, setSelectedOption] =
    useState<string>(getSelectedTab());

  useEffect(() => {
    setSelectedOption(getSelectedTab());
  }, [location.pathname]);

  function getSelectedTab(): string {
    const currentPath = location.pathname;
    const tabName = currentPath.split('/').pop() || '';
    return tabName;
  }

  const handleTabClickInternal = (key: string) => {
    setSelectedOption(key);
    navigate(`/ambassadors/${id}/${key}`);
  };

  return (
    <nav className={style.navBar}>
      <ul className={style.navList}>
        {Object.entries(tabs).map(([key, value]) => (
          <li
            key={key}
            className={`${style.navItem} ${selectedOption === key ? style.active : ''}`}
          >
            <a
              href="#"
              onClick={() => handleTabClickInternal(key)}
              onKeyUp={() => handleTabClickInternal(key)}
              className={`${style.navLink} ${selectedOption === key ? style.active : ''}`}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabsNavBar;
