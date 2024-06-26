/* eslint-disable react/jsx-props-no-spreading */
/* Disabled due to usage of mui */

import { useState, type FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';

import type { SortProps } from '../types/types';

const SortComponent: FC<SortProps> = ({
  width,
  height,
  options,
  onSortChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0]
  );

  const handleSortChange = (newValue: string | null) => {
    setSelectedOption(newValue);
    onSortChange(newValue);
  };

  return (
    <Autocomplete
      value={selectedOption}
      onChange={(_, newValue) => handleSortChange(newValue)}
      id="controllable-states-demo"
      options={options}
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
      }}
      renderInput={params => <TextField {...params} />}
    />
  );
};

export default SortComponent;
