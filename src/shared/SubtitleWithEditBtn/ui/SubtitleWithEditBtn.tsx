import type { FC } from 'react';

import editBtnIcon from 'src/shared/icons/pencil.svg';
import type { TSubtitleWithEditBtnProps } from '../types/type';

import style from './SubtitleWithEditBtn.module.scss';

const SubtitleWithEditBtn: FC<TSubtitleWithEditBtnProps> = ({ title }) => (
  <div className={style.ambassadorHeaderCard}>
    <h2 className={style.title}>{title}</h2>
    <div className={style.line} />
    <button type="button" className={style.editBtn} aria-label="Редактировать">
      <img src={editBtnIcon} alt="Edit" />
    </button>
  </div>
);

export default SubtitleWithEditBtn;
