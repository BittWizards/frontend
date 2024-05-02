import { useState, type FC } from 'react';

import { rows } from 'src/utils/constants/allMailingData';

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  styled,
} from '@mui/material';

import tgIcon from 'src/shared/icons/telegramIcon.svg';

import { Avatar } from 'src/entities/Avatar';
import style from './NewMailingTable.module.scss';
import { IAmbassador } from 'src/shared/api/ambassadors/dtos';

type MailingDataGridProps = {
  options: IAmbassador[];
  selected: IAmbassador[];
  setSelected: (value: IAmbassador[]) => void;
};

const MailingDataGrid: FC<MailingDataGridProps> = ({
  options,
  selected,
  setSelected,
}) => {
  const genderOptions = { Male: 'мужчина', Female: 'женщина' };

  const commonCellStyle = {
    color: '#ebeef4',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
    border: 'none',
    padding: '12px 0',
  };

  const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#ebeef4',
    border: '1px solid #939393',
    '& .MuiSvgIcon-root path': {
      fill: '#ebeef4',
    },
    '&:hover': {
      border: '1px solid #512da8',
      backgroundColor: '#ebeef4',
    },
    '&.Mui-checked': {
      color: '#ebeef4',
      backgroundColor: '#14ae5c',
      '& .MuiSvgIcon-root path': {
        fill: '#ebeef4',
      },
    },
  }));

  const handleClick = (event: React.MouseEvent<unknown>, row: IAmbassador) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected: IAmbassador[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (row: IAmbassador) => selected.indexOf(row) !== -1;

  return (
    <Table>
      <TableBody>
        {options.map(row => {
          const isItemSelected = isSelected(row);
          return (
            <TableRow
              key={row.id}
              hover
              role="checkbox"
              selected={isItemSelected}
              sx={{ cursor: 'pointer' }}
              aria-checked={isItemSelected}
              onClick={event => handleClick(event, row)}
            >
              <TableCell style={commonCellStyle}>
                <div className={style.avatar}>
                  {row.image && (
                    <Avatar link={row.image} status={row.achievement} />
                  )}
                </div>
              </TableCell>
              <TableCell style={commonCellStyle}>
                <p className={style.name}>
                  {row.first_name} {row.last_name}
                </p>
              </TableCell>
              <TableCell style={commonCellStyle}>
                <p className={style.position}>{row.ya_programm}</p>
              </TableCell>
              <TableCell style={commonCellStyle}>
                <p className={style.gender}>{genderOptions[row.gender]}</p>
              </TableCell>
              <TableCell style={commonCellStyle}>
                <div className={style.cellWrapper}>
                  <img
                    src={tgIcon}
                    alt="telegram"
                    className={style.socialIcon}
                  />
                  <span className={style.cellText}>
                    @{row.tg_acc.toLowerCase()}
                  </span>
                </div>
              </TableCell>
              <TableCell padding="checkbox" style={{ border: 'none' }}>
                <StyledCheckbox checked={isItemSelected} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default MailingDataGrid;
