import type { FC } from 'react';
import type { TAvatarProps } from '../types/types';

import style from './Avatar.module.scss';

const Avatar: FC<TAvatarProps> = ({ link, size, status }) => {
  const getSizeAndBorderColor = () => {
    let avatarSize;
    let borderColor;

    switch (size) {
    case 's':
      avatarSize = 32;
      break;
    case 'm':
      avatarSize = 48;
      break;
    case 'l':
      avatarSize = 120;
      break;
    default:
      avatarSize = 48;
    }

    switch (status) {
    case 'new':
      borderColor = '#939393';
      break;
    case 'friend':
      borderColor = '#189251';
      break;
    case 'master':
      borderColor = '#512da8';
      break;
    default:
      borderColor = '#808080';
    }

    return { avatarSize, borderColor };
  };

  const { avatarSize, borderColor } = getSizeAndBorderColor();

  return (
    <div
      className={style.avatarContainer}
      style={{
        width: avatarSize,
        height: avatarSize,
      }}
    >
      <img src={link} className={style.avatarImage} alt="Avatar" />
      <span
        className={style.borderOverlay}
        style={{
          borderColor: `${borderColor}`,
        }}
      />
    </div>
  );
};

export default Avatar;
