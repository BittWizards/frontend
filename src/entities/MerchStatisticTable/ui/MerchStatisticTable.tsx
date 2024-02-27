import {
  TCardData,
  userCardsData,
} from 'src/utils/constants/ambassadorCardData';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import style from './MerchStatisticTable.module.scss';

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
  Shopper: 'Щопер',
  Backpack: 'Рюкзак',
  Bag: 'Сумка',
  Nosty: 'Ности',
  Discount: 'Скидка',
  Alice: 'Алиса',
  AliceBot: 'Алисабот',
  Club: 'Клуб',
};

const merchTypes = Object.values(referenceDictionary);

const MerchStatisticTable = () => {
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

  const merchCellStyle = {
    ...headerCellStyle,
    transform: 'rotate(-90deg)',
  };

  return userCardsData ? (
    <Table style={{ width: '100%' }}>
      <TableHead className={style.tableHead}>
        <TableRow className={style.tableRow}>
          <TableCell style={headerCellStyle}>Амбассадор</TableCell>
          {(
            Object.keys(referenceDictionary) as (keyof TReferenceDictionary)[]
          ).map(key => (
            <TableCell key={key} style={merchCellStyle}>
              {referenceDictionary[key]}
            </TableCell>
          ))}
          <TableCell style={headerCellStyle}>Общая сумма</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {userCardsData.map((user: TCardData) => (
          <TableRow key={user.id}>
            <TableCell style={commonCellStyle}>
              <div className={style.userInfoWrapper}>
                <img src={user.avatar} alt="Avatar" width={40} height={40} />
                <div className={style.userInfo}>
                  <span
                    className={style.name}
                  >{`${user.surname} ${user.name}`}</span>
                  <span className={`${style.name} ${style.tg}`}>
                    @{user.telegram}
                  </span>
                </div>
              </div>
            </TableCell>
            {merchTypes.map(merchType => (
              <TableCell key={merchType} style={commonCellStyle}>
                {user.merch
                  .filter(item => item.merchType === merchType)
                  .map(item => item.quantity)}
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <div>Пользоваетели не найдены</div>
  );
};

export default MerchStatisticTable;
