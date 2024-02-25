import { NavLink } from 'react-router-dom';
import { TCardProps } from '../types/type';

import avatar from 'src/shared/icons/userAvatar.png';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import style from './AmbassadorTable.module.scss';
import { statusMappings } from '../../../utils/constants/statusMappings';

const AmbassadorTable: React.FC<TCardProps> = ({ data }) => {
  const statusOrder = ['Active', 'OnPause', 'PendingConfirmation', 'Inactive'];

  const sortedData = data.sort((a, b) => {
    const indexA = statusOrder.indexOf(a.userStatus);
    const indexB = statusOrder.indexOf(b.userStatus);

    return indexA - indexB;
  });

  // Функция для определения класса цвета в зависимости от статуса
  const getStatusColorClass = (userStatus: string) => {
    switch (userStatus) {
      case 'Active':
        return style.statusActive;
      case 'OnPause':
        return style.statusOnPause;
      case 'PendingConfirmation':
        return style.statusPendingConfirmation;
      case 'Inactive':
        return style.statusInactive;
      default:
        return '';
    }
  };

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
            to={`/ambassadors/${ambassador.id}`}
            className={style.tableLink}
          >
            <div
              className={style.tableRaw}
              onClick={() => handleRowClick(Number(ambassador.id))}
            >
              <div className={style.idCell}>{index + 1}</div>
              <div className={style.nameCell}>
                <div className={style.userInfoWrapper}>
                  <img src={avatar} className={style.avatar} alt="Avatar" />
                  <p className={style.textPosition}>
                    {ambassador.surname} {ambassador.name}
                  </p>
                </div>
              </div>
              <div className={style.statusCell}>
                {ambassador.userStatus ? (
                  <span
                    className={`${style.status}  ${getStatusColorClass(ambassador.userStatus)}`}
                  >
                    {statusMappings[ambassador.userStatus]}
                  </span>
                ) : (
                  ''
                )}
              </div>
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
