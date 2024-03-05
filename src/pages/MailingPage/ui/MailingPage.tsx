import { useEffect, useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { ButtonComponent } from 'src/entities/Button';
import { SortComponent } from 'src/entities/SortComponent';
import { Checkbox, styled } from '@mui/material';
import { NewMailingTable } from 'src/widgets/NewMailingTable';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { MailingDataGrid } from 'src/widgets/MailingDataGrid';
import type { TRow } from 'src/utils/constants/allMailingData';
import { FilterComponent } from 'src/entities/FilterComponent';
import { rows } from 'src/utils/constants/allMailingData';
import style from './MailingPage.module.scss';

const MailingPage = () => {
  const genderOptions = ['Пол', 'Женский', 'Мужской'];
  const jobOptions = [
    'Специальность',
    'Разраб',
    'Дизайнер',
    'Аналитик',
    'Продакт',
    'Проджект',
  ];
  const [selectedOption, setSelectedOption] = useState('Новая рассылка');
  const tabs: string[] = ['Новая рассылка', 'Все рассылки'];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<TRow[]>([]);
  const sortingOptions = ['ФИО', 'Статус', 'Специальность', 'Дата', 'Рейтинг'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setSearchResults(rows);
  }, [searchTerm]);

  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line max-len
    const results = rows.filter(
      ambassador =>
        ambassador.date.toLowerCase().includes(searchTerm) ||
        ambassador.recipients
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        ambassador.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#ebeef4',
    border: '1px solid #939393',
    '& .MuiSvgIcon-root path': {
      fill: '#ebeef4',
    },
    '&:hover': {
      border: '1px solid #512da8',
      backgroundColor: '#ebeef4',
    },
    '&.Mui-checked': {
      color: '#ebeef4',
      backgroundColor: '#14ae5c',
      '& .MuiSvgIcon-root path': {
        fill: '#ebeef4',
      },
    },
  }));
  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        {selectedOption === 'Новая рассылка' ? (
          <form className={style.newmailing} noValidate>
            <input
              className={`${style.newmailing__textfield} ${style.newmailing__textfield_get}`}
              type="text"
              placeholder="Кому (Получатель или Список получателей)"
            />
            <input
              className={`${style.newmailing__textfield} ${style.newmailing__textfield_small}`}
              type="text"
              placeholder="Текст рассылки"
            />
            <input
              className={`${style.newmailing__textfield} ${style.newmailing__textfield_big}`}
              type="text"
              placeholder="Текст рассылки"
            />
            <input
              className={style.newmailing__search}
              type="search"
              placeholder="Поиск"
            />
            <div className={style.newmailing__sortgroup}>
              <div className={style.newmailing__dropdown}>
                <SortComponent
                  width={220}
                  height={48}
                  options={genderOptions}
                  onSortChange={selectedOption => {
                    console.log('Selected sorting option:', selectedOption);
                  }}
                />
                <SortComponent
                  width={220}
                  height={48}
                  options={jobOptions}
                  onSortChange={selectedOption => {
                    console.log('Selected sorting option:', selectedOption);
                  }}
                />
              </div>
              <ul className={style.newmailing__checkboxGroup}>
                <li className={style.newmailing__checkbox}>
                  <StyledCheckbox className={style.newmailing__sortgroup} />
                  <p className={style.newmailing__checkboxtext}>
                    Закончил гайд
                  </p>
                </li>
                <li className={style.newmailing__checkbox}>
                  <StyledCheckbox />
                  <p className={style.newmailing__checkboxtext}>Выбрать всех</p>
                </li>
              </ul>
            </div>
            <NewMailingTable />
            <div className={style.newmailing__checkboxdown}>
              <StyledCheckbox className={style.newmailing__sortgroup} />
              <p className={style.newmailing__checkboxtext}>
                Отложенная отправка
              </p>
            </div>
            <div className={style.newmailing__buttonsGroup}>
              <ButtonComponent
                label="Отправить"
                width={244}
                height={48}
                onClick={() => console.log(`Отправить рассылку`)}
              />
              <ButtonSecondaryComponent
                label="Удалить"
                width={244}
                height={48}
                onClick={() => console.log(`Удалить рассылку`)}
              />
            </div>
          </form>
        ) : (
          <div className={style.cardsContainer}>
            <div className={style.pageContent}>
              <div className={style.header}>
                <div className={style.headerColumn}>
                  <h2 className={style.title}>Рассылки</h2>
                  <ButtonComponent
                    label="Создать рассылку"
                    width={244}
                    height={48}
                    onClick={() => setSelectedOption('Новая рассылка')}
                  />
                </div>
                <div className={style.rightWrapper}>
                  <FilterComponent
                    onSearch={onSearch}
                    searchTerm={searchTerm}
                    handleChange={handleChange}
                  />
                  <SortComponent
                    width={220}
                    height={48}
                    options={sortingOptions}
                    onSortChange={selectedOption => {
                      console.log('Selected sorting option:', selectedOption);
                    }}
                  />
                </div>
              </div>
              <MailingDataGrid rows={searchResults} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MailingPage;
