import type { FC } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { TSelectProps } from '../types/types';
import { Avatar } from 'src/entities/Avatar';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import style from './Select.module.scss';

const Select: FC<TSelectProps> = ({
  onChange,
  options,
  optionLabel,
  label,
  width,
  height,
  defaultValue,
  ambassadorRender,
}) => (
  <Autocomplete
    onChange={(_, newValue) => onChange(newValue)}
    value={defaultValue}
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
    renderOption={
      ambassadorRender
        ? (props: React.HTMLAttributes<HTMLLIElement>, option) => (
            <Grid
              container
              columns={6}
              columnSpacing={1}
              component="li"
              {...props}
            >
              <Grid
                md={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  link={option.image}
                  status={option.achievement}
                  size="s"
                />
                <span>{option.first_name + ' ' + option.last_name}</span>
              </Grid>
              <Grid md={3} sx={{ display: 'flex' }}>
                <span>{option.ya_programm}</span>
              </Grid>
              <Grid
                md={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center',
                }}
              >
                <img src={tgIcon} alt="telegram" className={style.socialIcon} />
                <span className={style.tg}>
                  {option.tg_acc.toLocaleLowerCase()}
                </span>
              </Grid>
            </Grid>
          )
        : undefined
    }
    renderInput={params => <TextField {...params} label={label} size="small" />}
  />
);

export default Select;
