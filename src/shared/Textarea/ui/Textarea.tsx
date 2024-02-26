import { FC } from 'react';
import { ITextarea } from '../types/types';

import style from './Textarea.module.scss';

const Textarea: FC<ITextarea> = ({ width, height, value }) => {
  return <textarea value={value} style={{ width: width, height: height }} className={style.textarea} />;
};

export default Textarea;
