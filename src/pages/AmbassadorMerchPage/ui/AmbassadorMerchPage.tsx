import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getAmbassadorsOrdersById } from 'src/shared/api/orders';
import { selectOrders } from 'src/app/store/reducers/orders/model/ordersSlice';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';
import { SubtitleWithEditBtn } from 'src/shared/SubtitleWithEditBtn';
import { Loader } from 'src/shared/Loader';

import { mockCardsData } from 'src/utils/constants/mockCardsData';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { formatDateString } from 'src/utils/constants/formatDate';
import { tabsData } from '../model/data';

import style from './AmbassadorMerchPage.module.scss';

const AmbassadorMerchPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      dispatch(getAmbassadorsOrdersById(numericId));
    }
  }, [id]);

  const order = useAppSelector(selectOrders);

  console.log(order);

  const selectedUser = mockCardsData.find(user => user.id === id);

  const [totalSum, setTotalSum] = useState(0);

  // useEffect(() => {
  //   // При изменении данных мерча пересчитываем общую сумму
  //   if (selectedUser && selectedUser.merch) {
  //     const sum = selectedUser.merch.reduce(
  //       (acc, row) =>
  //         acc +
  //         parseInt(row.quantity, 10) * parseFloat(row.price.replace(',', '.')),
  //       0
  //     );
  //     setTotalSum(sum);
  //   } else {
  //     setTotalSum(0);
  //   }
  // }, [selectedUser]);

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

  const additionalCellStyle = {
    color: '#189251',
  };

  const combinedStyle = { ...commonCellStyle, ...additionalCellStyle };

  return order.isLoading ? (
    <Loader />
  ) : (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard data={order.ambassadorOrders} />
        <div className={style.subtitleWrapper}>
          <SubtitleWithEditBtn title="Мерч Амбассадора" />
        </div>
        <div className={style.tableWrapper}>
          <Table style={{ width: '100%' }}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableCell style={headerCellStyle}>№</TableCell>
                <TableCell style={headerCellStyle}>Дата</TableCell>
                <TableCell style={headerCellStyle}>Вид мерча</TableCell>
                <TableCell style={headerCellStyle}>Размер</TableCell>
                <TableCell style={headerCellStyle}>Количество</TableCell>
                <TableCell style={headerCellStyle}>Сумма</TableCell>
              </TableRow>
            </TableHead>
            {order.ambassadorOrders.orders &&
            order.ambassadorOrders.orders.length > 0 ? (
                <TableBody>
                  {order.ambassadorOrders.orders.map((row, index) => (
                    <TableRow key={uuidv4()}>
                      <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                      {/* <TableCell style={commonCellStyle}>
                      {formatDateString(row.created_date)}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {row.merch.}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {!row. ? '-' : row.merchSize}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {row.quantity}
                    </TableCell>
                    <TableCell style={commonCellStyle}>
                      {parseFloat(row.price).toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        minimumFractionDigits: 0,
                      })}
                    </TableCell> */}
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                    <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                    <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                    <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                    <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                    <TableCell style={combinedStyle}>
                      {order.ambassadorOrders.total_orders_cost.toLocaleString(
                        'ru-RU',
                        {
                          style: 'currency',
                          currency: 'RUB',
                          minimumFractionDigits: 0,
                        }
                      )}
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
  );
};

export default AmbassadorMerchPage;
