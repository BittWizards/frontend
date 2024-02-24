import type { FC } from 'react';

import diagram from 'src/shared/icons/diagramMain.svg';

import style from './StatisticsAnalyticsContainer.module.scss';

const StatisticsAnalyticsContainer: FC = () => (
  <div className={style.statisticsAnalytics}>
    <h2 className={style.statisticsAnalytics__title}>Прирост амбассадоров</h2>
    <h3 className={style.statisticsAnalytics__subtitle}>Показатели на 2023 год (помесячно)</h3>
    <img className={style.statisticsAnalytics__diagram} src={diagram} alt='ДиаграммаПрироста Амбассадоров' />
  </div>
);

export default StatisticsAnalyticsContainer
