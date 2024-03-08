import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { colorList } from '../model/data';

import style from './PromoInfoCard.module.scss';
import type { TPromoInfoCardProps } from '../types/types';

let currentColorIndex = 0;

const PromoInfoCard: FC<TPromoInfoCardProps> = ({ data }) => {
  const [localColorIndex, setLocalColorIndex] = useState(currentColorIndex);

  useEffect(() => {
    setLocalColorIndex(currentColorIndex);
    currentColorIndex = (currentColorIndex + 1) % colorList.length;
  }, []);

  const borderColor = colorList[localColorIndex];

  const promoDate = new Date(data.created_at);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday =
    promoDate.getDate() === today.getDate() &&
    promoDate.getMonth() === today.getMonth() &&
    promoDate.getFullYear() === today.getFullYear();
  const isYesterday =
    promoDate.getDate() === yesterday.getDate() &&
    promoDate.getMonth() === yesterday.getMonth() &&
    promoDate.getFullYear() === yesterday.getFullYear();

  const formatNumber = (number: number): string =>
    number < 10 ? `0${number}` : `${number}`;

  let dateText = '';

  if (isToday) {
    dateText = 'Сегодня';
  } else if (isYesterday) {
    dateText = 'Вчера';
  } else {
    dateText = `${formatNumber(promoDate.getDate())}.${formatNumber(
      promoDate.getMonth() + 1
    )}.${promoDate.getFullYear()}`;
  }

  const formattedTime = `${formatNumber(promoDate.getHours())}:${formatNumber(
    promoDate.getMinutes()
  )}`;

  return (
    <div className={style.card} style={{ borderLeftColor: borderColor }}>
      <h2 className={style.title}>Промокод “{data.promocode}”</h2>
      <span className={style.name}>
        Амбассадор : {data.ambassador.last_name} {data.ambassador.first_name}
      </span>
      <span className={style.date}>
        {dateText} | {formattedTime}
      </span>
    </div>
  );
};

export default PromoInfoCard;
