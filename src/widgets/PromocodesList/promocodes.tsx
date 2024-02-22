interface PromocodeProps {
  id: number;
  promocode: string;
  ambassador: string;
  day: string;
  time: string;
}

const promocodesconst: PromocodeProps[] = [
  {
    "id": 1,
    "promocode": "Выдра",
    "ambassador": "Ярослав Григорьев",
    "day": "Сегодня",
    "time": "21:45",
  },
  {
    "id": 2,
    "promocode": "Шершень",
    "ambassador": "Алина Руденко",
    "day": "Вчера",
    "time": "16:13",
  },
  {
    "id": 3,
    "promocode": "Мурыч",
    "ambassador": "Виолетта Ершова",
    "day": "13.02.2024",
    "time": "13:45",
  },
  {
    "id": 4,
    "promocode": "Кура",
    "ambassador": "Анастасия Егорова",
    "day": "11.02.2024",
    "time": "20:00",
  },
];

export default promocodesconst