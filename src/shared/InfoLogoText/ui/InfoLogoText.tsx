import style from './InfoLogoText.module.scss';

import type { FC } from 'react';


type TInfoLogoTextProps = {
  icon: string;
  text: string;
};

const InfoLogoText: FC<TInfoLogoTextProps> = ({ icon, text }) => (
  <div className={style.wrapper}>
    <img src={icon} className={style.logo} alt="logo" />
    <p className={style.text}>{text}</p>
  </div>
);

export default InfoLogoText;
