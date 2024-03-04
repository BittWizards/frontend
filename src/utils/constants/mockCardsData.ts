import avatar from 'src/shared/icons/userAvatar.png';
import type { TMockData } from '../types/typeMockData';

const mockCardsData: TMockData[] = [
  {
    id: '1',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Екатерина',
    surname: 'Константинопольская',
    secondname: 'Олеговна',
    position: 'Продакт-менеджер для специалистов',
    date: '2024-02-19T13:45:00',
    statusActive: true,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'Active',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',

    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',

    merch: [
      {
        id: '1',
        merchType: 'Клуб',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Футболка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Кофе',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алисабот',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '38-40',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
      { id: '4', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'linkedin',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылкаsasas.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '2',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Марина',
    surname: 'Князева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2024-09-21T13:45:00',
    statusActive: true,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'OnPause',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    merch: [
      {
        id: '1',
        merchType: 'Стикеры',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Футболка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Плюс',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алиса',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
      { id: '4', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '5', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '6', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
      { id: '7', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '3',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Ангелина',
    surname: 'Пономарева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2024-11-22T13:45:00',
    statusActive: true,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'PendingConfirmation',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    merch: [
      {
        id: '1',
        merchType: 'Толстовка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Футболка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Шопер',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алиса',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '4',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Ангелина',
    surname: 'Пономарева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2024-07-27T13:45:00',
    statusActive: true,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'Inactive',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    merch: [
      {
        id: '1',
        merchType: 'Толстовка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Футболка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Кофе',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алиса',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '5',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Ангелина',
    surname: 'Пономарева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2024-06-26T13:45:00',
    statusActive: false,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'Active',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    merch: [
      {
        id: '1',
        merchType: 'Толстовка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Сумка',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Кофе',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алиса',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '6',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Ангелина',
    surname: 'Пономарева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2024-05-22T13:45:00',
    statusActive: false,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'Active',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    merch: [
      {
        id: '1',
        merchType: 'Толстовка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '3900',
      },
      {
        id: '2',
        merchType: 'Футболка',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '1900',
      },
      {
        id: '3',
        merchType: 'Кофе',
        merchSize: '',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '2000',
      },
      {
        id: '4',
        merchType: 'Алиса',
        merchSize: 'M(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '23000',
      },
      {
        id: '5',
        merchType: 'Носки',
        merchSize: '(44-46)',
        date: '2023-10-14T13:45:00',
        quantity: '1',
        price: '500',
      },
    ],
    reviews: 5,
    promocodes: [
      { id: '1', promocode: 'ILOVEYP', date: '2023-10-14T13:45:00' },
      { id: '2', promocode: 'PONOMAREVA23', date: '2023-10-14T13:45:00' },
      { id: '3', promocode: 'ZIMA23', date: '2023-09-01T13:45:00' },
    ],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
  {
    id: '7',
    avatar,
    telegram: 'ponomarevaangelina',
    name: 'Варвара',
    surname: 'Пономарева',
    secondname: 'Сергеевна',
    position: 'Продвинутый Go-разработчик',
    date: '2023-04-20T13:45:00',
    statusActive: false,
    promocode: 'Выдра',
    activationDate: '2024-01-31T13:45:00',
    trackingNumber: 'RV 12345678',
    userStatus: 'PendingConfirmation',
    phone: '+7 798 123 45 68',
    email: 'test@yandex.ru',
    city: 'Саратов',
    country: 'Россия',
    adress: 'ул. Фёдора Луковского 11-23',
    index: 564021,
    clothingSize: 'М (44-46)',
    shoeSize: 38,
    purpose: 'Смена деятельности',
    education: 'Высшее (оконченное)',
    workPlace: 'OOO “МегаКура”',
    wa: 'https://wa.me/77981234568',
    habr: 'https://habr.com/ru/users/username/',
    other: '',
    reviews: 5,
    promocodes: [],
    merch: [],
    content: [
      {
        id: '1',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'telegram',
        fileCounter: '12',
      },
      {
        id: '2',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'instagram',
        fileCounter: '0',
      },
      {
        id: '3',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '4',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'habr',
        fileCounter: '1',
      },
      {
        id: '5',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'youtube',
        fileCounter: '1',
      },
      {
        id: '6',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'other',
        fileCounter: '6',
      },
      {
        id: '7',
        date: '2023-10-14T13:45:00',
        link: 'https://ссылка.com',
        platform: 'vc',
        fileCounter: '3',
      },
    ],
  },
];

export { mockCardsData };
