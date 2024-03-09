import type { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';

type TSelectProps = {
  onChange: Function;
  options: readonly any[];
  optionLabel: (option: any) => string;
  label: string;
  width: string;
  height: string;
};

const Select: FC<TSelectProps> = ({
  onChange,
  options,
  optionLabel,
  label,
  width,
  height,
}) => (
  <Autocomplete
    onChange={(_, newValue) => onChange(newValue)}
    id="controllable-states-demo"
    options={options}
    getOptionLabel={optionLabel}
    sx={{
      width: { width },
      height: { height },
      padding: 0,
      border: `1px solid #474646`,
      borderRadius: '4px',
      '& .MuiInputBase-root': {
        padding: '5px 4px 7px 11px',
      },
      '& .MuiInputBase-input': {
        color: '#939393',
      },
      '& .MuiSvgIcon-root': {
        color: '#939393',
      },
      '& .MuiInputLabel-root': {
        color: '#939393',
      },
    }}
    renderInput={params => <TextField {...params} label={label} size="small" />}
  />
);

export default Select;
