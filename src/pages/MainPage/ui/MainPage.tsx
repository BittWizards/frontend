import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { IPromocode } from 'src/shared/api/promocodes/dtos';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectPromocodes } from 'src/app/store/reducers/promocodes/model/promocodesSlice';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { selectContent } from 'src/app/store/reducers/contents/model/contentsSlice';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { getAllContent } from 'src/shared/api/content';
import { getAllPromocodes } from 'src/shared/api/promocodes';

import { Navbar } from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { AmbassadorsInfoCard } from 'src/entities/AmbassadorsInfoCard';
import { PromoInfoCard } from 'src/entities/PromoInfoCard';
import { ContentInfoCard } from 'src/entities/ContentInfoCard';
import { ContentContainer } from 'src/widgets/ContentContainer';
import { StaticsAnaliticsContainer } from 'src/widgets/StatisticsAnalyticsContainer';
import { Loader } from 'src/shared/Loader';
import diagramMain from 'src/shared/icons/diagramMain.svg';

import style from './MainPage.module.scss';
import type { IAmbassador } from '../../../shared/api/ambassadors/dtos';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const promocodes = useAppSelector(selectPromocodes);
  const ambassadors = useAppSelector(selectAmbassadors);
  const content = useAppSelector(selectContent);

  useEffect(() => {
    dispatch(getAllAmbassadors());
    dispatch(getAllContent());
    dispatch(getAllPromocodes());
  }, [dispatch]);

  let latestPromocodes: IPromocode[] = [];

  if (promocodes && promocodes.promocodes.length > 0) {
    const sortedPromocodes = promocodes.promocodes
      .slice()
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    latestPromocodes = sortedPromocodes.slice(0, 4);
  }

  let latestAmbassadors: IAmbassador[] = [];

  if (ambassadors && ambassadors.ambassadors.length > 0) {
    const sortedAmbassadors = ambassadors.ambassadors
      .slice()
      .sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    latestAmbassadors = sortedAmbassadors.slice(0, 6);
  }



  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      {ambassadors.isLoading || promocodes.isLoading || content.isLoading ? (
        <div className={style.content}>
          <Loader />
        </div>
      ) : (
        <div className={style.content}>
          <ContentContainer title="Амбассадоры" link="/ambassadors">
            <div className={style.cardList}>
              {latestAmbassadors.map((ambassador, index) => (
                <AmbassadorsInfoCard key={uuidv4()} data={ambassador} />
              ))}
            </div>
          </ContentContainer>
          <ContentContainer title="Статистика и Аналитика" link="/stats">
            <StaticsAnaliticsContainer
              diagramImage={diagramMain}
              classNameDiagram=""
            />
          </ContentContainer>
          <ContentContainer title="Промокоды" link="/promocode">
            <div className={style.cardColumnList}>
              {latestPromocodes.map((promo, index) => (
                <PromoInfoCard key={uuidv4()} data={promo} />
              ))}
            </div>
          </ContentContainer>
          <ContentContainer title="Контент" link="/content">
            <div className={style.cardColumnList}>
              {content.allContent.map((content, index) => (
                <ContentInfoCard key={uuidv4()} data={content} />
              )).slice(0, 3)}
            </div>
          </ContentContainer>
        </div>
      )}
    </div>
  );
};

export default MainPage;