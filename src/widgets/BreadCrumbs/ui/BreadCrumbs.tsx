import { useEffect, type FC } from 'react';

import type { To } from 'react-router-dom';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import chevronRight from 'src/shared/icons/chevron-right.svg';
import type { User } from 'src/utils/constants/types/types';
import style from './BreadCrumbs.module.scss';
import type { BreadCrumbsProps } from '../types/type';



const BreadCrumbs: React.FC<BreadCrumbsProps> = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const renderNavLink = (to: To, text: string) => (
    <>
      <div className={style.breadcrumbs__main}>
        <NavLink to='/' className={style.breadcrumbs__title}>Главная</NavLink>
        <img src={chevronRight} className={style.breadcrumbs__image} alt='Стрелка, указывающая путь' />
      </div>
      <NavLink to={to} className={style.breadcrumbs__link} >{text}</NavLink>
    </>
  );

  const renderNavLinkNext = (to: To, text: string) => (
    <>
      <div className={style.breadcrumbs__main}>
        <NavLink to='/' className={style.breadcrumbs__title}>Главная</NavLink>
        <img src={chevronRight} className={style.breadcrumbs__image} alt='Стрелка, указывающая путь' />
      </div>
      <div className={style.breadcrumbs__component}>
        <NavLink to={to} className={style.breadcrumbs__link__grey} >{text}</NavLink>
        <img src={chevronRight} className={style.breadcrumbs__image} alt='Стрелка, указывающая путь' />
      </div>
    </>
  );

  return (
    <nav className={style.breadcrumbs}>
      {pathname === '/ambassadors' && renderNavLink('/ambassadors', 'Амбассадоры')}
      {pathname === '/promocode' && renderNavLink('/promocode', 'Промокоды')}
      {pathname === '/content' && renderNavLink('/content', 'Контент')}
      {pathname === '/merch' && renderNavLink('/merch', 'Мерч')}
      {pathname === '/mailing' && renderNavLink('/mailing', 'Рассылки')}
      {pathname === '/stats' && renderNavLink('/stats', 'Статистика и Аналитика')}
      {pathname.startsWith(`/ambassadors/${id}/detail`) && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to={`/ambassadors/${id}/detail`} className={style.breadcrumbs__link}>Анкета Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith(`/ambassadors/${id}/promocode`) && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to={`/ambassadors/${id}/promocode`} className={style.breadcrumbs__link}>Промокоды Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith(`/ambassadors/${id}/content`) && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to={`/ambassadors/${id}/content`} className={style.breadcrumbs__link}>Контент Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith(`/ambassadors/${id}/merch`) && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to={`/ambassadors/${id}/merch`} className={style.breadcrumbs__link}>Мерч Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith(`/ambassadors/candidate/${id}/detail`) && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to={`/ambassadors/candidate/${id}/detail`} className={style.breadcrumbs__link}>Анкета кандидата</NavLink>
        </>
      )}
      {pathname.startsWith('/ambassadors/new-ambassador') && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to='/ambassadors/new-ambassador' className={style.breadcrumbs__link}>Новый Амбассадор</NavLink>
        </>
      )}
    </nav>
  )
}


export default BreadCrumbs;
