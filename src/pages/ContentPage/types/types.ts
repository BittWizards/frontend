interface User {
  id: string;
  avatar: string;
  telegram: string;
  name: string;
  surname: string;
  date: string;
  statusActive: boolean,
  reviews: number,
  content: {
    id: string;
    date: string;
    link: string;
    platform: string;
    fileCounter: string;
  }[],
}

export type { User };