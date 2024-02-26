import { FC } from 'react';
import { IInput } from '../types/types';

// import { Input } from '@mui/material';
import { TextField } from '@mui/material';

import style from './Input.module.scss';

const Innput: FC<IInput> = ({ value, placeholder, type, disabled }) => {
  return (
    <TextField
      disabled={disabled}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      id="outlined-basic"
      variant="outlined"
      sx={{
        borderRadius: '4px',
        border: '1px solid #939393',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
          '& input:hover + fieldset': {
            borderColor: '#512da8',
          },
          '& input:invalid + fieldset': {
            borderColor: '#cd4e2e',
          },
          '& input:disabled + fieldset': {
            backgroundColor: 'rgba(71, 70, 70, 0.6)',
          },
          '& input': {
            color: '#ebeef4',
            padding: '12px 16px',
            fontFamily: 'YSText',
            lineHeight: 1.2,
          },
        },
      }}
    />
    // <input
    //   type={type}
    //   className={style.input}
    //   value={value}
    //   placeholder={placeholder}
    //   disabled={disabled}
    // />
  );
};

export default Innput;
