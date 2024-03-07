import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectPromocodes } from 'src/app/store/reducers/promocodes/model/promocodesSlice';
import { getAmbassadorsPromocodesById } from 'src/shared/api/promocodes';

import { Loader } from 'src/shared/Loader';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { TabsNavBar } from 'src/entities/TabsNavBar';
import { AmbassadorHeaderCard } from 'src/entities/AmbassadorHeaderCard';
import { ButtonComponent } from 'src/entities/Button';
import { ChoiceModal, InputModal } from 'src/entities/Modals';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { SubtitleWithEditBtn } from 'src/shared/SubtitleWithEditBtn';

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
import { tabsData } from '../model/data';

import style from './AmbassadorPromocodePage.module.scss';

const AmbassadorPromocodePage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const promocodesList = useAppSelector(selectPromocodes);
  console.log('promocodesList', promocodesList);

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      dispatch(getAmbassadorsPromocodesById(numericId));
    }
  }, []);

  const [openInputModal, setInputModalOpen] = useState(false);
  const [openChoiceModal, setChoiceModalOpen] = useState(false);

  const handleChoiceOpen = () => {
    setChoiceModalOpen(true);
  };
  const handleInputOpen = () => {
    setInputModalOpen(true);
  };

  const handleClose = () => {
    setInputModalOpen(false);
    setChoiceModalOpen(false);
  };

  const commonCellStyle = {
    color: '#fff',
    fontFamily: 'YSText',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.2',
    borderBottom: '1px solid #47464699',
  };

  const headerCellStyle = {
    color: '#fff',
    fontFamily: 'YSDisplay',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
  };

  const activePromocode = promocodesList.ambassadorPromocode.my_promocode.find(
    promo => promo.is_active
  );

  return promocodesList.isLoading ? (
    <Loader />
  ) : (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <TabsNavBar tabs={tabsData} />
        <AmbassadorHeaderCard data={promocodesList.ambassadorPromocode} />
        <SubtitleWithEditBtn title="Промокоды Амбассадора" />
        <div className={style.promoContainer}>
          <div className={style.promoContentWrapper}>
            <div className={style.contentColumn}>
              <span className={style.promoTitle}>Промокод</span>
              <span className={style.promoText}>
                {activePromocode
                  ? activePromocode.promocode
                  : 'Активного промокода нет'}
              </span>
            </div>
            <div className={style.contentColumn}>
              <span className={style.promoTitle}>Активация</span>
              <span className={style.promoText}>
                {activePromocode
                  ? formatDateString(activePromocode.created_at)
                  : ''}
              </span>
            </div>
          </div>
        </div>
        <div className={style.btnWrapper}>
          <ButtonComponent
            label="Изменить промокод"
            width={244}
            height={48}
            onClick={handleInputOpen}
          />
          <ButtonSecondaryComponent
            label="Удалить"
            width={244}
            height={48}
            onClick={handleChoiceOpen}
          />
        </div>
        <h3 className={style.tableTitle}>История промокодов</h3>
        <Table className={style.table}>
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableCell style={headerCellStyle}>№</TableCell>
              <TableCell style={headerCellStyle}>Промокод</TableCell>
              <TableCell style={headerCellStyle}>Дата</TableCell>
              <TableCell /> {/* Пустой столбец для иконки удаления */}
            </TableRow>
          </TableHead>
          <TableBody>
            {promocodesList.ambassadorPromocode.my_promocode.map(
              (row, index) => (
                <TableRow key={uuidv4()}>
                  <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                  <TableCell style={commonCellStyle}>{row.promocode}</TableCell>
                  <TableCell style={commonCellStyle}>
                    {formatDateString(row.created_at)}
                  </TableCell>
                  <TableCell style={commonCellStyle}>
                    <IconButton aria-label="delete" onClick={handleChoiceOpen}>
                      <img src={trashIcon} alt="trashBtn" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      {openChoiceModal ? (
        <ChoiceModal
          open={openChoiceModal}
          onClose={handleClose}
          title="Удалить  промокод"
          content="Вы действительно хотите удалить активный промокод и перенести его в историю?"
          onCancelLabel="Отменить"
          onConfirmLabel="Удалить"
          onCancel={handleClose}
          onConfirm={handleClose}
        />
      ) : (
        ''
      )}
      {openInputModal ? (
        <InputModal
          open={openInputModal}
          onClose={handleClose}
          title="Изменить промокод "
          content="Введите новый промокод"
          tableSpan="Текущий промокод сохранится в истории промокодов"
          placeholderTextArea="Введите промокод"
          heightTextArea={43}
          onCancelLabel="Отменить"
          onConfirmLabel="Сохранить"
          onCancel={handleClose}
          onConfirm={handleClose}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default AmbassadorPromocodePage;
