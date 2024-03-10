import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectPromocodes } from 'src/app/store/reducers/promocodes/model/promocodesSlice';
import {
  createAmbassadorsPromocode,
  deleteAmbassadorsPromocodeById,
  getAmbassadorsPromocodesById,
} from 'src/shared/api/promocodes';

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
  const { ambassadorPromocode, isLoading } = useAppSelector(selectPromocodes);

  const [openInputModal, setInputModalOpen] = useState(false);
  const [openChoiceModal, setChoiceModalOpen] = useState(false);
  const [promocodeId, setPromocodeId] = useState<number | null>(null);
  const [ambassadorId, setAmbassadorId] = useState<number | null>(null);

  const handleChoiceOpen = (id: number) => {
    setChoiceModalOpen(true);
    setPromocodeId(id);
  };

  const handleInputOpen = (id: number) => {
    setInputModalOpen(true);
    setAmbassadorId(id);
  };

  const handleDeleteConfirm = async () => {
    if (promocodeId !== null) {
      await dispatch(deleteAmbassadorsPromocodeById(promocodeId));
      await dispatch(getAmbassadorsPromocodesById(Number(id)));
      setPromocodeId(null);
    }

    setChoiceModalOpen(false);
  };

  const handleChangeConfirm = async (inputValue: string) => {
    if (ambassadorId !== null) {
      await dispatch(
        createAmbassadorsPromocode({
          ambassador: Number(ambassadorId),
          promocode: inputValue,
        })
      );
      await dispatch(getAmbassadorsPromocodesById(Number(id)));
      setAmbassadorId(null);
    }

    setInputModalOpen(false);
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

  const activePromocode = ambassadorPromocode.my_promocode.find(
    promo => promo.is_active
  );
  const nonActivePromocodes = ambassadorPromocode.my_promocode.filter(
    promo => !promo.is_active
  );

  useEffect(() => {
    dispatch(getAmbassadorsPromocodesById(Number(id)));
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={style.main}>
        <Navbar links={navbarLinks} />
        <div className={style.content}>
          <TabsNavBar tabs={tabsData} />
          <AmbassadorHeaderCard data={ambassadorPromocode} />
          <SubtitleWithEditBtn
            title="Промокоды Амбассадора"
            isWithBtn={false}
          />
          <div className={style.promoContainer}>
            <div className={style.promoContentWrapper}>
              <div className={style.contentColumn}>
                <span className={style.promoTitle}>Промокод</span>
                {activePromocode ? (
                  <span className={style.promoText}>
                    {activePromocode.promocode}
                  </span>
                ) : (
                  'Активного промокода нет'
                )}
              </div>
              {activePromocode ? (
                <div className={style.contentColumn}>
                  <span className={style.promoTitle}>Активация</span>
                  <span className={style.promoDate}>
                    {activePromocode
                      ? formatDateString(activePromocode.created_at)
                      : ''}
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          {activePromocode ? (
            <div className={style.btnWrapper}>
              <ButtonComponent
                label="Изменить промокод"
                width={244}
                height={48}
                onClick={() => handleInputOpen(Number(id))}
              />
              <ButtonSecondaryComponent
                label="Удалить"
                width={244}
                height={48}
                onClick={() => handleChoiceOpen(activePromocode.id)}
              />
            </div>
          ) : (
            <div className={style.btnWrapper}>
              <ButtonComponent
                label="Изменить промокод"
                width={244}
                height={48}
                onClick={() => handleInputOpen(Number(id))}
              />
            </div>
          )}

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
              {nonActivePromocodes.map((row, index) => (
                <TableRow key={uuidv4()}>
                  <TableCell style={commonCellStyle}>{index + 1}</TableCell>
                  <TableCell style={commonCellStyle}>{row.promocode}</TableCell>
                  <TableCell style={commonCellStyle}>
                    {formatDateString(row.created_at)}
                  </TableCell>
                  <TableCell style={commonCellStyle}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleChoiceOpen(row.id)}
                    >
                      <img src={trashIcon} alt="trashBtn" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
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
          onConfirm={() => {
            handleDeleteConfirm();
          }}
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
          onConfirm={inputValue => {
            handleChangeConfirm(inputValue);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default AmbassadorPromocodePage;
