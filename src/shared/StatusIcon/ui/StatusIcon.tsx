import { statusMappings } from 'src/utils/constants/statusMappings';

import style from './StatusIcon.module.scss';

import type { FC } from 'react';
import type { StatusIconProps } from '../types/type';


const StatusIcon: FC<StatusIconProps> = ({ status }) => {
  // Функция для определения класса цвета в зависимости от статуса
  type TUserStatus = 'Active' | 'Pause' | 'Clarify' | 'Not active';
  /* eslint-disable */
  const getStatusColorClass = (userStatus: TUserStatus) => {
    switch (userStatus) {
      case 'Active':
        return style.statusActive;
      case 'Pause':
        return style.statusOnPause;
      case 'Clarify':
        return style.statusPendingConfirmation;
      case 'Not active':
        return style.statusInactive;
      default:
        return '';
    }
  };

  return (
    <div className={style.statusCell}>
      {status ? (
        <span className={`${style.status}  ${getStatusColorClass(status)}`}>
          {statusMappings[status]}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default StatusIcon;
