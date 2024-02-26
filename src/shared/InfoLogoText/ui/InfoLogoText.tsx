import { FC } from 'react';

import style from './InfoLogoText.module.scss';

type TInfoLogoTextProps = {
  icon: string;
  text: string;
};

const InfoLogoText: FC<TInfoLogoTextProps> = ({ icon, text }) => {
  return (
    <div className={style.wrapper}>
      <img src={icon} className={style.logo} alt="logo" />
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default InfoLogoText;
