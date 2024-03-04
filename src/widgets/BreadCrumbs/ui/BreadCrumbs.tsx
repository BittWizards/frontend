import type { FC } from 'react';

import type { To } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import chevronRight from 'src/shared/icons/chevron-right.svg';
import style from './BreadCrumbs.module.scss';


const BreadCrumbs: FC = () => {
  const { pathname } = useLocation();

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
      {pathname.startsWith('/ambassadors/1/detail') && (
        <>
          {renderNavLinkNext('/ambassadors', 'Амбассадоры')}
          <NavLink to='/ambassadors/1/detail' className={style.breadcrumbs__link}>Анкета Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith('/ambassadors/1/promocode') && (
        <>
          {renderNavLinkNext('/promocode', 'Промокоды')}
          <NavLink to='/ambassadors/1/promocode' className={style.breadcrumbs__link}>Промокоды Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith('/ambassadors/1/content') && (
        <>
          {renderNavLinkNext('/content', 'Контент')}
          <NavLink to='/ambassadors/1/content' className={style.breadcrumbs__link}>Контент Амбассадора</NavLink>
        </>
      )}
      {pathname.startsWith('/ambassadors/1/merch') && (
        <>
          {renderNavLinkNext('/merch', 'Мерч')}
          <NavLink to='/ambassadors/1/merch' className={style.breadcrumbs__link}>Мерч Амбассадора</NavLink>
        </>
      )}
    </nav>
  )
}


export default BreadCrumbs;
