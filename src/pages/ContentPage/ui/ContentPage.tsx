import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';


import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { ContentUserCard } from 'src/widgets/ContentUserCard';
import { AllContentCard } from 'src/widgets/AllContentCard';
import { MainTabsNav } from 'src/entities/MainTabsNav';
import { FilterComponent } from 'src/entities/FilterComponent';
import { SortComponent } from 'src/entities/SortComponent';
import { getAllContent, getNewContent } from 'src/shared/api/content';
import { selectContent } from 'src/app/store/reducers/contents/model/contentsSlice';
import downloadImg from 'src/shared/icons/document-download.svg';

import { Loader } from '../../../shared/Loader';

import style from './ContentPage.module.scss';

import type { IAllContent } from 'src/shared/api/content/dtos';

const ContentPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNewContent());
    dispatch(getAllContent());
  }, [dispatch]);

  const contents = useAppSelector(selectContent);

  const [selectedOption, setSelectedOption] = useState('Новые отчеты');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IAllContent[]>([]);

  const sortingOptions = ['ФИО', 'Статус', 'Специальность', 'Дата', 'Рейтинг'];

  const tabs: string[] = ['Новые отчеты', 'Весь контент'];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setSearchResults(contents.allContent);
  }, [searchTerm]);

  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line max-len
    // const results = mockCardsData.filter(
    //   ambassador =>
    //     ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     ambassador.surname.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setSearchResults(results);
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
        {selectedOption === 'Весь контент' ? (
          <div className={style.allcontent}>
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
                  onSortChange={selectedOption => {
                    console.log('Selected sorting option:', selectedOption);
                  }}
                />
              </div>
            </div>
            {contents.isLoading ? (
              <Loader />
            ) : (
              <div className={style.allcontent__reitingList}>
                {contents.allContent.map(cardData => (
                  <AllContentCard key={cardData.id} data={cardData} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className={style.newDocuments}>
            <FilterComponent
              onSearch={onSearch}
              searchTerm={searchTerm}
              handleChange={handleChange}
            />
            {contents.isLoading ? (
              <Loader />
            ) : (
              <div className={style.cardsContainer}>
                {contents.newContent.map(cardData => (
                  <ContentUserCard key={cardData.id} data={cardData} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
