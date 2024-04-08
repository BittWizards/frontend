import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAmbassadorsOrdersById(Number(id)));
  }, [id]);

  const { ambassadorOrders, isLoading } = useAppSelector(selectOrders);

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    // При изменении данных мерча пересчитываем общую сумму
    if (ambassadorOrders && ambassadorOrders.merch.length > 0) {
      const sum = ambassadorOrders.merch.reduce(
        (acc, row) =>
          acc +
          parseInt(String(row.amount), 10) *
            parseFloat(String(row.total_cost).replace(',', '.')),
        0
      );
      setTotalSum(sum);
    } else {
      setTotalSum(0);
    }
  }, [ambassadorOrders]);

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

  return isLoading ? (
    <Loader />
  ) : (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard data={ambassadorOrders} />
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
            {ambassadorOrders.merch && ambassadorOrders.merch.length > 0 ? (
              <TableBody>
                {ambassadorOrders.merch.map((row, index) => (
                  <TableRow key={uuidv4()}>
                    <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                    <TableCell style={commonCellStyle}>
                      {formatDateString(row.created_date)}
                    </TableCell>
                    <TableCell style={commonCellStyle}>{row.name}</TableCell>
                    <TableCell style={commonCellStyle}>
                      {!row.size ? '-' : row.size}
                    </TableCell>
                    <TableCell style={commonCellStyle}>{row.amount}</TableCell>
                    <TableCell style={commonCellStyle}>
                      {parseFloat(String(row.total_cost)).toLocaleString(
                        'ru-RU',
                        {
                          style: 'currency',
                          currency: 'RUB',
                          minimumFractionDigits: 0,
                        }
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={{ borderBottom: '1px solid #47464699' }} />
                  <TableCell style={combinedStyle}>
                    {totalSum.toLocaleString('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 0,
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
              navigate('/merch/new-order');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AmbassadorMerchPage;
