import type { FC } from 'react';

import { ButtonComponent } from 'src/entities/Button';
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

const MailingDataGrid: FC = () => {

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


  return (
    <Table style={{ width: '1048px' }}>
      <TableBody >
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell style={commonCellStyle}>
              <div className={style.avatar}>{row.avatar && <Avatar link={row.avatar} />}</div>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <p className={style.name}>
                {row.name} {row.surname}
              </p>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <p className={style.position}>{row.position}</p>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <p className={style.gender}>{row.gender}</p>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <div className={style.cellWrapper}>
                <img
                  src={tgIcon}
                  alt="telegram"
                  className={style.socialIcon}
                />
                <span className={style.cellText}>@{row.telegram}</span>
              </div>
            </TableCell>
            <TableCell
              padding="checkbox"
              style={{ border: 'none' }}
            >
              <StyledCheckbox />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
  );
};

export default MailingDataGrid;
