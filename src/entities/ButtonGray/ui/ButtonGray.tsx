import type { FC } from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '../types/types';

const ButtonGrayComponent: FC<ButtonProps> = ({
  width,
  height,
  label,
  onClick,
}) => (
  <Button
    onClick={onClick}
    sx={{
      background: 'rgba(71, 70, 70, 0.6)',
      textTransform: 'none',
      fontFamily: 'YSText',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.2,
      padding: 0,
      width: { width },
      height: { height },
      '&:hover': {
        background: 'rgba(55, 54, 54, 0.6)',
      },
      '&:active': {
        background: '#474646'
      },
      '&:disabled': {
        cursor: 'auto'
      }
    }}
    variant="contained"
  >
    {label}
  </Button>
);

export default ButtonGrayComponent;
