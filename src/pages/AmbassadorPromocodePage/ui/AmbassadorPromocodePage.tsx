import { useParams } from 'react-router-dom';

import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { tabsData } from '../model/data';
import { userCardsData } from 'src/utils/constants/ambassadorCardData';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';
import ButtonComponent from 'src/entities/Button';

import trashIcon from 'src/shared/icons/trash.svg';

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { formatDateString } from 'src/utils/constants/formatDate';

import style from './AmbassadorPromocodePage.module.scss';

const AmbassadorPromocodePage = () => {
  const { id } = useParams();
  const selectedUser = userCardsData.find(user => user.id === id);

  const commonCellStyle = {
    color: '#fff',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
  };

  const headerCellStyle = {
    color: '#fff',
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
        <AmbassadorHeaderCard
          title="Промокоды Амбассадора"
          data={selectedUser}
        />
        <div className={style.promoContainer}>
          <div className={style.promoContentWrapper}>
            <div className={style.contentColumn}>
              <span className={style.promoTitle}>Промокод</span>
              <span className={style.promoText}>{selectedUser.promocode}</span>
            </div>
            <div className={style.contentColumn}>
              <span className={style.promoTitle}>Активация</span>
              <span className={style.promoText}>
                {formatDateString(selectedUser.activationDate)}
              </span>
            </div>
          </div>
        </div>
        <div className={style.btnWrapper}>
          <ButtonComponent
            label="Изменить промокод"
            width={244}
            height={48}
            onClick={e => {
              console.log(e);
            }}
          />
        </div>
        <h3 className={style.tableTitle}>История промокодов</h3>
        <Table className={style.table}>
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableCell style={headerCellStyle}>№</TableCell>
              <TableCell style={headerCellStyle}>Промокод</TableCell>
              <TableCell style={headerCellStyle}>Дата</TableCell>
              <TableCell></TableCell> {/* Пустой столбец для иконки удаления */}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedUser.promocodes.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                <TableCell style={commonCellStyle}>{row.promocode}</TableCell>
                <TableCell style={commonCellStyle}>
                  {formatDateString(row.date)}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="delete">
                    <img src={trashIcon} alt="trashBtn" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ) : (
    <div>Пользоваетель с id ${id} не найден</div>
  );
};

export default AmbassadorPromocodePage;