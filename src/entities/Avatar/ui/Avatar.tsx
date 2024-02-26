import { FC } from 'react';
import type { TAvatar } from '../types/types';
import style from './Avatar.module.scss';

const Avatar: FC<TAvatar> = ({ link, width, height }) => {
  return <img src={link} style={{width: width, height: height, borderRadius: '50%'}} alt="Avatar" />;
};

export default Avatar;
