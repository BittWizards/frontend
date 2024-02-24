import Navbar from 'src/widgets/NavBar/index';
import { navbarLinks } from 'src/utils/constants/navLinks';
import ContentContainer from 'src/widgets/ContentContainer';
import ambassadorDiagram from 'src/shared/icons/ambassadorDiagram.svg';
import diagramMain from 'src/shared/icons/diagramMain.svg';
import merchDiagram from 'src/shared/icons/wavesDiagram.svg';
import promocodeDiagram from 'src/shared/icons/promocodeDiagramNew.svg';

import StaticsAnaliticsContainer from 'src/widgets/StatisticsAnalyticsContainer';
import style from './StatsPage.module.scss';

const StatsPage = () => (
  <div className={style.main}>
    <Navbar links={navbarLinks} />
    <div className={style.statisticsAnalyticsPage}>
      <ContentContainer title="Амбассадоры" link="/ambassadors">
        <StaticsAnaliticsContainer diagramImage={ambassadorDiagram}
          classNameDiagram={style.statisticsAnalyticsPage__ambassadorDiagram} />
      </ContentContainer>
      <ContentContainer title="Контент" link="/content">
        <StaticsAnaliticsContainer diagramImage={diagramMain} classNameDiagram="" />
      </ContentContainer>
      <ContentContainer title="Мерч" link="/merch">
        <StaticsAnaliticsContainer diagramImage={merchDiagram} classNameDiagram="" />
      </ContentContainer>
      <ContentContainer title="Промокоды" link="/promocode">
        <StaticsAnaliticsContainer diagramImage={promocodeDiagram}
          classNameDiagram={style.statisticsAnalyticsPage__promocodeDiagram} />
      </ContentContainer>
    </div>
  </div>
);

export default StatsPage;
