import { type FC, useEffect, useState } from 'react';

import { PostalDetails } from 'src/entities/PostalDetails';
import { Textarea } from 'src/shared/Textarea';
import type { IOrderForm } from '../types/types';

import style from './OrderForm.module.scss';
import { Input } from 'src/shared/Input';
import phone from '../../../shared/icons/phone.svg';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import Select from 'src/shared/Select/ui/Select';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getMerchTypes } from 'src/shared/api/merch';
import { RootState } from 'src/app/store/store';
import { TMerchItem } from 'src/shared/api/merch/dtos';
import { useFormContext } from 'react-hook-form';

const OrderForm: FC<IOrderForm> = ({ ambassador }) => {
  const { register } = useFormContext();
  const [merch1, setMerch1]: [TMerchItem | null, Function] =
    useState<any>(null);
  const [merch2, setMerch2]: [TMerchItem | null, Function] =
    useState<any>(null);
  const [merch3, setMerch3]: [TMerchItem | null, Function] =
    useState<any>(null);
  const types = useAppSelector((state: RootState) => state.merch.merchType);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMerchTypes());
  }, [dispatch]);

  const uniqueObjects = types.filter(
    (obj, index, self) => index === self.findIndex(t => t.name === obj.name)
  );

  const onChange1 = (value: TMerchItem | null) => {
    setMerch1(value);
  };
  const onChange2 = (value: TMerchItem | null) => {
    setMerch2(value);
  };
  const onChange3 = (value: TMerchItem | null) => {
    setMerch3(value);
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.row}>
          <PostalDetails prefix="ambassador" />
          <FieldsetContainer title="Контактная информация">
            <div className={style.inputIcons}>
              <img src={phone} className={style.icon} alt="phone" />
              <Input
                type="phone"
                placeholder="+7 "
                {...register('ambassador.phone')}
              />
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
            <div className={style.rowTogether}>
              <Select
                onChange={onChange1}
                options={uniqueObjects}
                optionLabel={option => option.name}
                label="Выберите мерч"
                width="333px"
                height="40px"
              />
              {merch1 && merch1.size && (
                <Select
                  onChange={onChange1}
                  options={types.filter(obj => obj.name === merch1.name)}
                  optionLabel={option => option.size}
                  label="Выберите размер"
                  width="150px"
                  height="40px"
                />
              )}
            </div>
            <div className={style.rowTogether}>
              <Select
                onChange={onChange2}
                options={uniqueObjects}
                optionLabel={option => option.name}
                label="Выберите мерч"
                width="333px"
                height="40px"
              />
              {merch2 && merch2.size && (
                <Select
                  onChange={onChange2}
                  options={types.filter(obj => obj.name === merch2.name)}
                  optionLabel={option => option.size}
                  label="Выберите размер"
                  width="150px"
                  height="40px"
                />
              )}
            </div>
            <div className={style.rowTogether}>
              <Select
                onChange={onChange3}
                options={uniqueObjects}
                optionLabel={option => option.name}
                label="Выберите мерч"
                width="333px"
                height="40px"
              />
              {merch3 && merch3.size && (
                <Select
                  onChange={onChange3}
                  options={types.filter(obj => obj.name === merch3.name)}
                  optionLabel={option => option.size}
                  label="Выберите размер"
                  width="150px"
                  height="40px"
                />
              )}
            </div>
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
            name="info"
          />
        </fieldset>
      </label>
    </div>
  );
};

export default OrderForm;
