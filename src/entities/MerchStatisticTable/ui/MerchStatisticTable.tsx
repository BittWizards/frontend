import type { FC } from 'react';
import { useAppSelector } from 'src/app/store/hooks';
import { selectMerch } from 'src/app/store/reducers/merch/model/merchSlice';

import { Avatar } from 'src/entities/Avatar';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import style from './MerchStatisticTable.module.scss';
import type { TMerchStatisticProps } from '../types/type';

type TReferenceDictionary = {
  Hoodie: string;
  Coffee: string;
  Stickers: string;
  Plus: string;
  Arzamas: string;
  Shopper: string;
  Backpack: string;
  Bag: string;
  Nosty: string;
  Discount: string;
  Alice: string;
  AliceBot: string;
  Club: string;
};

const referenceDictionary: TReferenceDictionary = {
  Hoodie: 'Толстовка',
  Coffee: 'Кофе',
  Stickers: 'Стикеры',
  Plus: 'Плюс',
  Arzamas: 'Арзамас',
  Shopper: 'Шопер',
  Backpack: 'Рюкзак',
  Bag: 'Сумка',
  Nosty: 'Носки',
  Discount: 'Скидка',
  Alice: 'Алиса',
  AliceBot: 'Алисабот',
  Club: 'Клуб',
};

const merchTypes = Object.values(referenceDictionary);

const MerchStatisticTable: FC<TMerchStatisticProps> = ({ merchArray }) => {
  const merch = useAppSelector(selectMerch);

  const commonCellStyle = {
    color: '#ebeef4',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
  };

  const headerCellStyle = {
    color: '#ebeef4',
    fontFamily: 'YSDisplay',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
  };

  return merchArray ? (
    <Table style={{ width: '100%' }}>
      <TableHead className={style.tableHead}>
        <TableRow className={style.tableRow}>
          <TableCell style={headerCellStyle}>Амбассадор</TableCell>
          {(
            Object.keys(referenceDictionary) as (keyof TReferenceDictionary)[]
          ).map(key => (
            <TableCell key={key} style={{ padding: '0px' }}>
              <div className={style.rotatedTitle}>
                {referenceDictionary[key]}
              </div>
            </TableCell>
          ))}
          <TableCell style={headerCellStyle}>Общая сумма</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {merchArray.map(user => (
          <TableRow key={user.id}>
            <TableCell style={commonCellStyle}>
              <div className={style.userInfoWrapper}>
                <Avatar link={user.image} size="s" />
                <div className={style.userInfo}>
                  <span
                    className={style.name}
                  >{`${user.last_name} ${user.first_name}`}</span>
                  <span className={`${style.name} ${style.tg}`}>
                    {`@${user.tg_acc.split('/')[1]}`}
                  </span>
                </div>
              </div>
            </TableCell>

            {/* {merchTypes.map(merchType => (
              <TableCell key={merchType} style={commonCellStyle}>
                <div className={style.countWrapper}>
                  {user.merch
                    .filter(item => item.merchType === merchType)
                    .map(item => item.quantity)}
                </div>
              </TableCell>
            ))}
            <TableCell style={commonCellStyle}>
              {user.merch
                .map(item => Number(item.price) * Number(item.quantity))
                .reduce((acc, curr) => acc + curr, 0)
                .toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                })}
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <div>Пользоваетели не найдены</div>
  );
};

export default MerchStatisticTable;
