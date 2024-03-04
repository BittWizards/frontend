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
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
  {
    id: 2,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
  {
    id: 3,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
  {
    id: 4,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
  {
    id: 5,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
  {
    id: 6,
    date: '2023-10-14T13:45:00',
    recipients:
      '(20) anotheruser@example.com, anotheruser@example.com, anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
    avatar,
    name: 'Екатерина',
    surname: 'Константинопольская',
    position: 'Продакт-менеджер для специалистов с опытом',
    gender: 'жен',
    telegram: 'ponomarevaangelina',
  },
];

export { rows, columns };
export type { TRow };
