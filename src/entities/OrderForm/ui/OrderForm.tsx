import { type FC, useEffect } from 'react';

import { PostalDetails } from 'src/entities/PostalDetails';
import { Textarea } from 'src/shared/Textarea';

import { Input } from 'src/shared/Input';
import phone from 'src/shared/icons/phone.svg';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { useAppDispatch } from 'src/app/store/hooks';
import { getMerchTypes } from 'src/shared/api/merch';
import { OrderMerch } from 'src/entities/OrderMerch';
import { useFormContext } from 'react-hook-form';
import type { TOrderFormProps } from '../types/types';
import style from './OrderForm.module.scss';

const OrderForm: FC<TOrderFormProps> = ({ ambassador }) => {
  const dispatch = useAppDispatch();
  const { watch } = useFormContext();

  useEffect(() => {
    dispatch(getMerchTypes());
  }, [dispatch]);

  return (
    <div>
      <div className={style.container}>
        <div className={style.row}>
          <PostalDetails />
          <FieldsetContainer title="Контактная информация">
            <div className={style.inputIcons}>
              <img src={phone} className={style.icon} alt="phone" />
              <Input type="phone" placeholder="+7 " name="phone" />
            </div>
          </FieldsetContainer>
        </div>
        <div className={style.row}>
          <FieldsetContainer title="Данные для мерча">
            <div className={style.info}>
              <p className={style.name}>
                Размер одежды: {ambassador?.size.clothes_size}{' '}
              </p>
              <p className={style.name}>
                Размер ноги: {ambassador?.size.foot_size}{' '}
              </p>
            </div>
          </FieldsetContainer>
        </div>
        <div className={style.row}>
          <FieldsetContainer title="Тип мерча">
            <OrderMerch index={0} required />
            {watch('merch.0') && <OrderMerch index={1} />}
            {watch('merch.1') && <OrderMerch index={2} />}
          </FieldsetContainer>
        </div>
      </div>
      <label className={`${style.label}`}>
        Дополнительная информация
        <fieldset className={`${style.fieldset}`}>
          <Textarea
            width={976}
            height={155}
            placeholder="Дополнительная информация о заявке"
            name="comment"
          />
        </fieldset>
      </label>
    </div>
  );
};

export default OrderForm;
