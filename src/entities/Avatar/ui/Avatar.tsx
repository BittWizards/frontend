import { FC } from 'react';
import type { TAvatar } from '../types/types';
import style from './Avatar.module.scss';

const Avatar: FC<TAvatar> = ({ link }) => {
  return <img src={link} className={style.avatar} alt="Avatar" />;
};

export default Avatar;