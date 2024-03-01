import type { FC} from 'react';
import { useEffect, useState } from 'react';

import { colorList } from '../model/data';

import type { TPromoInfoCardProps } from '../types/types';

import style from './PromoInfoCard.module.scss';

let currentColorIndex = 0;

const PromoInfoCard: FC<TPromoInfoCardProps> = ({
  promoCode,
  ambassador,
  date,
}) => {
  const [localColorIndex, setLocalColorIndex] = useState(currentColorIndex);

  useEffect(() => {
    setLocalColorIndex(currentColorIndex);
    currentColorIndex = (currentColorIndex + 1) % colorList.length;
  }, []);

  const borderColor = colorList[localColorIndex];

  if (!promoCode || !ambassador || !date) {
    return null;
  }

  const promoDate = new Date(date);
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
      <h2 className={style.title}>Промокод “{promoCode}”</h2>
      <span className={style.name}>Амбассадор : {ambassador}</span>
      <span className={style.date}>
        {dateText} | {formattedTime}
      </span>
    </div>
  );
};

export default PromoInfoCard;
