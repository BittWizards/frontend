import React from 'react';
import type { TContentColumnListProps } from '../types/types';

import style from './ContentColumnList.module.scss';

const ContentColumnList: React.FC<TContentColumnListProps> = ({
  contentData,
  children,
}) => (
  <div className={style.contentColumnList}>
    {contentData.map((contentElement, index) => (
      <React.Fragment key={index}>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, { ...contentElement })
            : null
        )}
      </React.Fragment>
    ))}
  </div>
);

export default ContentColumnList;
