import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { StatusIcon } from 'src/shared/StatusIcon';
import { Avatar } from 'src/entities/Avatar';


import style from './AmbassadorTable.module.scss';

import type { TCardProps } from '../types/type';

import type { FC } from 'react';

const AmbassadorTable: FC<TCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleRowClick = (ambassador: TCardProps['data'][0]) => {
    navigate(`/ambassadors/${ambassador.id}/detail`);
  };

  const commonCellStyle = {
    color: '#ebeef4',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
    borderBottom: '1px solid #47464699',
  };

  const headerCellStyle = {
    color: '#ebeef4',
    fontFamily: 'YSDisplay',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
  };

  return (
    <Table style={{ width: '100%' }}>
      <TableHead>
        <TableRow>
          <TableCell style={headerCellStyle}>№</TableCell>
          <TableCell style={headerCellStyle}>Aмбассадор</TableCell>
          <TableCell style={headerCellStyle}>Статус</TableCell>
          <TableCell style={headerCellStyle}>Программа обучения</TableCell>
          <TableCell style={headerCellStyle}>Telegram</TableCell>
          <TableCell style={headerCellStyle}>Дата</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((ambassador, index) => (
          <TableRow
            key={uuidv4()}
            onClick={() => handleRowClick(ambassador)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'red',
              },
            }}
          >
            <TableCell style={commonCellStyle}>{index + 1}</TableCell>
            <TableCell style={commonCellStyle}>
              <div className={style.userInfoWrapper}>
                <Avatar
                  link={ambassador.image}
                  size="s"
                  status={ambassador.achievement}
                />
                <div className={style.positionCellWrapper}>
                  <span className={style.cellText}>
                    {ambassador.last_name} {ambassador.first_name}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <StatusIcon status={ambassador.status} />
            </TableCell>
            <TableCell style={commonCellStyle}>
              <div className={style.positionCellWrapper}>
                <span className={style.cellText}>{ambassador.ya_programm}</span>
              </div>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <div className={style.cellWrapper}>
                <span
                  className={style.cellText}
                >{`@${ambassador.tg_acc.toLowerCase()}`}</span>
              </div>
            </TableCell>
            <TableCell style={commonCellStyle}>
              <div className={style.dateCell}>
                {new Date(ambassador.created)
                  .toLocaleDateString('en-GB')
                  .replace(/\//g, '.')}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AmbassadorTable;

// TODO бордер при ховере MUI
