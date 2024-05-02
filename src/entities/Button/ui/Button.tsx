import type { FC } from 'react';
import Button from '@mui/material/Button';
import type { AppButtonProps } from '../types/types';

const ButtonComponent: FC<AppButtonProps> = ({
  width,
  height,
  label,
  ...props
}) => (
  <Button
    {...props}
    sx={{
      background: '#512da8',
      textTransform: 'none',
      fontFamily: 'YSText',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.2,
      padding: 0,
      width: { width },
      height: { height },
      '&:hover': {
        background: '#47298E',
      },
      '&:active': {
        background: '#341c6c',
      },
      '&:disabled': {
        cursor: 'auto',
      },
    }}
    variant="contained"
    disableRipple
    disableElevation
  >
    {label}
  </Button>
);

export default ButtonComponent;
