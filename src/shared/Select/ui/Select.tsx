import type { FC } from 'react';

import { Autocomplete, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Avatar } from 'src/entities/Avatar';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import type { TSelectProps } from '../types/types';

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
    ListboxProps={{ className: style.customScrollbar }}
    options={options}
    disablePortal
    getOptionLabel={optionLabel}
    sx={{
      width: { width },
      height: { height },
      border: `1px solid #474646`,
      borderRadius: '4px',
      '& .MuiInputBase-root': {
        padding: '5px 4px 7px 11px',
      },
      '& .MuiInputBase-input': {
        color: '#ebeef4',
      },
      '& .MuiSvgIcon-root': {
        color: '#939393',
      },
      '& .MuiInputLabel-root': {
        color: '#939393',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: '#939393',
      },
      '&:hover': {
        borderColor: '#512da8',
        transition: 'border-color 0.2s ease-in-out',
      },
      '& .Mui-focused': {
        color: '#939393',
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#512da8',
        borderWidth: '2px',
      },
      '& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected="true"]':
        {
          backgroundColor: '#373636',
        },
      '& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected="true"].Mui-focused':
        {
          backgroundColor: '#2e2d33',
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
              width="100%"
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
                <span style={{ paddingLeft: '5px' }}>
                  {option.first_name + ' ' + option.last_name}
                </span>
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
                  @{option.tg_acc.toLocaleLowerCase()}
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
