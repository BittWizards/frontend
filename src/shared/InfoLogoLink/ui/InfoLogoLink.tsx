import type { FC } from 'react';
import { formatPhoneNumber } from '../model/formatTel';
import style from './InfoLogoLink.module.scss';

type TInfoLogoLinkProps = {
  icon: string;
  text: string;
  linkType: 'email' | 'tel' | 'website';
};

const generateEmailLinkProps = (text: string) => ({ href: `mailto:${text}` });
const generateTelLinkProps = (text: string) => ({ href: `tel:${text}` });
const generateWebsiteLinkProps = (text: string) => ({
  href: text,
  target: '_blank',
  rel: 'noopener noreferrer',
});

const InfoLogoLink: FC<TInfoLogoLinkProps> = ({ icon, text, linkType }) => {
  let linkProps = {};
  /* eslint-disable */
  switch (linkType) {
    case 'email':
      linkProps = generateEmailLinkProps(text);
      break;
    case 'tel':
      linkProps = generateTelLinkProps(text);
      break;
    case 'website':
      linkProps = generateWebsiteLinkProps(text);
      break;
    default:
      break;
  }

  const renderLink = () => (
    <a className={style.link} {...linkProps}>
      {linkType === 'tel' ? formatPhoneNumber(text) : text}
    </a>
  );

  return (
    <div className={style.wrapper}>
      <img src={icon} className={style.logo} alt="logo" />
      {linkType === 'website' ? (
        renderLink()
      ) : (
        <p className={style.text}>{renderLink()}</p>
      )}
    </div>
  );
};

export default InfoLogoLink;
