/* eslint-disable react/jsx-props-no-spreading */
/* Disabled due to usage of mui */

import { Autocomplete, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Avatar } from 'src/entities/Avatar';
import tgIcon from 'src/shared/icons/tgIcon.svg';

import style from './Select.module.scss';

import type { TSelectProps } from '../types/types';

import type { FC } from 'react';

const Select: FC<ISelectProps> = ({
  width,
  height,
  margin,
  ambassadorRender,
  ...props
}) => (
  <Autocomplete
    ListboxProps={{ className: style.customScrollbar }}
    disablePortal
    sx={{
      width: { width },
      height: { height },
      margin: { margin },
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
        borderColor: '#512da8',
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
      '& .MuiChip-root': {
        color: '#ebeef4',
        backgroundColor: '#373636',
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
                {`${option.first_name} ${option.last_name}`}
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
    {...props}
  />
);

export default Select;

