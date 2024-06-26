import editBtnIcon from 'src/shared/icons/pencil.svg';

import style from './SubtitleWithEditBtn.module.scss';

import type { FC } from 'react';

import type { TSubtitleWithEditBtnProps } from '../types/type';


const SubtitleWithEditBtn: FC<TSubtitleWithEditBtnProps> = ({
  title,
  isWithBtn = true,
}) => (
  <div className={style.ambassadorHeaderCard}>
    <h2 className={style.title}>{title}</h2>
    <div className={style.line} />
    {isWithBtn && (
      <button
        type="button"
        className={style.editBtn}
        aria-label="Редактировать"
      >
        <img src={editBtnIcon} alt="Edit" />
      </button>
    )}
  </div>
);

export default SubtitleWithEditBtn;
