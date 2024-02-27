import { FC } from 'react';
import { statusMappings } from 'src/utils/constants/statusMappings';
import { StatusIconProps } from '../types/type';

import style from './StatusIcon.module.scss';

const StatusIcon: FC<StatusIconProps> = ({ data }) => {
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

  return (
    <div className={style.statusCell}>
      {data.userStatus ? (
        <span
          className={`${style.status}  ${getStatusColorClass(data.userStatus)}`}
        >
          {statusMappings[data.userStatus]}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default StatusIcon;
