import type { FC } from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '../types/types';


const ButtonComponent: FC<ButtonProps> = ({
  width,
  height,
  label,
  onClick,
  type,
}) => (
  <Button type={type} onClick={onClick} sx={{
    background: '#9747FF',
    textTransform: 'none',
    fontFamily: 'YSText',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.2,
    padding: 0,
    width: { width },
    height: { height },
  }} variant="contained">{label}</Button>
);

export default ButtonComponent;
