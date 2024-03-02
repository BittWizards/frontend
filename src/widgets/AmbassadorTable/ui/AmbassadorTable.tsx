import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { StatusIcon } from 'src/shared/StatusIcon';
import { Avatar } from 'src/entities/Avatar';

import avatar from 'src/shared/icons/userAvatar.png';
import tgIcon from 'src/shared/icons/tgIcon.svg';
import type { TCardProps } from '../types/type';
import { sortByStatus } from 'src/utils/constants/sortByStatus';

import style from './AmbassadorTable.module.scss';

const AmbassadorTable: FC<TCardProps> = ({ data }) => {
  const sortedData = sortByStatus(data);

  const handleRowClick = (number: number) => {
    console.log(`Row clicked: ${number}`);
  };

  return (
    <div className={style.table}>
      <div className={style.tableHeader}>
        <div className={style.idCell}>№</div>
        <div className={style.nameCell}>Aмбассадор</div>
        <div className={style.statusCell}>Статус</div>
        <div className={style.positionCell}>Программа обучения</div>
        <div className={style.contactCell}>Контакты</div>
        <div className={style.dateCell}>Дата</div>
      </div>
      <div className={style.tableBody}>
        {sortedData.map((ambassador, index) => (
          <NavLink
            key={ambassador.id}
            to={`/ambassadors/${ambassador.id}/detail`}
            className={style.tableLink}
          >
            <div
              className={style.tableRaw}
              onClick={() => handleRowClick(Number(ambassador.id))}
            >
              <div className={style.idCell}>{index + 1}</div>
              <div className={style.nameCell}>
                <div className={style.userInfoWrapper}>
                  <Avatar link={avatar} size="s" />
                  <p className={style.textPosition}>
                    {ambassador.surname} {ambassador.name}
                  </p>
                </div>
              </div>
              <StatusIcon data={ambassador} />
              <div className={`${style.positionCell} `}>
                <p className={style.textPosition}>{ambassador.position}</p>
              </div>
              <div className={`${style.socialWrapper} ${style.contactCell}`}>
                <img src={tgIcon} alt="telegram" className={style.socialIcon} />
                <span className={`${style.tg} ${style.textPosition}`}>
                  {ambassador.telegram}
                </span>
              </div>
              <div className={style.dateCell}>
                {new Date(ambassador.date)
                  .toLocaleDateString('en-GB')
                  .replace(/\//g, '.')}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AmbassadorTable;
