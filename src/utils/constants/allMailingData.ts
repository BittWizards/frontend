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
};

const columns: TColumn[] = [
  { id: 'date', label: 'Дата', width: 180 },
  { id: 'recipients', label: 'Получатели', width: 360 },
  { id: 'text', label: 'Текст', width: 360 },
];

const rows: TRow[] = [
  {
    id: 1,
    date: '2023-10-14T13:45:00',
    recipients:
      '(25) user@example.com, user@example.com, user@example.com, user@example.com, user@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
  },
  {
    id: 2,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно, Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
  },
  {
    id: 3,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно Рассылаю рассылку о посылке очень важно',
  },
  {
    id: 4,
    date: '2023-10-14T13:45:00',
    recipients: 'anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
  },
  {
    id: 5,
    date: '2023-10-14T13:45:00',
    recipients: 'Все',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
  },
  {
    id: 6,
    date: '2023-10-14T13:45:00',
    recipients:
      '(20) anotheruser@example.com, anotheruser@example.com, anotheruser@example.com',
    text: 'Добрый день! Рассылаю рассылку о посылке очень важно',
  },
];

export { rows, columns };
