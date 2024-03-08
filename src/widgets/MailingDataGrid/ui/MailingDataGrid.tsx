import type { FC } from 'react';
import { useState } from 'react';
import { ButtonComponent } from 'src/entities/Button';
import { formatDateString } from 'src/utils/constants/formatDate';
import { columns } from 'src/utils/constants/allMailingData';
import { ChoiceModal } from 'src/entities/Modals';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  styled,
  Portal,
} from '@mui/material';

import tgIcon from 'src/shared/icons/telegramIcon.svg';
import type { TMailingProps } from '../types/type';

import style from './MailingDataGrid.module.scss';

const MailingDataGrid: FC<TMailingProps> = ({ rows }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [openModal, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOnConfirm = () => {
    setModalOpen(false);
    // console.log('Удаление');
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
    fontFamily: 'YSText',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
    borderBottom: '1px solid #939393',
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

  const handleCheckboxChange = (rowId: number) => {
    const selectedIndex = selectedRows.indexOf(rowId);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, rowId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isRowSelected = (rowId: number) => selectedRows.indexOf(rowId) !== -1;

  const handleDeleteButtonClick = () => {
    handleOpen();
    // console.log('Удалить выбранные строки:', selectedRows);
  };

  return (
    <>
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell style={headerCellStyle} width={100}>
              №
            </TableCell>
            {columns.map(column => (
              <TableCell
                style={headerCellStyle}
                key={column.id}
                align="left"
                width={column.width}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell
                padding="checkbox"
                style={{ borderBottom: '1px solid #47464699' }}
              >
                <StyledCheckbox
                  checked={isRowSelected(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </TableCell>
              <TableCell style={commonCellStyle}>
                {formatDateString(row.date)}
              </TableCell>
              <TableCell style={commonCellStyle}>
                <div className={style.cellWrapper}>
                  <img
                    src={tgIcon}
                    alt="telegram"
                    className={style.socialIcon}
                  />
                  <span className={style.cellText}>{row.recipients}</span>
                </div>
              </TableCell>
              <TableCell style={commonCellStyle}>
                <div className={style.cellWrapper}>
                  <span className={style.cellText}>{row.text}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedRows.length > 0 && (
        <div className={style.btnDeleteWrapper}>
          <ButtonComponent
            label="Удалить"
            width={244}
            height={48}
            onClick={handleDeleteButtonClick}
          />
        </div>
      )}
      {openModal ? (
        <Portal>
          <ChoiceModal
            open={openModal}
            onClose={handleClose}
            title="Удалить выбранные рассылки"
            content="Вы действительно хотите удалить выбранные рассылки?"
            onCancelLabel="Отменить"
            onConfirmLabel="Удалить"
            onCancel={handleClose}
            onConfirm={handleOnConfirm}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default MailingDataGrid;
