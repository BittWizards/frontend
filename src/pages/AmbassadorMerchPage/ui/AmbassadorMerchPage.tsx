import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { tabsData } from '../model/data';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';

import { userCardsData } from 'src/utils/constants/ambassadorCardData';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { formatDateString } from 'src/utils/constants/formatDate';

import style from './AmbassadorMerchPage.module.scss';

const AmbassadorMerchPage = () => {
  const { id } = useParams();
  const selectedUser = userCardsData.find(user => user.id === id);

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    // При изменении данных мерча пересчитываем общую сумму
    if (selectedUser && selectedUser.merch) {
      const sum = selectedUser.merch.reduce((acc, row) => {
        return (
          acc + parseInt(row.quantity) * parseFloat(row.price.replace(',', '.'))
        );
      }, 0);
      setTotalSum(sum);
    } else {
      setTotalSum(0);
    }
  }, [selectedUser]);

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

  return selectedUser ? (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard title="Мерч Амбассадора" data={selectedUser} />
        <div className={style.tableWrapper}>
          <Table style={{ width: '100%' }}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableCell style={headerCellStyle}>№</TableCell>
                <TableCell style={headerCellStyle}>Дата</TableCell>
                <TableCell style={headerCellStyle}>Вид мера</TableCell>
                <TableCell style={headerCellStyle}>Размер</TableCell>
                <TableCell style={headerCellStyle}>Количество</TableCell>
                <TableCell style={headerCellStyle}>Сумма</TableCell>
              </TableRow>
            </TableHead>
            {selectedUser.merch && selectedUser.merch.length > 0 ? (
              <TableBody>
                {selectedUser.merch.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                    <TableCell style={commonCellStyle}>
                      {formatDateString(row.date)}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {row.merchType}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {!row.merchSize ? '-' : row.merchSize}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {row.quantity}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {(
                        parseInt(row.quantity) *
                        parseFloat(row.price.replace(',', '.'))
                      ).toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                      })}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={commonCellStyle}>
                    {totalSum.toLocaleString('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableRow>
                <TableCell colSpan={6} style={commonCellStyle}>
                  <p className={style.subtitle}>Заявок нет</p>
                  <p className={style.text}>
                    Создайте заявку на отправку мерча и данные отобразятся в
                    таблице
                  </p>
                </TableCell>
              </TableRow>
            )}
          </Table>
        </div>
        <div className={style.btnWrapper}>
          <ButtonComponent
            label="Создать заявку"
            width={244}
            height={48}
            onClick={e => {
              console.log(e);
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найден</div>
  );
};

export default AmbassadorMerchPage;
