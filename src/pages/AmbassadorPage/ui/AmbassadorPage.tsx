import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import downloadImg from 'src/shared/icons/document-download.svg';
import type { IAmbassador } from 'src/shared/api/ambassadors/dtos';

import type { ChangeEvent, MouseEvent } from 'react';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorCard } from 'src/widgets/AmbassadorCard';
import { ButtonComponent } from 'src/entities/Button';
import { AmbassadorTable } from 'src/widgets/AmbassadorTable';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { FilterComponent } from 'src/entities/FilterComponent';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { SortComponent } from 'src/entities/SortComponent';
import { Loader } from 'src/shared/Loader';

import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import {
  sortByDate,
  sortBySpecialty,
  sortByStatus,
  sortBySurname,
} from '../model/sortFunctions';
import { sortingOptions } from '../model/const';

import style from './AmbassadorPage.module.scss';

const AmbassadorPage = () => {
  const dispatch = useAppDispatch();
  const [searchResults, setSearchResults] = useState<IAmbassador[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('Новые запросы');
  useEffect(() => {
    dispatch(getAllAmbassadors());
  }, [dispatch]);



  const { ambassadors, isLoading } = useAppSelector(selectAmbassadors);

  const navigate = useNavigate();


  const [searchTerm, setSearchTerm] = useState('');


  const tabs: string[] = ['Новые запросы', 'Все амбассадоры'];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line max-len
    const results = ambassadors.filter(
      ambassador =>
        ambassador.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        ambassador.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };




  const handleSortChange = (selectedOption: string | null) => {
    if (selectedOption !== null) {
      let sortedResults = [...searchResults];

      switch (selectedOption) {
        case 'Дата':
          sortedResults = sortByDate(sortedResults).reverse();
          break;
        case 'ФИО':
          sortedResults = sortBySurname(sortedResults);
          break;
        case 'Специальность':
          sortedResults = sortBySpecialty(sortedResults);

          break;
        case 'Статус':
          sortedResults = sortByStatus(sortedResults);
          break;

        default:
          break;
      }

      setSearchResults(sortedResults);
    }
  };

  useEffect(() => {
    setSearchResults(ambassadors);
  }, [searchTerm]);



  useEffect(() => {
    if (selectedOption === 'Новые запросы') {
      setSearchResults(sortByDate(ambassadors).reverse());
    } else {
      setSearchResults(sortByStatus(ambassadors));
    }

  }, [ambassadors, selectedOption]);

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <MainTabsNav
          tabs={tabs}
          selectedTab={selectedOption}
          onSelectTab={setSelectedOption}
        />
        {selectedOption === 'Новые запросы' ? (
          <>
            <div className={style.pageHeader}>
              <div className={style.titleBtnWrapper}>
                <h2 className={style.pageTitle}>Амбассадоры</h2>
                <ButtonComponent
                  label="Добавить амбассадора"
                  width={244}
                  height={48}
                  onClick={() => navigate('new-ambassador')}
                />
              </div>
              <FilterComponent
                onSearch={onSearch}
                searchTerm={searchTerm}
                handleChange={handleChange}
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className={style.cardsContainer}>
                {searchResults.map(cardData => (
                  <AmbassadorCard key={cardData.id} data={cardData} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className={style.navList}>
              <div className={style.titleBtnWrapper}>
                <h2 className={style.pageTitle}>Амбассадоры</h2>
                <ButtonComponent
                  label="Добавить амбассадора"
                  width={244}
                  height={48}
                  onClick={() => navigate('new-ambassador', { replace: true })}
                />
              </div>
              <div className={style.filterWrapper}>
                <FilterComponent
                  onSearch={onSearch}
                  searchTerm={searchTerm}
                  handleChange={handleChange}
                />
                <div className={style.sortWrapper}>
                  <img
                    src={downloadImg}
                    className={style.downloadImg}
                    alt="Иконка скачивания"
                  />
                  <SortComponent
                    width={220}
                    height={48}
                    options={sortingOptions}
                    onSortChange={handleSortChange}
                  />
                </div>
              </div>
            </div>
            {isLoading ? <Loader /> : <AmbassadorTable data={searchResults} />}
          </>
        )}
      </div>
    </div>
  );
};

export default AmbassadorPage;
