import React from 'react';
import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { TContentColumnListProps } from '../types/types';

import style from './ContentColumnList.module.scss';

const ContentColumnList: FC<TContentColumnListProps> = ({
  contentData,
  children,
}) => (
  <div className={style.contentColumnList}>
    {contentData.map((contentElement, index) => (
      <React.Fragment key={uuidv4()}>
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
