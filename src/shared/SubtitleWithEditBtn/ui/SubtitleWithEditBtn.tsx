import type { FC } from 'react';

import type { TSubtitleWithEditBtnProps } from '../types/type';

import editBtnIcon from 'src/shared/icons/pencil.svg';

import style from './SubtitleWithEditBtn.module.scss';

const SubtitleWithEditBtn: FC<TSubtitleWithEditBtnProps> = ({ title }) => (
  <div className={style.ambassadorHeaderCard}>
    <h2 className={style.title}>{title}</h2>
    <div className={style.line}></div>
    <button className={style.editBtn}>
      <img src={editBtnIcon} />
    </button>
  </div>
);

export default SubtitleWithEditBtn;
