import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { CardsColumnList } from 'src/widgets/CardsColumnList';
import { ContentColumnList } from 'src/widgets/ContentColumnList';
import { promoData } from 'src/utils/constants/promoInfoCardData';
import { contentData } from 'src/utils/constants/contentInfoCard';
import { PromoInfoCard } from 'src/entities/PromoInfoCard';
import { ContentInfoCard } from 'src/entities/ContentInfoCard';
import ContentContainer from 'src/widgets/ContentContainer';
import StaticsAnaliticsContainer from 'src/widgets/StatisticsAnalyticsContainer';
import diagramMain from 'src/shared/icons/diagramMain.svg'

import style from './MainPage.module.scss';

const MainPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <ContentContainer title="Статистика и Аналитика" link="/stats">
      <StaticsAnaliticsContainer diagramImage={diagramMain} classNameDiagram="" />
    </ContentContainer>
    <ContentContainer title="Промокоды" link="/promocode">
      <CardsColumnList promoData={promoData}>
        {[<PromoInfoCard />]}
      </CardsColumnList>
    </ContentContainer>
    <ContentContainer title="Контент" link="/content">
      <ContentColumnList contentData={contentData}>
        {[
          <ContentInfoCard
            ambassador=""
            content={{
              youTube: 0,
              hIcon: 0,
              telegram: 0,
              instagram: 0,
            }}
          />,
        ]}
      </ContentColumnList>
    </ContentContainer>
  </div>
);

export default MainPage;
