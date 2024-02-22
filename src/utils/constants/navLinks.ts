import main from 'src/shared/icons/main.svg';
import ambossadors from 'src/shared/icons/ambossadors.svg';
import promo from 'src/shared/icons/promo.svg';
import star from 'src/shared/icons/star.svg';
import merch from 'src/shared/icons/merch.svg';
import mail from 'src/shared/icons/mail.svg';
import stat from 'src/shared/icons/stat.svg';

const navbarLinks = [
  { text: 'Главная', to: '/', icon: main },
  { text: 'Амбассадоры', to: '/ambassadors', icon: ambossadors },
  { text: 'Промокоды', to: '/promocode', icon: promo },
  { text: 'Контент', to: '/content', icon: star },
  { text: 'Мерч', to: '/merch', icon: merch },
  { text: 'Рассылки', to: '/mailing', icon: mail },
  { text: 'Статистика и аналитика', to: '/stats', icon: stat },
];

export { navbarLinks };
