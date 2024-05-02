import { Select } from 'src/shared/Select';
import style from './OrderMerch.module.scss';
import { useAppSelector } from 'src/app/store/hooks';
import { RootState } from 'src/app/store/store';
import { useState } from 'react';
import { TMerchItem } from 'src/shared/api/merch/dtos';
import { TOrderMerchProps } from '../types/types';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@mui/material';

const OrderMerch: React.FC<TOrderMerchProps> = ({ index }) => {
  const types = useAppSelector((state: RootState) => state.merch.merchType);
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [merch, setMerch] = useState<TMerchItem | null>(null);

  const handleChange = (value: TMerchItem) => {
    setMerch(value);
    setValue(`merch.${index}`, value);
  };

  const uniqueObjects = types.filter(
    (obj, index, self) => index === self.findIndex(t => t.name === obj.name)
  );

  return (
    <>
      <ErrorMessage
        errors={errors}
        name={`merch.${index}`}
        render={({}) => (
          <p style={{ margin: 0, color: 'red', fontWeight: 'lighter' }}>
            Выберите один из вариантов
          </p>
        )}
      />
      <div className={style.rowTogether}>
        <Select
          onChange={(_, value: TMerchItem) => handleChange(value)}
          options={uniqueObjects}
          getOptionLabel={option => option.name}
          renderInput={params => (
            <TextField {...params} label="Выберите мерч" size="small" />
          )}
          width="333px"
          height="40px"
        />
        {merch && merch.size && (
          <Select
            value={merch}
            onChange={(_, value: TMerchItem) => handleChange(value)}
            options={types.filter(
              obj => obj.name === merch.name && obj.size !== null
            )}
            getOptionLabel={option => option.size}
            renderInput={params => (
              <TextField {...params} label="Выберите размер" size="small" />
            )}
            width="150px"
            height="40px"
          />
        )}
      </div>
    </>
  );
};

export default OrderMerch;
