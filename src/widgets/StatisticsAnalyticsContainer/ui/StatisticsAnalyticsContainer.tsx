import style from './StatisticsAnalyticsContainer.module.scss';

import type { FC } from 'react';

import type { IStaticsAnalyticsContainerProps } from '../types/types';


const StatisticsAnalyticsContainer: FC<IStaticsAnalyticsContainerProps> = ({
  diagramImage,
  classNameDiagram,
}) => (
  <div className={style.statisticsAnalytics}>
    <h2 className={style.statisticsAnalytics__title}>Прирост амбассадоров</h2>
    <h3 className={style.statisticsAnalytics__subtitle}>
      Показатели на 2023 год (помесячно)
    </h3>
    <img
      className={classNameDiagram}
      src={diagramImage}
      alt="Диаграмма Прироста Амбассадоров"
    />
  </div>
);

export default StatisticsAnalyticsContainer;
