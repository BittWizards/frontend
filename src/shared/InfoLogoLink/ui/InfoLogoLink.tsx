import { FC } from 'react';

import style from './InfoLogoLink.module.scss';

type TInfoLogoLinkProps = {
  icon: string;
  text: string;
  linkType: 'email' | 'tel' | 'website';
};

const InfoLogoLink: FC<TInfoLogoLinkProps> = ({ icon, text, linkType }) => {
  const linkProps =
    linkType === 'email'
      ? { href: `mailto:${text}` }
      : linkType === 'tel'
        ? { href: `tel:${text}` }
        : {};

  return (
    <div className={style.wrapper}>
      <img src={icon} className={style.logo} alt="logo" />
      {linkType === 'website' ? (
        <a
          className={style.link}
          href={text}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : linkType === 'email' || linkType === 'tel' ? (
        <a className={style.link} {...linkProps}>
          {text}
        </a>
      ) : (
        <p className={style.text}>
          <a {...linkProps}>{text}</a>
        </p>
      )}
    </div>
  );
};

export default InfoLogoLink;
