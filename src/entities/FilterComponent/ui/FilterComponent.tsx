import { useState, type FC } from 'react';
import { Button } from '@mui/material';
import { SortComponent } from 'src/entities/SortComponent';
import sortImage from 'src/shared/icons/sortImage.svg';
import type { FilterProps } from '../types/types';
import style from './FilterComponent.module.scss';

const FilterComponent: FC<FilterProps> = ({
  onSearch,
  searchTerm,
  handleChange,
  sortingOptions,
}) => (
  <div className={style.allcontent__filter}>
    <div className={style.allcontent__searchGroup}>
      <input
        className={style.allcontent__search}
        type="search"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        onClick={onSearch}
        sx={{
          background: '#47464699',
          border: 0,
          color: '#939393',
          textTransform: 'none',
          padding: 0,
          width: 152,
          height: 48,
        }}
        variant="outlined"
      >
        Найти
      </Button>
    </div>
    <div className={style.allcontent__sortGroup}>
      <div className={style.allcontent__sort}>
        <img
          className={style.allcontent__sortImage}
          src={sortImage}
          alt="Сортировка со стрелкой вниз"
        />
        <p className={style.allcontent__sortText}>Сортировка</p>
      </div>
      <SortComponent width={244} height={48} color="#FFFFFF" options={sortingOptions} />
    </div>
  </div>
);

export default FilterComponent;
