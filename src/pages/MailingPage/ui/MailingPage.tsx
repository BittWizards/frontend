import { useEffect, useState } from 'react';
import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { ButtonComponent } from 'src/entities/Button';
import { SortComponent } from 'src/entities/SortComponent';
import {
  Box,
  Checkbox,
  Paper,
  TableContainer,
  TextField,
  styled,
} from '@mui/material';
import { NewMailingTable } from 'src/widgets/NewMailingTable';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { MailingDataGrid } from 'src/widgets/MailingDataGrid';
import type { TRow } from 'src/utils/constants/allMailingData';
import { FilterComponent } from 'src/entities/FilterComponent';
import { rows } from 'src/utils/constants/allMailingData';
import trashimg from 'src/shared/icons/trash.svg';
import style from './MailingPage.module.scss';
import { Select } from 'src/shared/Select';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';

import type { RootState } from 'src/app/store/store';
import { IAmbassador } from 'src/shared/api/ambassadors/dtos';
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { getProgramms } from 'src/shared/api/programms';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { postMail } from 'src/shared/api/mailing';
import { TMailPost } from 'src/shared/api/mailing/dtos';

const MailingPage: React.FC = () => {
  const methods = useForm();
  const genderOptions = { Женский: 'Female', Мужской: 'Male' };
  const [selectedOption, setSelectedOption] = useState('Новая рассылка');

  // константы для фильтров
  const [ambassadorSearch, setAmbassadorSearch] = useState('');
  const [genderSearch, setGenderSearch] = useState('');
  const [specSearch, setSpecSearch] = useState('');

  const [selected, setSelected] = useState<IAmbassador[]>([]);

  const tabs: string[] = ['Новая рассылка', 'Все рассылки'];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<TRow[]>([]);
  const sortingOptions = ['ФИО', 'Статус', 'Специальность', 'Дата', 'Рейтинг'];

  const ambassadors = useAppSelector(
    (state: RootState) => state.ambassadors.ambassadors
  );
  const programms = useAppSelector(
    (state: RootState) => state.programms.programms
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProgramms());
    dispatch(getAllAmbassadors());
  }, [dispatch]);

  const search = ambassadors
    .filter(ambassador =>
      ambassadorSearch
        ? `${ambassador.last_name} ${ambassador.first_name}`
            .toLowerCase()
            .includes(ambassadorSearch.toLowerCase()) ||
          `${ambassador.first_name} ${ambassador.last_name}`
            .toLowerCase()
            .includes(ambassadorSearch.toLowerCase()) ||
          ambassador.tg_acc
            .toLowerCase()
            .includes(ambassadorSearch.toLowerCase())
        : true
    )
    .filter(ambassador =>
      specSearch ? ambassador.ya_programm.includes(specSearch) : true
    )
    .filter(ambassador =>
      genderSearch
        ? ambassador.gender.includes(
            genderOptions[
              genderSearch as keyof { Женский: string; Мужской: string }
            ]
          )
        : true
    );

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
    marginRight: 8,
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
      backgroundColor: '#189251',
      '& .MuiSvgIcon-root': {
        fill: '#ebeef4',
      },
    },
    '&.MuiCheckbox-indeterminate': {
      color: '#ebeef4',
      backgroundColor: '#189251',
      '& .MuiSvgIcon-root': {
        fill: '#ebeef4',
      },
    },
  }));

  const logMessage = () => {};

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      methods.setValue('ambassadors', ambassadors);
      setSelected(ambassadors);
      return;
    }
    methods.setValue('ambassadors', []);
    setSelected([]);
  };

  const handleSelectAllCompletedGuideClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      methods.setValue(
        'ambassadors',
        ambassadors.filter(ambassador => ambassador.achievement != 'new')
      );
      setSelected(
        ambassadors.filter(ambassador => ambassador.achievement != 'new')
      );
      return;
    }
    methods.setValue(
      'ambassadors',
      selected.filter(ambassador => ambassador.achievement == 'new')
    );
    setSelected(selected.filter(ambassador => ambassador.achievement == 'new'));
  };

  const handleAmbassadorsChange = (value: IAmbassador[]) => {
    methods.setValue('ambassadors', value);
    setSelected(value);
  };

  const handleOnSubmit = (data: FieldValues) => {
    data['to_telegram'] = true;
    data['by_email'] = true;
    data['is_sent'] = true;
    dispatch(postMail({ body: data as TMailPost }));
  };

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
          <FormProvider {...methods}>
            <form className={style.newmailing} noValidate>
              <Controller
                name="ambassadors"
                control={methods.control}
                render={({ field }) => (
                  <Select
                    multiple={true}
                    disableCloseOnSelect
                    options={selected}
                    value={selected}
                    onChange={(_, v) => {
                      setSelected(v);
                      field.onChange(v);
                    }}
                    getOptionLabel={option =>
                      `${option.first_name} ${option.last_name}`
                    }
                    width="978px"
                    margin="0px 0px 8px 0px"
                    renderInput={params => (
                      <TextField
                        {...params}
                        label="Кому (Получатель или Список получателей)"
                      />
                    )}
                    ambassadorRender
                  />
                )}
              />
              <input
                className={`${style.newmailing__textfield} ${style.newmailing__textfield_small}`}
                type="text"
                placeholder="Тема рассылки"
                {...methods.register('title')}
              />
              <input
                className={`${style.newmailing__textfield} ${style.newmailing__textfield_big}`}
                type="text"
                placeholder="Текст рассылки"
                {...methods.register('text')}
              />
              <input
                className={style.newmailing__search}
                type="search"
                placeholder="Поиск"
                onChange={e => setAmbassadorSearch(e.target.value)}
              />
              <div className={style.newmailing__sortgroup}>
                <Select
                  width={220}
                  options={Object.keys(genderOptions)}
                  onChange={(_, value) => setGenderSearch(value)}
                  renderInput={params => <TextField {...params} label="Пол" />}
                />
                <Select
                  width={220}
                  options={programms.map(programm => programm.title)}
                  onChange={(_, value) => setSpecSearch(value)}
                  renderInput={params => (
                    <TextField {...params} label="Специальность" />
                  )}
                />
                <label className={style.newmailing__checkboxtext}>
                  <StyledCheckbox
                    onChange={handleSelectAllCompletedGuideClick}
                    indeterminate={
                      selected.filter(
                        ambassador => ambassador.achievement != 'new'
                      ).length > 0 &&
                      selected.filter(
                        ambassador => ambassador.achievement != 'new'
                      ).length <
                        ambassadors.filter(
                          ambassador => ambassador.achievement != 'new'
                        ).length
                    }
                    checked={
                      selected.filter(
                        ambassador => ambassador.achievement != 'new'
                      ).length > 0 &&
                      selected.filter(
                        ambassador => ambassador.achievement != 'new'
                      ).length ===
                        ambassadors.filter(
                          ambassador => ambassador.achievement != 'new'
                        ).length
                    }
                  />
                  Закончил гайд
                </label>
                <label className={style.newmailing__checkboxtext}>
                  <StyledCheckbox
                    onChange={handleSelectAllClick}
                    indeterminate={
                      selected.length > 0 &&
                      selected.length < ambassadors.length
                    }
                    checked={
                      selected.length > 0 &&
                      selected.length === ambassadors.length
                    }
                  />
                  Выбрать всех
                </label>
              </div>
              <Box sx={{ width: '976px' }}>
                <Paper
                  sx={{
                    width: '100%',
                    mb: 2,
                    backgroundColor: 'transparent',
                    border: 'solid 1px #474646',
                  }}
                >
                  <TableContainer
                    sx={{
                      maxHeight: 400,
                      '&::-webkit-scrollbar': {
                        width: '8px',
                        backgroundColor: '#5f5f5f',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        borderRadius: '10px',
                        WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ebeef4',
                      },
                    }}
                  >
                    <NewMailingTable
                      options={search}
                      selected={selected}
                      setSelected={handleAmbassadorsChange}
                    />
                  </TableContainer>
                </Paper>
              </Box>
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
                  onClick={methods.handleSubmit(handleOnSubmit)}
                />
                <ButtonSecondaryComponent
                  label="Удалить"
                  width={244}
                  height={48}
                  onClick={() => logMessage()}
                />
              </div>
            </form>
          </FormProvider>
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
                  <div className={style.sortWrapper}>
                    <img
                      src={trashimg}
                      className={style.trashImg}
                      alt="Иконка удаления"
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
