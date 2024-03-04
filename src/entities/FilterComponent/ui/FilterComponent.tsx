import { useState, type FC, MouseEvent } from 'react';
import { Button } from '@mui/material';
import { SortComponent } from 'src/entities/SortComponent';
import sortImage from 'src/shared/icons/sortImage.svg';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import type { FilterProps } from '../types/types';
import style from './FilterComponent.module.scss';

const FilterComponent: FC<FilterProps> = ({
  onSearch,
  searchTerm,
  handleChange,
}) => (
  <div className={style.allcontent__searchGroup}>
    <input
      className={style.allcontent__search}
      type="search"
      placeholder="Поиск"
      value={searchTerm}
      onChange={handleChange}
    />
    <ButtonSecondaryComponent label='Найти' width={152} height={48}
      onClick={onSearch} />
  </div>
);

export default FilterComponent;
