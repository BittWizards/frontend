/* eslint-disable */
import avatar from 'src/shared/icons/userAvatar.png';

type TColumn = {
  id: string;
  label: string;
  width: number;
};

type TRow = {
  id: number;
  date: string;
  recipients: string;
  text: string;
  avatar: string;
  name: string;
  surname: string;
  position: string;
  gender: string;
  telegram: string;
};

const columns: TColumn[] = [
  { id: 'date', label: 'Дата', width: 180 },
  { id: 'recipients', label: 'Получатели', width: 360 },
  { id: 'text', label: 'Текст', width: 360 },
];

const rows: TRow[] = [
  {
    id: 1,
    date: '2023-10-11T13:45:00',
    recipients:
      '(25) user@example.com, user@example.com, user@example.com, user@example.com, user@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Female_2.jpeg',
    name: 'Мария',
    surname: 'Сидорова',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'maria',
  },
  {
    id: 2,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Female_3.jpeg',
    name: 'Ольга',
    surname: 'Иванова',
    position: 'Java-разработчик',
    gender: 'жен',
    telegram: 'olga',
  },
  {
    id: 3,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Female_4.jpeg',
    name: 'Наталья',
    surname: 'Морозова',
    position: 'DevOps инженер',
    gender: 'жен',
    telegram: 'natasha',
  },
  {
    id: 4,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Female_5.jpeg',
    name: 'Анна',
    surname: 'Николаева',
    position: 'Product Manager',
    gender: 'жен',
    telegram: 'anna',
  },
  {
    id: 5,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Male_3.jpeg',
    name: 'Дмитрий',
    surname: 'Кузнецов',
    position: 'Аналитик данных',
    gender: 'муж',
    telegram: 'dmitry',
  },
  {
    id: 6,
    date: '2023-10-14T13:45:00',
    recipients:
      '(20) anotheruser@example.com, anotheruser@example.com, anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar: 'http://ambassadors.sytes.net/media/profiles/Female_2.jpeg',
    name: 'Фёкла',
    surname: 'Огурцова',
    position: 'Аналитик данных',
    gender: 'жен',
    telegram: 'fekla',
  },
];

export { rows, columns };
export type { TRow };
