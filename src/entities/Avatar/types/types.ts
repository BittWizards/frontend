import { MouseEventHandler } from 'react';

type TAvatarProps = {
  link?: string;
  size?: 's' | 'm' | 'l';
  status?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type { TAvatarProps };
