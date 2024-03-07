import main from 'src/shared/icons/view-grid.svg';
import ambossadors from 'src/shared/icons/ambossadors2.svg';
import promo from 'src/shared/icons/promo2.svg';
import star from 'src/shared/icons/star.svg';
import merch from 'src/shared/icons/gift.svg';
import mail from 'src/shared/icons/mail.svg';
import stat from 'src/shared/icons/chart-bar.svg';

const navbarLinks = [
  { text: 'Главная', to: '/', icon: main, notification: 0 },
  { text: 'Амбассадоры', to: '/ambassadors', icon: ambossadors, notification: 0 },
  { text: 'Промокоды', to: '/promocode', icon: promo, notification: 0 },
  { text: 'Контент', to: '/content', icon: star, notification: 0 },
  { text: 'Мерч', to: '/merch', icon: merch, notification: 0 },
  { text: 'Рассылки', to: '/mailing', icon: mail, notification: 0 },
  { text: 'Статистика и аналитика', to: '/stats', icon: stat, notification: 0 },
];

export { navbarLinks };
